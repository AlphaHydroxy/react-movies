import React from 'react';

export default class Film extends React.Component {
  render() {
    return (
      <div className="title">
        <h4 className="movie-title">{this.props.title}</h4>
        <h5>{this.props.children}</h5>
      </div>
      );
  }
}