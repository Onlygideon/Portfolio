import classes from './Projects.module.css'
import PageHeader from '../PageHeader/PageHeader';
import SmartBiteThumbnail from './../images/Smart Bite.jpg';
import ElegantEssenceThumbnail from './../images/ElegantEssence.jpg';




const myProjects = (thumbnail, description, title, link) => {
    return(
        <div className={classes.projectContainer}>

            <div className={classes.thumbnail}>
                <img src={thumbnail} alt="projects"></img>
            </div>

            <div className={classes.text}>
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={link} target="_blank">View on Behance</a>
            </div>
        </div>
    );
}


const smartBiteDescription = `This is a 6 pages UI Design for a Food Ordering Mobile App.`;
const ElegantEssenceDescription = `This is a Landing Page UI Design for an online jewelry store website.`;


const smartBiteTitle = `Smart Bite`;
const ElegantEssenceTitle = `Elegant Essence`;

const smartBiteLink = "https://www.behance.net/gallery/135188277/Smart-Bite";
const ElegantEssenceLink = "https://www.behance.net/gallery/135366705/Elegant-Essence"





const Design = () => {
    
    return ( 
        <div className={classes.projects} id="projects" style={{minHeight: '100vh'}}>
            <div className={classes.title}>
            <PageHeader title={'UI Design Projects'}/>
            </div>

            <div className={classes.ProjectContent}>

                <div className={classes.paragraph}> 
                    <p>
                        Below are some of my ui design projects.
                    </p>
                </div>

                <div className={classes.project}>

                    {myProjects(SmartBiteThumbnail, smartBiteDescription, smartBiteTitle, smartBiteLink)}
                    {myProjects(ElegantEssenceThumbnail, ElegantEssenceDescription, ElegantEssenceTitle, ElegantEssenceLink)}
                    
                </div>
            </div>
        </div>
     );
}
 
export default Design;