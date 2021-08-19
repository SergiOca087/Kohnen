import React from "react";
import styled from "styled-components";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
// import Typography from '../styles/Typography';
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/typography.css";

const ContentStyles = styled.div`
    background: white;
`;

const Layout = ({
    children,
    headerAbsolute = false,
    contactBanner = false,
}) => {
    return (
        <>
            <Header position={headerAbsolute} />
            <GlobalStyles />
            <div id="main-wrap">
                <ContentStyles>{children}</ContentStyles>
                <Footer contactBanner={contactBanner} />
            </div>
        </>
    );
};

export default Layout;
