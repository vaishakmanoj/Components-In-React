import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    render(){
        return(
            <div className='app-list'>
       <ListItem/>
       <ListItem/>
       <ListItem/>
       <ListItem/>
      </div>
        )
    }
}

export default List ;