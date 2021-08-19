import React from "react";
import styled from "styled-components";

const StyledTitles = styled.div`
    h3 {
        font-size: 2rem;
        text-transform: uppercase;
    }

    h1 {
        font-family: "Montserrat-Bold";
        font-size: 6.4rem;

        @media (max-width: 991px) {
            font-size: 5.4rem;
        }

        @media (max-width: 600px) {
            font-size: 4rem;
        }
    }
`;

export default function PageTitles({ children }) {
    return <StyledTitles>{children}</StyledTitles>;
}
