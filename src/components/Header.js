import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import { css } from "styled-components";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
//Material UI
// import Button from "@material-ui/core/Button";
// import Hidden from "@material-ui/core/Hidden";
// import { makeStyles } from "@material-ui/core/";

// import MobileMenu from "../components/MobileMenu";
// import SimpleMenu from "../components/SimpleMenu";

// Util
// import flatListToHierarchical from "../utils/flatListToHierarchical";

const StyledNavbar = styled(Navbar)`
    padding: 0;

    .gatsby-image-wrapper {
        max-width: 290px;

        img {
            max-width: 100%;height: auto;
        }
    }

    .navbar-nav {
        width: 100%;
    }

    a {
        margin-right: 2rem;
        font-size: 1.4rem;
        text-transform: uppercase;
    }

    aria-current[page] {
        span {
            color: var(--primary);
        }
    }

    @media (max-width: 991px) {
        align-items: flex-start;
    }

    @media (max-width: 500px) {
        .gatsby-image-wrapper {
            max-width: 200px;
        }
    }

    @media (max-width: 280px) {
        .gatsby-image-wrapper {
            max-width: 130px;
        }
    }

    .navbar-collapse {

        &.show, &.collapsing {
            padding-top: 20rem;
            margin-top: -20rem;

            @media (max-width: 991px) {
                background-color: var(--primary);
                padding-bottom: 2rem;
            }

            .nav-link, a {
                @media (max-width: 991px) {
                    color: #fff;
                    font-family: 'Montserrat-Bold', sans-serif;
                    text-transform: initial;
                    font-size: 2.8rem;
                    justify-content: flex-start;
                    margin-right: 0;
    
                    &[aria-current=page]{
                        background-color: transparent !important;
                    }
    
                    &:hover {
                        color: #000;
                        background-color: transparent;
                    }
                }
            }

            .nav-item, .dropdown {

                @media (max-width: 991px) {
                    &:hover {
                        background-color: transparent;
                        color: #000;
                    }
                }
            
            }
        }
      
    }

    .navbar-toggler {
        width: 4.6rem;
        height: 4.6rem;
        border: none;
        background-color: #f0f0f0;
        border-radius: 0;
        position: relative;

            span {
                -webkit-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;
                background-color: #000;
                display: block;
                position: relative;
                width: 3rem;
                height: 1px;

                &:before {
                    -webkit-transition: all 0.3s ease;
                    -o-transition: all 0.3s ease;
                    transition: all 0.3s ease;
                    background-color: #000;
                    content: "";
                    height: 1px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: -9px;
                }

                &:after {
                    -webkit-transition: all 0.3s ease;
                    -o-transition: all 0.3s ease;
                    transition: all 0.3s ease;
                    background-color: #000;
                    content: "";
                    height: 1px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -9px;
                }
            }
        }

    }
`;

const StyledNavDropdown = styled(NavDropdown)`
    transition: all 300ms;
    padding: 1rem 1rem 1rem 2rem;

    &:hover {
        background-color: var(--grey);
        color: #000;
    }

    .dropdown-toggle {
        color: #000;

        &::after {
            border-right: 1px solid #000;
            border-bottom: 1px solid #000;
            border-top: none;
            border-left: none;
            display: block;
            width: 5px;
            height: 5px;
            position: absolute;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
            transition: transform: 300ms;

            @media (max-width: 991px) {
                top: 3.3rem;
                width: 9px;
                height: 9px;
                border-right: 2px solid #fff;
                border-bottom: 2px solid #fff;
            }
        }

        &[aria-expanded=true] {

            &::after {
                transform: translateY(-50%) rotate(-45deg);
            }
        }
    }

    .dropdown-menu {
        left: 0;
        background-color: #f3f3f3;
        border: none;

        .dropdown-item {
            padding: 1rem;

            @media (max-width: 991px) {
                &:hover {
                    background-color: transparent;
                }
            }

            a {
                padding: 1rem;
                display: block;
                text-transform: initial;
                transition: all 300ms;
                margin-right: 0;

                @media (max-width: 991px) {
                    font-family: "Montserrat-Medium", sans-serif;
                    font-size: 1.6rem;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                }

                &:hover {
                    font-weight: bold;
                    color: #000;
                }
            }
        }

        @media (max-width: 991px) {
            background-color: transparent;
        }
    }
`;

const StyledLink = styled(Link)`
    transition: all 300ms;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: var(--grey);
        color: #000;
    }
`;

const StyledContainer = styled(Container)`
    @media (max-width: 991px) {
        padding: 0 !important;
    }
`;

const StyledHeader = styled.header`
    background-color: transparent;
    z-index: 15;
    width: 100%;
`;

const Header = ({ siteTitle = "", position }) => {
    return (
        <StyledHeader
            css={css`
                ${position ? "position: absolute" : "position: initial"}
            `}
        >
            <StyledContainer fluid="lg">
                <StyledNavbar expand="lg">
                    <Link to="/">
                        <StaticImage
                            src="../assets/images/logo-top.jpg"
                            alt="The Kohnen Group"
                            placeholder="blurred"
                            loading="eager"
                            layout="fixed"
                            height={145}
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end">
                            <StyledNavDropdown
                                title="Services"
                                id="nav-dropdown"
                                css={css`
                                    transition: color 300ms;

                                    .dropdown-toggle.nav-link {
                                        color: ${position
                                            ? "#fff !important;"
                                            : "#000"};

                                        &::after {
                                            ${position
                                                ? "border-right: 1px solid #fff;  border-bottom: 1px solid #fff;"
                                                : "border-right: 1px solid #000;  border-bottom: 1px solid #000;"}
                                        }
                                    }

                                    &:hover {
                                        background-color: var(--grey);
                                    }
                                `}
                            >
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/occupant-services">
                                        <span>Occupant Services</span>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">
                                    <Link to="/investor-services">
                                        <span>Investor Services</span>
                                    </Link>
                                </NavDropdown.Item>
                            </StyledNavDropdown>

                            <StyledNavDropdown
                                title="Company"
                                id="nav-dropdown"
                                css={css`
                                    transition: color 300ms;

                                    .dropdown-toggle.nav-link {
                                        color: ${position
                                            ? "#fff !important;"
                                            : "#000"};

                                        &::after {
                                            ${position
                                                ? "border-right: 1px solid #fff;  border-bottom: 1px solid #fff;"
                                                : "border-right: 1px solid #000;  border-bottom: 1px solid #000;"}
                                        }
                                    }

                                    &:hover {
                                        background-color: var(--grey);
                                    }
                                `}
                            >
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/about">
                                        <span>About Us</span>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/april-kohnen">
                                        <span>Principal Broker</span>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">
                                    <Link to="/case-studies">
                                        <span>Case Studies</span>
                                    </Link>
                                </NavDropdown.Item>
                            </StyledNavDropdown>

                            <StyledLink
                                to="/resources"
                                activeStyle={{
                                    backgroundColor: "var(--grey)",
                                    color: "#000",
                                }}
                                css={css`
                                    color: ${position ? "#fff" : "var(--text)"};
                                `}
                            >
                                <span>Resources</span>
                            </StyledLink>

                            <StyledLink
                                to="/contact"
                                activeStyle={{
                                    backgroundColor: "var(--grey)",
                                    color: "#000",
                                }}
                                css={css`
                                    color: ${position ? "#fff" : "var(--text)"};
                                `}
                            >
                                <span>Contact</span>
                            </StyledLink>
                        </Nav>
                    </Navbar.Collapse>
                </StyledNavbar>
            </StyledContainer>
        </StyledHeader>
    );
};

export default Header;
