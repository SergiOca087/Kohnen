import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledCaseStudy = styled.div`
    position: relative;
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    min-height: 52rem;
    max-width: 70rem;
    margin: 0 auto;

    &:hover {
        &:before {
            opacity: 1;
        }
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 500ms;
    }

    .gatsby-image-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`;

const StyledCaseStudyCard = styled.div`
    z-index: 10;
    position: relative;
    max-width: 44rem;
    width: 100%;
    background-color: #fff;

    .top {
        padding: 2.5rem;
        padding-bottom: 1rem;
    }

    .bottom {
        text-align: center;
        text-transform: uppercase;
        border-top: 1px solid var(--primary);

        a {
            width: 100%;
            height: 100%;
            display: block;
            padding: 1.5rem 0 2rem 0;

            &:hover {
                background-color: var(--primary);
                color: #fff;
            }

            span {
                &:hover {
                    color: #fff;
                }
            }
        }
    }

    h4 {
        font-size: 2.4rem;
        letter-spacing: 0.03px;
    }

    p {
        font-size: 14px;

        &.title {
            color: #d2d2d2;
            margin-bottom: 0;
        }
    }
`;

export default function CaseStudyCard({ caseStudy, link = true }) {
    const image = getImage(caseStudy.featuredImage?.node?.localFile);

    return (
        <StyledCaseStudy key={caseStudy.id}>
            <GatsbyImage
                image={image}
                alt={caseStudy.title}
                objectFit="cover"
                style={{ zIndex: "0" }}
            />

            <StyledCaseStudyCard data-sal="slide-down" data-sal-duration="500">
                <div className="top">
                    <h4 class="mb-md">{caseStudy.title}</h4>
                    {caseStudy.CaseStudyFields.assetType && (
                        <div className="mb-md">
                            <p className="title">Asset Type</p>
                            <p>{caseStudy.CaseStudyFields.assetType}</p>
                        </div>
                    )}
                    {caseStudy.CaseStudyFields.sqFt && (
                        <div className="mb-md">
                            <p className="title">Sq. Ft.</p>
                            <p>{caseStudy.CaseStudyFields.sqFt}</p>
                        </div>
                    )}
                    {caseStudy.CaseStudyFields.location && (
                        <div className="mb-md">
                            <p className="title">Location</p>
                            <p>{caseStudy.CaseStudyFields.location}</p>
                        </div>
                    )}
                </div>
                {link && (
                    <div className="bottom">
                        <Link to={`/${caseStudy.slug}`}>
                            <span className="link caps">View Details</span>
                        </Link>
                    </div>
                )}
            </StyledCaseStudyCard>
        </StyledCaseStudy>
    );
}
