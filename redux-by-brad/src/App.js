import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import Posts from './components/Po/Posts';
import PostForm from './components/Po/PostForm';

import store from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
