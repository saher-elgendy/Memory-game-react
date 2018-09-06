import React, { Component } from 'react';
import Deck from './Deck';
import './App.css';

class App extends Component {

  state = {
    icons: ['fa fa-diamond', 'fa fa-bicycle', 'fa fa-bolt', 'fa fa-paper-plane-o',
            'fa fa-anchor', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bomb'],
  }

  shuffleCards = (arr) => {	

    let shuffledCards = [];
    let randomIcon;

    while(shuffledCards.length < arr.length){
      randomIcon = arr[Math.floor(Math.random() * arr.length)];
      if(!shuffledCards.includes(randomIcon)) shuffledCards.push(randomIcon);
    }
     return shuffledCards;
  }
  

  render() {
  	const { icons } = this.state;
    return (
     <Deck icons={ this.shuffleCards(icons).concat(this.shuffleCards(icons)) }/>
    );
  }
}

export default App;
