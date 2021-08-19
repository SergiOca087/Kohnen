import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Col, Container, Button } from "react-bootstrap";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import SEO from "../components/SEO";
import parse from "html-react-parser";

const StyledTeamMember = styled.div`
    display: flex;

    h1 {
        font-size: 6.4rem;

        @media (max-width: 991px) {
            font-size: 5.4rem;
        }

        @media (max-width: 600px) {
            font-size: 4rem;
        }
    }

    h4 {
        font-size: 2rem;
        color: #9d9d9d;
        text-transform: uppercase;
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

    .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .buttons {
        display: flex;

        .btn {
            display: flex;
            align-items: center;
            margin-right: 1rem;

            svg {
                margin-right: 1rem;
            }
        }
    }
`;

const StyledTeamMemberContent = styled.section`
    background-color: var(--grey);
    padding: 4rem;
    margin-bottom: 8rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }

    .small {
        p {
            font-size: 1.8rem;
            color: rgba(61, 61, 61, 0.5);
        }
    }
`;

const Bio = ({ data }) => {
    const image = getImage(data.wpTeam.featuredImage?.node?.localFile);
    return (
        <Layout>
            <SEO title={data.wpTeam.title} />
            <Container fluid="lg">
                <section className="mt-xl">
                    <Link to={"/about"}>
                        <span className="caps link primary back">
                            <span></span>Back to About
                        </span>
                    </Link>
                    <StyledTeamMember className="padding">
                        <div data-sal="slide-right" data-sal-duration="500">
                            <GatsbyImage
                                image={image}
                                alt={data.wpTeam.title}
                                objectFit="cover"
                            />
                        </div>

                        <div className="details">
                            <h1 className="mb-sm">{data.wpTeam.title}</h1>
                            <h4 className="mb-md">
                                {
                                    data.wpTeam.TeamMemberFields
                                        .teamMemberPosition
                                }
                            </h4>
                            <div className="buttons">
                                {data.wpTeam.TeamMemberFields
                                    ?.teamMemberEMail && (
                                    <a
                                        href={`mailto:${data.wpTeam.TeamMemberFields.teamMemberEMail}`}
                                    >
                                        <Button
                                            variant="full-primary"
                                            size="sm"
                                        >
                                            <IoMail /> Email
                                        </Button>
                                    </a>
                                )}
                                {data.wpTeam.TeamMemberFields
                                    ?.teamMemberLinkedin && (
                                    <a
                                        href={`${data.wpTeam.TeamMemberFields.teamMemberLinkedin}`}
                                        target="_blank"
                                    >
                                        <Button
                                            variant="full-primary"
                                            size="sm"
                                        >
                                            <FaLinkedinIn /> linkedin
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </StyledTeamMember>
                </section>

                <StyledTeamMemberContent>
                    <p className="big">
                        {data.wpTeam.TeamMemberFields.teamMemberIntroText}
                    </p>
                    <div className="mt-sm small">
                        {parse(`${data.wpTeam.content}`)}
                    </div>
                </StyledTeamMemberContent>
            </Container>
        </Layout>
    );
};

export default Bio;

export const query = graphql`
    query ($id: String!) {
        wpTeam(id: { eq: $id }) {
            id
            title
            content
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
                teamMemberEMail
                teamMemberIntroText
                teamMemberLinkedin
                teamMemberPosition
            }
        }
    }
`;
