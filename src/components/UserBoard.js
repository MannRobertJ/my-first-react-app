import React, { Component } from 'react'

export default class UserBoard {
   /*  appendUsers() {
        return this.props.user.reduce((string, user) => {
            return string + "<br>" + `User: ${user}`
        }, "")
    } */
    render() {
        return <div> {eval(this.users)[0]}
             </div>
    
    }
}