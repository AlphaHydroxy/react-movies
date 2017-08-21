import React from 'react';
import FilmList from './FilmList.jsx';
import FilmForm from './FilmForm.jsx';

export default class FilmBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{
          id: 1,
          title: "Sausage Party",
          time: "16:45"
          },
          {
            id: 2,
            title: "Gaurdians of the Galaxy 2",
            time: "18:00"
          }

      ]
    }
  }

  handleFilmSubmit(film) {
    film.id = Date.now()
    let newFilms = this.state.data.concat([
      film])
    this.setState({data: newFilms})
  }

  render() {
    return (
      <div className="film-box">
        <h2>UK Opening This Week</h2>
        <FilmForm onFilmSubmit={this.handleFilmSubmit.bind(this)} />
        <h2>Films</h2>
        <FilmList data={this.state.data}/>
      </div>
      );
    }
}