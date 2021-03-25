import React from 'react';
import NavBar from './NavBar.jsx';
import MovieList from './MovieList.jsx';



class App extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
          <NavBar />
          <MovieList data ={[
              {title: 'Mean Girls'},
              {title: 'Hackers'},
              {title: 'The Grey'},
              {title: 'Sunshine'},
              {title: 'Ex Machina'},
          ]}/>

        </div>
    )
  }
}

export default App;

//todo - create a navbar page and link to app ++
// todo - create a movielist component and link to app