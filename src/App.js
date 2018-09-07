import React, { Component } from 'react';
import Deck from './Deck';
import './App.css';

class App extends Component {

  state = {
    icons: ['fa fa-diamond', 'fa fa-bicycle', 'fa fa-bolt', 'fa fa-paper-plane-o',
            'fa fa-anchor', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bomb'],
  }

  shuffleCards = (arr) => {	

     let shuffledCards = [], randomIcon; 
     while(arr.length) { 
	   randomIcon = arr[Math.floor(Math.random() * arr.length)];
       shuffledCards.push(randomIcon); 
       arr.splice(arr.indexOf(randomIcon), 1);
      }

      return shuffledCards
  }

  render() {
  	const { icons } = this.state;
    return (
     <Deck icons={ this.shuffleCards(icons.concat(icons))/*.concat(this.shuffleCards(icons))*/ }/>
    );
  }
}

export default App;
