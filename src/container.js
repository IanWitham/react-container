import React, {
   Component
} from 'react';

import Bar from 'react-icons/lib/fa/bars';
import '../style.css';

export default class Container extends Component {
   constructor(props){
      super(props);
      this.state = {
         ...props
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
         this.props.onMenuSelect(x);
      }
   }

   renderMenuItems(){
      return this.state.menu.map((x) => {
         return (
            <li className="ms-menu-item" onClick={this._onPress.bind(this, x)}>
               {x.label}
            </li>
         );
      });
   }

   render(){
      return (
         <div className="ms-container">
            <div className="ms-header" style = {{height: (this.props.menuStyle) ? this.props.menuStyle.height : '50px'}}>
               <div className="ms-header-menu">
                  <Bar />
               </div>
               {this.props.header}
            </div>
            <div className="ms-body">
               <div className="ms-menu">
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
