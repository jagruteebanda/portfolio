import React from 'react';
import '../styles/TechnicalStuff.css';
import projectsData from '../data/projectsData';

function TechnicalStuff() {
  return (
    <div className="technical-stuff">
      {
        projectsData.map((item, i) =>
          <div className="project-info" key={`project_info_${i}`}>
            <img className="project-img" src={require('../images/project-bg.png')} alt={item.projectName} />
            <div className="project-data">
              <span className="project-name">{item.projectName}</span>
              <div className="project-tech">
                {
                  item.technologiesUsed.split(', ').map((i) =>
                    <div key={`tech_${i}`} className="tech-tab">{i}</div>
                  )
                }
              </div>
              <p className="project-description">{item.projectDescription}</p>
              <div className="project-button">{'View more'}</div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default TechnicalStuff;
