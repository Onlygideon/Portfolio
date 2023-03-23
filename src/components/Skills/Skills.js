import classes from './Skills.module.css'
import PageHeader from '../PageHeader/PageHeader';
import thinking from './../images/code-thinking.svg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion'


const listTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}


const uiDesignSkills = <ul>
    <li style={ listTitleStyle }>UI Design</li>
    <li>Figma - Gimp</li>
</ul>

const backendSkills = <ul>
    <li style={ listTitleStyle }>BACKEND</li>
    <li>JavaScript - TypeScript - Express.js - Node.js</li>
    <li>Java - MongoDB - Mongoose</li>
    <li>MySQL - Sequelize - Redis</li>
    <li>Postgrsql - TypeOrm - Mocha</li>
    <li>Chai - Docker</li>
</ul>

const frontendSkills = <ul>
    <li style={ listTitleStyle }>FRONTEND</li>
    <li>Html - Css - Scss - JavaScript</li>
    <li>ReactJs - TypeScript</li>
    <li>styled-components - Tailwind Css</li>
</ul>

const otherSkills = <ul>
    <li style={ listTitleStyle }>OTHER</li>
    <li>Git - Postman - GitHub</li>
    <li>Netlify - Heroku - Sonarqube</li>
</ul>

const totalSkills = [uiDesignSkills, frontendSkills, backendSkills, otherSkills]


const Skills = () => {


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
        <div className={classes.skills} id="skills">
            <PageHeader title={'What about the Skills?'}/>
             <p >
                 I'm a life long learner and enjoy learning new stuff!!.
                 Below are some programming skills that i'm proficient with.
             </p>

                <div ref={ref}>          

            <motion.div 
            animate={anime} 
            className={classes.container}>
                 <img src={thinking} alt="skills"></img>
                 <div>
                {totalSkills.map(skills => {
                    return(
                        <div className={classes.list}>
                            {skills}
                        </div>
                    )
                })} </div>
             </motion.div>

                </div>  
        </div>
     );
}
 
export default Skills;