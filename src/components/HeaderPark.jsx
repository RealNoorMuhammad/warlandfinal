import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from ".././images/warlandlogo.png";
function Header({ hClass, linkCls }) {
  let navigate = useNavigate();
  const navClass = linkCls ? linkCls : "";
  const appendClass = hClass ? hClass : "";

  // useEffect(() => {
  //   if(linkCls === 'homeBar'){

  //   }
  // }, [linkCls])

  return (
    <Navbar bg="light" expand="lg" className={`header ${appendClass}`}>
      {/* <Navbar.Brand href="#home" className='header-logo'><span className='fH'>Be</span><span className='sH'>NFTs</span></Navbar.Brand> */}

      {/*  This Logo is used for the BluePrint Page */}

      {/*  This Logo is used for the Park Page */}
      {window.location.pathname === "/garden" && (
        <Navbar.Brand
          href="#home"
          onClick={() => {
            navigate(`/`);
          }}
          className="aniLogoHome"
        >
          <img src={logo} alt="" className="w-100" />
        </Navbar.Brand>
      )}

      {/*  This Logo is used for the Home Page */}

      {/*  This is the Navbar used for the Park Page */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="#home"
            style={{
              borderRadius: "3px",
              flex: "0 0 auto",
              fontSize: "1rem",
              lineHeight: "140%",
              fontWeight: 500,
              textDecoration: "none",
              textTransform: "uppercase",
            }}
            className={`${navClass} home_page_navbar_other_icons`}
            onClick={() => {
              navigate(`/`);
            }}
          >
            HOME
          </Nav.Link>
          <Nav.Link
            href="#link"
            className={`${navClass} home_page_navbar_other_icons`}
            onClick={() => {
              navigate(`/Info`);
            }}
          >
         WAR
          </Nav.Link>
          <Nav.Link
            href="#link"
            className={`${navClass} home_page_navbar_home_icon`}
            onClick={() => {
              navigate(`/garden`);
            }}
          >
            MAP
          </Nav.Link>

          <Nav.Link
            href="#link"
            className={`${navClass} home_page_navbar_garden_icons`}
            style={{
              borderRadius: "3px",
              flex: "0 0 auto",
              fontSize: "1rem",
              lineHeight: "140%",
              fontWeight: 500,
              textDecoration: "none",
              textTransform: "uppercase",
              cursor: "no-drop",
            }}
            disabled
          >
            Soon
          </Nav.Link>

          {/* In Href Link you add links , here you will add twitter link  For Park Page*/}
          <Nav.Link
            style={{
              justifyContent: "center",
              AlignItems: "center",
              marginTop: "auto",
            }}
            href="https://twitter.com/warlandgame"
            className={`${navClass} home_page_navbar_other_icons`}
          >
            <FaTwitter /> {/* Thats is used for twitter link   For Park Page*/}
          </Nav.Link>
          {/* In Href Link you add links , here you will add Instagram link   For Park Page*/}
          <Nav.Link
            style={{
              justifyContent: "center",
              AlignItems: "center",
              marginTop: "auto",
            }}
            href="https://www.instagram.com/warlandofficial/"
            className={`${navClass} home_page_navbar_other_icons`}
          >
            <FaInstagram />{" "}
            {/* Thats is used for Instagram link   For Park Page*/}
          </Nav.Link>
          {/* In Href Link you add links , here you will add Discord link   For Park Page*/}
          <Nav.Link
            style={{
              justifyContent: "center",
              AlignItems: "center",
              marginTop: "auto",
            }}
            href="https://discord.com/invite/EqBG3rW2Zx"
            className={`${navClass} home_page_navbar_other_icons`}
          >
            <FaDiscord /> {/* Thats is used for Discord link   For Park Page*/}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
