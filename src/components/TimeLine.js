import React from 'react';

import '../styles/TimeLine.css';

function TimeLine(props) {
  return (
    <div className="timeline">
      {
        props.content.map((item, i) =>
          <div className={(i % 2 === 0) ? "container left" : "container right"} key={`timeline_container_${i}`}>
            <div id={item.id} className="content">
              <h2>{item.companyName || item.institutionName}</h2>
              <p>{item.period}</p>
              <p>{item.duration}</p>
              <p>{item.role}</p>
              {
                (item.highlights) &&
                <ul>
                  {
                    item.highlights.map((highlight, j) =>
                    <li key={`highlight_${j}`}>{highlight}</li>
                    )
                  }
                </ul>
              }
            </div>
          </div>
        )
      }
    </div>
  );
}

export default TimeLine;