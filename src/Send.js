import React, { Component } from "react";
import Check from "./Check";
import data from "./MOCK_DATA.json";
import Form, { temp } from "./Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Send extends React.Component
{
  state = { characters: data, val: false };
  removeCharacter = index => {
    const { characters } = this.state;
    console.log(characters, index);
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };
  
  ch = () => {
    this.setState({ val: true });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render()
  {
    const { characters } = this.state;
    var f = this.state.val;
    Object.keys(temp).length !== 0 ? data.push(temp) : console.log(temp);
    if (f) {
      return (
        <Router>
          <div>
            <Switch>
              <Route>
                <Form handle Submit={this.handleSubmit} />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <div className="container">
          <button onClick={this.ch}>Add Data</button>

          <Check
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
        </div>
      );
    }
  }
}

export default Send;
