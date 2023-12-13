import { func } from 'prop-types';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
let classVar;
let usersGlobal;
let userRowFormat = "<tr><td>Template Name</td><td>Template Points</td><td>Template NumTricks</td></tr>";
let noUserRowFormat = "<tr><td>Sign-in to track your tricks!</td><td>0</td><td>0</td></tr>";
let userName;

class usersClass {
    // async setUpLeaderBoards(){
    //     let users = [];
    //     if(localStorage.getItem('users') == null){
    //         users  = []
    //         usersGlobal = users;
    //         localStorage.setItem('users', JSON.stringify(users));
    //     }
    //     else{
    //         const response = await fetch('/api/users');
    //         users = await response.json();
    //         console.log("Response from Server: ", users)
            
    //     }
    
    //     if(localStorage.getItem('username') != null){
    //         userName = localStorage.getItem('username');
    //     }
    //     else{
    //         userName = null;
    //     }
    //     await this.setTrickInfo(users);
    // }
    
     async setTrickInfo(users){
        let tricks = this.getTricks();
        console.log("Getting tricks ", tricks )
        let trickScore = 0;
        const numTricks = tricks.length;
    
        for(let i = 0; i < tricks.length; i++){
            let specificTrick = tricks[i];
            if (specificTrick.difficulty == 'Easy'){
                trickScore += 5;
            }
            else if(specificTrick.difficulty == 'Medium'){
                trickScore +=15;
            }
            else{
                trickScore += 25;
            }
        }
        var foundUser = false
        for(let i = 0; i < users.length; i++){
            if(userName == users[i].email){
                users[i].trickScore = trickScore
                users[i].numTricks = numTricks
                foundUser = true


            }
        }
        this.updateUsers(users);
    }

    updateUsers(users){
        const usersTableBodyEl = document.querySelector('#usersTable');
        // usersTableBodyEl.innerHTML = "";
        if(users.length ==0){
            usersTableBodyEl.innerHTML += noUserRowFormat;
        }
        else{
            for(let i = 0; i< users.length; i++){
                let specificUser = users[i];
                let template = userRowFormat.slice()
                template = template.replace('Template Name', specificUser.email);
                template = template.replace('Template Points', specificUser.trickScore);
                template = template.replace('Template NumTricks', specificUser.numTricks);
                usersTableBodyEl.innerHTML += template;
            }
        }
    }
    
    
    getTricks(){
        return JSON.parse(localStorage.getItem('tricks'));
    }
    
    //////// Start of Profile Functions
}

export function Leaderboard() {
    useEffect(()=> {
        const fetchData = async () => {
            let users = [];
        if(localStorage.getItem('users') == null){
            users  = []
            usersGlobal = users;
            localStorage.setItem('users', JSON.stringify(users));
        }
        else{
            const response = await fetch('/api/users');
            users = await response.json();
            console.log("Response from Server: ", users)
            
        }
    
        if(localStorage.getItem('username') != null){
            userName = localStorage.getItem('username');
        }
        else{
            userName = null;
        }

        let tricks = JSON.parse(localStorage.getItem('tricks'));;
        console.log("Getting tricks ", tricks )
        let trickScore = 0;
        const numTricks = tricks.length;
    
        for(let i = 0; i < tricks.length; i++){
            let specificTrick = tricks[i];
            if (specificTrick.difficulty == 'Easy'){
                trickScore += 5;
            }
            else if(specificTrick.difficulty == 'Medium'){
                trickScore +=15;
            }
            else{
                trickScore += 25;
            }
        }
        var foundUser = false
        for(let i = 0; i < users.length; i++){
            if(userName == users[i].email){
                users[i].trickScore = trickScore
                users[i].numTricks = numTricks
                foundUser = true


            }
        }
        const usersTableBodyEl = document.querySelector('#usersTable');
        // usersTableBodyEl.innerHTML = "";
        if(users.length ==0){
            usersTableBodyEl.innerHTML += noUserRowFormat;
        }
        else{
            for(let i = 0; i< users.length; i++){
                let specificUser = users[i];
                let template = userRowFormat.slice()
                template = template.replace('Template Name', specificUser.email);
                template = template.replace('Template Points', specificUser.trickScore);
                template = template.replace('Template NumTricks', specificUser.numTricks);
                usersTableBodyEl.innerHTML += template;
            }
        }
    
          }   
    fetchData()});
    
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
                <h1> Leaderboard</h1>
            </div>
            <div className="container-xl">
                <table className="table table-light table-striped-columns">
                    <thead className="table-dark">
                        <tr>
                            <td>Name</td>
                            <td>Score</td>
                            <td>Tricks Learned</td>
                        </tr>
                    </thead>
                    <tbody className="table-striped-columns" id = "usersTable">
                    </tbody>
                </table>
            </div>
    </main>
  );
}
