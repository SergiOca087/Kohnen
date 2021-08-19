import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import { Button, Col, Container, Row } from "react-bootstrap";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import parse from "html-react-parser";
import SecondaryHeader from "../components/SecondaryHeader";

const StyledBreadcrumb = styled.div`
    display: flex;
    align-items: center;

    .link {
        font-size: 2rem;
    }

    .separator {
        display: block;
        margin: 0 2rem;
        height: 1.3rem;
        width: 1px;
        background-color: #979797;
    }

    .category {
        color: #9d9d9d;
        font-size: 2rem;
    }
`;

const StyledPostTitle = styled.h1`
    font-size: 6.4rem;
    margin-top: 3rem;

    @media (max-width: 991px) {
        font-size: 5.4rem;
    }

    @media (max-width: 600px) {
        font-size: 4rem;
    }
`;

const StyledPostContent = styled.section`
    max-width: 87rem;
    border-bottom: 1px solid rgba(151, 151, 151, 0.3);
    padding-bottom: 3rem;

    .buttons {
        padding: 4rem 0;
        margin-bottom: 4rem;
        border-bottom: 1px solid rgba(151, 151, 151, 0.3);
        display: flex;

        .btn {
            display: flex;
            align-items: center;

            svg {
                margin-right: 1rem;
            }
        }

        a {
            margin-right: 1rem;
        }
    }

    p {
        font-size: 1.8rem;
        line-height: 3rem;
        color: #000;
        margin-bottom: 2rem;
    }

    img {
        margin: 2rem 0;
    }

    h1,
    h2,
    h3,
    h4 {
        font-size: 2.4rem;
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }

    ol {
        margin-left: 3rem;
        margin-bottom: 3rem;
        margin-top: 1rem;
        padding-left: 4rem;

        @media screen and (max-width: 600px) {
            padding-left: 0;
        }

        li {
            @include display-flex(row, unset, unset);
            margin-bottom: 2rem;
            font-size: 1.8rem;
            line-height: 3rem;
            color: #000;
            letter-spacing: 0;
            position: relative;
        }
    }

    ul {
        margin-left: 3rem;
        list-style: none;
        padding-left: 6rem;
        margin-bottom: 3rem;
        margin-top: 1rem;
        padding: 0 2rem;

        @media screen and (max-width: 600px) {
            padding-left: 0;
        }

        li {
            @include display-flex(row, unset, unset);
            margin-bottom: 2rem;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: #000;
            letter-spacing: 0;
            text-indent: -1rem;

            &::before {
                content: "•";
                color: #bbbbbb;
                display: inline-block;
                width: 4px;
                height: 4px;
                margin-left: 0;
                padding-right: 3rem;

                @media screen and (max-width: 600px) {
                    padding-right: 1rem;
                }
            }

            span {
                padding-left: 3.5rem;
            }
        }
    }

    blockquote {
        position: relative;
        margin: 4rem 0;
        padding: 4rem 4rem 4rem 8rem;
        border-left: 0;
        background-color: #f7f7f7;

        @media screen and (max-width: 600px) {
            padding-left: 2rem;
        }

        &:before {
            content: "“";
            font-family: "Montserrat-Medium";
            position: absolute;
            top: 2rem;
            left: 3rem;
            font-size: 6rem;
            color: $secondary;

            @media screen and (max-width: 600px) {
                top: -1rem;
                left: 1.5rem;
            }
        }

        p {
            font-size: 1.8rem;
            position: relative;
            color: #000;

            strong {
                color: #1a1938;
                font-weight: 700;
            }

            @media screen and(max-width: $bp-medium) {
                font-size: 1.6rem;
                line-height: 2.6rem;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }

        @media screen and(max-width: $bp-medium) {
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`;

const Post = ({ data }) => {
    // const categories = data.allWpCategory.edges;
    const posts = data.allWpPost.edges;
    const image = getImage(data.wpPost.featuredImage?.node?.localFile);
    return (
        <Layout>
            <SEO title={data.wpPost.title} />
            <Container fluid="lg">
                <div
                    css={css`
                        max-width: 80.7rem;
                    `}
                >
                    <div className="padding">
                        <StyledBreadcrumb>
                            <Link to={"/resources"}>
                                <span className="caps link primary back">
                                    <span></span> All posts
                                </span>
                            </Link>
                            <span className="separator"></span>
                            <div>
                                <span></span>{" "}
                                {data.wpPost.categories.nodes.map(
                                    (category) => {
                                        return (
                                            <span
                                                key={category.id}
                                                className="category"
                                            >
                                                {category.name}
                                            </span>
                                        );
                                    }
                                )}
                            </div>
                        </StyledBreadcrumb>
                        <StyledPostTitle>{data.wpPost.title}</StyledPostTitle>
                    </div>
                    {image && (
                        <GatsbyImage
                            image={image}
                            alt={data.wpPost.title}
                            style={{ height: "100%" }}
                        />
                    )}
                    <StyledPostContent>
                        <div className="buttons">
                            <a href="">
                                <Button variant="full-primary" size="sm">
                                    <FaFacebookF /> Share
                                </Button>
                            </a>

                            <a href="" target="_blank">
                                <Button variant="full-primary" size="sm">
                                    <FaLinkedinIn /> Post
                                </Button>
                            </a>

                            <a href="" target="_blank">
                                <Button variant="full-primary" size="sm">
                                    <FaTwitter /> Tweet
                                </Button>
                            </a>
                        </div>

                        {parse(`${data.wpPost.content}`)}

                        {data.wpPost.PostFields?.file && (
                            <div className="mt-lg mb-md">
                                <a
                                    href={
                                        data.wpPost.PostFields?.file
                                            ?.mediaItemUrl
                                    }
                                    target="_blank"
                                >
                                    <Button variant="full-primary" size="xxl">
                                        Download
                                    </Button>
                                </a>
                            </div>
                        )}
                    </StyledPostContent>
                </div>
                <section className="padding mt-md">
                    <Container>
                        <div className="mb-lg">
                            <SecondaryHeader
                                text="Recent Posts"
                                className="mb-md"
                            />
                        </div>
                        <Row className="gx-5 gy-5">
                            {posts.map((post) => {
                                return (
                                    <Col xl={4} lg={6}>
                                        <PostCard post={post} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </section>
            </Container>
        </Layout>
    );
};

export default Post;

export const query = graphql`
    query ($id: String!) {
        wpPost(id: { eq: $id }) {
            id
            title
            content
            categories {
                nodes {
                    name
                }
            }
            PostFields {
                file {
                    mediaItemUrl
                }
            }
            featuredImage {
                node {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
        allWpCategory {
            edges {
                node {
                    id
                    name
                    posts {
                        nodes {
                            title
                        }
                    }
                }
            }
        }
        allWpPost(filter: { id: { ne: $id } }) {
            edges {
                node {
                    id
                    title
                    slug
                    uri
                    excerpt
                    categories {
                        nodes {
                            name
                        }
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        width: 500

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
