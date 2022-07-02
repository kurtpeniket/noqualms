import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './Content';
import Hero from './Hero';
import Calendly from './Calendly';
import reportWebVitals from './reportWebVitals';
import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'
import ContactForm from './ContactForm';

ReactDOM.render(
  <React.StrictMode>
    <Protect sha512='b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86'>
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
      <ContactForm />
    </Protect>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
