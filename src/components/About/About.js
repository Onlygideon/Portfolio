import classes from "./About.module.css";
import PageHeader from "../PageHeader/PageHeader";
import profile from "./../images/profile-pic.jpg.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Resume from "../files/GideonSTEPHENresume.pdf";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const anime = useAnimation();

  useEffect(() => {
    if (inView) {
      anime.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      anime.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div className={classes.About} id="about">
      <PageHeader title={"About Me"} />
      <div ref={ref} className={classes.container}>
        <div className={classes.profile}>
          <img src={profile} alt="me"></img>
        </div>

        <motion.div animate={anime} className={classes.text}>
          <p>
            Hey! My name is Gideon STEPHEN and i'm a Software Engineer that
            enjoys building well Interactive web environment.
            <p>
              I hold a bachelor's degree in Human Anatomy (Second Class Upper)
              from Federal University of Technology, Akure.
            </p>
            <p>
              I develop well responsive and Interactive Front-end and Back-end
              environment for your web applications.
            </p>
          </p>
          <p>
            <a href={Resume} download="Gideon_STEPHEN_resume.pdf">
              Download Resume
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
