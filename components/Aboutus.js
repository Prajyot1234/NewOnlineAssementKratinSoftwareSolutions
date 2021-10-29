import styled from 'styled-components'
import React from 'react'

export default function AboutUs() {
    return (
        <AboutContainer>
            <h2 className="About_h2">
                <span className="Color">A</span>bout M<span className="Color">e</span>
            </h2>
            <AContainer>
                <div className="ACon1">
                    <img src="/aboutus.svg" alt="aboutus" />
                </div>
                <div className="ACon2">
                    <p className="con2_para">
                        I'm <a href="https://www.linkedin.com/in/prajyot-burbure-6b8643190/"><span className="Color">Prajyot</span></a> final year Student of SSGMCE Sheagon,
                        I'm doing this project for Online Assessment round of <span className="Color">kratin software solutions.</span> 
                    </p>
                </div>
            </AContainer>
        </AboutContainer>
    )
}

const AContainer = styled.div`
    display: flex;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

const AboutContainer = styled.div`
     .About_h2{
        font-size: 35px;
        font-weight: 700;
        margin-top: 60px;
        margin-bottom: 30px;
        text-align: center;
    }
    .ACon1{
        flex: 0.5;
        margin-top: 20px;
        margin-bottom: 40px;
        display: flex;
        justify-content: flex-end;
        margin-left: auto!important;
        margin-right: auto!important;
    }
    .ACon2{
        flex: 0.5;
    }
    .ACon1 > img{
        width: 40%;
    }
    .con2_para{
        margin-top: 40px;
        width: 40%;
        margin-left: 40px;
    }
    @media screen and (max-width: 960px) {
        .ACon1{
            justify-content: center;
        }
        .ACon1 > img{
            width: 50%;
        }
        .con2_para{
            margin-top: 0px;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }
    }
`;

