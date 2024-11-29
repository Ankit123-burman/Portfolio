import React from 'react'
import arrow from '../assets/arrow.png'
import avatar from '../assets/image444.png'
import education from '../assets/education.png'
function About() {
  return (
    <section id="about">
    <p class="section__text__p1">Get To Know More</p>
    <h1 class="title">About Me</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <img
          src={avatar}
          alt="Profile picture"
          class="about-pic"
        />
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <img
              src={education}
              alt="Education icon"
              class="icon"
            />
            <h3>Education</h3>
            <p>Bachelors In Computer Application Degree</p>
          </div>
        </div>
        <div class="text-container">
          <p>
          Hi, I'm Priyanshu Burman, a passionate tech enthusiast and aspiring developer currently pursuing a BCA degree. With a strong foundation in HTML, CSS, JavaScript, React, and Tailwind, 
          I specialize in frontend development and have hands-on experience building dynamic web applications. Currently, I am expanding my skills in backend development using Node.js, exploring 
          how to create robust and scalable server-side applications. Beyond coding, I’m an avid learner, always looking to enhance my skills and contribute to impactful projects."
          </p>
        </div>
      </div>
    </div>
    <img
      src={arrow}
      alt="Arrow icon"
      class="icon arrow"
      onclick="location.href='./#experience'"
    />
  </section>
  )
}

export default About