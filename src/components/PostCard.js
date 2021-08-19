import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import parse from "html-react-parser";

const StyledPostCard = styled.div`
    background-color: var(--grey);
    max-width: 41rem;
    margin: 0 auto;

    .image-wrap {
        overflow: hidden;
        width: 100%;
        height: 20.5rem;
        position: relative;

        &:before {
            content: "";
            transition: all 300ms;
            width: 0;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            z-index: 10;
            background-color: rgba(162, 14, 10, 0.3);
        }
    }

    h4 {
        font-size: 2.4rem;
        transition: color 300ms;
        &:hover {
            color: var(--primary);
        }
    }

    .details {
        padding: 2rem 3rem 3rem 3rem;

        .category {
            font-size: 14px;
            color: #9d9d9d;
        }
    }

    .gatsby-image-wrapper img {
        transition: transform 2s;
    }

    &:hover {
        .gatsby-image-wrapper img {
            transform: scale(1.06);
        }

        .image-wrap {
            &:before {
                width: 100%;
                opacity: 1;
            }
        }
    }
`;

export default function PostCard({ post }) {
    const image = getImage(post.node.featuredImage?.node?.localFile);
    let excerpt = post.node.excerpt;
    return (
        <StyledPostCard key={post.id}>
            <div className="image-wrap">
                <GatsbyImage
                    image={image}
                    alt={post.node.title}
                    style={{ height: "100%" }}
                />
            </div>
            <div className="details">
                {post.node.categories.nodes.map((category) => {
                    return <span className="category">{category.name}</span>;
                })}
                <Link to={post.node.uri}>
                    <h4 className="mb-xs">{post.node.title}</h4>
                </Link>
                {excerpt && excerpt.length > 20
                    ? parse(
                          `${(excerpt =
                              excerpt.substr(
                                  0,
                                  excerpt.substr(0, 150 - 2).lastIndexOf(" ")
                              ) + "...")}`
                      )
                    : excerpt && parse(`${excerpt}`)}
                <Link to={post.node.uri}>
                    <span className="primary caps link">Read More</span>
                </Link>
            </div>
        </StyledPostCard>
    );
}
