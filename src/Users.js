import React, { Component } from 'react';
import firebase from 'firebase';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        firebase
            .firestore()
            .collection('users')
            .onSnapshot((snapshot) => {

                const users = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    data['id'] = data.id;
                    return data;

                })
                this.setState({
                    users: users,
                })
            })
    }
    render() {
        const { users } = this.state;
        return (
            <div className='userInfo'>
                {users.map((doc) => {
                    console.log(doc);
                    return (
                        <div style={{ textAlign: 'center' }}>
                            <p>{doc.name}</p>
                            <p>{doc.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users;