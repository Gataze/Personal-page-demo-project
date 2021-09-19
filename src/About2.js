import styled from "styled-components";
import lunaria from "./lunaria.jpg"


const About2 = () => {
    return ( 
        <AboutWrapper id='about'>
            <AboutContainer>
                <div>
                    <img src={lunaria} alt="" />
                </div>
                <section>
                    <AboutBasic>
                        <h2>Natalia Brzozowska</h2>
                        <span>Grafik, Architekt, Ilustrator, Prepress Assistant, miłośniczka kwiatów.</span>
                        <Contact>
                            <p><span>Lo.</span>Szczecin, Polska</p>
                            <p><span>Em.</span>nataliaemiliabrzozowska@gmail.com</p>
                            <p><span>IG.</span>@herbie_nah</p>
                            <p><span>Be.</span>Behance.net/herbie_nah</p>
                        </Contact>
                    </AboutBasic>
                </section>
                <section>
                    <AboutText>
                        <h1>o mnie.<p></p></h1>
                        
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos velit architecto dolorum autem atque, totam, debitis voluptatibus, earum asperiores dicta sequi quo pariatur alias molestias excepturi nesciunt. Nam, minima debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt eos, consequuntur quia quas quidem debitis optio sunt assumenda eius quibusdam in pariatur dolore animi quos vitae nemo nihil distinctio!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, nulla laudantium? Cupiditate, maiores ea maxime quidem dolorem quae vero, optio libero numquam tenetur eos praesentium voluptatum sit alias voluptate laborum?</p>
                        
                    </AboutText>
                </section>
                <section>
                    <AboutQualifications>
                        <div>
                            <h2>edukacja</h2>
                            <p> <span>Magister sztuki</span>
                                <span>Akademia Sztuki w Szczecinie</span>
                                <span>2013-2018</span>
                            </p>
                            <p> <span>Inzynier architekt</span>
                                <span>Zachodnipomorski Uniwersytet technologiczny w Szczecinie</span>
                                <span>2015-2020</span>
                            </p>
                        </div>
                        <div>
                            <h2>doświadczenie</h2>
                            <p> <span>Prepress Assistant</span>
                                <span>Scandinavian Print Group</span>
                                <span>2020-2021</span>
                            </p>   
                        </div>  
                    </AboutQualifications>
                </section>
                <section>
                    <AboutSkills>
                        <h1>umiejętności</h1>
                        <div>
                            <h2>cyfrowe</h2>
                            <p>Adobe Photoshop</p>
                            <p>Adobe Illustrator</p>
                            <p>Adobe Indesign</p>
                            <p>Blender</p>
                        </div>
                        <div>
                            <h2>analogowe</h2>
                            <p>Ink Ilustrations</p>
                            <p>Portraits</p>
                            <p>Visual Aesthetics</p>
                            <p>3D modeling</p>
                            <p>Research</p>
                        </div>
                        <div>
                            <h2>osobiste</h2>
                            <p>Creativity</p>
                            <p>Team work</p>
                            <p>Communication</p>
                            <p>Determination</p>
                            <p>Reliability</p>
                        </div>
                    </AboutSkills>
                </section>
            </AboutContainer>
        </AboutWrapper>
     );
}




const AboutWrapper = styled.section`
    display: block;
    position: relative;
    padding: 20px;
    
    overflow: hidden;
    background-color: #234C50;
    text-align: center;
    
    @media (min-width: 576px) {
        padding-top: 60px;
    } 
    @media (min-width: 992px) {
        height: calc(100vh - 120px);
        padding: 120px 20px 0px;
        text-align: left;
    }

    &:before {
        content: 'about.';
        position: absolute;
        right: 80px;
        bottom: 60px;
        opacity: 0.1;
        font-size: 176px;
        font-weight: 800;
    }
`

const AboutContainer = styled.section`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1440px;
    justify-items: center;
    margin: 0px auto;
    padding: 0px;
    
    
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(6, minmax(150px, 300px));
        grid-template-rows: repeat(2, minmax(155px, 400px));
        align-items: flex-start;
        justify-content: start;
        padding: 15px;
        column-gap: 10px;
    }

    @media (min-width: 1200px) {
        grid-template-rows: repeat(2, minmax(155px, 445px));
    }

    & > div {
        display: inline-block;
        position: relative;
        z-index: 1;
        max-width: 70%; 
        height: fit-content;
        margin: 50px 0 25px;
        @media (min-width: 576px) {
            max-width: 470px;
        }
        @media (min-width: 768px) {
            align-self: center;
        }
        @media (min-width: 992px) {
            grid-column: 1/3;
            max-width: 90%;
            margin: 0;
        }
        @media (min-width: 1200px) {
            align-self: start;
            justify-self: start;
            max-width: 80%;
            transform: translate(10px, 10px)
        }
      
        img {
            object-fit: scale-down;
            width: 100%;
        }

        
       &:after {
           content: '';
           position: absolute;
           z-index: -1; 
           top: -10px;
           left: -10px;
           box-sizing: border-box;
           width: 100%;
           height: 99%;
           border: 2px solid #aaaaaa;
       }
    }

    section {
        box-sizing: border-box;
        max-width: 100%;
        margin: 20px auto;
        @media (min-width: 992px) {
            margin: 0;
        }

    }

    section:nth-child(2) {
        min-width: 100%;
        text-align: left;

        @media (min-width: 992px) {
            grid-column: 1/3;
            grid-row: 2/3;
        }
        
        
    }

    section:nth-child(3) {
        @media (min-width: 992px) {
            grid-column: 3/6;
            
        }

    }

    section:nth-child(4) {
        margin: 0px auto 20px 0;
        @media (min-width: 992px) {
            grid-column: 3/6;
            grid-row: 2/3;

        }

    }

    section:nth-child(5) {
        
        margin: 20px auto 20px 0;
        text-align: left;
        @media (min-width: 992px) {
            grid-column: 6/7;
            grid-row: 1/3;
            margin: 0;
    }
            
}
        
`

const AboutBasic = styled.div`
    display: flex;
    flex-flow: column;
    @media (min-width: 992px) {
        max-width: 80%;
    }

    h2 {
        align-self: flex-start;
        margin: 0;
        color: #EFADAD;
        font-size: 24px;
        white-space: nowrap;
        @media (min-width: 1200px) {
            font-size: 28px;
        }
    }

    & > span {
        color: white;
        font-weight: 600;
    }
`

const Contact = styled.div`
    display: flex;
    flex-flow: column;
    align-items: left;
    margin-top: 25px;
    color: #aaaaaa;
    font-size: 14px;
    @media (min-width: 992px) {
        font-size: 16px;
    } 
    @media (min-width: 1200px) {
        font-size: 19px;
    } 
    

    p {
        display: flex;
        gap: 10px;
        margin: 0;
        @media (min-width: 1200px) {
            margin: 5px;
        }
    }
`


const AboutText = styled.div`
    max-width: 100%;
    @media (min-width: 992px) {
        margin-right: 20px;
    }
    @media (min-width: 1200px) {
        margin-right: 70px;
    }
    
    p {
        margin: 10px 0;
        color: #aaaaaa;
        font-size: 14px;
        text-align: justify;
        @media (min-width: 992px) {
            font-size: 16px;
        }
        @media (min-width: 1200px) {
            font-size: 19px;
        }
    }

    h1 {
        display: flex;
        align-items: center;
        gap: 20px;
        margin: 0;
        color: #EFADAD;
        font-size: 24px;
        white-space: nowrap;
        @media (min-width: 992px) {
            font-size: 36px;
        }
        @media (min-width: 1200px) {
            font-size: 42px;
        }

        p {
            width: 100%;
            height: 2px;
            background-color: white;
        }
    }

`

const AboutQualifications= styled.div`
    display: flex;
    gap: 0px;
    text-align: left;
    @media (min-width: 992px) {
        gap: 20px;
        text-align: left;
        
    }

    div {
        min-width: 50%;
        
    }

    h2 {
        margin: 0;
        color: #EFADAD;
        font-size: 22px;
        @media (min-width: 992px) {
            font-size: 20px;
        }
        @media (min-width: 1200px) {
            font-size: 28px;
        }
    }

    p {
        display: flex;
        flex-flow: column;
        margin: 20px 0;
        color: #aaaaaa;
        
        
        span {

            &:nth-child(1) {
                color: white;
                font-weight: 600;
            }
        }
        
    }
`

const AboutSkills = styled.div`
    margin-bottom: 40px;

    div {
        display: inline-flex;
        flex-flow: column;
        margin: 10px 40px 0px 0;
    }
    
    h1 {
        height: 30px;
        margin: 0 0 0 auto;
        color: #EFADAD;
        font-size: 24px;
        @media (min-width: 1200px) {
            font-size: 28px;
        }
    }

    h2 {
        margin: 30px 0 10px;
        color: white;
        font-size: 16px;
    }

    p {
        margin: 0;
        color: #aaaaaa;
        font-size: 16px;
        @media (min-width: 1200px) {
            font-size: 19px;
        }
        
    }
`
 
export default About2;