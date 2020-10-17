import React from 'react';

import '../styles/TimeLine.css';

function TimeLine(props) {
  return (
    <div class="timeline">
      {
        props.content.map((item, i) =>
          <div className={(i % 2 === 0) ? "container left" : "container right"}>
            <div id={item.id} className="content">
              <h2>{item.companyName || item.institutionName}</h2>
              <p>{item.period}</p>
              <p>{item.duration}</p>
              <p>{item.role}</p>
              {
                (item.highlights) &&
                <ul>
                  {
                    item.highlights.map((highlight) =>
                    <li>{highlight}</li>
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