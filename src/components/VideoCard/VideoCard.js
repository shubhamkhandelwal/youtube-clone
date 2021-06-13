import React from 'react'
import { Avatar } from '@material-ui/core'
import './VideoCard.css'

function VideoCard({
	thumbnail,
	title,
	channel,
	views,
	timestamp,
	channelImage,
}) {
	return (
		<div className='videoCard'>
			<img alt='thumbnail' src={thumbnail} className='videoCard__thumbnail' />
			<div className='videoCard__info'>
				<Avatar className='videoCard__avatar' src={channelImage} />
				<div className='videoCard__text'>
					<h4> {title} </h4>
					<p> {channel} </p>
					<p>
						{views} * {timestamp}
					</p>
				</div>
			</div>
		</div>
	)
}

export default VideoCard
