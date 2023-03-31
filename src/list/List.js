import React from 'react';
import ListItem  from './ListItem';

const obj = {
    title: "Appointment for October",
    descr: "The patient is rescheduled to october",
    isActive: true
};

class List extends React.Component {
    render(){
        return(
            <div className='app-list'>
       <ListItem title={obj.title} descr={obj.descr} isActive={obj.isActive}/>
      
      </div>
        )
    }
}

export default List ;