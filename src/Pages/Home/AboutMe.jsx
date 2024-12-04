export default function AboutMe() {
  return (
    <section id="AboutMe">
      <p className="section__text__p1">Get to know more</p>
      <h1 className="title">About me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./img/aboutpic.png"
            alt="profile picture"
            class="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="text-container">
            <p className="about-text">Hi! I’m Alice, a Junior Software Engineer and former Patent Attorney with a diverse background in tech, science and law. After graduating from the Northcoders bootcamp earlier this year, I now work as a freelance developer, honing my skills in full-stack development.</p>
<p className="about-text">I'm <b>actively seeking full-time opportunities</b> in software engineering, where I can continue to grow as a developer, contribute to impactful projects, and be part of a supportive, innovative team.</p>
<p className="about-text">Through my bootcamp and freelance web development contracts, I’ve built end-to-end web and mobile applications using technologies such as JavaScript, React, React Native, Node.js, Express, HTML, CSS, and PostgreSQL. I’m eager to use my technical skills to help solve real-world problems and build solutions that improve lives.</p>
            
          </div>
          
        </div>
        
      </div>
      <div className="about-containers">
            <div className="details-container">
              <img
                src="./img/experience.png"
                alt="experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <ul>
             
              <li>Junior Software Engineer (Freelance Contract) at Tech Returners</li>
              <li>Junior Software Engineer (Freelance Contract) at Sixty Learn</li>
              </ul>
            </div>
            <div class="details-container">
              <img
                src="./img/education-icon.png"
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <ul>
        
              <li>Northcoders Software Engineering Bootcamp</li>
                <li>MSc Management of Intellectual Property (Distinction) - Queen
                Mary University of London
                </li>
                <li>MChem Chemistry (1st Class Hons) - Durham University</li>
              </ul>
            </div>
          </div>
    </section>
  );
}
