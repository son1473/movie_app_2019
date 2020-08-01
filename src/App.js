import React from "react";
import axios from "axios";
//import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //데이터를 가져오기 위한 것. 영화 데이터가 존재함. get 함수는 시간이 오래 걸림.
    // 그래서 자바스크립트에게 this 함수가 끝날 때까지 시간이 걸릴 수 있다는 걸 인지 시켜줘야함.
    //async는 비동기 await 한 것을 기다려라.
    this.setState({ movies, isLoading: false });
    // state 의 상태를 변경할 것임. state.movies 배열에 가져온 movies 데이터 넣을 것 + isLoading 값 변경
  };

  componentDidMount() {
    this.getMovies();
  }
  // {/* 함수 만들고, delay*/}
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "we are ready"}</div>;
  }
}

export default App;
