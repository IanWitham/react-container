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
         <div className="ms-container">
            <div className="ms-header">
               {this.props.header}
            </div>
            <div className="ms-body">
               <div className="ms-menu">
                  {this.props.menu}
               </div>
               <div className="ms-body-container">
                  {this.props.children}
               </div>
            </div>
         </div>
      );
   }
}
