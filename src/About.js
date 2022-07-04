import React from 'react'
import man1 from "./assets/man1.jpg";
import man2 from "./assets/man2.jpeg";
import man3 from "./assets/man3.png";
import man4 from "./assets/man4.pnjpg";


function About() {
  return (
    <div>
        <div class="about-section">
  <h1>About Us Page</h1>
  <p>ABOUT US


The Team

The Event Planner team is made up of a mix of people. Eng. Desmond takes care of corporate events. Mr. Edwin is the wedding guru. Mr. Cliff is the creative one. Mr.Isreal is the merchandise expert. In addition to this group of people, a large support team helps out in everything the company does, in office work to on-site logistics planning. One thing we can truly say about our team is that we are very passionate about our job!

How can we help you organise a successful event?

1.      A-Z event planning. We shall work on your event from beginning to end. You may relax and leave all the logistics to us.

2.      Venue Consultancy. Finding a venue in Malta is not as easy as people make it sound. While offering an extensive list of venues on our website, we know and have contact with hundreds of venues around the Maltese Islands, one of which will most definitely fit into your event scenario.

3.      We organise: product launches, gala receptions, seminars and conferences, staff events, awards nights, team building events, B2B and B2C networking events, weddings and more.

4.      We give you more: transport services, photography, videography, furniture rental, entertainment, sound and lighting, branding, security, RSVP communication and follow up, staff, sms/email marketing, handle VIPs, catering and any event-related consultancy.

*A fee applies only when client requests specific human hours and help, and is done by agreement with the client.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 class="text-align:center">Our Team</h2>
<div class="row">
<div class="column">
    <div class="card">
      <img src={man1}alt="Cliff" width ={100} />
      <div class="container">
        <h2>Eng. Fonkwe Cliff </h2>
        <p class="title">Software Developer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={man2} alt="Mike" width = {100} / >
      <div class="container">
        <h2>Eng. Desmond Tekum</h2>
        <p class="title">Art Director and Software Developer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={man3}alt="Isreal" width ={100} />
      <div class="container">
        <h2>Mr. Israel </h2>
        <p class="title">Designer</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src={man4}alt="Edwin" width ={100} />
      <div class="container">
        <h2>Mr. Edwin </h2>
        <p class="title">Designer</p>
      </div>
    </div>
  </div>

</div>
    </div>
  )
}

export default About