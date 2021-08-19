import * as React from "react";
import { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
    Carousel,
    Col,
    Container,
    Row,
    Tab,
    Tabs,
    Button,
} from "react-bootstrap";
import SecondaryHeader from "../components/SecondaryHeader";
import ServiceList from "../components/ServiceList";
import ContactUsBanner from "../components/ContactUsBanner";

const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 81.3rem;
    padding: 4rem 0;
    position: relative;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }

    h1,
    p {
        color: #fff;
    }

    h1 {
        font-size: 6.4rem;
        letter-spacing: -2px;

        @media (max-width: 991px) {
            font-size: 5.4rem;
        }

        @media (max-width: 600px) {
            font-size: 4rem;
        }
    }

    .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .inner {
        max-width: 89.6rem;
    }
`;

const StyledVideo = styled.div`
    video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        object-fit: cover;
        width: 100%;
        min-height: 100%;
        transform: translate(-50%, -50%);
    }
`;

const StyledOverviewSection = styled.section`
    position: relative;
    min-height: 45rem;
    max-width: 92rem;

    // .gatsby-image-wrapper {
    //     position: absolute;
    //     top: 50%;
    //     transform: translateY(-50%);
    // }
`;

const StyledTabsSection = styled.section``;

const StyledTabs = styled(Tabs)`
    justify-content: center;
    align-items: center;
    border-bottom: 0;
    min-height: 16rem;

    .nav-link {
        font-size: 5rem;
        height: 100%;
        font-family: "Montserrat-Bold";
        opacity: 0.3;
        border: none;
        color: var(--text);
        transition: all 300ms;
        height: 8rem;
        margin: 0 2rem;

        @media (max-width: 500px) {
            font-size: 3.8rem;
        }

        &:hover {
            opacity: 1;
        }

        &.active {
            opacity: 1;
            border: none;
            border-bottom: 1px solid var(--primary);
        }
    }
`;

const StyledCarousel = styled(Carousel)`
    .carousel-control-next,
    .carousel-control-prev {
        span {
            display: none;
        }
    }

    .carousel-control-next {
        display: flex;
        width: 10px;
        height: 10px;
        border-top: 2px solid var(--primary);
        border-right: 2px solid var(--primary);
        transform: rotate(45deg);
        top: 14.5rem;
        left: -180px;

        @media (max-width: 991px) {
            top: initial;
            bottom: -72px;
            left: initial;
            right: 47%;
        }
    }

    .carousel-control-prev {
        display: flex;
        width: 10px;
        height: 10px;
        border-top: 2px solid var(--primary);
        border-left: 2px solid var(--primary);
        transform: rotate(-45deg);
        top: 14.5rem;
        left: -205px;

        @media (max-width: 991px) {
            top: initial;
            bottom: -72px;
            left: 47%;
        }
    }
`;

const StyledCarouselCounter = styled.div`
    @media (max-width: 991px) {
        text-align: center;
    }

    span {
        font-family: "Montserrat-ExtraLight";
        font-size: 7.2rem;
        letter-spacing: 0.09px;
        color: #d2d2d2;

        &.current {
            color: var(--text);
        }
    }
`;

const StyledCarouselControls = styled.div`
    position: relative;
    margin-top: 1.5rem;
    width: 8.7rem;
    height: 5.5rem;
    border: 1px solid var(--primary);

    @media (max-width: 991px) {
        margin: 4rem auto 0 auto;
    }
`;

const StyledCaseStudyCard = styled.div`
    padding: 3rem 5rem;
    max-width: 66.7rem;
    background-color: var(--grey);

    @media (max-width: 991px) {
        margin: 0 auto;
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

const IndexPage = ({ data }) => {
    const homepage = data.allWpPage.edges[0].node.HomepageFields;
    const heroImage = getImage(
        data.allWpPage.edges[0].node.HomepageFields.heroImage.localFile
    );
    const occupiersArr = homepage.featuredOccupiers;
    const investorsArr = homepage.featuredInvestors;

    // State
    const [index, setIndex] = useState(1);
    const [windowPosition, setWindowPosition] = useState(1200);
    const [ticking, setTicking] = useState(false);

    // Is element inView? react-intersection-observer
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    //Seems throttled but still quite taxative
    //TODO: Fire this ONLY when "react-intersection-observer" Inview is true
    if (inView) {
        document.addEventListener("scroll", function (e) {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    setWindowPosition(window.scrollY + window.innerHeight);
                    setTicking(false);
                });

                setTicking(true);
            }
        });
    }

    //TODO: Not working
    // if (!inView) {
    // 	console.log('unattached');
    // 	document.removeEventListener('scroll', function (e) {
    // 		setWindowPosition(1000);
    // 	});
    // }

    // Carousel Index Indicator
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Layout headerAbsolute={true} contactBanner={true}>
            <SEO title="Homepage" />

            <main>
                <StyledHero>
                    <GatsbyImage
                        image={heroImage}
                        alt={homepage.heroTitle}
                        objectFit="cover"
                        style={{ zIndex: "0" }}
                    />
                    <StyledVideo>
                        <video
                            autoplay="true"
                            muted="true"
                            loop="true"
                            playsinline="true"
                            src={homepage.heroVideo.mediaItemUrl}
                            type="video/mp4"
                        />
                    </StyledVideo>
                    <Container style={{ zIndex: 10 }}>
                        <div className="inner">
                            <p className="big caps">{homepage.heroPreTitle}</p>
                            <h1 className="mb-sm">{homepage.heroTitle}</h1>
                            <Link to={"/about"}>
                                <Button variant="transparent" size="xxl">
                                    {homepage.heroButtonText}
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </StyledHero>

                <Container fluid="lg">
                    <StyledOverviewSection className="padding-large mt-xl mb-xxl">
                        <div ref={ref}>
                            <div
                                css={css`
                                    position: absolute;
                                    top: 15%;
                                    z-index: 0;
                                    transition: all 1s;
                                    left: ${-windowPosition + 1300}px;
                                `}
                            >
                                <StaticImage
                                    src="../assets/images/kohnen_logo_.png"
                                    alt=""
                                    placeholder="blurred"
                                    layout="fixed"
                                />
                            </div>
                        </div>
                        <div
                            css={css`
                                position: relative;
                                z-index: 10;
                            `}
                        >
                            <SecondaryHeader text={homepage.overviewTitle} />
                            <p className="big mb-sm">{homepage.overviewText}</p>
                            <Link to={homepage.overviewButtonUrl.link}>
                                <Button
                                    variant="transparent-primary"
                                    size="xxl"
                                >
                                    {homepage.overviewButtonText}
                                </Button>
                            </Link>
                        </div>
                    </StyledOverviewSection>
                </Container>

                {/* Services - Custom posts 2 taxonomies*/}
                <StyledTabsSection className="padding">
                    <Container
                        css={css`
                            border-top: 1px solid rgba(151, 151, 151, 0.2);
                        `}
                    >
                        <StyledTabs
                            defaultActiveKey="occupiers"
                            className="mt-md mb-lg text-center"
                        >
                            <Tab eventKey="occupiers" title="For Occupiers">
                                <ServiceList
                                    services={occupiersArr}
                                    type="occupiers"
                                />
                            </Tab>
                            <Tab eventKey="investors" title="For Investors">
                                <ServiceList
                                    services={investorsArr}
                                    type="investors"
                                />
                            </Tab>
                        </StyledTabs>
                    </Container>
                </StyledTabsSection>

                <section className="mb-xl">
                    <Container className="container-md">
                        <div className="text-center mb-md">
                            <SecondaryHeader
                                text={homepage.featuredCaseStudiesTitle}
                            />
                        </div>
                        <Row className="gx-5 gy-5">
                            <Col lg={3}>
                                <StyledCarouselCounter>
                                    <span className="current">{index + 1}</span>{" "}
                                    <span>
                                        / {homepage.featuredCaseStudies.length}
                                    </span>
                                </StyledCarouselCounter>
                                <StyledCarouselControls className="d-none d-lg-block"></StyledCarouselControls>
                            </Col>
                            <Col>
                                <StyledCarousel
                                    variant="dark"
                                    interval={null}
                                    activeIndex={index}
                                    onSelect={handleSelect}
                                    indicators={false}
                                    interval={5000}
                                >
                                    {homepage.featuredCaseStudies.map(
                                        (caseStudy, idx) => {
                                            // const { CaseStudyFields } = caseStudy;
                                            return (
                                                <Carousel.Item
                                                    key={caseStudy.id}
                                                >
                                                    <StyledCaseStudyCard>
                                                        <h4 class="mb-md">
                                                            {caseStudy.title}
                                                        </h4>
                                                        {caseStudy
                                                            .CaseStudyFields
                                                            .assetType && (
                                                            <div className="mb-md">
                                                                <p className="title">
                                                                    Asset Type
                                                                </p>
                                                                <p>
                                                                    {
                                                                        caseStudy
                                                                            .CaseStudyFields
                                                                            .assetType
                                                                    }
                                                                </p>
                                                            </div>
                                                        )}
                                                        {caseStudy
                                                            .CaseStudyFields
                                                            .sqFt && (
                                                            <div className="mb-md">
                                                                <p className="title">
                                                                    Sq. Ft.
                                                                </p>
                                                                <p>
                                                                    {
                                                                        caseStudy
                                                                            .CaseStudyFields
                                                                            .sqFt
                                                                    }
                                                                </p>
                                                            </div>
                                                        )}
                                                        {caseStudy
                                                            .CaseStudyFields
                                                            .location && (
                                                            <div className="mb-md">
                                                                <p className="title">
                                                                    Location
                                                                </p>
                                                                <p>
                                                                    {
                                                                        caseStudy
                                                                            .CaseStudyFields
                                                                            .location
                                                                    }
                                                                </p>
                                                            </div>
                                                        )}
                                                    </StyledCaseStudyCard>
                                                </Carousel.Item>
                                            );
                                        }
                                    )}
                                </StyledCarousel>
                                <StyledCarouselControls className="d-lg-none"></StyledCarouselControls>
                            </Col>
                        </Row>
                        <div className="mt-lg text-center">
                            <Link to={"/case-studies"}>
                                <Button
                                    variant="transparent-primary"
                                    size="xxl"
                                >
                                    More Case Studies
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </section>
            </main>
        </Layout>
    );
};

export const indexQuery = graphql`
    {
        allWpPage(filter: { slug: { eq: "homepage" } }) {
            edges {
                node {
                    id
                    HomepageFields {
                        heroVideo {
                            mediaItemUrl
                        }
                        heroImage {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED
                                        width: 1900
                                        placeholder: BLURRED
                                        quality: 100
                                    )
                                }
                            }
                        }
                        heroPreTitle
                        heroTitle
                        heroButtonText
                        heroButtonUrl {
                            ... on WpPage {
                                id
                                slug
                                link
                            }
                        }
                        overviewTitle
                        overviewText
                        overviewButtonText
                        overviewButtonUrl {
                            ... on WpPage {
                                id
                                slug
                                link
                            }
                        }
                        featuredOccupiers {
                            ... on WpService {
                                id
                                title
                                slug
                                featuredImage {
                                    node {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData(
                                                    height: 387
                                                    width: 680
                                                    layout: CONSTRAINED
                                                    placeholder: BLURRED
                                                    quality: 100
                                                )
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        featuredInvestors {
                            ... on WpService {
                                id
                                title
                                slug
                                featuredImage {
                                    node {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData(
                                                    height: 387
                                                    width: 680
                                                    layout: CONSTRAINED
                                                    placeholder: BLURRED
                                                    quality: 100
                                                )
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        featuredCaseStudiesTitle
                        featuredCaseStudies {
                            ... on WpCasestudy {
                                id
                                title
                                CaseStudyFields {
                                    assetType
                                    location
                                    sqFt
                                }
                            }
                        }
                        featuredCaseStudiesButtonText
                        featuredCaseStudiesButtonUrl {
                            ... on WpPage {
                                id
                                slug
                                link
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
