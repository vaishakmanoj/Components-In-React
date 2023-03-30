import React from "react"
import Label from "./Label";
import './ListItems.css';


function ListItem() {
    return(
      <div className='list-item'>
            <hr />
            <div className='list-title'>
              <h4>My title One</h4>
            </div>
            <div className='list-descr'>This is a very big description
            </div>
            <div className='list-label'>
              <Label/>
              <Label/>
              <Label/>
            </div>
            <hr />
          </div>
    )
    
  }

  export default ListItem ;