import React from 'react';


const GithubCard = props => {
    return (
        <div>
            <img src={props.users.avatar_url}/>
            <h3>{props.users.name}</h3>
            <p>Username: {props.users.login}</p>
            <p>Location: {props.users.location}</p>
            <p>Followers: {props.users.followers}</p>
            <p>Following: {props.users.following}</p>
        </div>
    )
}

export default GithubCard;