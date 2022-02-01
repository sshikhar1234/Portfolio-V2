import React from 'react';
import classes from './projects.module.scss';

import { Project } from '../../components';
import data from './data';

export default function MyWork() {
  return (
    <section className={classes.projects} id='projects'>
      <div className={classes.container}>
        <h3 className={classes.heading}>Projects</h3>
        {data.map((project, index) => {
          const { title, type, description, features, techStack } = project;
          return (
            <Project
              key={index}
              title={title}
              type={type}
              features={features}
              stack={techStack}
            >
              {description}
            </Project>
          );
        })}
      </div>
    </section>
  );
}
