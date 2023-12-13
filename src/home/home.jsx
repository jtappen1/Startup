
import React from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const trickRowFormat = "<tr><td> <input type='checkbox' id='trick1' name='trick1' value='checkbox1' onclick = 'changeCheck(SpecificID)' /></td><td><label for='trick1'>Template Name</label> </td><td> <button id ='infoBtn' onclick = 'showModals()' class='primary';'>Info</button><dialog id='dialog'><h2>Trick: Template Trick Name</h2><p>Direction: Template Direction</p><p>Difficulty: Template Difficulty</p><p>Description: Template Description</p><button id ='closeBtn' onclick = 'closeModals()' aria-label='close' class='x'>❌</button></dialog></td></tr>";
const addTrickFormat = "<tr><td></td><td><label for='trick1'> Add a Trick!</label></td><td></td></tr>";
let protocol;
let socket;
const GameStartEvent = 'gameStart';
const GameEndEvent = 'gameEnd';
let newSpecificTrick = "";
const NewTrickEvent = 'newTrick';

export function Home() {
    constructor();
    useEffect(()=> loadTricks());
  return (
    <main className='container-fluid bg-secondary text-center'>
                <div className="players">
                    <span className="player-name"></span>
                    <div id="player-messages"></div>
                  </div>
                <div className="row">
                    <div className="col container-s">
                        <table className="table table-warning table-striped-columns">
                            <thead className="table-dark">
                                <tr>
                                    <td>Trick </td>
                                    <td> Difficulty</td>
                                </tr>
                            </thead>
                            <tbody className="table-light">
                                <tr>
                                    <td>Tail Stall</td>
                                    <td>Easy</td>
                                </tr>
                                <tr>
                                    <td>Frontside 50-50</td>
                                    <td>Medium</td>
                                </tr>
                                <tr>
                                    <td>Blunt To Fakie</td>
                                    <td>Hard</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className = "col-md-auto">
    
                    </div>
                    <div className="col">
                        <img alt="skateboarder" src="images/intropic.jpg" width={200}/>
                    </div>
                    
                </div>
                <div className="row">
                    <table className="table table-warning table-striped-columns">
                        <thead className="table-dark">
                            
                            <tr>
                                <td>
                                    <label>
                                        Level:
                                    </label>
                                </td>
                                <td>
                                    <label htmlFor="easy">Easy</label>
                                    <input type="radio" id="easy" name="difficulty" value="Easy" checked onClick= {()=> changeDifficulty()} />
                                    <label htmlFor="medium">Medium</label>
                                    <input type="radio" id="medium" name="difficulty" value="Medium"onClick= {()=> changeDifficulty()} />
                                    <label htmlFor="hard">Hard</label>
                                    <input type="radio" id="hard" name="difficulty" value="Hard" onClick= {()=> changeDifficulty()}/>
                                </td>
                                <td>
                                    <button type = "submit" onClick = {()=> clearTable()}> Clear </button>
                                </td>
                            </tr>
                        </thead>
                            <tbody className = "table-light" id="tricks">
                                <tr>
                                    <td>
    
                                    </td>
                                    <td>
                                        <label>Add a Trick!</label>
                                    </td>
                                    <td>
        
                                    </td>
                                </tr>
                            </tbody>
                        
                        <tfoot>
                            <tr>
                                <td>
                                    <label>
                                        <p>Add Trick:</p>
                                    </label>
                                </td>
                                <td>
                                    <label htmlFor="addTrick">Name/Description: </label>
                                    <input type="text" id="addTrick" name="addTrick" placeholder="EX: Rock to Fakie" required pattern="[Aa].*" />
                                    <label> Difficulty:</label>
                                    <select id = "difficultySelect">
                                        <option selected option> Easy </option>
                                        <option> Medium </option>
                                        <option>Hard</option>
                                    </select>
                                    <label> Direction:</label>
                                    <select id = "direction">
                                        <option selected option> Backside </option>
                                        <option> Frontside </option>
                                    </select>
                                    <button type="submit" onClick = {()=> updateTricks()}> Add Trick</button>
                                </td>
                                <td>
    
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
    </main>
  );
}

function getDifficulty(ele, i){
    if(i == 0){
        return 'Easy';
    }
    else if(i ==1){
        return('Medium');
    }
    else if(i == 2){
        return('Hard');
    }
    else{
        return('All');
    }
}

function changeDifficulty(){
    var ele = document.getElementsByName('difficulty');
    clearTable();
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            loadTricks(getDifficulty(ele, i));
        }
    }
}

function clearTable(){
    let index = 0;
    const tableBodyEl = document.querySelector('#tricks');
    while(index < tableBodyEl.childElementCount){
        tableBodyEl.deleteRow(index);
        index++;
    }
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML = "";
}
function clearStorage(){
    localStorage.clear();
    var ele = document.getElementsByName('difficulty')
    for(let i = 0; i< ele.length; i++){
        loadTricks(getDifficulty(ele, i));
    }
}

function loadTricks(whichTricks) {
    if(whichTricks == null){
        whichTricks = "Easy";
    }
    let tricks = [];
    const tricksText = JSON.parse(localStorage.getItem('tricks'));
    if (tricksText) {
    tricks = tricksText;
    }
    else{
        localStorage.setItem('tricks', JSON.stringify(tricks));
    }
    const tableBodyEl = document.querySelector('#tricks');
    tableBodyEl.innerHTML = "";
    if( whichTricks == 'all'){
        let index = 0;
        while(index < tricks.length){
            const specificTrick = tricks[index];
            index++;

            const checkmarkTdEl = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const descriptionTdEl = document.createElement('td');
            const newButton = document.createElement('button');  

            nameTdEl.textContent = specificTrick.name;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(checkmarkTdEl);
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(descriptionTdEl);

            rowEl.setAttribute("id","trickRow")

            tableBodyEl.appendChild(rowEl);
        }
    }
    else{
        let index = 0;
        if(tricks.length == 0){
            tableBodyEl.innerHTML += addTrickFormat;
        }
        else{
            let count = 0;
            while(index < tricks.length){
                const specificTrick = tricks[index];
                index++;
                if(specificTrick.difficulty == whichTricks){
                    count++;
                    let template = trickRowFormat.slice()
                    template = template.replace('Template Name', specificTrick.name);
                    template = template.replace('SpecificID', specificTrick.id);
                    template = template.replace('Template Trick Name', specificTrick.name);
                    template = template.replace('Template Direction', specificTrick.direction);
                    template = template.replace('Template Difficulty', specificTrick.difficulty);
                    template = template.replace('Template Description', specificTrick.description);
                    tableBodyEl.innerHTML += template;
                    
                }
            }
            if(count== 0){
                tableBodyEl.innerHTML += addTrickFormat;
            }
        }
    }
    
}

function updateTricks(){
    let tricksArray = [];
    const tricksText = localStorage.getItem('tricks');
    if(tricksText){
        tricksArray = JSON.parse(tricksText);
    }

    const trickName = document.querySelector('#addTrick').value;
    const trickDiff = document.querySelector('#difficultySelect').value;
    console.log("The difficulty return val" + trickDiff);
    const descript = "This is a dummy value";
    const backside = document.querySelector('#direction').value;

    let idNum = tricksArray.length;
    const newTrick = {name: trickName, description: descript, difficulty: trickDiff, direction: backside, checked: "False", id: idNum};

    tricksArray.push(newTrick);
    newSpecificTrick = trickName
    broadcastEvent(getPlayerName(), NewTrickEvent, newSpecificTrick);
    // broadcastEvent(getPlayerName(), GameStartEvent, {});
    console.log("The Trick is " + newSpecificTrick);

    let string = JSON.stringify(tricksArray)
    localStorage.setItem('tricks', string);
    loadTricks();
    // return tricks;
    }

    function showModals(){
        const infoBtn = document.getElementById('infoBtn');
        const closeBtn = document.getElementById('closeBtn');
        const dialog = document.getElementById('dialog');
        dialog.showModal();
        // infoBtn.addEventListener("click", () => {
        //     dialog.showModal();
        // });
        // closeBtn.addEventListener("click", () => {
        //     dialog.close();
        // });

        }
    function closeModals(){
        const infoBtn = document.getElementById('infoBtn');
        const closeBtn = document.getElementById('closeBtn');
        const dialog = document.getElementById('dialog');
        dialog.close();
        }

    function configureWebSocket() {
        protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        socket.onopen = (event) => {
            displayMsg('system', 'game', 'connected');
        };
        socket.onclose = (event) => {
            displayMsg('system', 'game', 'disconnected');
        };
        socket.onmessage = async (event) => {
            const msg = JSON.parse(await event.data.text());
            if (msg.type === GameEndEvent) {
            displayMsg('player', msg.from, `scored ${msg.value.score}`);
            } else if (msg.type === GameStartEvent) {
            displayMsg('player', msg.from, `started a new game`);
            }
            else if(msg.type === NewTrickEvent){
                displayMsg('player', msg.from, 'learned ' + msg.value);
            }
        };
    }

    function displayMsg(cls, from, msg) {
        const chatText = document.querySelector('#player-messages');
        chatText.innerHTML =
            `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
        }
    function getPlayerName() {
        let playerName = localStorage.getItem('username') ?? 'Mystery player';
        return playerName;
      }

    function broadcastEvent(from, type, value) {
        const event = {
          from: from,
          type: type,
          value: value,
        };
        socket.send(JSON.stringify(event));
      }

      function constructor(){
        const playerNameEl = document.querySelector('.player-name');
        // playerNameEl.textContent = getPlayerName();
        configureWebSocket();

    }