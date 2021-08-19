import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Col, Container, Row } from "react-bootstrap";

import PageTitles from "../components/PageTitles";
import GoogleMap from "../components/GoogleMap";
import ContactForm from "../components/ContactForm";
import parse from "html-react-parser";

const StyledDetails = styled.div`
    h5 {
        font-size: 14px;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
        p,
        a {
            font-size: 1.6rem;
            color: rgba(91, 91, 91, .5);
        }

        a {

            &:hover {
                color: var(--primary);
            }
        }
    }
`;

const Contact = ({ data }) => {
    const contact = data.allWpPage.edges[0].node.ContactFields;
    const siteSettings = data.allWp.edges[0].node.optionsPage.SiteSettings;

    return (
        <Layout>
            <SEO title="Contact" />

            <main className="padding">
                <section className="padding mb-md">
                    <Container fluid="lg">
                        <PageTitles className="mb-sm">
                            <h3 data-sal="slide-right" data-sal-duration="300">
                                {contact.contactPreTitle}
                            </h3>
                            <h1
                                data-sal="slide-right"
                                data-sal-duration="300"
                                data-sal-delay="300"
                            >
                                {contact.contactTitle}
                            </h1>
                        </PageTitles>

                        <Row className="gx-5 gy-5 mt-md">
                            <Col lg={4}>
                                <StyledDetails>
                                    {siteSettings.address && (
                                        <div className="mb-md">
                                            <h5>ADDRESS</h5>
                                            <p>
                                                {parse(
                                                    `${siteSettings.address}`
                                                )}
                                            </p>
                                        </div>
                                    )}
                                    <GoogleMap
                                        location={contact.location}
                                        zoomLevel={13}
                                    />
                                    {siteSettings.phone && (
                                        <div className="mb-sm mt-md">
                                            <h5>PHONE</h5>
                                            <a
                                                href={`tel:${siteSettings.phone}`}
                                            >
                                                {siteSettings.phone}
                                            </a>
                                        </div>
                                    )}
                                    {siteSettings.phone && (
                                        <div>
                                            <h5>EMAIL</h5>
                                            <a
                                                href={`mailto:${siteSettings.email}`}
                                            >
                                                {siteSettings.email}
                                            </a>
                                        </div>
                                    )}
                                </StyledDetails>
                            </Col>
                            <Col lg={8}>
                                <ContactForm />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </Layout>
    );
};

export const contactQuery = graphql`
    {
        allWpPage(filter: { slug: { eq: "contact" } }) {
            edges {
                node {
                    ContactFields {
                        contactPreTitle
                        contactTitle
                        location {
                            lat: latitude
                            lng: longitude
                        }
                    }
                }
            }
        }
        allWp {
            edges {
                node {
                    optionsPage {
                        SiteSettings {
                            address
                            phone
                            email
                        }
                    }
                }
            }
        }
    }
`;

export default Contact;
