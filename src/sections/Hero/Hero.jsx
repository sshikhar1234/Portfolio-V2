import React from 'react';
import classes from './hero.module.scss';
import { Link } from './../../components';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h5 className={classes.intro}>
          Hi<span role='img' aria-label='wave emoji'>
          👋
          </span>, My name is
        </h5>
        <h1 className={classes.hero__name}>
          <span className={classes.emphasize}>Shikhar</span>
          <span> Shah</span>
        </h1>
        <h2 className={classes.info}>
          I work with public cloud platforms and DevOps tools to provision cloud architecture & end to end CI CD pipelines
          <span role='img' aria-label='coffee emoji'>
            ☕
          </span>
        </h2>
      </div>
      <div className={classes.waterMark}>
        DEV
      </div>

      <div className={classes.quickContact}>
        <Link to='mailto: sshikharshah@protonmail.com' lone>
          sshikharshah@protonmail.com
        </Link>
        <Link to='https://www.linkedin.com/in/shikharshah97/' lone>
          linkedIn/@shikharshah97
        </Link>
      </div>
    </section>
  );
}
