import React from 'react';
import Search from './Components/Search';
import List from './Components/List';

class App extends React.Component {

	constructor() {
    super();
    this.state = {
      gifs: [],
    loading:true
    };
  } 
componentDidMount(){
  this.performSearch();
}

	performSearch =(query)=>{
	    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ gifs: responseData.data , loading:false})
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

	}
	render(){
		console.log(this.state.gifs);
		return(
			<div>
      		  <div className="main-header">
        		  <div className="inner">
       		     	<h1 className="main-title">Express Your Mood</h1>
        	    	<Search onSearch={this.performSearch}/>    
        	     </div>   
      	    </div>    
        <div className="main-content">
      {
        (this.state.loading)
        ?<p>Loading...</p>
        : <List data={this.state.gifs} />
      }
         
        </div>
      </div>
		)
	}
}
export default App;