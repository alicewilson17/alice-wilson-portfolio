import data from "../../data/index.json";

// export default function MyPortfolio() {
//   return (
//     <section className="portfolio--section" id="MyPortfolio">
//       <div className="portfolio--container-box">
//         <div className="portfolio--container">
//         <p className="section__text__p1">Explore my</p>
//       <h1 className="title">Projects</h1>
//         </div>
//       </div>
//       <div className="portfolio--section--container">
//         {data?.portfolio?.map((item, index) => (
//           <div key={index} className="portfolio--section--card">
//             <div className="portfolio--section--img">
//               <img src={item.src} alt="Placeholder" />
//             </div>
//             <div className="portfolio--section--card--content">
//               <div>
//                 <h3 className="portfolio--section--title">{item.title}</h3>
//                 <p className="text-md">{item.description}</p>
//                 <p className="text-md">{item.tech}</p>
//               </div>
//               <p className="text-sm portfolio--link">
//                 <a href={item.link} target="_blank">Github</a>
    
//                {item.demo ? <a href={item.demo
//                 } target="_blank">Demo</a>  : ""}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


export default function MyPortfolio() {
  return (
    <section className="portfolio-section" id="MyPortfolio">
      <div className="portfolio-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio-card">
            <img src={item.src} alt={item.title} className="portfolio-img" />
            <div className="portfolio-content">
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-desc">{item.description}</p>
              <p className="portfolio-tech">{item.tech}</p>
              <div className="portfolio-links">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {item.demo && (
                  <a href={item.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}