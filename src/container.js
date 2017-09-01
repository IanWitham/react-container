import React, {
   Component
} from 'react';

import '../style.css';

export default class Container extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return (
         <div className="container">
            <div className="header">
               {this.props.header}
            </div>
            <div className="body">
               <div className="menu">
                  {this.props.menu}
               </div>
               <div className="body-container">
                  {this.props.children}
               </div>
            </div>
         </div>
      );
   }
}
