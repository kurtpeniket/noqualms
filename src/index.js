import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './Content';
import Hero from './Hero/Hero';
import Calendly from './Calendly';
import reportWebVitals from './reportWebVitals';
import CustomButton from './CustomButton'

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Content 
      heading={'Heading'}
      text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
    />
    <Content
      heading={'Book'}
      text={'Select a date and atime below...'}
    />
    <Calendly />
    <CustomButton />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
