import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis in
          rerum nostrum, alias ratione, suscipit ullam, sed hic impedit
          inventore enim! Ad ipsum nisi ab, tenetur impedit soluta. Maxime,
          nisi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          possimus atque veritatis labore ea? Possimus facilis sint voluptate
          veniam? Dolorem facilis labore beatae obcaecati, molestiae ad deleniti
          eligendi quas illum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste
          corporis omnis odit corrupti nam ipsa eius, voluptate, nobis dolores
          doloribus illum blanditiis sint molestiae eaque possimus, labore dolor
          tenetur laudantium aut temporibus? Saepe mollitia sed aliquam aperiam
          maxime aliquid illum. Itaque provident atque accusamus similique culpa
          reiciendis nobis quo quod? Quibusdam possimus autem pariatur quae
          laborum fuga assumenda architecto?
        </p>
      </div>
    </div>
  );
}

export default About;
