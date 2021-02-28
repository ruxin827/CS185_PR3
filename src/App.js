import "./App.css";
import Body from "./component/body";
import Tablist from "./component/tablist";
import { Component } from "react";
import { render } from "@testing-library/react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 1
    };
    this.changetab = (id) => {
      this.setState({
        active: id
      });
    };
  }

  render() {
    const tabs = [
      {
        id: 1,
        title: "Text"
      },
      {
        id: 2,
        title: "Image"
      },
      {
        id: 3,
        title: "Video"
      },
      {
        id: 4,
        title: "Table"
      },
      {
        id: 5,
        title: "Email"
      }
    ];

    return (
      <div className="App">
        <div className="nav-bar">
          <Tablist
            tabs={tabs}
            activetab={this.state.active}
            ctab={this.changetab}
          />
        </div>
        <div className="main-body">
          <Body activetab={this.state.active} />
        </div>
      </div>
    );
  }
}

export default App;
