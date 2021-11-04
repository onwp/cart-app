import styled from "styled-components";
import NavbarCart from "../NavbarCart/NavbarCart";
import LogoUrl from "../../logo.png";
import { Link } from "react-router-dom";
const NavbarContainer = styled.div`
  background: #1ea4ce;
  line-height: 76.64px;
  display: inline-block;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const NavbarInner = styled.div`
  max-height: 76.64px;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 20px;
  display: block;
  p {
    display: inline-block;
    text-align: center;
    font-size: 30px;
    margin-left: 107px;
  }
`;
const Logo = styled.img`
  max-height: 50px;
  margin-top: 12px;
  margin-left: 107px;
  @media only screen and (max-width: 480px) {
    max-height: 30px;
    margin-top: 22px;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInner>
        <Link to="/">
          <Logo src={LogoUrl} alt="logo" />
        </Link>
        <NavbarCart />
      </NavbarInner>
    </NavbarContainer>
  );
}

export default Navbar;
