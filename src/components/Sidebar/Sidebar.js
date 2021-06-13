import React, { useState } from 'react'
import SideBarRow from './SideBarRow'
import Home from '@material-ui/icons/Home'
import Explore from '@material-ui/icons/Explore'
import Subscriptions from '@material-ui/icons/Subscriptions'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'
import OndemandVideo from '@material-ui/icons/OndemandVideo'
import WatchLater from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandLessOutlined from '@material-ui/icons/ExpandLessOutlined'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
	let [selected, setSelected] = useState('home')
	return (
		<div className='sidebar'>
			<Link
				to='/home'
				className='sidebar__links'
				id='home'
				onClick={(e) => setSelected(e.target.innerText)}>
				<SideBarRow selected={selected === 'Home'} Icon={Home} title='Home' />
			</Link>
			<Link
				to='/explore'
				className='sidebar__links'
				id='explore'
				onClick={(e) => setSelected(e.target.innerText)}>
				<SideBarRow
					selected={selected === 'Explore'}
					Icon={Explore}
					title='Explore'
				/>
			</Link>
			<Link
				to='/subscriptions'
				className='sidebar__links'
				id='subscriptions'
				onClick={(e) => setSelected(e.target.innerText)}>
				<SideBarRow
					selected={selected === 'Subscriptions'}
					Icon={Subscriptions}
					title='Subscriptions'
					id='home'
				/>
			</Link>
			<hr />
			<Link
				to='/library'
				className='sidebar__links'
				id='library'
				onClick={(e) => setSelected(e.target.innerText)}>
				<SideBarRow
					selected={selected === 'Library'}
					Icon={VideoLibrary}
					title='Library'
				/>
			</Link>
			<Link
				to='/history'
				className='sidebar__links'
				id='history'
				onClick={(e) => setSelected(e.target.innerText)}>
				<SideBarRow
					selected={selected === 'History'}
					Icon={History}
					title='History'
				/>
			</Link>
			<Link
				to='/yourvideos'
				className='sidebar__links'
				id='yourvideos'
				onClick={(e) => setSelected(e.target.innerText)}>
				<SideBarRow
					selected={selected === 'Your videos'}
					Icon={OndemandVideo}
					title='Your videos'
				/>
			</Link>
			<Link
				to='/watchlater'
				className='sidebar__links'
				id='watchlater'
				onClick={(e) => setSelected(e.target.innerText)}>
				<SideBarRow
					selected={selected === 'Watch later'}
					Icon={WatchLater}
					title='Watch later'
				/>
			</Link>
			<Link
				to='/likedvideos'
				className='sidebar__links'
				id='likedvideos'
				onClick={(e) => setSelected(e.target.innerText)}>
				<SideBarRow
					selected={selected === 'Liked videos'}
					Icon={ThumbUpAltOutlined}
					title='Liked videos'
				/>
			</Link>
			<Link
				to='/showmore'
				className='sidebar__links'
				id='showmore'
				onClick={(e) => setSelected(e.target.innerText)}>
				<SideBarRow
					selected={selected === 'Show more'}
					Icon={ExpandLessOutlined}
					title='Show more'
				/>
			</Link>
			<hr />
		</div>
	)
}
