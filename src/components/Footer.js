import React from "react";
import ContactUsBanner from "./ContactUsBanner";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import parse from "html-react-parser";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const StyledFooter = styled.div`
    padding: 4rem 0;

    @media (max-width: 991px) {
        .top {
            text-align: center;

            .gatsby-image-wrapper {
                margin: 0 auto;
            }
        }
    }

    .address {
        font-size: 1.6rem;
    }

    .setting {
        font-size: 1.6rem;
        color: rgba(0, 0, 0, 0.5);
        &:hover {
            color: var(--primary);
        }
    }

    .footer-col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;

        @media (max-width: 991px) {
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        p {
            font-size: 1.6rem;
        }

        div {
            display: flex;

            a {
                display: block;
                width: 4rem;
                height: 4rem;
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                    transform: scale(1.1);
                }

                svg {
                    fill: var(--primary);
                }

                &:not(:first-child) {
                    margin-left: 2rem;
                }
            }
        }
    }
`;

const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 991px) {
        margin-top: 4rem;

        div {
            flex-basis: 50%;
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 500px) {
        div {
            flex-basis: 100%;
            text-align: center;
        }
    }

    .main {
        font-size: 1.4rem !important;
        color: #000;
        text-transform: uppercase;
        font-family: Montserrat-Medium;
    }

    .sub {
        font-size: 1.6rem !important;
        color: rgba(0, 0, 0, 0.5);
        display: block;
        margin: 0.5rem 0;

        &:hover {
            color: var(--primary);
        }
    }
`;

export default function Footer({ contactBanner }) {
    const data = useStaticQuery(graphql`
        {
            allWp {
                edges {
                    node {
                        optionsPage {
                            SiteSettings {
                                address
                                email
                                facebook
                                instagram
                                linkedin
                                phone
                                twitter
                            }
                        }
                    }
                }
            }
        }
    `);

    const siteSettings = data.allWp.edges[0].node.optionsPage.SiteSettings;

    return (
        <footer>
            {contactBanner && <ContactUsBanner />}

            <StyledFooter>
                <Container fluid="lg">
                    <Row>
                        <Col lg="5">
                            <div className="top ">
                                <Link to="/">
                                    <StaticImage
                                        src="../assets/images/kohnen-logo-alt-1.svg"
                                        alt="The Kohnen Group"
                                        placeholder="blurred"
                                        layout="fixed"
                                    />
                                </Link>

                                {siteSettings.address && (
                                    <div className="mt-md">
                                        <p className="address">
                                            {parse(`${siteSettings.address}`)}
                                        </p>
                                    </div>
                                )}

                                {siteSettings.phone && (
                                    <div className="mt-md">
                                        <a
                                            href={`tel:${siteSettings.phone}`}
                                            className="setting"
                                        >
                                            {siteSettings.phone}
                                        </a>
                                    </div>
                                )}
                                {siteSettings.phone && (
                                    <div>
                                        <a
                                            href={`mailto:${siteSettings.email}`}
                                            className="setting"
                                        >
                                            {siteSettings.email}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </Col>

                        <Col lg="7">
                            <hr className="d-lg-none" />
                            <StyledMenu>
                                <div className="footer-col">
                                    <h5 className="main">Services</h5>
                                    <Link
                                        to="/occupant-services"
                                        className="sub"
                                    >
                                        Occupier Services
                                    </Link>
                                    <Link
                                        to="/investor-services"
                                        className="sub"
                                    >
                                        Investor Services
                                    </Link>
                                </div>
                                <div className="footer-col">
                                    <h5 className="main">Company</h5>
                                    <Link to="/about" className="sub">
                                        About Us
                                    </Link>
                                    <Link to="/april-kohnen" className="sub">
                                        Principal Broker
                                    </Link>
                                    <Link to="/case-studies" className="sub">
                                        Case Studies
                                    </Link>
                                </div>
                                <div className="footer-col">
                                    <Link
                                        to="/resources"
                                        className="main"
                                        css={css`
                                            &:hover {
                                                color: var(--primary);
                                            }
                                        `}
                                    >
                                        <span>Resources</span>
                                    </Link>
                                    <Link
                                        to="/resources?category=Blog"
                                        className="sub"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        to="/resources?category=Press"
                                        className="sub"
                                    >
                                        Press
                                    </Link>
                                </div>
                                <div className="footer-col">
                                    <Link
                                        to="/contact"
                                        className="main"
                                        css={css`
                                            &:hover {
                                                color: var(--primary);
                                            }
                                        `}
                                    >
                                        <span>Contact</span>
                                    </Link>
                                </div>
                            </StyledMenu>
                        </Col>
                    </Row>

                    <div className="footer-bottom mt-xl">
                        <p>
                            &copy; {new Date().getFullYear()} - All rights
                            reserved. Kohnen Group
                        </p>

                        <div>
                            {siteSettings.twitter && (
                                <a
                                    href={siteSettings.twitter}
                                    target="_blank"
                                    className="social-media-icon"
                                >
                                    <FaTwitter />
                                </a>
                            )}
                            {siteSettings.facebook && (
                                <a
                                    href={siteSettings.facebook}
                                    target="_blank"
                                    className="social-media-icon"
                                >
                                    <FaFacebookF />
                                </a>
                            )}
                            {siteSettings.linkedin && (
                                <a
                                    href={siteSettings.linkedin}
                                    target="_blank"
                                    className="social-media-icon"
                                >
                                    <FaLinkedinIn />
                                </a>
                            )}
                            {siteSettings.instagram && (
                                <a
                                    href={siteSettings.instagram}
                                    target="_blank"
                                    className="social-media-icon"
                                >
                                    <FaInstagram />
                                </a>
                            )}
                        </div>
                    </div>
                </Container>
            </StyledFooter>
        </footer>
    );
}
