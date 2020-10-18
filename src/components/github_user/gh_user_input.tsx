import React, { Component } from 'react';

export default class GitHubUserNameForm extends Component {

    

    render() {
        return  (<form class="pure-form">
            <input type="text"
         name="ghusername" 
         id="ghusername" 
         placeholder="Github username..."></input><button class="pure-button pure-button-primary">Find User</button>
         </form>)
    }
}