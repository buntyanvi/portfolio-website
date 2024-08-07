import React from 'react';
import styles from './About.module.css'
import aboutImage from '../../../assets/about/aboutImage.png.jpg'
import cursorIcon from '../../../assets/about/cursorIcon.png'
import serverIcon from '../../../assets/about/serverIcon.png'
import uiIcon from '../../../assets/about/uiIcon.png'

export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={aboutImage}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={cursorIcon} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={serverIcon} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>AWS Cloud</h3>
                <p>
                As a cloud beginner, I am exploring AWS Cloud services to understand their capabilities and functionalities.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={uiIcon} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>Machine Learning Engineer</h3>
                <p>
                Developed and implemented machine learning algorithms to optimize predictive models for data-driven decision-making.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  };

  export default About;