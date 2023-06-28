import "./contact.css"
import JustifiedText from "../../../Components/JustifiedText";

const Contact = () => {
  return (
    <div>
      
      <div className="contact-grid">
        <a href="https://instagram.com/truong_mai42">
          <div className="contact-item">
            THINH 
            <p className="contact-sub">DESIGN DEPARTMENT</p>
          </div>
        </a>
        <a href="https://instagram.com/xrbenjaminbhullar">
          <div className="contact-item">
            BEN 
            <p className="contact-sub">PRODUCER</p>
          </div>

        </a>
        <a href="https://instagram.com/alleyne_isaac">
          <div className="contact-item">
            ALLEYNE
            <p className="contact-sub">VIDEO DEPARTMENT</p>
          </div>

        </a>
        <a href="https://instagram.com/kentrijo">
          <div className="contact-item">
            KEN
            <p className="contact-sub">PHOTO DEPARTMENT</p>
          </div>

        </a>
      </div>

      <a className="mailto" href="mailto:contact@blythe.world">»CLICK HERE TO EMAIL BLYTHE«</a> 
    </div>
  )
}

export default Contact;

