import React from 'react';
import ListItem  from './ListItem';

const arr =[
    {
        title: "Appointment for October",
        descr: "The patient is rescheduled to october",
        isActive: false
    },
    {
        title: "Appointment for October",
        descr: "The patient is rescheduled to october",
        isActive: true
    },
    {
        title: "Appointment for October",
        descr: "The patient is rescheduled to october",
        isActive: false
    }
]

class List extends React.Component {
    render(){
        return(
            <div className='app-list'>
                {
                    arr.map((obj) =>{
                        return <ListItem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive}/>
                    })
                }
       
      
      </div>
        )
    }
}

export default List ;