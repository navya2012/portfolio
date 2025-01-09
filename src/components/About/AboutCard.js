import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Padala Navya Meghana </span>
            from <span className="purple"> Guntur, Andhra Pradesh, India.</span>
            <br />
            I have completed an internship and  training course program as Frontend Developer and Full stack Developer on React Js, Redux Technologies.I have Worked on some projects during these period and learned some new technologies and few librabies and frammeworks.
            <br/>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">P Navya Meghana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
