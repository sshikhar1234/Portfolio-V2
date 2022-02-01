import React from 'react';
import classes from './footer.module.scss';

import SocialLinks from '../Contact/SocialLinks';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div>
        <SocialLinks />
      </div>
      Made with &#10084;&#65039; in React Js 
      <br />
    </div>
  );
}
