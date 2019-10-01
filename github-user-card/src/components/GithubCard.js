import React from 'react';
import styled from 'styled-components';


const UserCard = styled.div`
    background-color: #347FC4;
    width: 400px;
    margin: 10px;
    padding: 15px;
    border-radius: 20px;

    img {
        width: 300px;
        border-radius: 30px;
    }
`


const GithubCard = props => {
    return (
        <UserCard>
            <img src={props.users.avatar_url}/>
            <h3>{props.users.name}</h3>
            <p>Username: {props.users.login}</p>
            <p>Location: {props.users.location}</p>
            <p>Followers: {props.users.followers}</p>
            <p>Following: {props.users.following}</p>
        </UserCard>
    )
}

export default GithubCard;