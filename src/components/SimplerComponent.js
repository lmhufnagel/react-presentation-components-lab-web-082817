import React, {Component} from 'react';
import ReactDOM from 'react-dom';


function SimplerComponent(props){
  return <div onClick={props.handleClick}>"I am just happy"</div>
};
export default SimplerComponent;
