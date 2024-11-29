import React from 'react';
import Arrow from '../assets/arrow.png';
import news from '../assets/news.png';
import laundry from '../assets/laundry.png';
import ecom from '../assets/ecom.png';

function Project() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* News App */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src={news} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">News App</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://github.com/Ankit123-burman/NewsApp-vercel')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://news-app-vercel-dun.vercel.app/')}
              >
                Live Demo
              </button>
            </div>
          </div>

          {/* E-commerce UI */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src={ecom} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">E-commerce UI</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://github.com/Ankit123-burman/ecom_ui_clone')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://ecom-ui-clone.vercel.app/')}
              >
                Live Demo
              </button>
            </div>
          </div>

          {/* Laundry Page */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src={laundry} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Laundry Page</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://github.com/Ankit123-burman')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = 'https://extraordinary-moonbeam-f36c74.netlify.app/')}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#contact')}
      />
    </section>
  );
}

export default Project;
