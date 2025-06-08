import React from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import ProfileImage from '../assets/image4555.png';
import Resume from '../assets/PriyanshuResumee.pdf'

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={ProfileImage} alt="Priyanshu Burman profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Priyanshu</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <a
            href={Resume}
            download="Priyanshu burman frontend resume.pdf"
            className="btn btn-color-1"
          >
            Download CV
          </a>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = './#contact')}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              (window.location.href =
                'https://www.linkedin.com/in/priyanshu-burman-302a60323/')
            }
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon"
            onClick={() =>
              (window.location.href = 'https://github.com/Ankit123-burman')
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
