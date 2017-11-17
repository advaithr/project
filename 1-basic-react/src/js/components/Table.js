import React from "react";

import TwoCol from "./TwoCol";


export default class Header extends React.Component {

    
  constructor(props){
      super(props);
      this.state = {
            data : [
                {
                ProductId: "0 305 406 901",
                Reduce: 8.784000000000004,
                Margin: 9.760000000000005,
                PriceToPush: 119.024,
                QtyToPush: 0,
                FlagStatus: "F"
                }]
            
      } ;
      fetch("http://localhost:3001/users/advaith")
      .then(function(res) {
            return res.json();
        }).then((json) => {
            console.log(json);
            this.setState({data : json }); 
        });
  }

  updateText = (text) => {
    this.setState({myText: 'My Changed Text'})
 }
 
  render() {
    var tableStyle = {
        "border": "1px solid black"
     };
    console.log(this.state)
    
    return (
        
      <div>
        
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th style={tableStyle}>ProductId</th>
                    <th style={tableStyle}> Reduce</th>
                    <th style={tableStyle}> Margin</th>
                    <th style={tableStyle}> PriceToPush</th>
                    <th style={tableStyle}> QtyToPush</th>
                    <th style={tableStyle}> FlagStatus</th>
                    <th style={tableStyle}> Inputfield</th>
                    <th style={tableStyle}> OutputField</th>
                </tr>
            </thead>
            <tbody>
            {this.state.data.map(function(item, key) {
                
                  return (

                         
                         <TwoCol keys = {key} item = {item}/>
                     
                   )
                })}
            </tbody>
        </table>
      </div>
    );
  }
}
