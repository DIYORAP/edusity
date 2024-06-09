import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"


function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e10554bb-1869-44b5-9b73-29d74905d369");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};


  return (
    <div className="contact">
      <div className="contect-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, a
          quia aspernatur quasi iusto quibusdam, repudiandae velit facilis non
          soluta voluptatum. Ea facilis eos consequatur nesciunt quod quis ad
          aut ipsam totam ratione? At maiores asperiores exercitationem amet,
          autem dicta nam, velit ad tempora inventore architecto quod, dolorum
          esse totam illum eaque doloremque. Non molestiae quasi, nihil
          voluptate deleniti doloremque.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contect@parthikD.dev</li>
            <li><img src={phone_icon} alt="" />6354223180</li>
            <li><img src={location_icon} alt="" />sardardham, ahmedabad</li>
        </ul>
      </div>

      <div className="contect-col">
  <form onSubmit={onSubmit}>
    <label> Your name</label>
    <input type="text"  name='name' placeholder="enter your name" required/>
    <lable>Phone Number</lable>
    <input type="tel" name="phone" placeholder="enter phone" required />
    <lable>Write your meassages here</lable>
    <textarea name="message" rows="6"  placeholder="Enter your message"></textarea>
    <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
  </form>
  <span>{result}</span>
      </div>

    </div>
  );
}

export default Contact;
