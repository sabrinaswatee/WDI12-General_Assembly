console.log('react');

// var React = require('react'); same as line below
import React from 'react'
import ReactDom from 'react-dom'
// import Slider from './components/Slider'
// var HelloWorld = require('./components/HelloWorld');
// import PasswordInput from './components/PasswordInput'
import App from './components/App'

// class HelloWorld extends React.Component {
//
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     return <div>hello world</div>
//   }
// }
//
// function Slider(props) {
//   return <div>
//     <input type="range" value={props.value} />
//     <input type="number" value={props.value} />
//   </div>
// }

// function App(props) {
//   return <div>
//     <h1>My App</h1>
//     <Slider startValue="3"/>
//     <p>This is an awesome app</p>
//     <HelloWorld firstname="sam" />
//     <Slider />
//     <PasswordInput />
//   </div>
// }

// ReactDom.render( <HelloWorld firstname="Bits" lastname="Please" />, document.querySelector('#root') )
ReactDom.render( <App />, document.querySelector('#root') )
