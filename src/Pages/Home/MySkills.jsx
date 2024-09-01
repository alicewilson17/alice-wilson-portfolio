import data from "../../data/index.json"
import FrontEnd from "./FrontEnd"
import BackEnd from "./BackEnd"

export default function MySkills () {
    return (
        <section className="skills--section" id="MySkills">
            <div className="skillsandtitle--container">
            <p className="section__text__p1">My current</p>
      <h1 className="title">Tech Stack</h1>

        <div className="skills--container">
<FrontEnd/>
<BackEnd/>
        </div>

            </div>
        </section>


    )
}

