import React, {
   Component
} from 'react';
import Bar from 'react-icons/lib/fa/bars';
import '../style.css';

export default class Container extends Component {
   constructor(props){
      super(props);
      this.state = {
         ...props,
         receivedFirstUpdate : false,
         receivedRoute : false,
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
      }
   }

   _onPress(x){
      if(this.props.onMenuSelect){
         this.setState({selected : x.label});
         this.props.onMenuSelect(x);
      }
   }

   renderMenuItems(){
      /*Handle the selection of the first item in the menu*/
      if(this.state.menu) {
         if(typeof this.props.route !== 'undefined'){
            if(this.props.route !== '' && !this.state.receivedRoute){
               console.log(this.props.route.toUpperCase());
               var r;
               this.state.menu.map((x) => {
                  if(x.label.toUpperCase() == this.state.route.toUpperCase()){
                     r = x;
                  }   
               });
               this._onPress(r);
               this.setState({receivedFirstUpdate : true, receivedRoute : true});
            } else if(typeof this.state.menu[0] !== 'undefined' && !this.state.receivedFirstUpdate){
               this._onPress(this.state.menu[0]);
               this.setState({receivedFirstUpdate : true});
            }
         }
      }
      
      /*Then render the items*/
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
   }


   _renderBrandLogo(){
      if(this.props.brand && this.props.brand.logo){
         return (<div className="ms-menu-logo">
            <img src={this.props.brand.logo} />
         </div>);
      }else{
         return null;
      }
   }

   render(){
      return (
         <div className="ms-container">
            <div className="ms-header" style = {{height: (this.props.menuStyle) ? this.props.menuStyle.height : '50px'}}>
               <div className="ms-header-menu">
                  <Bar className = "hamburger" onClick = {this.changeBarState.bind(this)}/>
               </div>
               {(this.state.showBar) ? null : this.props.header}
            </div>
            <div className="ms-body">
               <div className={this.state.showBar ? "ms-menu" : "ms-menu-hidden"}>
                  {this._renderBrandLogo()}      
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
