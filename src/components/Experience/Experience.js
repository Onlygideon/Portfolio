import classes from "./Experience.module.css";
import PageHeader from "../PageHeader/PageHeader";
import hngThumbnail from "./../images/hng.jpg";
import zuriThumbnail from "./../images/zuri.jpg";
import onamydeThumbnail from "./../images/onamyde.png";
import mustardThumbnail from "./../images/mustard.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const myExperience = (thumbnail, description, date, title) => {
  return (
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
};

const mustardTitle = `Mustard Stone Technologies | Remote`;
const onamydeTitle = `Onamyde Nigeria Limited | Remote`;
const hngTitle = `HNG | Remote`;
const zuriTitle = `Zuri Team | Remote`;

const mustardDescription = `Back-End Software Engineer`;
const onamydeDescription = `Back-End Web Developer`;
const hngDescription = `Front-end Web Developer`;
const zuriDescription = `Back-end Web Developer`;

const mustardDate = `February 2022 - February 2023`;
const onamydeDate = `August 2020 - January 2022`;
const hngDate = `July 2021 - November 2021`;
const zuriDate = `March 2021 - September 2021`;

const Experience = () => {
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
    <div className={classes.experience} id="experience">
      <PageHeader title={"Work Experience"} />

      <div ref={ref} className={classes.ExperienceContent}>
        <motion.div className={classes.experiences} animate={anime}>
          {myExperience(
            mustardThumbnail,
            mustardDescription,
            mustardDate,
            mustardTitle
          )}

          {myExperience(
            onamydeThumbnail,
            onamydeDescription,
            onamydeDate,
            onamydeTitle
          )}

          {/* {myExperience(hngThumbnail, hngDescription, hngDate, hngTitle)} */}

          {myExperience(zuriThumbnail, zuriDescription, zuriDate, zuriTitle)}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
