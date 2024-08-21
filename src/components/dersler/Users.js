import React from 'react';

class Users extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            id: 1,
            name: 'azat',
            surname: 'tekçe',
            email: ''
          },
          {
            id: 2,
            name: 'Özge',
            surname: 'tekçe',
            email: ''
          },
          {
            id: 3,
            name: 'Lina',
            surname: 'tekçe',
            email: ''
          }
        ],
        error: null,
      };
    }
  
    render() {
      return (
        <div>
          <User users={this.state.users} ></User>
        </div>
      );
    }
  }

export default Users;