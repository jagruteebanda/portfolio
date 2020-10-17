import React from 'react';
import experienceData from '../data/experienceData';
import educationData from '../data/educationData';

import TimeLine from './TimeLine';
import '../styles/ProfessionalExperience.css';

function ProfessionalExperience() {
	return (
		<div className="professional-experience">
			<div className="title-tab">
				<span>{'Professional Experience'}</span>
			</div>
			<TimeLine content={experienceData} />
			<div className="title-tab">
				<span>{'Education'}</span>
			</div>
			<TimeLine content={educationData} />
		</div>
	);
}

export default ProfessionalExperience;
