import React, {
   Component
} from 'react';
import {ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import Bar from 'react-icons/lib/fa/bars';
import '../style.css';

export default class Container extends Component {
   constructor(props){
      super(props);
      this.state = {
         ...props,
         receivedFirstUpdate : false,
         selected : "",
         showBar : true,
         userName : 'Example User'
      }

   }

   componentWillReceiveProps(newProps){
      if(this.props !== newProps){
         this.setState({
            ...newProps
         });
        /* 
         if(!this.state.receivedFirstUpdate){
            if(typeof this.state.menu != 'undefined'){
               this.state.menu.map((x) => {
                  this._onPress(x);
                  this.setState({receivedFirstUpdate : true});
               });
            }
         }*/
      }
   }

   _onPress(x){
      if(this.props.onMenuSelect){
         this.setState({selected : x.label});
         this.props.onMenuSelect(x);
      }
   }

   renderMenuItems(){
      return this.state.menu.map((x) => {
         return (
            <li className={this.state.selected === x.label ? "ms-menu-item ms-menu-item-selected" : "ms-menu-item"} onClick={this._onPress.bind(this, x)}>
               {x.label}
            </li>
         );
      });
   }

   changeBarState(){
      this.setState({
         showBar : !this.state.showBar
      });  
      console.log("Changed hamburger state");
   }
 

   render(){
      return (
         <div className="ms-container">
            <div className="ms-header" style = {{height: (this.props.menuStyle) ? this.props.menuStyle.height : '50px'}}>
               <div className="ms-header-menu">
                  <Bar className = "hamburger" onClick = {this.changeBarState.bind(this)}/>
                  <ListGroup className="list-group ms-user-display-container">
                    <ListGroupItem className="list-group-item ms-user-display"><div>{this.state.userName}<Glyphicon className="user" glyph="user"/></div></ListGroupItem>
                  </ListGroup>
               </div>
               {this.props.header}
            </div>
            <div className="ms-body">
               <div className={this.state.showBar ? "ms-menu" : "ms-menu-hidden"}>
                  <ul className="ms-menu-list">
                     {this.renderMenuItems()} 
                  </ul>
               </div>
               <div className="ms-body-container">
                  {this.props.children}
               </div>
            </div>
         </div>
      );
   }
}
