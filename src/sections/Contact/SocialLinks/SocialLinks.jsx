import React from 'react';
import classes from './social.module.scss';

export default function SocialLinks() {
  return (
    <div className={classes.social}>
      <a href='mailto: sshikharshah@protonmail.com' className='icon'>
        &#xe910;
      </a>
      <a href='https://github.com/sshikhar1234' className='icon'>
        &#xe908;
      </a>
      <a href='https://shikhar1234.medium.com/' className='icon'>
        &#xe912;
      </a>
      <a href='https://www.linkedin.com/in/shikharshah97/' className='icon'>
        &#xe90a;
      </a>
      <a href='https://www.instagram.com/shikhar_1234/' className='icon'>
        &#xe90e;
      </a>
    </div>
  );
}
