import React from 'react'
import styled,{ ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { useDataLayerValue } from "../../config/DataLayer" 
import { darkmode, lightmode, GlobalStyles } from '../../config/theme'
import { signIn } from 'next-auth/react'

export default function login() {   
    const [ { theme }, dispatch ] = useDataLayerValue();

    return (
        <ThemeProvider theme={ theme === "light" ? lightmode : darkmode }>
            <GlobalStyles />
            <LoginContainer>
                <Head>
                    <title>Login</title>
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <LContainer>
                    <h1 className="LCon_h1"><span className="Color">C</span>urato<span className="Color">r</span></h1>
                    <div className="Img_con">
                        <img src="/login.svg" alt="login" className="LCon_img"/>
                    </div>
                    <p className="LCon_para"><span className="Color">L</span>OGI<span className="Color">N</span> USING GOOGLE <span className="Color">A</span>CCOUN<span className="Color">T</span></p>

                    <div class="wrap" >
                        <button class="button" onClick={signIn}>
                            Login
                        </button>
                    </div>

                </LContainer>

            </LoginContainer>
        </ThemeProvider>
    )
}

const LContainer = styled.div`
   .wrap {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }
    
    .button {
        margin-top: 30px;
        vertical-align: center;
        width: 150px;
        height: 45px;
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 2.6px;
        font-weight: 500;
        color: black;
        font-weight: 600;
        background-color: #fff;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
    }

    .button:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }

    .LCon_h1{
        text-align: center;
        letter-spacing: 2px;
        font-size: 58px;
        margin-top: 50px;
    }
    .Img_con{
        width: 85%;
        margin-left: auto;
        margin-right: auto
    }
    .LCon_img{
        width: 25%;
        margin-top: 50px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .LCon_para{
        text-align: center;
        margin-top: 40px;
        font-weight: 600;
        letter-spacing: 1.2px;
        font-size: 17px;
    }

    @media screen and (max-width: 960px) {
        .Img_con{
            width: 100%;
        }
        .LCon_img{
            width: 55%;
        }
    }
`;

const LoginContainer = styled.div`
    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
    }
    .Color{
        color: #06D253;
    }
   
`;

