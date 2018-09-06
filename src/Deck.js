import React, { Component } from 'react';

import Card from './Card';

class Deck extends Component {
  render() {
    console.log(this.props.icons)
  	return(
  	  <div className="deck">
          {this.props.icons.map((icon,i) => {
            return(
              <div key={i} className="card"><i className={icon} /></div>
            )  
          })}   
  	  </div>
  	);
  }
}

export default Deck;