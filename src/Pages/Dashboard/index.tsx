import React from "react";
import perfil from "../../assets/perfil.jpg";
import barber from "../../assets/gobarber.png";
import whatsapp from "../../assets/whatsapp.png";
import linkdin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import brafe from "../../assets/brafe.png";
import twitter from "../../assets/twiterr.png";
import ecoleta from "../../assets/ecoleta.png";
import grid from "../../assets/grid.png";

import {
  Header,
  ImgPerfil,
  AboutMe,
  Contact,
  MyWorks,
  ProjectItem,
  Tecnlogies
} from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <ImgPerfil>
          <img src={perfil} alt="" />
        </ImgPerfil>
        <div>
          <h2>MY NAME IS</h2>
          <h1>Flávio Danilo Silva da Costa</h1>
          <h3>I'm a web developer</h3>
        </div>
      </Header>
      <AboutMe>
        <h3>About me</h3>
        <div>
          <p>
            Graduated in information systems and full stack developer with three
            years of experience in the IT area. As a freelancer I develop
            projects for web sites and mobile applications, cloud migrations.
            Currently I also work as a developer at a large bank in Brazil,
            using Java, Spring boot, AWS, Kafka, ReactJs and React Native
            technologies.
          </p>
          <p>
            I also have experience in the data area, I have worked with Python,
            SAS, Alteryx and Power BI.
          </p>
        </div>
        <h3>Contact me</h3>
        <Contact>
          <img src={whatsapp} id="whatsapp" />
          <a href="https://www.linkedin.com/in/fl%C3%A1vio-silva-da-costa-35535710b/">
            <img src={linkdin} id="linkdin" />
          </a>
          <a href="https://github.com/flavio022">
            <img src={github} alt="github" />
          </a>
        </Contact>
      </AboutMe>
      <MyWorks>
        <h1>MY WORKS</h1>
        <ProjectItem>
          <div>
            <a href="https://github.com/flavio022/gobarber">
              <img src={barber} alt="" />
            </a>
            <h3>GoBarber</h3>
          </div>
          <div>
            <img src={brafe} alt="" />
            <h3>Brafe</h3>
          </div>
          <div>
            <img src={twitter} alt="" />
            <h3>twitter clone</h3>
          </div>
          <div>
            <img src={ecoleta} alt="" />
            <h3>Ecoleta</h3>
          </div>

          <div>
            <img src={grid} alt="" />
            <h3>Wolf grid</h3>
          </div>
        </ProjectItem>
      </MyWorks>
    </>
  );
};

export default Dashboard;
