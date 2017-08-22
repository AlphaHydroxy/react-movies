import React from 'react';
import Film from './Film.jsx';

export default class FilmList extends React.Component {
  render() {

    let filmNodes = this.props.data.map((film) => {
      return (
        <Film title={film.title} key={film.id}>
          {film.time}
        </Film>
      );
    });

    return (
      <div className="film-list">
        {filmNodes}
      </div>
      );
  }
}