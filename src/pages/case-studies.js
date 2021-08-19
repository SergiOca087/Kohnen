import * as React from "react";
import { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Col, Container, Row } from "react-bootstrap";
import PageTitles from "../components/PageTitles";
import CaseStudyCard from "../components/CaseStudyCard";

const CaseStudies = ({ data }) => {
    const caseStudies = data.allWpCasestudy.edges;

    return (
        <Layout>
            <SEO title="Case Studies" />

            <main className="padding-large">
                <Container fluid="lg">
                    <PageTitles>
                        <h3 data-sal="slide-right" data-sal-duration="300">
                            Company
                        </h3>
                        <h1
                            data-sal="slide-right"
                            data-sal-duration="300"
                            data-sal-delay="300"
                        >
                            Case Studies
                        </h1>
                    </PageTitles>

                    <Row className="gx-5 gy-5 mt-xs">
                        {caseStudies.map((singleCase) => {
                            const caseStudy = singleCase.node;

                            const image = getImage(
                                caseStudy.featuredImage.node.localFile
                            );

                            return (
                                <Col lg={6}>
                                    <CaseStudyCard caseStudy={caseStudy} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </main>
        </Layout>
    );
};

export const casestudiesQuery = graphql`
    {
        allWpCasestudy {
            edges {
                node {
                    id
                    title
                    slug
                    CaseStudyFields {
                        location
                        sqFt
                        assetType
                    }
                    featuredImage {
                        node {
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
    }
`;

export default CaseStudies;
