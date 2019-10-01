import React from 'react';
import axios from 'axios';

import GithubCard from './GithubCard';

export default class GithubList extends React.Component {
    constructor() {
        super();
        this.state = {
            follower: {}
        }
    }

    componentDidMount(){
        axios
        .get(`https://api.github.com/users/${this.props.login}`)
        .then(res => {
            console.log(res.data);
            this.setState({ follower: res.data })
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <> 
            <GithubCard users={this.state.follower}/>
            </>
        )
    }
}