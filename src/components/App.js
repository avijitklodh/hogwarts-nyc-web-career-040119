import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';





class App extends Component {

state = {
  allHogs: [],
  greased: false,
  filteredHogs: [],
  selectValue: ""
}

componentDidMount(){
  this.setState(
    {
      allHogs: hogs,
      filteredHogs: hogs

    }
  )

}

 handleGrease = () => {
   const updatedHogs = this.state.allHogs.filter(
     (hog) => hog.greased
   )

   if(this.state.greased)
   {return(
     this.setState({
       filteredHogs: this.state.allHogs,
       greased: this.state.greased ? false : true
   }))}
   else{
     return(
       this.setState({
         filteredHogs: updatedHogs,
         greased: this.state.greased ? false : true
                      })
                    )}
}

nameSort = () => {
  let sortByName = this.state.allHogs.sort(function(a,b){return a.name.localeCompare(b.name)})
  return this.setState({
    filteredHogs: sortByName
  })
  // // this.setState()
}

weightSort = () => {

let updateweight = this.state.filteredHogs.sort((a,b) => {return a.weight - b.weight })

// return console.log(updateAlph)
  return this.setState({
    filteredHogs: updateweight
  })
}

handleSort = (event) => {

  console.log(event.target.value === "name")

return (event.target.value === "name") ? this.nameSort() : this.weightSort()

}

  render() {
    return (
      <div className="App">
        <button onClick= {this.handleGrease} > Greased? </button>
          <div>


                <button onClick = {this.handleSort} value = "name"> Name </button>
                <button onClick = {this.handleSort} value = "weight" > Weight </button>


          </div>

          < Nav allHogs= {this.state.filteredHogs }/>

      </div>
    )
  }
}

export default App;
