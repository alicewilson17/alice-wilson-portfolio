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
            <p className="about-text">Hi! I'm Alice, a recent career changer to the world of Software Development. I have a strong background in science, technology
and law stemming from my experience as a Patent Attorney.</p>
<p className="about-text">I enjoy
thinking creatively to solve real-world problems and seeing projects come to life. Eager to leverage my diverse skillset and passion for innovation, I am seeking an opportunity that will keep me constantly learning whilst adding value to
both individuals and businesses.</p>
            
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
              <p>Northcoders Software Engineering Bootcamp</p>
              <p>Code First Girls Javascript Kickstarter</p>
            </div>
            <div class="details-container">
              <img
                src="./img/education-icon.png"
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>
                MChem Chemistry (1st Class Hons) - Durham University <br />
                MSc Management of Intellectual Property (Distinction) - Queen
                Mary University of London
              </p>
            </div>
          </div>
    </section>
  );
}
