import styled from "styled-components";
import lunaria from "./lunaria.jpg"

const About = () => {

    return ( 
        <AboutWrapper>
            <AboutContainer >
            <AboutColumn>

                <img src={lunaria} alt="" />
                <p>Natalia Brzozowska</p>
                <span>Grafik, Architekt, Ilustrator, Prepress Assistant, miłośniczka kwiatów.</span>

                <Contact>
                    <p><span>Lo.</span>Szczecin, Polska</p>
                    <p><span>Em.</span>nataliaemiliabrzozowska@gmail.com</p>
                    <p><span>IG.</span>@herbie_nah</p>
                    <p><span>Be.</span>Behance.net/herbie_nah</p>
                </Contact>

            </AboutColumn>

            <AboutColumn>
                <h1>about.<p></p></h1>
                <article>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos velit architecto dolorum autem atque, totam, debitis voluptatibus, earum asperiores dicta sequi quo pariatur alias molestias excepturi nesciunt. Nam, minima debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt eos, consequuntur quia quas quidem debitis optio sunt assumenda eius quibusdam in pariatur dolore animi quos vitae nemo nihil distinctio!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, nulla laudantium? Cupiditate, maiores ea maxime quidem dolorem quae vero, optio libero numquam tenetur eos praesentium voluptatum sit alias voluptate laborum?</p>
                </article>

                <AboutQualifications>
                    <div>
                        <h2>education</h2>
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
                        <h2>experiance</h2>
                        <p> <span>Prepress Assistant</span>
                            <span>Scandinavian Print Group</span>
                            <span>2020-2021</span>
                        </p>   
                    </div>  
                </AboutQualifications>

            </AboutColumn>

            <AboutColumn>

                <AboutSkills>
                    <h1>Skills</h1>
                    <div>
                        <h2>digital</h2>
                        <p>Adobe Photoshop</p>
                        <p>Adobe Illustrator</p>
                        <p>Adobe Indesign</p>
                        <p>Blender</p>
                    </div>
                    <div>
                        <h2>analog</h2>
                        <p>Ink Ilustrations</p>
                        <p>Portraits</p>
                        <p>Visual Aesthetics</p>
                        <p>3D modeling</p>
                        <p>Research</p>
                    </div>
                    <div>
                        <h2>personal</h2>
                        <p>Creativity</p>
                        <p>Team work</p>
                        <p>Communication</p>
                        <p>Determination</p>
                        <p>Reliability</p>
                    </div>
                </AboutSkills>

            </AboutColumn>
            </AboutContainer>
        </AboutWrapper>
     );
}


const AboutWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 100vh;
    padding: 20px 0 0;
    background-color: #98787D;
`

const AboutContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 80px 60px;
    background-color: #234C50;
    color: #cccccc;
    gap: 70px;  
`


const AboutColumn = styled.div`
    display: flex;
    flex-flow: column;
    

    &:nth-child(1) {
        min-width: 25%;
        text-align: left;
    }

    &:nth-child(2) {
        min-width: 50%;
    }

    &:nth-child(3) {
        min-width: 19%;
    }
    
    img {
        width: 100%;
    }

    & > p {
        margin: 25px 0 5px;
        color: #EFADAD;
        font-size: 26px;
        font-weight: 600;
        
    }

    /* kolumna druga:  */

    h1 {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 50px;
        margin-top: 0;
        color: #EFADAD;
        font-size: 40px;
        
        

        p {
            width: 100%;
            height: 2px;
            background-color: white;
        }
    }

    article {
        font-size: 19px;
        text-align: justify;
    }

`



const Contact = styled.div`
    display: flex;
    flex-flow: column;
    align-items: left;
    margin: 25px auto;
    font-size: 19px;

    p {
        display: flex;
        gap: 10px
    }
`

const AboutQualifications= styled.div`
    display: flex;
    gap: 30px;
    text-align: left;

    div {
        min-width: 50%;
    }

    h2 {
        color: #EFADAD;
        font-size: 28px;
    }

    p {
        display: flex;
        flex-flow: column;
        max-width: 90%;
        margin: 25px 0;
        gap: 0px;
        color: #aaaaaa;
        
        span {
            text-align: left;

            &:nth-child(1) {
                color: white;
                font-weight: 600;
            }
        }
        
    }
`

const AboutSkills = styled.div`
    text-align: left;

    h1 {
        height: 30px;
        margin-bottom: 35px;
        font-size: 32px;
        
    }

    h2 {
        margin-bottom: 15px;
        color: #EFADAD;
    }

    p {
        margin: 0;
        font-size: 19px;
        
    }
`

 
export default About;

