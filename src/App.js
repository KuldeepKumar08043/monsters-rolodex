import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchBox/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "hello",
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log('filteredMonsters - ', filteredMonsters);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange} />
        <CardList monsters = {filteredMonsters}></CardList>        
      </div>
    )
  }
}

export default App;