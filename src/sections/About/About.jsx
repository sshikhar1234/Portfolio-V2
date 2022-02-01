import React from 'react';
import classes from './about.module.scss';
import Fade from 'react-reveal/Fade';

import { ShikharSmall, ShikharMedium, ShikharLarge } from '../../images/Shikhar';
import Skills from './Skills';
import SocialLinks from '../Contact/SocialLinks';

export default function About() {
  return (
    <section className={classes.about} id='about'>
      <div className={classes.container}>
        <h3 className={classes.heading}>About me</h3>
        <Fade bottom distance={'4rem'}>
          <div className={classes.about__content}>
            <div className={classes.about__text}>
              <p className={classes.description}>
                <span role='img' aria-label='wave emoji'>
                  👋
                </span>{' '}
                Hi! I am Shikhar, full-time DevOps Engineer based in Toronto, Canada 🇨🇦
              </p>

              <p className={classes.description}>
               Currently I'm a Mobile DevOps Engineer with Clearbridge Mobile where I work closely with multiple project teams to create end to end fully automated deployment pipelines as well as cloud  ☁️ architectures.
              </p>
              <p className={classes.description}>
                With having indepth knowledge in Mobile App Development📱, I have got a great deal of exposure on the operations side of the lifecycle while working for Royal Bank of Canada.
              </p>
              <p className={classes.description}>
                Very much passionate about Infrastructure as Code👨🏻‍💻 and Automation. Currently learning Ansible and Terraform.
              </p>
              <p className={classes.description}>
                Other than coding, I'm passionate about Blockchain{' '}
                <span role='img' aria-label='galaxy emoji'>
                🔗
                </span>{' '}
                and Web3.0{' '}
                <span role='img' aria-label='cook emoji'>
                🌐
                </span>
                .
              </p>
            </div>

            <figure className={classes.profile}>
              <img
                className={classes.image}
                alt='Shikhar'
                src={ShikharMedium}
                srcSet={`${ShikharSmall} 300w, ${ShikharMedium} 700w, ${ShikharLarge} 1100w`}
              />
            </figure>
          </div>
          <Skills />
        </Fade>
        <Fade bottom>
          <div className={classes.socialLinks}>
            <SocialLinks />
          </div>
        </Fade>
      </div>
    </section>
  );
}
