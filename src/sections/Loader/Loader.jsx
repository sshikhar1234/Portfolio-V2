import React from 'react';
import classes from './loader.module.scss';
import logo_hello from "./hello_world.png"

export default function Loader({ style }) {
  return (
        <div className={classes.loader} style={style}>
      <div className={classes.container}>
        <img src={logo_hello} width={100}/>
        <div className={classes.progress}></div>
      </div>
    </div>
  );
}
