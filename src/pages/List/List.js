import React, { Component } from "react";
import "./List.css";
import data from "../../data.json";
import ListNews from "../../components/ListNews/ListNews";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: {},
    };
  }

  componentDidMount() {
    const { data } = this.props.location;

    this.setState({ datos: data });
  }

  render() {
    const { data } = this.props.location;

    return (
      <div>
        <h1>PAGINA LIST</h1>

        <ListNews titulo={data} />
      </div>
    );
  }
}

export default List;
