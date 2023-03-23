import classes from './Projects.module.css'
import PageHeader from '../PageHeader/PageHeader';
import oasisThumbnail from './../images/oasis.PNG';
import booklifyThumbnail from './../images/booklify.PNG'
import arkThumbnail from './../images/ark.PNG';
import hoaxThumbnail from './../images/hoax.PNG';




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


const oasisDescription = `This is a Public API that allows developers to select specific data's they want from Amazon website in a JSON format, built using Node.js, Express.js and Postman for API Testing.`;
const booklifyDescription = `Store book info's with this web app connected to Firebase realtime database.`;
const arkDescription = "This is a Rest API that helps to manage/upload media objects, built using NestJs, TypeOrm, MySql and Postman for API testing."
const hoaxDescription = "This is a REST API that helps in product/items management, built using Node.js, Express.js, MySQL, Sequelize and Postman for API testing. "


const booklifyTitle = `Booklify`;
const oasisTitle = `Oasis API`;
const arkTitle = "Ark API";
const hoaxTitle = "Hoax API";


const booklifyLink = "https://onlygideon.github.io/booklify/";
const oasisLink = `https://rapidapi.com/stephengideon22-3E2owVQ7ZTn/api/oasis/`;
const arkLink = "https://documenter.getpostman.com/view/15715947/2s93JzMLpG";
const hoaxLink = "https://documenter.getpostman.com/view/15715947/2s93RMVawv";





const Backend = () => {
    
    return ( 
        <div className={classes.projects} id="projects" style={{minHeight: '100vh'}}>
            <div className={classes.title}>
            <PageHeader title={'BackEnd Projects'}/>
            </div>

            <div className={classes.ProjectContent}>

                <div className={classes.paragraph}> 
                    <p>
                        Below are some of my backend projects.
                    </p>
                </div>

                <div className={classes.project}>

                    {myProjects(oasisThumbnail, oasisDescription, oasisTitle, oasisLink)}

                    {myProjects(arkThumbnail, arkDescription, arkTitle, arkLink)}

                    {myProjects(hoaxThumbnail, hoaxDescription, hoaxTitle, hoaxLink)}

                    {/* {myProjects(booklifyThumbnail, booklifyDescription, booklifyTitle, booklifyLink)} */}
                    
                </div>
            </div>
        </div>
     );
}
 
export default Backend;