export default function ContactMe() {
return (
    <section id="Contact">
        <p className="section__text__p1">
            Get In Touch
        </p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
            <div className="contact-info-container">
                <img src="./img/email.png" alt="email icon" className="icon contact-icon email-icon"/>
                <p><a href="mailto:alice.g.wilson@hotmail.co.uk">alice.g.wilson@hotmail.co.uk</a></p>
            </div>
            <div className="contact-info-container">
                <img src="./img/linkedin.png" alt="linkedin icon" className="icon contact-icon"/>
                <p><a href="https://www.linkedin.com/in/alice-wilson-156865170/" target="_blank">Connect on LinkedIn</a></p>
            </div>
        </div>
    </section>
)
}