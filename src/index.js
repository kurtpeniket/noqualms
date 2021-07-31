import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './Content';
import Hero from './Hero';
import Calendly from './Calendly';
import reportWebVitals from './reportWebVitals';
import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Protect sha512='EE26B0DD4AF7E749AA1A8EE3C10AE9923F618980772E473F8819A5D4940E0DB27AC185F8A0E1D5F84F88BC887FD67B143732C304CC5FA9AD8E6F57F50028A8FF'>
      <Hero />
      <div id="content">
        <Content 
          heading={'Heading'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        />
      </div>
      <Content
        heading={'Book'}
        text={'Select a date and time below...'}
      />
      <Calendly />
    </Protect>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
