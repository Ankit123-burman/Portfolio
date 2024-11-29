import React from 'react'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'

function Contect() {
  return (
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:priyanshuburman540@gmail.com">priyanshuburman540@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/priyanshu-burman-302a60323/">LinkedIn</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contect