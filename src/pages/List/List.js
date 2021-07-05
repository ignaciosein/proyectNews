import React, { Component } from "react";
import "./List.scss";
 
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
      <div className="List">
        <ListNews titulo={data} />
      </div>
    );
  }
}

export default List;
