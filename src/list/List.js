import React from 'react';
import Tools from '../components/Tools';
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

    constructor(props) {
        super(props);
        this.state = {
            data :arr 
        }
    }

    onListChange =(evt) => {
        console.log(evt.target.value);
        const value = evt.target.value;
        const newList = arr.filter((item)=>{
            if (value === 'all') {
                return true;
            }
            if (value === 'active') {
                return item.isActive === true;
            }
            if (value === 'non-active') {
                return item.isActive ===false ;
            }
            return false;
        })
        console.log(newList)
        
        this.setState({
            data: newList 
        })
 
    }
    render(){
        console.log("render");
        return(
            <Tools onAction = {this.onListChange}>
            <div className='app-list'>
                {
                    this.state.data.map((obj) =>{
                        return <ListItem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive}/>
                    })
                }
       
      
      </div>
      </Tools>
        )
    }
}

export default List ;