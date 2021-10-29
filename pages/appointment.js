import React from 'react'
import { darkmode, lightmode, GlobalStyles } from '../config/theme'
import styled,{ ThemeProvider } from 'styled-components'
import { useDataLayerValue } from "../config/DataLayer" 

export default function appointment() {
    const [ { theme }, dispatch ] = useDataLayerValue();
    return (
        <ThemeProvider theme={ theme === "light" ? lightmode : darkmode }>
            <GlobalStyles />
            <div>
                <Heading_Container>
                    <h1>
                        <span className="Color">A</span>ppointment<span className="Color">s</span>
                    </h1>
                    <img src='/Underconstruction.svg' className="Img" />
                    <p><span className="Color">U</span>nder Constructio<span className="Color">n</span></p>
                </Heading_Container>
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
    .Img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        height: 400px;
    }
    p{
        text-align: center;
        font-size: 18px;
    }
`;

