import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
        <p className="section__text__p1">Explore my</p>
      <h1 className="title">Projects</h1>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
                <p className="text-md">{item.tech}</p>
              </div>
              <p className="text-sm portfolio--link">
                <a href={item.link} target="_blank">Github</a>
    
               {item.demo ? <a href={item.demo
                } target="_blank">Demo</a>  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}