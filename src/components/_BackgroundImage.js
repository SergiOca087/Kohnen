import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function BackgroundImage({ children, color }) {
    return (
        <div
            style={{
                display: "grid",
                width: "100%",
                height: "100%",
                backgroundColor: "var(--primary)",
            }}
        >
            <StaticImage
                style={{
                    gridArea: "1/1",

                    // You can set a maximum height for the image, if you wish.
                    // maxHeight: 600,
                }}
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                aspectRatio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=""
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src="../assets/images/lines-bg.svg"
                formats={["auto", "webp", "avif"]}
            />
            <div
                style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: "1/1",
                    position: "relative",
                    // This centers the other elements inside the hero component
                    placeItems: "center",
                    display: "grid",
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default BackgroundImage;
