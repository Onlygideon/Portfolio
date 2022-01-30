import classes from './Experience.module.css'
import PageHeader from '../PageHeader/PageHeader';
import hngThumbnail from './../images/hng.png'
import zuriThumbnail from './../images/zuri.jpeg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion'


const myExperience = (thumbnail, description, date, title) => {
    return(
        <div className={classes.experienceContainer}>

            <div className={classes.thumbnail}>
                <img src={thumbnail} alt="projects"></img>
            </div>

            <div className={classes.text}>
                <h4>{title}</h4>
                <p>{description}</p>
                <p>{date}</p>
            </div>
        </div>
    );
}


const hngTitle = `HNG Internship | Remote`;
const zuriTitle = `Zuri Team | Remote`;


const hngDescription = `Front-end Web Developer`;
const zuriDescription = `Back-end Web Developer`;


const hngDate = `July 2021 - Present`;
const zuriDate = `March 2021 - September 2021`;




const Experience = () => {

    const {ref, inView} = useInView({
        threshold: 0.1
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
        <div className={classes.experience} id="experience">
            <PageHeader title={'Work Experience'}/>
            
            <div ref={ref} className={classes.ExperienceContent}>

                <motion.div className={classes.experiences}
                    animate={anime} 
                >
                    <a href="https://hng.tech/" target="_blank">
                    {myExperience(hngThumbnail, hngDescription , hngDate, hngTitle)}
                    </a>
                    <a href="https://zuri.team/" target="_blank">
                    {myExperience(zuriThumbnail, zuriDescription, zuriDate, zuriTitle)} 
                    </a>
                </motion.div>
            </div>
        </div>
     );
}
 
export default Experience;