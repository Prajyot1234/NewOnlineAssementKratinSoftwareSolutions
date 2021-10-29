import styled,{ ThemeProvider } from 'styled-components'
import React from 'react'
import { darkmode, lightmode, GlobalStyles } from '../config/theme'
import { useDataLayerValue } from "../config/DataLayer" 
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import('../components/map'), {
    ssr: false
});

export default function nearbyhos() {
    const [ { theme }, dispatch ] = useDataLayerValue();

    return (
        <ThemeProvider theme={ theme === "light" ? lightmode : darkmode }>
        <GlobalStyles />
            <div>
                <Heading_Container>
                    <h1>
                        <span className="Color">N</span>earBy Hospital<span className="Color">s</span>
                    </h1>
                </Heading_Container>
                <Map_Container>
                    <MapWithNoSSR/>
                </Map_Container>
                <ParaContainer>
                    <p>In this section I tried to build functionality where map will suggest nearby Hospitals but as google maps api is paid API so that's why unable to build</p>
                </ParaContainer>
            </div>
        </ThemeProvider>
    )
}

const Heading_Container = styled.div`
    *{
        font-family: 'Poppins', sans-serif;
    }
    h1{
        margin-top: 20px!important;
        margin-bottom: 40px!important;
        text-align: center;
    }
    .Color{
        color: #06D253;
    }
`;

const Map_Container = styled.div`
    width: 1000px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
`;

const ParaContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 40%;

`;