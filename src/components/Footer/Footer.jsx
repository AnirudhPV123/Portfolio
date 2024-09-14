import { Link} from "react-router-dom";
import { LinkedIn, GitHub, Twitter } from "@mui/icons-material";
import {
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcon,
  SocialMediaIcons,
  Copyright
} from "./FooterStyles";
import { Bio } from "@/constants/bio";

function Footer() {
  return (
    <FooterContainer id="footer">
      <FooterWrapper>
        <Logo>Anirudh PV</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          {/* <NavLink href="#experience">Experience</NavLink> */}
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <Twitter />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Anirudh PV. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
