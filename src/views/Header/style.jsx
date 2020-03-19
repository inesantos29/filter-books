import styled from 'styled-components';

export const Hero = styled.header`
  text-align: center;
  background: #282c34;
  color: #FFFFFF;
  
  header .container {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  
  header img {
    display: block;
    margin: 0 auto 20px;
  }
  
  .react-logo {
    width: 250px;
    height: 250px;
  }
  
  header .intro-text .name {
    display: block;
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2em;
  }
  
  header .intro-text .skills {
    font-size: 1.25em;
    font-weight: 300;
  }
  
  @media (min-width: 768px) {
    header .container {
      padding-top: 150px;
      padding-bottom: 80px;
    }
    header .intro-text .name {
      font-size: 4.75em;
    }
    header .intro-text .skills {
      font-size: 1.75em;
    }
  }
`;

