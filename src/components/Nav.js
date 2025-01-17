import piggy from '../porco.png'
import React from 'react'
import HogCard from './HogCard'

const Nav = (props) => {

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
				{props.allHogs.map((hog) => {
					console.log(HogCard)
					return < HogCard key = {hog.name} hog = {hog}/>
				})}
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav
