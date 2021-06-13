import React from 'react'
import './VideoRow.css'
import CheckCircle from '@material-ui/icons/CheckCircle'

function VideoRow({
	title,
	thumbnail,
	verified,
	channel,
	views,
	description,
	timestamp,
}) {
	return (
		<div className='videoRow'>
			<div className='videoRow__img'>
				<img src={thumbnail} alt='channel' className='videoRow__thumbnail' />
			</div>
			<div className='videoRow__info'>
				<h4 className='videoRow__title'>{title}</h4>
				<p className='videoRow__text'>
					{channel} {verified && <CheckCircle />} {views} * {timestamp}{' '}
				</p>
				<div className='videoRow__description'>{description}</div>
			</div>
		</div>
	)
}

export default VideoRow
