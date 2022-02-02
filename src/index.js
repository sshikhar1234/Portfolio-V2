import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import './styles/base.scss';

class Doc extends React.Component{
  componentDidMount(){
    document.title = "Shikhar Shah • DevOps • Cloud • Automation"
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
