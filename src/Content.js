import React from 'react';
import styled from 'styled-components';


const Style = styled.div`
  text-align: center;
  padding: 20px;
`

const content = (props) => (
  <Style>
    <div>
      <h2 class="heading">{props.heading}</h2> 
      <p>{props.text}</p>
    </div>
  </Style>
);

export default content;
