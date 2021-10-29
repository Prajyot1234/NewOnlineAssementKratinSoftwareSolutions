import React from 'react'
import styled from 'styled-components'
import { Circle } from "better-react-spinkit";


const Container = styled.div`
    *{
        font-family: 'Poppins', sans-serif;
        color: white!important;
    }
    padding: 0;
    margin: 0;
    height: 97vh;
    width: 100%;
    display: grid;
    place-items: center;
`;

const Loader = styled.div`
    .Color{
        color: #06D253!important;
    }
    h2{
      font-family: 'Poppins', sans-serif;
      font-size : 3rem;       
      color : Black;
      letter-spacing: .1em;
    }
    h2:hover{
      cursor: pointer;
    }
`;

const Loader_conatiner = styled.div`
    display: grid;
    place-items: center;
`;

export default  function Loading() {

    return (
        <Container>
            <Loader>
                <h2><span className="Color">C</span>urato<span className="Color">r</span></h2>
                <Loader_conatiner>
                    <Circle color="#06D253" size={60} className="spinner"/>
                </Loader_conatiner>
            </Loader>
        </Container>
    )
}

