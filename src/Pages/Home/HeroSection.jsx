export default function HeroSection() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      }
    return (
    
         <section id="profile">
         <div className="section__text">
           <h1 className="title">Hiya! I'm Alice.</h1>
           <p className="section__text__p2">I'm a creative, empathetic and enthusiastic early professional with a diverse background spanning science, law and tech.</p>
           <div className="btn-container">
           <button className="btn btn-color-2" onClick={() => {openInNewTab('./img/cv.pdf')}}>Download CV</button>
                      
                    </div>
                   <div id="socials-container">
                      <img src="./img/linkedin.png" alt="my linkedin profile" className="icon" onClick={() => {openInNewTab("https://www.linkedin.com/in/alice-g-wilson/")}}></img>
                      <img src="./img/github.png" alt="my github profile" className="icon" onClick={() => {openInNewTab("https://github.com/alicewilson17")}}></img>
                   </div>
            
         </div>
         </section>
    )
}