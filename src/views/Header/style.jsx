import styled from 'styled-components';

export const Hero = styled.header`
  text-align: center;
  background: #282c34;
  color: #FFFFFF;
  
  .container {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  
  img {
    display: block;
    margin: 0 auto 20px;
  }
  
  .react-logo {
    width: 250px;
    height: 250px;
  }
  
 .intro-text { 
   .name {
      display: block;
      font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 2em;
   }
   .skills {
      font-size: 1.25em;
      font-weight: 300;
   }
 }
  
  hr.line {
    max-width: 250px;
    margin: 25px auto 30px;
    border: 2px solid #ffffff;
  }

  @media (min-width: 768px) {
    .container {
      padding-top: 150px;
      padding-bottom: 80px;
    }
    
    .intro-text {
      .name {
        font-size: 4.75em;
      }
      .skills {
        font-size: 1.75em;
      }
    }
  }
`;

