import React from 'react'
import ExploreCard from './ExploreCard/ExploreCard'
import './Explore.css'
import Whatshot from '@material-ui/icons/Whatshot'
import LibraryMusicOutlined from '@material-ui/icons/LibraryMusicOutlined'
import SportsEsports from '@material-ui/icons/SportsEsports'
import News from '@material-ui/icons/Announcement'
import LocalMovies from '@material-ui/icons/LocalMovies'
import Shop from '@material-ui/icons/Shop'
import Book from '@material-ui/icons/Book'
import LiveTv from '@material-ui/icons/LiveTv'
import SportsHandball from '@material-ui/icons/SportsHandball'
import VideoRow from '../VideoRow/VideoRow'

function Explore() {
	return (
		<div className='explore'>
			<div className='explore__cardbox'>
				<ExploreCard Icon={Whatshot} title='Trending' color='red' />
				<ExploreCard Icon={LibraryMusicOutlined} title='Music' color='yellow' />
				<ExploreCard Icon={SportsEsports} title='Gaming' color='orange' />
				<ExploreCard Icon={News} title='News' color='lightblue' />
				<ExploreCard Icon={LocalMovies} title='Movies' color='purple' />
				<ExploreCard Icon={Shop} title='Fashion & Beauty' color='pink' />
				<ExploreCard Icon={Book} title='Learning' color='lightgreen' />
				<ExploreCard Icon={LiveTv} title='Live' color='cyan' />
				<ExploreCard Icon={SportsHandball} title='Sports' color='lightblue' />
			</div>
			<h2 className='explore__sectionHeader'>Trending Videos</h2>
			<div className='explore__videosRow'>
				<VideoRow
					title='Sahi Khel Gaya Ladka (Storytime)'
					thumbnail='https://i.ytimg.com/vi/Jj7yqR9Kd2o/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLClQG8n3yzR_qtsYCnN8oHtJgEBPw'
					channel='Triggered Insaan'
					verified
					views='4.2M views'
					timestamp='1 day ago'
					description="Craziest Experience I've ever had.
					Instagram ► https://www.instagram.com/triggeredin...
					Facebook ► https://www.facebook.com/realtriggere...
					Game - Mirror's Edge
					Gameplay - https://youtu.be/BbHJ2fTBaXw
					Gaming Channel ► https://www.youtube.com/liveinsaan"
				/>
				<VideoRow
					title='Sahi Khel Gaya Ladka (Storytime)'
					thumbnail='https://i.ytimg.com/vi/Jj7yqR9Kd2o/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLClQG8n3yzR_qtsYCnN8oHtJgEBPw'
					channel='Triggered Insaan'
					verified
					views='4.2M views'
					timestamp='1 day ago'
					description="Craziest Experience I've ever had.
					Instagram ► https://www.instagram.com/triggeredin...
					Facebook ► https://www.facebook.com/realtriggere...
					Game - Mirror's Edge
					Gameplay - https://youtu.be/BbHJ2fTBaXw
					Gaming Channel ► https://www.youtube.com/liveinsaan"
				/>
				<VideoRow
					title='Sahi Khel Gaya Ladka (Storytime)'
					thumbnail='https://i.ytimg.com/vi/Jj7yqR9Kd2o/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLClQG8n3yzR_qtsYCnN8oHtJgEBPw'
					channel='Triggered Insaan'
					verified
					views='4.2M views'
					timestamp='1 day ago'
					description="Craziest Experience I've ever had.
					Instagram ► https://www.instagram.com/triggeredin...
					Facebook ► https://www.facebook.com/realtriggere...
					Game - Mirror's Edge
					Gameplay - https://youtu.be/BbHJ2fTBaXw
					Gaming Channel ► https://www.youtube.com/liveinsaan"
				/>
				<VideoRow
					title='Sahi Khel Gaya Ladka (Storytime)'
					thumbnail='https://i.ytimg.com/vi/Jj7yqR9Kd2o/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLClQG8n3yzR_qtsYCnN8oHtJgEBPw'
					channel='Triggered Insaan'
					verified
					views='4.2M views'
					timestamp='1 day ago'
					description="Craziest Experience I've ever had.
					Instagram ► https://www.instagram.com/triggeredin...
					Facebook ► https://www.facebook.com/realtriggere...
					Game - Mirror's Edge
					Gameplay - https://youtu.be/BbHJ2fTBaXw
					Gaming Channel ► https://www.youtube.com/liveinsaan"
				/>
				<VideoRow
					title='Sahi Khel Gaya Ladka (Storytime)'
					thumbnail='https://i.ytimg.com/vi/Jj7yqR9Kd2o/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLClQG8n3yzR_qtsYCnN8oHtJgEBPw'
					channel='Triggered Insaan'
					verified
					views='4.2M views'
					timestamp='1 day ago'
					description="Craziest Experience I've ever had.
					Instagram ► https://www.instagram.com/triggeredin...
					Facebook ► https://www.facebook.com/realtriggere...
					Game - Mirror's Edge
					Gameplay - https://youtu.be/BbHJ2fTBaXw
					Gaming Channel ► https://www.youtube.com/liveinsaan"
				/>
				<VideoRow
					title='Sahi Khel Gaya Ladka (Storytime)'
					thumbnail='https://i.ytimg.com/vi/Jj7yqR9Kd2o/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLClQG8n3yzR_qtsYCnN8oHtJgEBPw'
					channel='Triggered Insaan'
					verified
					views='4.2M views'
					timestamp='1 day ago'
					description="Craziest Experience I've ever had.
					Instagram ► https://www.instagram.com/triggeredin...
					Facebook ► https://www.facebook.com/realtriggere...
					Game - Mirror's Edge
					Gameplay - https://youtu.be/BbHJ2fTBaXw
					Gaming Channel ► https://www.youtube.com/liveinsaan"
				/>
				<VideoRow
					title='Sahi Khel Gaya Ladka (Storytime)'
					thumbnail='https://i.ytimg.com/vi/Jj7yqR9Kd2o/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLClQG8n3yzR_qtsYCnN8oHtJgEBPw'
					channel='Triggered Insaan'
					verified
					views='4.2M views'
					timestamp='1 day ago'
					description="Craziest Experience I've ever had.
					Instagram ► https://www.instagram.com/triggeredin...
					Facebook ► https://www.facebook.com/realtriggere...
					Game - Mirror's Edge
					Gameplay - https://youtu.be/BbHJ2fTBaXw
					Gaming Channel ► https://www.youtube.com/liveinsaan"
				/>
			</div>
		</div>
	)
}

export default Explore
