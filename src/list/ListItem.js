import React from "react"
import Label from "./Label";
import './ListItems.css';


function ListItem(props) {
    
    const{
        title,
        descr,
        isActive
    } = props;

    return(
      <div className='list-item'>
            <hr />
            <div className='list-title'>
              <h4>{title}</h4>
            </div>
            <div className='list-descr'>
                {descr}
            </div>
            <div className='list-label'>
              <Label onAction={()=>{
                console.log('Parent Clicked');
              }} isActive={isActive}/>
              
            </div>
            <hr />
          </div>
    )
    
  }

  export default ListItem ;