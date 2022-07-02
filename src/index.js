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
    <Protect sha512='B109F3BBBC244EB82441917ED06D618B9008DD09B3BEFD1B5E07394C706A8BB980B1D7785E5976EC049B46DF5F1326AF5A2EA6D103FD07C95385FFAB0CACBC86' blur='true'>
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
