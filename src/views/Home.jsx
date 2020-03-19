import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header/Header";


/*const HomeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};*/

const Home = ({ match }) => (
  /* <div style={HomeStyle}>
     <h1>
       Welcome!
     </h1>
     {match && match.params.testRouting && (
       <p>
         {match.params.testRouting}
       </p>
     )}
   </div>*/

  <Header title="ReactJS"/>
);

export default Home;
