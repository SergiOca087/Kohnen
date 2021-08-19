import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const GbiBridged = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query MyQuery {
                allFile(filter: { relativePath: { eq: "lines-bg.svg" } }) {
                    edges {
                        node {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        `
    );
    const image = getImage(placeholderImage);

    // Use like this:
    const bgImage = convertToBgImage(image);

    return (
        <BackgroundImage
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
        >
            <div style={{ minHeight: 1000, minWidth: 1000 }}>
                <GatsbyImage image={image} alt={"testimage"} />
            </div>
        </BackgroundImage>
    );
};
export default GbiBridged;
