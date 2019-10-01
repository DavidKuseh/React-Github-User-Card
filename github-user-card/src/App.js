import React from 'react';
import './App.css';
import axios from 'axios';
import GithubCard from './components/GithubCard';
import GithubList from './components/GithubList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users : {},
      followers: []
    };
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/DavidKuseh")
    .then(res => {
      this.setState({ users: res.data })
    })
    .catch(err => console.log(err));

    axios.get("https://api.github.com/users/DavidKuseh/followers")
    .then(res => {
      this.setState({ followers: res.data })
    })
    .catch(err => console.log(err));
  }

  render() {
    
    return (
      <div className="App">
        <div>
         <GithubCard users = {this.state.users} />
         {this.state.followers.map(person => <GithubList key={person.id} login={person.login}  />)}
        </div>
      </div>
    );
  }
}


export default App;
