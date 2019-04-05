import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage"/>
        </Helmet>
        HomePage content
      </div>
    );
  }
}

export default HomePage;