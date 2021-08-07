import React from 'react';
//to use css styling, import the file here
// the ./ means go back one level, so we're in this doc <name>.js, going back we're in the folder
//    so by doing that we can access all the files in the folder
//    to go back to the overall src file, we could do ../
import './TeamsPage.css';

function TeamsPage() {
  return (
    //THIS IS WHERE YOU PUT ALL THE HTML
    //  dont delete this outer div, idk why it doesnt work without it
    <div className="TeamsPage">
      <h1>Current Team</h1>
    </div>
  );
}

export default TeamsPage;