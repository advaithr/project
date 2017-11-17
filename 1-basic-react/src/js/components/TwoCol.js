import React from "react";


export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
              title : "default",
              
        } ;
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({title: event.target.value});
      }
  render() {
      console.log(this.props)
      console.log(this.state)
      
      var tableStyle = {
        "border": "1px solid black"
     };
      
    return (
          <tr key = {this.props.keys}>
        <td style={tableStyle}>{this.props.item.ProductId}</td>
        <td style={tableStyle}>{this.props.item.Reduce}</td>
        <td style={tableStyle}>{this.props.item.Margin}</td>
        <td style={tableStyle}>{this.props.item.PriceToPush}</td>
        <td style={tableStyle}>{this.props.item.QtyToPush}</td>
        <td style={tableStyle}>{this.props.item.FlagStatus}</td>
        <td style={tableStyle}><input type="text" className = "input1" onChange = {this.handleChange} /></td>
        <td style={tableStyle}>{this.state.title}</td>
        </tr>
    );
  }
}
/*
ProductId: "0 305 406 901",
Reduce: 8.784000000000004,
Margin: 9.760000000000005,
PriceToPush: 119.024,
QtyToPush: 0,
FlagStatus: false
*/