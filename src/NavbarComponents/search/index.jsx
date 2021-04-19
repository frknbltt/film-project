import React, { Component } from "react";
import { connect } from "react-redux";
import { getFilmsRequest } from "../../redux/films/actions";
import { Link } from "react-router-dom";
import "./index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  componentDidMount() {
    const { getFilmsRequest } = this.props;
    window.scrollTo(0, 0);
    getFilmsRequest();
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const { films } = this.props;
    const items = films.data?.filter((item) => {
      if (this.state.search == null) return item;
      else if (
        item.original_title
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      ) {
        return item;
      }
    });

    return (
      <div className="dropdown">
        <button className="dropbtn">
          <input
            type="text"
            placeholder="Film Adı Girin"
            onChange={(e) => this.searchSpace(e)}
          />
        </button>
        <div class="dropdown-content">
          {items &&
            items.length > 0 &&
            items.map((data) => {
              return (
                <Link to={`/film-project/films/${data.id}`}>
                  <ul>
                    <div>
                      <h4>{data.title}</h4>
                      <p>IMDB: {data.vote_average}</p>
                      <p>Yayın Tarihi: {data.release_date}</p>
                    </div>
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                      alt="png"
                    />
                  </ul>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getFilmsRequest: () => dispatch(getFilmsRequest()),
});
const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
