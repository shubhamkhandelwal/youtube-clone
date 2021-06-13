import React from 'react'
import './ExploreCard.css'

function ExploreCard({ title, Icon, color }) {
	return (
		<div className='explore-card '>
			<Icon className='explore-card__icon' style={{ color: color }} />
			<div className='explore-card__text'>{title}</div>
		</div>
	)
}

export default ExploreCard
