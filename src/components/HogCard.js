import React from 'react'



class HogCard extends React.Component {

state = {
  isClicked: false
}

clickHandler = (event) => {
  return this.setState( {
    isClicked: this.state.isClicked? false : true
  } )
}

  render(){
	   return(
       // <div>
       // Renders HogCard
       // </div>
    <div onClick = {this.clickHandler} >
    {this.props.hog.name}
      {this.state.isClicked?
        <div>
          <li> Specialty:
          {this.props.hog.specialty}
          </li>
          <li>Greased:
          {this.props.hog.greased}
          </li>
          <li>weight:
          {this.props.hog.weight}
          </li>
         </div>
        : <span></span>
      }
    </div>

    )
  }
}

export default HogCard
