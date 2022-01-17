import classes from './Home.module.css'
import welcome from './../images/code-development-1.svg'
import welcome2 from './../images/welcome.svg'
import WaveLine from './WaveLine'
import { motion } from 'framer-motion'




const Home = () => {
    return ( 
        <div className={classes.home} id="home">
            <WaveLine />
            <div className={classes.container}>
                <h1 className={classes.hello}>Hi, </h1>
                <h1 className={classes.name}>I'm Gideon STEPHEN</h1>
                <p>UI Designer & Software Developer</p>
            </div>

            <img className={classes.image} src={welcome} alt="welcome"></img>
            <motion.img className={classes.image2} src={welcome2} alt="welcome"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{delay: 2.8}}>
            </motion.img>
        </div>
     );
}
 
export default Home;