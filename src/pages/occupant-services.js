import * as React from "react";
import { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Col, Container, Row } from "react-bootstrap";

import parse from "html-react-parser";
import PageTitles from "../components/PageTitles";

const StyledContent = styled.div`
    strong {
        font-family: "Montserrat-Medium";
        font-size: 2.4rem;
    }
`;

const StyledServiceCard = styled.div`
    background-color: var(--grey);
    text-align: center;
    padding: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    height: 100%;

    @media (max-width: 650px) {
        padding: 4rem 2rem;
    }

    h3 {
        font-size: 3.2rem;
    }

    p {
        font-size: 14px;
    }
`;

const StyledServicesGrid = styled.div`
    border-top: 1px solid var(--primary);
    // .col-lg-6 {
    //     margin-bottom: 4rem;
    // }
`;

const OccupantServices = ({ data }) => {
    const occupantServices = data.allWpPage.edges[0].node.ServiceFields;
    const image = getImage(occupantServices.serviceImage.localFile);
    const occupiersArr = data.allWpFor.edges[0].node.services.nodes;

    return (
        <Layout contactBanner={true}>
            <SEO title="Occupant Services" />

            <main className="padding">
                <section className="padding">
                    <Container fluid="lg">
                        <PageTitles className="mb-sm">
                            <h3 data-sal="slide-right" data-sal-duration="300">
                                {occupantServices.servicePreTitle}
                            </h3>
                            <h1
                                data-sal="slide-right"
                                data-sal-duration="300"
                                data-sal-delay="300"
                            >
                                {occupantServices.serviceTitle}
                            </h1>
                        </PageTitles>

                        <Row className="gx-5 gy-5 mt-xs">
                            <Col lg={6}>
                                <GatsbyImage
                                    image={image}
                                    alt={occupantServices.serviceTitle}
                                    objectFit="cover"
                                />
                            </Col>
                            <Col lg={6}>
                                <StyledContent>
                                    {parse(
                                        `${occupantServices.serviceTextContent}`
                                    )}
                                </StyledContent>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container fluid="lg">
                        <StyledServicesGrid className="padding">
                            <Row className="gx-5 gy-5">
                                {occupiersArr.map((service) => {
                                    console.log(service);
                                    const image = getImage(
                                        service.SingleServiceFields.icon
                                            .localFile
                                    );
                                    return (
                                        <Col lg={6} key={service.id}>
                                            <StyledServiceCard
                                                id={service.slug}
                                            >
                                                <GatsbyImage
                                                    image={image}
                                                    alt={service.title}
                                                />
                                                <h3 className="mt-md mb-sm">
                                                    {service.title}
                                                </h3>

                                                {parse(`${service.content}`)}
                                            </StyledServiceCard>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </StyledServicesGrid>
                    </Container>
                </section>
            </main>
        </Layout>
    );
};

export const casestudiesQuery = graphql`
    {
        allWpPage(filter: { slug: { eq: "occupant-services" } }) {
            edges {
                node {
                    id
                    ServiceFields {
                        servicePreTitle
                        serviceTitle
                        serviceTextContent
                        serviceImage {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        width: 900
                                        placeholder: BLURRED
                                        quality: 100
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
        allWpFor(filter: { name: { eq: "For Occupiers" } }) {
            edges {
                node {
                    services {
                        nodes {
                            id
                            content
                            title
                            slug
                            SingleServiceFields {
                                icon {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(
                                                layout: CONSTRAINED
                                                width: 210
                                                placeholder: BLURRED
                                                quality: 100
                                            )
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default OccupantServices;
