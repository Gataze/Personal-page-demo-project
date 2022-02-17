import { useState } from "react";
import styled from "styled-components";

const MyWork = () => {
  const [ImgGroup, setImgGroup] = useState("ilustracje");
  const [title, setTitle] = useState("");
  const images = [
    {
      id: 1,
      url: "images/iris.jpg",
      theme: "Kwiaty",
      title: "irysy",
      group: "ilustracje",
    },
    {
      id: 2,
      url: "images/snieguliczka.jpg",
      theme: "Przyroda niestandardowa",
      title: "śnieguliczka",
      group: "ilustracje",
    },
    {
      id: 3,
      url: "images/delphinium-icon.jpg",
      theme: "Łąka",
      title: "delphinium",
      group: "ilustracje",
    },
    {
      id: 4,
      url: "images/kusama.jpg",
      theme: "Japońskie",
      title: "kusama",
      group: "ludzie",
    },
    {
      id: 5,
      url: "images/dianad.jpg",
      theme: "Mitologia",
      title: "dianad",
      group: "ludzie",
    },
    {
      id: 6,
      url: "images/lunaria.jpg",
      theme: "Rosliny",
      title: "lunaria",
      group: "ludzie",
    },
    {
      id: 7,
      url: "images/sedesowiec.png",
      theme: "Architektura",
      title: "sedesowiec",
      group: "3d",
    },
    {
      id: 8,
      url: "images/renderek.png",
      theme: "Rendery",
      title: "renderek",
      group: "3d",
    },
  ];

  const handleClick = (e) => {
    setImgGroup(e.target.title);
  };

  const handleHidden = () => {
    setTitle("");
  };

  return (
    <AppWrapper id="projects">
      <Header>projekty</Header>
      <AppGalleryNav>
        <p title="ilustracje" onClick={handleClick}>
          Ilustracje
        </p>
        <p title="ludzie" onClick={handleClick}>
          Ludzie
        </p>
        <p title="3d" onClick={handleClick}>
          Projekty 3D
        </p>
      </AppGalleryNav>
      <AppGallery>
        {images.map((image) =>
          image.group === ImgGroup ? (
            <AppImage key={image.id}>
              <img
                src={image.url}
                alt=""
                title={image.url}
                onClick={(e) => setTitle(e.target.title)}
              />
              <p>{image.theme}</p>
              <h3>{image.title}</h3>
            </AppImage>
          ) : null
        )}
      </AppGallery>
      <AppFull title={title} onClick={handleHidden}>
        <AppFullImg src={title} alt="lpl" />
      </AppFull>
    </AppWrapper>
  );
};

const AppWrapper = styled.section`
  display: block;
  position: relative;
  padding: 50px 0;
  overflow: hidden;
  background-color: #98787d;
  color: black;
  font-size: 96px;
  font-weight: 800;
  @media (min-width: 768px) {
    height: calc(100vh - 50px);
    padding-bottom: 0px;
  }

  &:before,
  &:after {
    position: absolute;
    width: 600px;
    height: 400px;
    opacity: 0.1;
    text-align: left;
    @media (min-width: 768px) {
      font-size: 126px;
    }
    @media (min-width: 992px) {
      font-size: 176px;
    }
  }

  &:before {
    content: "ILLUSTRATIONS";
    z-index: 0;
    top: -5%;
    right: 5%;
    @media (min-width: 768px) {
      right: 20%;
    }
    @media (min-width: 1200px) {
      top: 0%;
      right: -5%;
    }
  }

  &:after {
    content: "PROJECTS";
    bottom: -140px;
    left: 10px;
    @media (min-width: 768px) {
      bottom: -26%;
    }
    @media (min-width: 992px) {
      bottom: -210px;
      left: -70px;
    }
  }
`;

const Header = styled.h1`
  color: #dddddd;
  font-size: 46px;
`;

const AppGalleryNav = styled.nav`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: center;
  margin: 0 0 32px;
  color: #dddddd;
  font-size: 18px;
  gap: 32px;
  @media (min-width: 768px) {
    font-size: 24px;
  }

  p {
    cursor: pointer;
  }
`;

const AppGallery = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 85%;
  justify-items: center;
  gap: 20px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    padding: 20px;
  }
`;

const AppImage = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 100%;
  padding: 10px;
  color: #dddddd;
  @media (min-width: 576px) {
    max-width: 50%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 70%;
  }
  @media (min-width: 1400px) {
    max-width: 60%;
  }

  p {
    margin: 20px 0 0;
    color: #dddddd;
    font-size: 16px;
  }

  h3 {
    margin: 10px;
    font-size: 24px;
    text-transform: uppercase;
  }

  img {
    max-width: 100%;
    box-shadow: 1px 1px 4px #555555;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const AppFull = styled.div`
  display: ${({ title }) => (title ? "flex" : "none")};
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const AppFullImg = styled.img`
  max-width: 50%;
  object-fit: contain;
`;

export default MyWork;
