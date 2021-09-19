import { useState } from "react";
import styled from "styled-components";


const MyWork = () => {


    const [ImgGroup, setImgGroup] = useState('ilustracje');


    const images = [
        {
            id: 1,
            url: '/iris.jpg',
            theme: 'Kwiaty',
            title: 'irysy',
            group: 'ilustracje'
        },
        {
            id: 2,
            url: '/snieguliczka.jpg',
            theme: 'Przyroda niestandardowa',
            title: 'śnieguliczka',
            group: 'ilustracje'
        },
        {
            id: 3,
            url: '/delphinium.jpg',
            theme: 'Łąka',
            title: 'delphinium',
            group: 'ilustracje'
        },
        {
            id: 4,
            url: '/kusama.jpg',
            theme: 'Japońskie',
            title: 'kusama',
            group: 'ludzie'
        },
        {
            id: 5,
            url: '/dianad.jpg',
            theme: 'Mitologia',
            title: 'dianad',
            group: 'ludzie'
        },
        {
            id: 6,
            url: '/lunaria.jpg',
            theme: 'Rosliny',
            title: 'lunaria',
            group: 'ludzie'
        },
        {
            id: 7,
            url: 'sedesowiec.png',
            theme: 'Architektura',
            title: 'sedesowiec',
            group: '3d'
        },
        {
            id: 8,
            url: '/renderek.png',
            theme: 'Rendery',
            title: 'renderek',
            group: '3d'
        },
       

    ]


    const handleClick = (e) => {
        
        setImgGroup(e.target.title)
    }


    return ( 
        <AppWrapper id='projects'>
            <Header>projekty</Header>
            <AppGalleryNav>
                <p title='ilustracje' onClick={handleClick}>Ilustracje</p>
                <p title='ludzie'  onClick={handleClick}>Ludzie</p>
                <p title='3d' onClick={handleClick}>Projekty</p>
            </AppGalleryNav>
            <AppGallery>
                {images.map(image => (
                    (image.group === ImgGroup) ? 
                        <AppImage key={image.id}>
                            <img src={image.url} alt="" />
                            <p>{image.theme}</p>
                            <h3>{image.title}</h3>
                        </AppImage>

                        :

                        null

                
                ))}    
            </AppGallery>
        </AppWrapper>
     );
}

const AppWrapper = styled.section`
    display: flex;
    position: relative;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
    overflow: hidden; 
    background-color: #98787D;
    @media (min-width: 768px) {
        height: 100vh;
        padding-bottom: 0px
    }

    &:before, &:after {
        position: absolute;
        width: 600px;
        height: 400px;
        opacity: 0.1;
        color: black;
        font-size: 96px;
        font-weight: 800;
        text-align: left;
        @media (min-width: 768px) {
            font-size: 126px;
        }
        @media (min-width: 1200px) {
            font-size: 176px;
        }
}

&:before {
  content: 'ILLUSTRATIONS';
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
  content: 'PROJECTS';
  bottom: -140px;
  left: 10px;
  @media (min-width: 768px) {
    bottom: -7%;
  }
  @media (min-width: 1200px) {
    bottom: -220px;
    left: -70px;
  }
}
`

const Header = styled.h1`
    color: #dddddd;
    font-size: 46px;
`

const AppGalleryNav = styled.nav`
    display: flex;
    position: relative;
    z-index: 1;
    margin-bottom: 32px;
    color: #dddddd;
    font-size: 18px;
    gap: 32px;
    @media (min-width: 768px) {
        font-size: 24px;
    }
    p {
        cursor: pointer;
    }
`

const AppGallery = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 80%;
    justify-items: center;
    gap: 20px;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px;
    }

`


const AppImage = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    max-width: 70%;
    padding: 10px;
    color: #dddddd; 
    @media (min-width: 576px) {
        max-width: 50%;
    }
    @media (min-width: 768px) {
        max-width: 70%;
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
    }
`
 
export default MyWork;