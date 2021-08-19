import * as React from "react";
import { useState } from "react";
import { Link, graphql } from "gatsby";
import styled, { css } from "styled-components";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Button, Col, Container, Row } from "react-bootstrap";

import PageTitles from "../components/PageTitles";
import PostCard from "../components/PostCard";

const StyledCategoryButtons = styled.div`
    display: flex;

    @media (max-width: 500px) {
        flex-direction: column;

        .btn {
            max-width: 30rem;
            width: 100%;
            margin: 0 auto 0.5rem auto;
        }
    }

    button {
        margin-left: -1px;
    }
`;

const StyledPostsGrid = styled.section`
    max-width: 1150px;
    margin-bottom: 8rem;
`;

const Resources = ({ data, location }) => {
    const search = location.search.substr(10);

    const [activeCategory, setActiveCategory] = useState(
        search ? search : "All"
    );

    const resources = data.allWpPage.edges[0].node.ResourceFields;
    const categories = data.allWpCategory.edges;
    const posts = data.allWpPost.edges.filter(
        (post) =>
            post.node.categories.nodes[0].name === activeCategory ||
            activeCategory === "All"
    );

    return (
        <Layout>
            <SEO title="Resources" />

            <main className="padding">
                <Container fluid="lg">
                    <section className="padding">
                        <PageTitles className="mb-md">
                            <h3
                                data-sal="slide-right"
                                data-sal-duration="300"
                                css={css`
                                    font-size: 2rem;
                                    text-transform: uppercase;
                                `}
                            >
                                {resources.resourcesPreTitle}
                            </h3>
                            <h1
                                data-sal="slide-right"
                                data-sal-duration="300"
                                data-sal-delay="300"
                            >
                                {resources.resourcesTitle}
                            </h1>
                        </PageTitles>
                    </section>

                    <section className="mb-lg">
                        <StyledCategoryButtons>
                            <Button
                                variant="full-transparent"
                                size="xxl"
                                className={
                                    activeCategory === "All" ? "active" : ""
                                }
                                onClick={() => {
                                    setActiveCategory("All");
                                }}
                            >
                                All Posts
                            </Button>
                            {categories.map((category) => {
                                return (
                                    <Button
                                        variant="full-transparent"
                                        size="xxl"
                                        key={category.id}
                                        className={
                                            activeCategory ===
                                            category.node.name
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() => {
                                            setActiveCategory(
                                                category.node.name
                                            );
                                        }}
                                    >
                                        {category.node.name}
                                    </Button>
                                );
                            })}
                        </StyledCategoryButtons>
                    </section>

                    <StyledPostsGrid classname="mb-xxl">
                        <Row className="gx-5 gy-5">
                            {posts.map((post) => {
                                return (
                                    <Col xl={4} lg={6}>
                                        <PostCard post={post} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </StyledPostsGrid>
                </Container>
            </main>
        </Layout>
    );
};

export const resourcesQuery = graphql`
    {
        allWpPage(filter: { slug: { eq: "resources" } }) {
            edges {
                node {
                    ResourceFields {
                        resourcesPreTitle
                        resourcesTitle
                    }
                }
            }
        }
        allWpPost {
            edges {
                node {
                    id
                    title
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
    }
`;

export default Resources;
