import styled from 'styled-components';
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactUs() {
    return (
        <MContainer>
            <h2 className="Contact_h2">
                <span className="Color">C</span>ontact M<span className="Color">e</span>
            </h2>
            <ContactContainer>
                <a href="https://www.instagram.com/prajyot_burbure/" target="_blank">
                    <div class="wrap" >
                        <button class="button">
                                <InstagramIcon className="insta_icon" />
                        </button>
                    </div>
                </a>
                <a href="https://github.com/Prajyot1234" target="_blank">
                    <div class="wrap" >
                        <button class="button">
                                <GitHubIcon  className="git_icon" />
                        </button>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/prajyot-burbure-6b8643190/" target="_blank">
                    <div class="wrap" >
                        <button class="button">
                                <LinkedInIcon className="linked_icon" />
                        </button>
                    </div>
                </a>
            </ContactContainer>
        </MContainer>
    )
}

const MContainer = styled.div`
    .Contact_h2{
        font-size: 35px;
        font-weight: 700;
        margin-top: 60px;
        margin-bottom: 30px;
        text-align: center;
    }
`;

const ContactContainer = styled.div`
 
   .wrap {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }
    
    .button {
        margin-top: 10px;
        vertical-align: center;
        width: 50px;
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

`;
