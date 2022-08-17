import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/yash-mudgal-4645871ab/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="Logo.png"
              alt="Founder"
            />
            <Typography>Yash Mudgal</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
            <span>
              This is a ECommerce Website made by @Myananta.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://twitter.com/YashMud46805321"
              target="blank"
            >
              <TwitterIcon className="twitterSvgIcon" />
            </a>

            <a href="https://www.instagram.com/yashmudgal._05/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;