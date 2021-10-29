import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default function Dasboard() {
    return (
        <DashBoardContainer>
            <h2 className="dash_h2">
                <span className="Color">D</span>ashBoar<span className="Color">d</span>
            </h2>

            <Container1>

                <div className="dash_Container">
                    <h4 className="dash_h4"><span className="Color">N</span>earBy Hospital<span className="Color">s</span></h4>
                    <img src="/hospital.svg" alt="hospital" className="dash_img"/>
                    <p className="dash_para">In this section we will able to see the list of all the nearby hospitals.</p>

                    <div class="wrap" >
                        <Link href='/nearbyhos'>
                            <button class="button"><span>Checkout</span></button>
                        </Link>
                    </div>
                </div>
            
                <div className="dash_Container">
                    <h4 className="dash_h4"><span className="Color">A</span>ppointment<span className="Color">s</span></h4>
                    <img src="/Appointment.svg" alt="Appointment" className="dash_img"/>
                    <p className="dash_para">In this section we will able to see all the upcoming appointments.</p>
                    
                    <div class="wrap" >
                        <Link href='/appointment'>
                                <button class="button"><span>Checkout</span></button>
                        </Link>
                    </div>
                   
                </div>

                <div className="dash_Container">
                    <h4 className="dash_h4"><span className="Color">E</span>mergency Aler<span className="Color">t</span></h4>
                    <img src="/alert.svg" alt="emergency" className="dash_img"/>
                    <p className="dash_para">You will able to inform all the emergency contact about emergency.</p>

                    <div class="wrap" >
                        <Link href='/alert'>
                                <button class="button"><span>Alert</span></button>
                        </Link>
                    </div>
                </div>

            </Container1>        
        </DashBoardContainer>
    )
}

const DashBoardContainer = styled.div`
    .dash_h2{
        font-size: 35px;
        font-weight: 700;
        margin-top: 80px;
        margin-bottom: 30px;
        text-align: center;
    }
`;

const Container1 = styled.div`
   display: flex;
   margin-left: auto;
   margin-right: auto;
   width: 100%;
   
   .dash_Container{
       text-align: center;
       width: 90%;
   }
   .dash_h4{
       font-size: 23px;
   }
   .dash_para{
       font-size: 14px;
       font-weight: 600;
        margin-left: 60px;
        margin-right: 60px;
   }
   .dash_img{
       width: 40%;
       height: 130px;
       margin-top: 20px;
       margin-bottom: 10px;
   }

   .wrap {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }
    
    .button {
        margin-top: 10px;
        vertical-align: center;
        width: 140px;
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

    @media screen and (max-width: 960px) {
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        .dash_Container{
            width: 100%!important;
        }
        .wrap {
            margin-bottom: 20px;
        }
        .dash_img{
            width: 80%;
            height: 200px;
        }
    }

`;