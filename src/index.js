import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import './styles/base.scss';

class Doc extends React.Component{
  componentDidMount(){
    document.title = "Shikhar Shah • DevOps • Cloud • Automation"
    document.head.append = <><script async defer data-domain="shikharshah.ca" src="https://plausible.io/js/plausible.js"></script></>
  }
  render(){
    return(
      <b> </b>
    )
  }
}

ReactDOM.render(
  <>
    <Doc />
    <Portfolio />
  </>,
  document.querySelector('#root')
);
