export default function HeroSection() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      }
    return (
    
         <section id="profile">
         <div className="section__pic-container">
           <img src="./img/headshot.png" alt="Alice Wilson profile picture" class="hero-pic"/>
         </div>
         <div className="section__text">
           <p className="section__text__p1">Hello, I'm</p>
           <h1 className="title">Alice Wilson</h1>
           <p className="section__text__p2">Full-stack Developer</p>
           <div className="btn-container">
           <button className="btn btn-color-2" onClick={() => {openInNewTab('./img/alicewilson-cv.pdf')}}>Download CV</button>
                      
                    </div>
                   <div id="socials-container">
                      <img src="./img/linkedin.png" alt="my linkedin profile" className="icon" onClick={() => {openInNewTab("https://www.linkedin.com/in/alice-g-wilson/")}}></img>
                      <img src="./img/github.png" alt="my github profile" className="icon" onClick={() => {openInNewTab("https://github.com/alicewilson17")}}></img>
                   </div>
            
         </div>
         </section>
    )
}