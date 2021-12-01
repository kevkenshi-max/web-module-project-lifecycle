import React from 'react';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>GITHUB INFO</h1>
      <form>
        <input placeholder="Github Handle" />
        <button>Search</button>
      </form>

      <div id="UserCard">
        <img width="400px" src="https://avatars.githubusercontent.com/u/59786933?v=4" />
        <a target="_blank" href="https://github.com/kevkenshi-max"><h3>Kevin Lee</h3></a>
        <p>(klee)</p>
        <p>Total Repos: 94</p>
        <p>Total Followers: 2</p>
      </div>

      <div id="followers">
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/45055471?v=4" />
          <a target="_blank" href="https://github.com/Jmz0127"><p>Jmz0127</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/61578720?v=4" />
          <a target="_blank" href="https://github.com/krystleM26"><p>krystleM26</p></a>
        </div>

      </div>

    </div>);
  }
}

export default App;
