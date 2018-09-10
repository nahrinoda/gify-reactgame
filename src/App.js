import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";

//class = special function
class App extends Component {
  // Setting this.state.friends to the friends json array -- state is the place where the data comes from
  state = {
    friends,
    score: 0,
    highScore: 0,
    msg: "",
    classArr:[]
  };

  restartGame = () => {
    //if the current score is higher than highScore, reset highScore
    if (this.state.score > this.state.highScore){
      this.setState({highScore: this.state.score});
    }

    //set each card's count, the score back to 0 and remove shake class
    this.state.friends.forEach(friends => {friends.count = 0;})
    this.setState({score: 0});
    this.removeShake();
  }

  //removes shake class from cards and guess msg from header
  removeShake = () => {
    setTimeout(function(){this.state.classArr.pop("shake")}.bind(this), 1000);
    setTimeout(function(){this.setState({msg: ""})}.bind(this), 1000);
  }

  handleGuesses = id => {
    //search through friends to find the one clicked 
    for (var i=0; i< this.state.friends.length; i++){
      if (friends[i].id === id){
        //if the current card count=1 (used as a flag), restart the game
        if (friends[i].count === 1){
          this.setState({msg: "Ooops! You guessed Wrong!"});
          //add shake class; signifies a missed guess
          this.state.classArr.push("shake");
          this.restartGame();
        }
        //otherwise, set the card count to 1
        else {
          this.setState({msg: "Yeppyyy! You guessed correctly!"});
          friends[i].count = 1;
          //update the score +1
          this.setState({score: this.state.score + 1});
          // shuffle cards using array.sort randomly
          this.state.friends.sort(function(a, b){return 0.5 - Math.random()});
          break;          
        }
      }
    }
  }
 
  render() {
    return (
      <Wrapper>
        {/* feed properties into the header: score, high score, message */}
        <Header score={this.state.score} highScore = {this.state.highScore} msg = {this.state.msg}>Friends List</Header>
        
        {/* Map over this.state.friends and render a FriendCard component for each friend object;
        feed properties into the card: id, key, image, type(shake class or no classes), the handleGuesses function */}
        {this.state.friends.map(friend => (
          <FriendCard
            handleGuesses={this.handleGuesses}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            type={this.state.classArr}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;