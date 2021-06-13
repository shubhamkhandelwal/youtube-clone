import React from 'react'
import './Header.css'
import Menu from '@material-ui/icons/Menu'
import Search from '@material-ui/icons/Search'
import VideoCall from '@material-ui/icons/VideoCall'
import Apps from '@material-ui/icons/Apps'
import Notifications from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<Menu />
				<Link to='/home'>
					<img
						className='header__logo'
						alt='youtube-icon'
						src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
					/>
				</Link>
			</div>
			<div className='header__input'>
				<input placeholder='Search' />
				<Search className='header_search' />
			</div>
			<div className='header__right_icons'>
				<VideoCall className='header__icons' />
				<Apps className='header__icons' />
				<Notifications className='header__icons' />
				<Avatar
					alt='shubham Khandelwal'
					src='https://yt3.ggpht.com/yti/ANoDKi4w9Jz9c-xPz3SCphnzhswZ7ID_EjnvdXO4gwA7AQ=s88-c-k-c0x00ffffff-no-rj-mo'
					className='header__icons'
				/>
			</div>
		</div>
	)
}

export default Header
