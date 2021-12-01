import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

import './index.css';

class App extends React.Component {
  state = {
    currentUser: "kevkenshi-max",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/59786933?v=4",
      html_url: "https://github.com/kevkenshi-max",
      name: "Kevin Lee",
      login: "kevkenshi-max",
      public_repos: 94,
      followers: 2,
    },
    followers: [
      {
        login: "krystleM26",
        avatar_url: "https://avatars.githubusercontent.com/u/61578720?v=4",
        html_url: "https://github.com/krystleM26"
      },
      { 
        login: "Jmz0127",
        avatar_url: "https://avatars.githubusercontent.com/u/45055471?v=4",
        html_url: "https://github.com/Jmz0127"
      }
    ]
  }


  render() {
    return(
    <div>
      <h1>GITHUB INFO</h1>
      <form>
        <input placeholder="Github Handle" />
        <button>Search</button>
      </form>

      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers}/>


    </div>);
  }
}

export default App;
