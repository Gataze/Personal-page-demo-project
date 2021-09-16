import styled from "styled-components";
import lunaria from "./lunaria.jpg"


const About2 = () => {
    return ( 
        <AboutWrapper>
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
                    <AboutMe>
                        <h1>o mnie.<p></p></h1>
                        
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos velit architecto dolorum autem atque, totam, debitis voluptatibus, earum asperiores dicta sequi quo pariatur alias molestias excepturi nesciunt. Nam, minima debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt eos, consequuntur quia quas quidem debitis optio sunt assumenda eius quibusdam in pariatur dolore animi quos vitae nemo nihil distinctio!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, nulla laudantium? Cupiditate, maiores ea maxime quidem dolorem quae vero, optio libero numquam tenetur eos praesentium voluptatum sit alias voluptate laborum?</p>
                        
                    </AboutMe>
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
    height: 100vh;
    padding: 40px 20px;
    overflow: hidden;
    background-color: #234C50;
    text-align: left;

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
    display: grid;
    grid-template-columns: repeat(6, minmax(150px, 300px));
    grid-template-rows: repeat(2, minmax(150px, 445px));
    margin: 2px;
    padding: 15px;
    column-gap: 15px;

    & > div {
        display: inline-block;
        position: relative;
        z-index: 1;
        grid-column: 1/3;
        max-width: 90%;
        height: fit-content;
        
        

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

    section:nth-child(2) {
        grid-column: 1/3;
        grid-row: 2/3;
        
    }

    section:nth-child(3) {
        grid-column: 3/6;
    }

    section:nth-child(4) {
        grid-column: 3/6;
        grid-row: 2/3;
    }

    section:nth-child(5) {
        grid-column: 6/7;
        grid-row: 1/3;
    }
`



const AboutBasic = styled.div`
    display: flex;
    flex-flow: column;
    max-width: 80%;

    h2 {
        align-self: flex-start;
        margin: 0;
        color: #EFADAD;
        font-size: 28px;
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
    font-size: 19px;
    

    p {
        display: flex;
        gap: 10px
    }
`


const AboutMe = styled.div`
    max-width: 90%;

    h1 {
        display: flex;
        align-items: center;
        gap: 20px;
        margin: 0;
        color: #EFADAD;
        font-size: 42px;
        white-space: nowrap;

        p {
            width: 100%;
            height: 2px;
            background-color: white;
        }
    }

    p {
        margin: 10px 0;
        color: #aaaaaa;
        font-size: 19px;
        text-align: justify;
    }
`

const AboutQualifications= styled.div`
    display: flex;
    gap: 30px;

    div {
        min-width: 50%;
    }

    h2 {
        margin: 0;
        color: #EFADAD;
        font-size: 28px;
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
    h1 {
        height: 30px;
        margin: 0;
        color: #EFADAD;
        font-size: 32px;
    }

    h2 {
        margin: 30px 0 10px;
        color: #EFADAD;
    }

    p {
        margin: 0;
        color: #aaaaaa;
        font-size: 19px;
        
    }
`
 
export default About2;