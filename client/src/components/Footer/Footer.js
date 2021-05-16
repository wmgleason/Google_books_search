import React from "react";
import "./style.css";

import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
        Google Books Search: A book search tool for bibliophiles
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="#">Wanda Gleason</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-github">
                <span style={{ marginLeft: "10px" }}>GitHub</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
