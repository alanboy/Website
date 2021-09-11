import React from 'react';
import './ResourcesPage.css';

function ResourcesPage() {
  return (
    <body className="resources">
      <h1>DUBvelopers Web Development Resource List</h1>
      <div className="resource-header container-fluid">
        <div className="resource-title"><h2 className="project-title">Getting Started<br/></h2></div>
      </div>
        <div className="resource-body">
            <ul>
              <li>
                <a href="https://www.google.co.uk/chrome/" target="_blank">Google Chrome Browser</a> (recommended)<a href="https://atom.io/" target="_blank"></a>
              </li>
              <li>
                <a href="https://atom.io/" target="_blank">Atom Text Editor</a> (recommended)
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1gKlpz0oaArFe-ytgWGXQHiET_QziFxk_8Zq_Aj0-qFg/edit?usp=sharing" target="_blank">List of Atom Plugins</a>
              </li>
              <li>
              <li>
                <a href="https://git-scm.com/downloads" target="_blank">Download Git</a>
              </li>
                <a href="https://code.visualstudio.com/" target="_blank">VS Code Text Editor</a> (good alternative)
              </li>
              <li>
                <a href="https://docs.google.com/document/d/e/2PACX-1vQDcdmrkjNPlOSeqS-v99P-57h5f7Yo3pszkko1sN6OtIVlNBFgTyeTX3A1mDSOdw1Ugb1l5o0NVy-a/pub" target="_blank">VS Code Extensions</a>
              </li>
              <li><a href="https://codepen.io/">CodePen</a>(a browser web-dev environment)</li>
            </ul>
        </div>

      {/* HTML */}
      <div className="resource-header">
        <div className="resource-title"><h2 className="project-title">HTML<br/></h2></div>
      </div>
        <div className="resource-body">
            <ul>
              <li>
                <a href="https://www.theodinproject.com/paths" target="_blank">The Odin Project</a>
              </li>
              <li>
                <a href="https://www.khanacademy.org/computing/computer-programming/html-css#intro-to-html" target="_blank">Khan Academy - Intro to HTML</a>
              </li>
            </ul>
      </div>

            {/* CSS */}
      <div className="resource-header">
        <div className="resource-title"><h2 className="project-title">CSS<br/></h2></div>
      </div>
        <div className="resource-body">
            <ul>
              <li>
                <a href="https://www.theodinproject.com/paths" target="_blank">The Odin Project</a>
              </li>
              <li>
                <a href="https://www.khanacademy.org/computing/computer-programming/html-css#intro-to-css" target="_blank">Khan Academy - Intro to CSS</a>
              </li>
            </ul>
      </div>

      {/* Boostrap */}
      <div className="resource-header">
        <div className="resource-title"><h2 className="project-title">Bootstrap<br/></h2></div>
      </div>
        <div className="resource-body">
            <ul>
              <li>
                <a href="https://getbootstrap.com/" target="_blank">Bootstrap Doc and Download</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/bootstrap4/default.asp" target="_blank">W3Schools Bootstrap 4</a>
              </li>
            </ul>
      </div>

      {/* Github */}
      <div className="resource-header">
        <div className="resource-title"><h2 className="project-title">Git/Github<br/></h2></div>
      </div>
        <div className="resource-body">
            <ul>
              <li>
                <a href="https://docs.google.com/document/d/1tba6yoRD3foK-QAPFE4jUJl5nSYdADqQTmn5A-LqwUk/edit?usp=sharing" target="_blank">Getting Started With Github</a> (recommended)<a href="https://atom.io/" target="_blank"></a>
              </li>
              <li>
                <a href="https://rogerdudler.github.io/git-guide//" target="_blank">git, the simple guide</a>
              </li>
              <li>
                <a href="https://learngitbranching.js.org/" target="_blank">Learn Git Branching</a> (interactive/visual way to learn git)
              </li>
            </ul>
        </div>
    </body>
  );
}

export default ResourcesPage;