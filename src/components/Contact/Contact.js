import classes from './Contact.module.css'
import PageHeader from '../PageHeader/PageHeader';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion'
import emailjs from 'emailjs-com'




const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("portfolio-contact-form",
         "portfolioTemplate",
         e.target,
         "user_SPWKmnxE3ofsY3lbrgr90").then(res =>{
             console.log(res)
         }).catch(err => console.log(err));

         e.target.reset();
    }


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
        <div className={classes.contact} id="contact">
            <PageHeader title={'Get In Touch'}/>

            <div ref={ref} >

            <motion.form 
                animate={anime} 
             className={classes.contactForm} 
             onSubmit={sendEmail}
             >
                 

                <label>Name</label>
                <input className={classes.inputField} type="text" name="name" plceholder="Enter your name" required></input>

                <label>Subject</label>
                <input  className={classes.inputField} type="text" name="subject"></input>

                <label>Email</label>
                <input className={classes.inputField} type="email" name="user-email" plceholder="Enter your email" required></input>

                <label>Message</label>
                <textarea className={classes.inputField} name="message" required></textarea>

                <input className={classes.submitBtn} type="submit" value="Send"></input>
            </motion.form>

            </div>

        </div>

     );
}
 
export default Contact;