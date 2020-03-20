import React from 'react';

import Header from "./Header/Header";
import Books from "./Books/Books";

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
  <>
    <Header title={"ReactJS"}/>
    <Books/>

  </>
);

export default Home;
