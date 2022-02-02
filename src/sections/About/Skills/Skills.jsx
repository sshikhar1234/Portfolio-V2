import React from 'react';
import classes from './skills.module.scss';
import logo_aws from "../../../images/logo_aws.svg"
import logo_jenkins from "../../../images/logo_jenkins.svg"
import logo_docker from "../../../images/logo_docker.svg"
import logo_terraform from "../../../images/logo_terraform.svg"
import logo_kubernetes from "../../../images/logo_kubernetes.svg"
import logo_gcp from "../../../images/logo_gcp.svg"
import logo_azure from "../../../images/logo_azure.svg"
import logo_groovy from "../../../images/logo_groovy.svg"
import logo_swift from "../../../images/logo_swift.svg"
import logo_kotlin from "../../../images/logo_kotlin.svg"
import logo_java from "../../../images/logo_java.svg"
export default function Skills() {
  
  return (
    <div className={classes.skills}>
      <h4 className={classes.subheading}>DevOps and cloud tools:</h4>
      <div className={classes.skill_rack}>

        <span className='logo logo-aws'>
        <img className={classes.logo_aws}
                alt='AWS'
                src={logo_aws}
        />
        <span className='tooltip'>AWS</span>
        </span>
        <span className='logo logo-aws'>
        <img className={classes.logo_gcp}
                alt='GCP'
                src={logo_gcp}
        />
        <span className='tooltip'>GCP</span>
        </span>
        <span className='logo logo-aws'>
        <img className={classes.logo_azure}
                alt='Azure DevOps'
                src={logo_azure}
        />
        <span className='tooltip'>Azure DevOps</span>
        </span>
        <span className='logo logo-jenkins'>
        <img className={classes.logo_jenkins}
                alt='Jenkins'
                src={logo_jenkins}
        />
        <span className='tooltip'>Jenkins</span>
        </span>

        <span className='logo logo-aws'>
        <img className={classes.logo_docker}
                alt='Docker'
                src={logo_docker}
        />
        <span className='tooltip'>Docker</span>
        </span>

        <span className='logo logo-aws'>
        <img className={classes.logo_terraform}
                alt='Terraform'
                src={logo_terraform}
        />
        <span className='tooltip'>Terraform</span>
        </span>

        <span className='logo logo-aws'>
        <img className={classes.logo_kubernetes}
                alt='Terraform'
                src={logo_kubernetes}
        />
        <span className='tooltip'>Kubenetes/GKE</span>
        </span>


</div>
<h4 className={classes.subheading}>Languages:</h4>
<div className={classes.skill_rack}>

<span className='logo logo-java'>
      <img className={classes.logo_java}
                alt='Java'
                src={logo_java}
        />
          <span className='tooltip'>Java</span>
        </span>
        <span className='logo logo-java'>
      <img className={classes.logo_groovy}
                alt='Groovy'
                src={logo_groovy}
        />
          <span className='tooltip'>Groovy</span>
        </span>
        <span className='logo logo-java'>
      <img className={classes.logo_swift}
                alt='Swift'
                src={logo_swift}
        />
          <span className='tooltip'>Swift</span>
        </span>
        <span className='logo logo-java'>
      <img className={classes.logo_kotlin}
                alt='Kotlin'
                src={logo_kotlin}
        />
          <span className='tooltip'>Kotlin</span>
        </span>


        <span className='logo logo-javascript-rounded'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>JavaScript</span>

        </span>


        <span className='logo logo-html'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
          <span className='path4'></span>

          <span className='tooltip'>HTML</span>
        </span>


        <span className='logo logo-python'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>Python</span>
        </span>

        <span className='logo logo-nodejs'>
          <span className='tooltip'>Node JS</span>
        </span>

        <span className='logo logo-react'>
          <span className='tooltip'>React JS</span>
        </span>

        <span className='logo logo-mysql'>
          <span className='tooltip'>MySQL</span>
        </span>

      </div>
    </div>
  );
}
