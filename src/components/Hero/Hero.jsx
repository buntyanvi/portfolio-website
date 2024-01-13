// Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../../../assets/hero/heroImage.jpg';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vignesh Lagishetti</h1>
        <p className={styles.description}>MernStack Developer and Machine Learning Enthusiast,<br />Reach out if you'd like to learn more</p>
        <a className={styles.contactBtn} href='mailto:lvigneshbunty789@gmail.com'>Contact Me</a>
      </div>
      <div className={styles.heroImgContainer}>
        <img src={heroImage} alt="Vignesh Lagishetti" className={styles.heroImg} />
      </div>
    </section>
  );
};

export default Hero;
