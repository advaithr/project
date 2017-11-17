import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Table from "./Table";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      jsonData: [{id:1,namefield:"Advaith",age:25}, {id:2,namefield:"Radhakrishna",age:25}]
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        
        <Table data={this.state.jsonData}/>
      </div>
    );
  }
}
