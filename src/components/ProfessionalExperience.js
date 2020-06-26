import React from 'react';

import experienceData from '../data/experienceData';
import '../styles/ProfessionalExperience.css';

function ProfessionalExperience() {
      return (
            <div className="professional-experience">
                  {
                        experienceData.map((item, i) =>
                              <div key={`company_${item.companyName}`} className="experience-data">
                                    <div className="company-image">
                                          <img className={`${item.company}-logo`} src={require(`../images/${item.imageName}`)} alt={`${item.companyName}`} />
                                    </div>
                                    <div className="company-data">
                                          <p className="company-name">{item.companyName}</p>
                                          <p className="company-period">{item.period}</p>
                                          <p className="company-duration">{item.duration}</p>
                                          <p className="company-role">{item.role}</p>
                                    </div>
                              </div>
                        )
                  }
            </div>
      );
}

export default ProfessionalExperience;