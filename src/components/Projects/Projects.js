import classes from './Projects.module.css'
import PageHeader from '../PageHeader/PageHeader';
import backendThumbnail from './../images/oasis.PNG';
import frontendThumbnail from './../images/phoeniix.jpg';
import uiDesignThumbnail from './../images/ElegantEssence.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion';



const moreProjects = (thumbnail, description, title, link) => {
    return(
        <div className={classes.projectContainer}>

            <div className={classes.thumbnail}>
                <img src={thumbnail} alt="projects"></img>
            </div>

            <div className={classes.text}>
                <h4>{title}</h4>
                <p>{description}</p>
                <a>View Projects</a>
            </div>
        </div>
    );
}



const frontendTitle = 'FrontEnd Development Projects'
const uiTitle = 'UI Design Projects'
const backendTitle = 'BackEnd Development Projects'





const Projects = () => {

    const {ref, inView} = useInView({
        threshold: 0.06
    });

    const anime = useAnimation();

    useEffect(() => {
        if(inView) {
            anime.start({
                x: 0,
                transition: {
                    type: "spring", duration: 3, bounce:0.4
                }
            });
        }
        if(!inView) {
            anime.start({
                x: '-100vw'
            })
        }
           
    }, [inView]);

    
    return ( 
        <div className={classes.projects} id="projects">
            <div className={classes.title}>
            <PageHeader title={'My Projects'}/>
            </div>

            <div ref={ref} className={classes.ProjectContent}>

                <div className={classes.paragraph}> 
                    <p>
                        Below are different categories of my personal projects.
                    </p>
                </div>

                <motion.div className={classes.project}
                    animate={anime}         
                    >
                    <a href="/Portfolio#/design-projects">
                   {moreProjects(uiDesignThumbnail, uiTitle)}
                    </a>

                   <a href="/Portfolio#/frontend-projects">
                   {moreProjects(frontendThumbnail, frontendTitle)}
                    </a>

                    <a href="/Portfolio#/backend-projects">
                   {moreProjects(backendThumbnail, backendTitle)}
                    </a>

                </motion.div>
            </div>
        </div>
     );
}
 
export default Projects;