import React from 'react';

class User extends React.Component{
   
    render(){
      const {data} = this.props;

        return(
            <div>
                 {data.map(todo => (
              <li key={todo.id}>
                <p>Ad:</p>{todo.name}<br></br>
                <p>Soyad:</p>{todo.surname}<br></br>
                <p>Mail:</p>{todo.email}<br></br>
              </li>
            ))}
            </div>
        );
    }
}

export default User;