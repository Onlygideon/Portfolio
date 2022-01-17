import classes from './Projects.module.css'
import PageHeader from '../PageHeader/PageHeader';
import elixirThumbnail from './../images/elixir.jpg';
import phoenixThumbnail from './../images/phoeniix.jpg';
import CryptoThumbnail from './../images/crypto.jpg';
import swiftlyThumbnail from './../images/swiftly.jpg';
import fluxyThumbnail from './../images/fluxy.jpg'
import syncThumbnail from './../images/a-sync.jpg'
import sigmaThumbnail from './../images/sigma.jpg'
import grimThumbnail from './../images/griim.PNG'
import weathergenieThumbnail from './../images/weathergenie.jpg'
import portfolioThumbnail from './../images/portfolio.jpg'
import lyricslabThumbnail from './../images/lyricslab.jpg'
import edmvoltThumbnail from './../images/edmvolt.jpg'



const myProjects = (thumbnail, description, title, link) => {
    return(
        <div className={classes.projectContainer}>

            <div className={classes.thumbnail}>
                <img src={thumbnail} alt="projects"></img>
            </div>

            <div className={classes.text}>
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={link} target="_blank">View</a>
            </div>
        </div>
    );
}


const phoenixDescription = `This is a well-designed and responsive website for a tech startup, built using ReactJs and styled-components.`;
const swiftlyDescription = `Responsive and well designed food delivery platform UI, built using html, css and javascript.`;
const cryptoDescription = `This is a Cryptocurrency Platform with several features, built using ReactJs, Css, Redux, Redux-toolkit, Ant design, Coinranking Api, Bing news search Api.`;
const elixirDescription = `This is a revenue dashboard UI for a freelancing platform, built using ReactJs and styled-components.`;
const grimDescription = `This is a personalized web search engine, built using ReactJs, Tailwind Css, Context API and Google Api.`;
const syncDescription = `This is well designed and responsive admin dashboard UI for music artistes and A&R teams, built using ReactJs, Scss and Recharts`;
const sigmaDescription =   `Responsive landing page for an Online fashion clothing store, built using html, css and Js.`;
const weatherGenieDescription = `See the weather at any location with this web weather app.`;
const fluxyDescription = `Responsive and well designed movie streaming platform UI.`
const lyricsLabDescription = `Search for any song lyrics with this web music lyrics finder app.`;
const edmVoltDescription = `Electronic Dance Music record label website with the goal of helping EDM artistes.`;
const portfolioDescription = `This is my portfolio website, built using ReactJs, Framer motion, and EmailJs.`;



const elixirTitle =   `Elixir-Dashboard`;
const PhoenixTitle = `Phoenix`;
const cryptoTitle = `CryptoCrypt`
const swiftlyTitle =   `Swiftly`;
const grimTitle = `Grim`;
const syncTitle = `Sync`
const sigmaTitle = `Sigma Fashion`;
const fluxyTitle = `Fluxy`
const weatherGenieTitle = `WeatherGenie`;
const lyricsLabTitle = `LyricsLab`;
const edmVoltTitle = `EdmVolt`;
const portfolioTitle = `Portfolio`;



const grimLink = "https://griim.netlify.app";
const syncLink = "https://a-sync.netlify.app";
const sigmaLink = "https://sigmastore.netlify.app";
const weatherGenieLink = "https://onlygideon.github.io/weathergenie/";
const fluxyLink = "https://onlygideon.github.io/fluxy/";
const lyricsLabLink = "https://onlygideon.github.io/lyricslab/";
const edmVoltLink = "https://onlygideon.github.io/edmvolt/";
const portLink = "https://onlygideon.github.io/Portfolio/";
const phoenixLink = "https://phoeniix.netlify.app";
const cryptoLink = "https://cryptocrypt.netlify.app";
const swiftlyLink = "https://swiftly.netlify.app";
const elixirLink = "https://elixir-dashboard.netlify.app/";





const Frontend = () => {
    
    return ( 
        <div className={classes.projects} id="projects">
            <div className={classes.title}>
            <PageHeader title={'FrontEnd Projects'}/>
            </div>

            <div className={classes.ProjectContent}>

                <div className={classes.paragraph}> 
                    <p>
                        Below are some of my frontend projects.
                    </p>
                </div>

                <div className={classes.project}>

                    {myProjects(elixirThumbnail, elixirDescription, elixirTitle, elixirLink)}

                    {myProjects(phoenixThumbnail, phoenixDescription, PhoenixTitle, phoenixLink)}

                    {myProjects(swiftlyThumbnail, swiftlyDescription, swiftlyTitle, swiftlyLink)}

                    {myProjects(CryptoThumbnail, cryptoDescription, cryptoTitle, cryptoLink)}

                    {myProjects(grimThumbnail, grimDescription, grimTitle, grimLink)}

                    {myProjects(syncThumbnail, syncDescription, syncTitle, syncLink)}

                    {myProjects(portfolioThumbnail, portfolioDescription, portfolioTitle, portLink)}

                    {myProjects(sigmaThumbnail, sigmaDescription, sigmaTitle, sigmaLink)}

                    {myProjects(fluxyThumbnail, fluxyDescription, fluxyTitle, fluxyLink)}
               
                    {myProjects(lyricslabThumbnail, lyricsLabDescription, lyricsLabTitle, lyricsLabLink)}

                    {myProjects(edmvoltThumbnail, edmVoltDescription, edmVoltTitle, edmVoltLink)}
              
                    {myProjects(weathergenieThumbnail, weatherGenieDescription, weatherGenieTitle, weatherGenieLink)}
                </div>
            </div>
        </div>
     );
}
 
export default Frontend;