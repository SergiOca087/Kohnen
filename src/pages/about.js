import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Col, Container, Row } from "react-bootstrap";

import PageTitles from "../components/PageTitles";

const StyledMainText = styled.p`
    font-family: "Montserrat-Light";
    font-size: 6.4rem;
    text-transform: uppercase;
    color: rgba(61, 61, 61, 0.3);
    letter-spacing: -2px;

    @media (max-width: 991px) {
        font-size: 5.4rem;
    }

    @media (max-width: 600px) {
        font-size: 4rem;
    }
`;

const StyledMission = styled.section`
    .inner {
        max-width: 50rem;
        margin: 0 auto;
    }

    h3 {
        font-family: "Montserrat-ExtraBold";
        font-size: 3.2rem;
    }

    p {
        max-width: 47rem;
    }

    hr {
        background-color: var(--primary);
        margin: 7rem 0;
        opacity: 1;
    }

    @media (max-width: 991px) {
        .gatsby-image-wrapper {
            margin: 2rem 0 4rem 0;
        }

        hr {
            margin-bottom: 2rem;
        }
    }
`;

const StyledTeamMember = styled.div`
    display: flex;

    h4 {
        font-size: 3.2rem;
    }

    .gatsby-image-wrapper {
        border-radius: 50%;
        margin-right: 10rem;
        flex-shrink: 0;
        width: 24rem;
        height: 24rem;
    }

    @media (max-width: 991px) {
        flex-direction: column;

        .gatsby-image-wrapper {
            margin-right: 0;
            margin-bottom: 4rem;
        }
    }

    &:not:last-child {
        border-bottom: 1px solid rgba(151, 151, 151, 0.2);
    }
`;

const About = ({ data }) => {
    const about = data.allWpPage.edges[0].node.AboutFields;
    const team = data.allWpTeam.edges;
    const logo = getImage(about.introLogo.localFile);
    const missionApproachImage = getImage(about.missionApproachImage.localFile);
    const teamImage = getImage(about.teamMainImage.localFile);

    return (
        <Layout>
            <SEO title="About" />

            <main className="padding">
                <section className="padding mb-md">
                    <Container fluid="lg">
                        <PageTitles className="mb-md">
                            <h3
                                data-sal="slide-right"
                                data-sal-duration="300"
                                css={css`
                                    font-size: 2rem;
                                    text-transform: uppercase;
                                `}
                            >
                                Company
                            </h3>
                            <div
                                data-sal="slide-right"
                                data-sal-duration="300"
                                data-sal-delay="300"
                                className="mt-md mb-md"
                            >
                                <GatsbyImage
                                    image={logo}
                                    alt="The Kohnen Group"
                                />
                            </div>
                        </PageTitles>
                        <StyledMainText>{about.introText}</StyledMainText>
                    </Container>
                </section>
                <StyledMission className="padding">
                    <Container fluid="lg">
                        <Row className="gx-5 gy-5">
                            <Col lg={6}>
                                <div className="inner">
                                    <h3 className="mb-sm">Mission</h3>
                                    <p>{about.mission}</p>

                                    <hr />
                                    <div className="d-lg-none">
                                        <GatsbyImage
                                            image={missionApproachImage}
                                            alt="Mission / Work Approach"
                                            objectFit="cover"
                                        />
                                    </div>

                                    <h3 className="mb-sm">Work approach</h3>
                                    <p>{about.workApproach}</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div
                                    data-sal="slide-up"
                                    data-sal-duration="500"
                                >
                                    <div className="d-none d-lg-block">
                                        <GatsbyImage
                                            image={missionApproachImage}
                                            alt="Mission / Work Approach"
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </StyledMission>

                <section className="padding">
                    <Container fluid="lg">
                        <GatsbyImage
                            image={teamImage}
                            alt="Mission / Work Approach"
                            objectFit="cover"
                        />

                        <div className="padding">
                            {team.map((teamMember) => {
                                const teamMemberImage = getImage(
                                    teamMember.node.featuredImage.node.localFile
                                );

                                return (
                                    <StyledTeamMember
                                        key={teamMember.node.id}
                                        className="padding"
                                    >
                                        <div
                                            data-sal="slide-right"
                                            data-sal-duration="500"
                                        >
                                            <GatsbyImage
                                                image={teamMemberImage}
                                                alt={teamMember.node.title}
                                                objectFit="cover"
                                            />
                                        </div>

                                        <div>
                                            <h4 className="mb-sm">
                                                {
                                                    teamMember.node
                                                        .TeamMemberFields
                                                        .teamMemberPosition
                                                }
                                            </h4>
                                            <p className="big">
                                                {
                                                    teamMember.node
                                                        .TeamMemberFields
                                                        .teamMemberIntroText
                                                }
                                            </p>
                                            <Link
                                                to={`/${teamMember.node.slug}`}
                                            >
                                                <span className="primary caps link">
                                                    Read More
                                                </span>
                                            </Link>
                                        </div>
                                    </StyledTeamMember>
                                );
                            })}
                        </div>
                    </Container>
                </section>
            </main>
        </Layout>
    );
};

export const aboutQuery = graphql`
    {
        allWpPage(filter: { slug: { eq: "about" } }) {
            edges {
                node {
                    AboutFields {
                        introLogo {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        width: 507
                                        placeholder: BLURRED
                                        quality: 100
                                    )
                                }
                            }
                        }
                        introText
                        mission
                        workApproach
                        missionApproachImage {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        width: 600
                                        placeholder: BLURRED
                                        quality: 100
                                    )
                                }
                            }
                        }
                        teamMainImage {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        width: 1300
                                        height: 500
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
        allWpTeam(sort: { fields: menuOrder }) {
            edges {
                node {
                    id
                    title
                    slug
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        width: 800
                                        height: 800
                                        placeholder: BLURRED
                                        quality: 100
                                    )
                                }
                            }
                        }
                    }
                    TeamMemberFields {
                        teamMemberPosition
                        teamMemberIntroText
                    }
                }
            }
        }
    }
`;

export default About;
