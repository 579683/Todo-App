import React, { Component } from "react";
import { render } from "react-dom";
import ParticlesBg from "particles-bg";
import './App.scss';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import User from './components/User'
import AddNewTodo from './components/AddNewTodo'
import Calender from './components/Calendar'
import Projects from './components/Projects'
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'





class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="App">
        <Sidebar>
          <User />
          <AddNewTodo />
          <Calender />
          <Projects />
        </Sidebar>
        <Main>
          <Todos />
          <EditTodo />
          {/* <ParticlesBg type="random" bg={true}/> */}
        </Main>
      </div>
    );
  }
}

export default App;
