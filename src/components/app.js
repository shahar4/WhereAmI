import React, { Component } from 'react';
import LoadLocation from './load_location';
import ArticlesList from './articles_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoadLocation />
        <ArticlesList />
      </div>
    );
  }
}
