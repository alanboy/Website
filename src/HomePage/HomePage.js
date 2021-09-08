import React from 'react';
import './HomePage.css';
import { Card } from 'react-bootstrap';

function HomePage() {
    return (
      <div className="HomePage">
        <div className="banner">
          <h1>Making Websites for Good</h1>
        </div>
        <div className="about">
          <h1>About Us</h1>
          <p>DUBvelopers is a group dedicated to working on pro bono (free of charge)
            coding projects for the UW community and local businesses.
          </p>

          <p>Members of the club will work collaboratively to apply interdisciplinary
            knowledge in Computer Science and Design to support each project.
            Open to beginners, we will learn basics of web dev and design
            through a UW CS faculty advised curriculum and then apply them to the projects.
          </p>
        </div>
        <div className="projects-section">
          <h1>Projects</h1>
            <Card>
              {/* <Card.Img variant="top" src="" /> */}
              <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
            </Card>
        </div>
      </div>
    );
  }

  export default HomePage;