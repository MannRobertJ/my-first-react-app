import React, { Component } from 'react'

export default class UserBoard {
    appendUsers() {
        return this.props.user.reduce((string, user) => {
            return string + "<br>" + `User: user`
        }, "")
    }
    render() {
        const usersPara = "<p id=\"users\"> </p> "
        function appendUsers()
        return <div>
            <h3>User Board</h3>
            <p id="users">{this.appendUsers()}</p>
        </div>
    
    }
}