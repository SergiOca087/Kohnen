import React from "react";
import GoogleMapReact from "google-map-react";
import styled, { css } from "styled-components";

const StyledPin = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--primary);
`;

const LocationPin = () => <StyledPin></StyledPin>;

const GoogleMap = ({ location, zoomLevel }) => (
    <div className="map">
        <div
            className="google-map"
            css={css`
                height: 19.5rem;
                width: 35.5rem;
                max-width: 100%;
                overflow: hidden;
            `}
        >
            <GoogleMapReact
                bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAP_API}` }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
                options={{
                    zoomControl: false,
                    fullscreenControl: false,
                    // scrollwheel: false,
                    styles: [
                        {
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#e9e9e9",
                                },
                                {
                                    lightness: 17,
                                },
                            ],
                        },
                        {
                            featureType: "landscape",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#f5f5f5",
                                },
                                {
                                    lightness: 20,
                                },
                            ],
                        },
                        {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    color: "#ffffff",
                                },
                                {
                                    lightness: 17,
                                },
                            ],
                        },
                        {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [
                                {
                                    color: "#ffffff",
                                },
                                {
                                    lightness: 29,
                                },
                                {
                                    weight: 0.2,
                                },
                            ],
                        },
                        {
                            featureType: "road.arterial",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#ffffff",
                                },
                                {
                                    lightness: 18,
                                },
                            ],
                        },
                        {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#ffffff",
                                },
                                {
                                    lightness: 16,
                                },
                            ],
                        },
                        {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#f5f5f5",
                                },
                                {
                                    lightness: 21,
                                },
                            ],
                        },
                        {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#dedede",
                                },
                                {
                                    lightness: 21,
                                },
                            ],
                        },
                        {
                            elementType: "labels.text.stroke",
                            stylers: [
                                {
                                    visibility: "on",
                                },
                                {
                                    color: "#ffffff",
                                },
                                {
                                    lightness: 16,
                                },
                            ],
                        },
                        {
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    saturation: 36,
                                },
                                {
                                    color: "#333333",
                                },
                                {
                                    lightness: 40,
                                },
                            ],
                        },
                        {
                            elementType: "labels.icon",
                            stylers: [
                                {
                                    visibility: "off",
                                },
                            ],
                        },
                        {
                            featureType: "transit",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#f2f2f2",
                                },
                                {
                                    lightness: 19,
                                },
                            ],
                        },
                        {
                            featureType: "administrative",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    color: "#fefefe",
                                },
                                {
                                    lightness: 20,
                                },
                            ],
                        },
                        {
                            featureType: "administrative",
                            elementType: "geometry.stroke",
                            stylers: [
                                {
                                    color: "#fefefe",
                                },
                                {
                                    lightness: 17,
                                },
                                {
                                    weight: 1.2,
                                },
                            ],
                        },
                    ],
                }}
            >
                <LocationPin lat={location.lat} lng={location.lng} />
            </GoogleMapReact>
        </div>
    </div>
);
export default GoogleMap;
