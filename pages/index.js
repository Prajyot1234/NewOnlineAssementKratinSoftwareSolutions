import Head from "next/head"
import { useState,useEffect } from 'react'
import styled,{ ThemeProvider } from 'styled-components'  
import { useDataLayerValue } from "../config/DataLayer" 
import { darkmode, lightmode, GlobalStyles } from '../config/theme'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import { Avatar } from '@mui/material';
import DashBoard from '../components/Dasboard'
import Aboutus from '../components/Aboutus'
import ContactUS from '../components/ContactUs'
import { useSession, signOut } from 'next-auth/react'
import Loading from '../components/Loading'
import Login from './auth/login'

export default function Home() {  

  //for getting user or loading status.
  const { data: session,status } = useSession()

  // getting the current theme information.
  const [ { theme }, dispatch ] = useDataLayerValue();

  //setting the theme to another state using toggle button
  const [ checked, setchecked] = useState();

  //usestate for changing theme
  useEffect(() => {
    if(theme === "dark"){
      setchecked(true)
    }else{
      setchecked(false)
    }
  }, [checked,theme]) 

  //for changing data inside the datalayer.
  const themeToggle = () => {
    theme === "dark" ?  dispatch({ type : "SET_THEME", theme : "light"}) 
    : dispatch({ type : "SET_THEME", theme : "dark" }) ;
  }

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return( 
    <ThemeProvider theme={ theme === "light" ? lightmode : darkmode }>
        <GlobalStyles />
        
        <Head>
          <title>Curator</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

            {/* {
              status !== "loading" ? (
                <div>
                {
                  !session ? 
                  (<Login />) 
                  : 
                  ( */}
                    <MainContainer> 
                      <Container>
                          <NavContainer>
                              <Navbar_left>
                                <Link href='/'>
                                  <h2><span className="Color">C</span>urato<span className="Color">r</span></h2>
                                </Link>
                              </Navbar_left>
                              <Navbar_right>
                                
                                <ul className={click ? "nav-menu active" : "nav-menu"}>
                                  <a href="#dashboard">
                                    <li className="nav-item nav-links" activeClassName="active" onClick={handleClick}>
                                      <span className="Color">D</span>
                                        ashBoar
                                      <span className="Color">d</span>
                                    </li>
                                  </a>
                                  <a href="#aboutus">
                                    <li className="nav-item nav-links" activeClassName="active" onClick={handleClick}>
                                      <span className="Color">A</span>
                                        bout M
                                      <span className="Color">e</span>
                                    </li>
                                  </a>
                                  <a href="#contactus">
                                    <li className="nav-item nav-links" activeClassName="active" onClick={handleClick}>
                                      <span className="Color">C</span>
                                        ontact M
                                      <span className="Color">e</span>
                                    </li>
                                  </a>
                                  <li className="center">
                                    <Avatar className="Avatar" 
                                    // src={session.user.image} onClick={signOut} 
                                    />
                                  </li>
                                  </ul>
                                  
                                  <div className="nav-icon" onClick={handleClick}>
                                    <MenuIcon className={click ? "fas fa-times" : "fas fa-bars"} />
                                  </div>

                                  </Navbar_right>
                          </NavContainer>
                      </Container>     

                      <SubMainContainer>
                          <Thememode_container>
                            <label class="switch"> 
                              <input type="checkbox" onClick={themeToggle} checked={checked} />
                              <span class="slider round"></span>
                            </label>
                          </Thememode_container>

                          <LandingContainer>
                              <p className="main_heading">
                                <span className="Color">C</span>urato<span className="Color">r</span> Which Will Take<br /> Care Of Our Old <span className="Color">O</span>ne'<span className="Color">s</span>.
                              </p>
                              <p className="main_para">
                                This website will help the old people with finding nearby <br />
                                Hospitals and taking appointment and in emergency <br />
                                it will notify nearby hospital for abulance and etc.
                              </p>
                              <div className="img_container">
                                <img src="/medical.svg" alt="medical" className="landingContainer_img" />
                              </div>
                          </LandingContainer>
                          
                          <span id="dashboard"></span>
                          <DashBoard />

                          <span id="aboutus"></span>
                          <Aboutus />

                          <span id="contactus"></span>
                          <ContactUS />
                          
                          <FooterContainer>
                            <hr className="horizontal_rule" />
                            <p className="footer_para"> Design & Created By<br /><span className="Color">Prajyot Burbure</span></p>
                          </FooterContainer>
                      </SubMainContainer>

                  </MainContainer>  
                  {/* )
                }
                </div>
              ) : (<Loading />)
            } */}
            
    </ThemeProvider>
  )
}

const FooterContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    .horizontal_rule{
       margin-top: 40px;
       margin-bottom: 40px;
       border: 0px;
       border-bottom: 1px solid #06d253;
       border-style: dotted;
    }
    .footer_para{
      text-align: center;
      font-size: 18px;
      font-weight: 600;
    margin-bottom: 20px;
    }
`;

const SubMainContainer = styled.div`
    margin-left: auto!important;
    margin-right: auto!important;
    margin-top: 20px;
    width: 80%;
    max-width: 1240px;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

const LandingContainer = styled.div`
    .main_heading{
      margin-top: 40px;
      font-family: 'DM Sans',sans-serif;
      font-size: 50px;
      line-height: 1.4;
      text-align: center;
      font-weight: 700;
      font-weight: bolder;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }
    .main_para{
      text-align: center;
      line-height: 2;
      letter-spacing: 1.1px;
      font-weight: 600;
    }
    .landingContainer_img{
        display: block;
        width: 350px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 30px;
    }
  
  @media screen and (max-width: 960px) {
    .main_heading{
      font-size: 36px;
    }
    .main_para{
      font-size: 13px;
    }
  }

`;

  const Navbar_left = styled.div`
    h2{
      font-size : 1.8rem;    
      margin-left: 20px; 
      letter-spacing: .1em;
    }
    h2:hover{
      cursor: pointer;
    }
  `;

  
const Navbar_right = styled.div`
  display: flex;
  align-items: center!important;
  .center{
    margin-left: auto;
    margin-right: auto;
  }
  .Avatar{
    margin: 5px!important;
    transition: all .2s ease-in-out;

  }  
  .Avatar:hover{
    transform: scale(0.8);
    cursor: pointer;
  }
  div{
    display : flex;
    margin-right : 0px;
  }
  div > p {
    margin-left : 12px;
    letter-spacing: .1em;
    transition: text-shadow .3s;
  }
  p:hover{
    /* text-shadow: 0 0 1.2px #06D253, 0 0 1.2px #06D253; */
    cursor: pointer;
  } 
  .navbar {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;
  }

  .nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  max-width: 1500px;
  }

  .nav-menu {
  display: flex;
  list-style: none;
  text-align: center;
  margin-right: 2rem;
  }

  .nav-links {
  font-weight: 600;
  text-decoration: none!important;
  padding: 0.2rem 1rem;
  padding-bottom: 0rem;
  height: 100%;
  border-bottom: 3px solid transparent;
  }
  .fa-code {
  margin-left: 1rem;
  }

  .nav-item {
  line-height: 40px;
  margin-right: 1rem;
  }

  .nav-item:after {
  content: "";
  display: block;
  height: 3px;
  width: 0;
  background: transparent;
  transition: width 0.7s ease, background-color 0.5s ease;
  }

  .nav-item:hover:after {
  width: 100%;
  background: #06D253;
  }

  .nav-item .active {
  color: white;
  border: 1px solid white;
  }

  .nav-icon {
  display: none;
  }

  @media screen and (max-width: 960px) {
    *{
      padding: 0;
      margin: 0;
    }

    .nav-links{
        padding: 0;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 1px solid #fff;
      position: absolute;
      top: 70px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: black;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-item .active {
      border: none;
    }

    .nav-links {
      /* padding: 0.7rem; */
      width: 100%;
      display: table;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-90%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  }
`;

const NavContainer = styled.div`
    h1{
      font-weight: 900;
      text-align: center;
      font-size: 60px;
      letter-spacing: 2px;
    }
    display : flex;
    justify-content : space-between;
    align-items: center;
    margin-top: 100px;
`;

const MainContainer = styled.div`
    *{
      font-family: 'Poppins', sans-serif;
      margin: 0px;
      padding: 0px;
      text-decoration: none;
      outline: none;
    }
    .Color{
      color: #06D253;
    }
    a { color: inherit; } 
`;

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 80%;
    max-width: 1240px;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;


const Thememode_container = styled.div`
    display : grid;
    place-items: center;
    margin-top: 10px;

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #06d253;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #06d253;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
`;