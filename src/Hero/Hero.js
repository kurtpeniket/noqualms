import React from 'react';
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components';

const Style = styled.div`
  color: white;
`
const hero = (props) => {
  return (
    <Style>
      <div>
        <LazyHero 
          color='#212121'
          minHeight='75vh'
          parallaxOffset='100'
          imageSrc="https://images.unsplash.com/photo-1576168056582-0a851a87ab8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=649&q=80">
            <h1>No Qualms Barbering</h1>
        </LazyHero>
      </div>
    </Style>
    );
  };

export default hero;