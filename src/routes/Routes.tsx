import React, { Component } from 'react';
import GitHubUserNameForm from '../components/github_user/gh_user_input'
export default class Routes extends Component {

    /*1. The user can type in a GitHub username
    2. Present data about the given GitHub user
    */

    getRepo =  (userName: string) : Promise<{}>  => {
        let url = `https://api.github.com/users/${userName}/repos`;
        return fetch(url).then( response => response.json() );
    };

    render() {
        return <>
            <GitHubUserNameForm/>
        </>
    }
}