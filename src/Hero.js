import React from 'react';
import LazyHero from 'react-lazy-hero';
import styled from 'styled-components';

const Style = styled.div`
  h1 {
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-size: 60px;
  }  
  
  body{background-color:#000; overflow:hidden;}

  html body [data-ca3_iconfont="ETmodules"]::before {
      font-family: "ETmodules";
  }
  [data-ca3_icon]::before {
      font-weight: normal;
      content: attr(data-ca3_icon);
  }

  .ca3-scroll-down-arrow {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .ca3-scroll-down-link {
    cursor:pointer;
    height: 60px;
    width: 80px;
    margin: 0px 10px 0 -40px;
    line-height: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    color: #FFF;
    text-align: center;
    font-size: 70px;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
    margin-bottom: 60px;

    -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
    -moz-animation:    ca3_fade_move_down 2s ease-in-out infinite;
    animation:         ca3_fade_move_down 2s ease-in-out infinite;
  }

  /*animated scroll arrow animation*/
  @-webkit-keyframes ca3_fade_move_down {
    0%   { -webkit-transform:translate(0,-20px); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -webkit-transform:translate(0,20px); opacity: 0; }
  }
  @-moz-keyframes ca3_fade_move_down {
    0%   { -moz-transform:translate(0,-20px); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -moz-transform:translate(0,20px); opacity: 0; }
  }
  @keyframes ca3_fade_move_down {
    0%   { transform:translate(0,-20px); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { transform:translate(0,20px); opacity: 0; }
  }
`
const hero = (props) => {
  return (
    <Style>
      <div>
        <LazyHero 
          color='#212121'
          minHeight='100vh'
          parallaxOffset={parseInt('100')}
          imageSrc="https://images.unsplash.com/photo-1536520002442-39764a41e987?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
            <h1>No Qualms Barbering</h1>
        </LazyHero>
        <a href="#content" className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
      </div>
    </Style>
    );
  };

export default hero;