import React from 'react';
import './HomePage.css';
import { Card , Button } from 'react-bootstrap';

function HomePage() {
    return (
      <div className="HomePage">
        <div className="banner">
          <div class="row">
            <h1><em>Making Websites For Good.</em></h1>
          </div>
        </div>
        <div className="container-fluid">
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

        {/* Features */}
        <section className="why-us">
          <h1>Why Join Us?</h1>
          <div class="row">
            <div class="feature-box col-lg-4">
              <i class="icon fas fa-check-circle fa-4x"></i>
              <h3>Develop Your Web Development Skills.</h3>
              <p>Learn how to code websites in HTML, CSS, Bootstrap and more!</p>
            </div>
            <div class="feature-box col-lg-4">
              <i class="icon fas fa-bullseye fa-4x"></i>
              <h3>Real World Experience.</h3>
              <p>Work on a project for a client, a unique way to gain experience.</p>
            </div>
            <div class="feature-box col-lg-4">
              <i class="icon fas fa-heart fa-4x"></i>
              <h3>Support Small Businesses.</h3>
              <p>Create impactful projects to give back to the community.</p>
            </div>
          </div>
        </section>

        <div className="container-fluid">
          <h1>Projects</h1>
            <Card className="project-card">
              <Card.Body>
                <iframe height="90%" src="https://opensky.studio/"></iframe>
                <Card.Title className="project-title">Website for Open Sky Studio</Card.Title>
              </Card.Body>
            </Card>
        </div>
        <div className="container-fluid discord">
          <h1>Join Our Discord!</h1>
          <p>Join our discord to get the latest news, updates, and announcements from the club.</p>
          <p>Communicate with your team easily through our discord!</p>
          <Button variant="secondary" href="https://discord.gg/FNgd38xhtf">Join Our Discord</Button>{' '}
        </div>
      </div>
    );
  }

  export default HomePage;