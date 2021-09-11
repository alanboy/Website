import React from 'react';
//to use css styling, import the file here
// the ./ means go back one level, so we're in this doc <name>.js, going back we're in the folder
//    so by doing that we can access all the files in the folder
//    to go back to the overall src file, we could do ../
import './ProjectsPage.css';

function ProjectsPage() {
  return (
    <body className="project">
      <div className="project-header">
        <div className="project-title"><h2 className="project-title">Open Sky Studio Website<br/></h2></div></div>
      <div><h4 className="project-client">Open Sky Studio</h4></div>

      <div className="project-body">
        <div className="pbleft">
          <h4>Team Members</h4>
          <h5>Quan Huie</h5>
          <h6>Frontend Engineer\Design</h6>
        </div>
        <div className="pbright">
          <p>Create a website for a local pilates and massage studio.
          </p>
        </div>
      </div>
    </body>
  );
}

export default ProjectsPage;