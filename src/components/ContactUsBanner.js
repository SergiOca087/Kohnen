import { Link, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { Button, Container } from "react-bootstrap";
import { useMouseMove } from "react-use-mouse-move";

const StyledContactUsBanner = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 70rem;

    h3 {
        font-size: 5rem;
        line-height: 5.4rem;
    }

    p {
        max-width: 69.4rem;
        margin: 0 auto 3rem auto;
    }

    .inner {
        background-color: #fff;
        max-width: 88.5rem;
        margin: 0 auto;
        position: relative;
        z-index: 10;
    }
`;

const StyledMagneticWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130rem;
        margin: 0 auto;
        height: 60.1rem;
    }

    #wrapper {
        height: 55rem;
        display: grid;
        grid-template-columns: repeat(13, 50px);
        grid-gap: 10rem;

        .item {
            transition: all 10ms;
            width: 7rem;
            height: 1px;
            background-color: #fff;
        }
    }
`;

export default function ContactUsBanner() {
    // document.querySelector(".wrapper").addEventListener("mousemove", (e) => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onMouseMove = (e) => {
        setX(e.clientX);
        setY(e.nativeEvent.offsetY);
    };

    // let rect = e.target.getBoundingClientRect();
    const mouseX = x;
    const mouseY = y;

    useEffect(() => {
        const sqrs = document.querySelectorAll(".item");

        sqrs.forEach((sqr) => {
            const sqrX = sqr.offsetLeft + 30;
            const sqrY = sqr.offsetTop - 70;

            const diffX = mouseX - sqrX;
            const diffY = mouseY - sqrY;

            const radians = Math.atan2(diffY, diffX);

            const angle = (radians * 180) / Math.PI;

            sqr.style.transform = `rotate(${angle}deg)`;
        });
    });

    // });
    const data = useStaticQuery(graphql`
        {
            allWp {
                edges {
                    node {
                        optionsPage {
                            OptionsContactUs {
                                contactUsTitle
                                contactUsText
                                contactUsButtonText
                                contactUsButtonUrl {
                                    ... on WpPage {
                                        id
                                        link
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const options = data.allWp.edges[0].node.optionsPage.OptionsContactUs;

    return (
        <div id="contact-wrap">
            <StyledContactUsBanner className="padding-large bg-primary">
                <StyledMagneticWrap>
                    <div
                        className="inner-wrap"
                        onMouseMove={(e) => onMouseMove(e)}
                    >
                        <div id="wrapper">
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                        </div>
                    </div>
                </StyledMagneticWrap>
                <Container fluid="lg">
                    <div
                        className="inner padding-large text-center"
                        data-sal="slide-up"
                        data-sal-duration="500"
                        css={css`
                            pointer-events: none;
                        `}
                    >
                        <h3 className="mb-sm">{options.contactUsTitle}</h3>
                        <p className="big mb-lg">{options.contactUsText}</p>
                        <Link
                            to={"/contact"}
                            css={css`
                                pointer-events: all;
                            `}
                        >
                            <Button variant="transparent-primary" size="xxl">
                                Get In Touch
                            </Button>
                        </Link>
                    </div>
                </Container>
            </StyledContactUsBanner>
        </div>
    );
}
