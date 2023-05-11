'use strict';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi })=> ({
    async create(ctx) {
        const { products, userName, email, shippingAddress, phone, billingAddress } = ctx.request.body;
        try {
          // retrieve item information
          const lineItems = await Promise.all(
            products.map(async (product) => {
              const item = await strapi
                .service("api::item.item")
                .findOne(product.id);
    
              return {
                price_data: {
                  currency: "aud",
                  product_data: {
                    name: item.name,
                  },
                  unit_amount: item.price * 100,
                },
                quantity: product.count,
              };
            })
          );
          console.log(lineItems)
    
          // create a stripe session
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            customer_email: email,
            mode: "payment",
            invoice_creation: {
                enabled: true,
            },
            success_url: "http://localhost:3000?payment=true",
            cancel_url: "http://localhost:3000",
            line_items: lineItems,
          });
    
          // create the item
          await strapi.service("api::order.order").create({ 
            data: { email, userName, stripeSessionId: session.id, shippingAddress, billingAddress, phone,
            products: lineItems},
         });
    
          // return the session id
          return { id: session.id };
        } catch (error) {
          ctx.response.status = 500;
          return { error: { message: "There was a problem creating the charge" } };
        }
      },
    
}));
