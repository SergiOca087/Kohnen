import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { Link } from "gatsby";

const StyledServiceList = styled.div``;

const StyledService = styled.div`
    h4 {
        font-size: 2.4rem;
    }
`;

export default function ServiceList({ services, type }) {
    return (
        <StyledServiceList>
            <Row className="gx-5">
                {services.map((service, idx) => {
                    const image = getImage(
                        service.featuredImage.node.localFile
                    );
                    return (
                        <Col lg={6}>
                            <StyledService
                                key={service.id}
                                className={`${
                                    idx % 2 === 0 ? "even" : "odd"
                                } mb-lg`}
                            >
                                {service.featuredImage && (
                                    <GatsbyImage
                                        image={image}
                                        alt={service.title}
                                        objectFit="cover"
                                    />
                                )}

                                <h4 className="mt-sm">{service.title}</h4>
                                <Link
                                    to={`${
                                        type === "occupiers"
                                            ? `/occupant-services/#${service.slug}`
                                            : `/investor-services/#${service.slug}`
                                    }`}
                                >
                                    <span className="primary caps link">
                                        View Details
                                    </span>
                                </Link>
                            </StyledService>
                        </Col>
                    );
                })}
            </Row>
        </StyledServiceList>
    );
}
