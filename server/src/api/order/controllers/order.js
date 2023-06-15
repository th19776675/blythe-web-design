'use strict';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi })=> ({
    async create(ctx) {
        const { products, userName, email, phone } = ctx.request.body;
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
            payment_method_types: ['card'],
            customer_email: email,
            line_items: lineItems,
            shipping_address_collection: {
              allowed_countries: ['AU', 'US', 'CA', 'GB', 'MX', 'PH' ],
            },
            shipping_options: [
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 0,
                    currency: 'aud',
                  },
                  display_name: 'Pickup (Mount Lawley)',
                },
              },
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 1000,
                    currency: 'aud',
                  },
                  display_name: 'Domestic (Australia Wide)',
                  delivery_estimate: {
                    minimum: {
                      unit: 'week',
                      value: 2,
                    },
                    maximum: {
                      unit: 'week',
                      value: 4,
                    },
                  },
                },
              },
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 3000,
                    currency: 'aud',
                  },
                  display_name: 'International',
                  delivery_estimate: {
                    minimum: {
                      unit: 'week',
                      value: 3,
                    },
                    maximum: {
                      unit: 'week',
                      value: 6,
                    },
                  },
                },
              },
            ],
            phone_number_collection: {
              enabled: true,
            },
            // customer_metadata: {
            //   custom_field1: 'Additional Shipping Information',
            // },
            // client_reference_id: 'your_custom_id',
            // line_items: [
            //   {
            //     price_data: {
            //       currency: 'aud',
            //       product_data: {
            //         name: 'T-shirt',
            //       },
            //       unit_amount: 2000,
            //     },
            //     quantity: 1,
            //   },
            // ],
            mode: 'payment',
            success_url: 'http://localhost:3000?payment=true',
            cancel_url: 'http://localhost:3000',
          });
    
          // create the item
          await strapi.service("api::order.order").create({ 
            data: { email, userName, stripeSessionId: session.id, phone,
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
