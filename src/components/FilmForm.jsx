import React from 'react';

export default class FilmForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      time: ""
    }
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value})
  };

  handleTimeChange(event) {
    this.setState({time: event.target.value})
  };

  handleSubmit(event) {
    event.preventDefault()
    let title = this.state.title.trim();
    let time = this.state.time.trim();
    if (!title || !time) {
      return;
    }
    this.props.onFilmSubmit({title: title, time: time})
    this.setState({title: "", time: ""})
  }

  render() {
    return (
      <form className="film-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Enter a film" value={this.state.title} onChange={(event) => {this.handleTitleChange(event)}}></input>
        <input type="text" placeholder="Enter time" value={this.state.time} onChange={(event) => {this.handleTimeChange(event)}}></input>
        <input type="submit" value="Add" />
        </form>
      )
  }
}








