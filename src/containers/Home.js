import React, { useState } from 'react';
import ProfessionalExperience from '../components/ProfessionalExperience';
import TechnicalStuff from '../components/TechnicalStuff';

import '../styles/Home.css';
import tabsData from '../data/infoTabs';

function Home() {

      const [tabName, setTabName] = useState('About Me');

      const renderTabData = () => {
            switch(tabName) {
                  case 'Technical Stuff':
                        return <TechnicalStuff />;
                  case 'Professional Experience': 
                  default: 
                        return <ProfessionalExperience />
            }
      }

      return (
            <div className="home">
                  <div className="home-header">
                        <img className="home-header-img" src={require('../images/bg.png')} />
                  </div>
                  <div className="home-info">
                        <div className="home-info-image">
                              <img className="info-image" src={require('../images/myself.png')} />
                        </div>
                        <div className="home-info-data">
                              <div className="name">
                                    <p>Jagrutee Banda</p>
                              </div>
                              <div className="about-me">
                                    <p>
                                          An artist and a techie! A creative and diligent mind with immense love for art and innovative ways of coding. Listens to music and dance, goes trekking, does gardening and is loving digital art recently and writes occasionally. Likes to have an optimistic view about life, sometimes a philosopher, a self-learner and a good team-worker!
                                    </p>
                              </div>
                        </div>
                  </div>
                  <div className="home-info-tabs">
                        {
                              tabsData.map((item, i) =>
                                    <div className="info-tab" 
                                          style={{ 
                                                backgroundColor: (tabName === item.name) ? 'blue' : '#fff',
                                                color: (tabName === item.name) ? '#fff' : '#000'
                                          }}
                                          onClick={() => setTabName(item.name)}
                                    >
                                          <span className="tab-name">{item.name}</span>
                                    </div>
                              )
                        }
                  </div>
                  <div className="info-data">
                        {
                              renderTabData()
                        }
                  </div>
            </div>
      );
}

export default Home;