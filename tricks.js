const trickRowFormat = "<tr><td> <input type='checkbox' id='trick1' name='trick1' value='checkbox1' onclick = 'changeCheck(SpecificID)' /></td><td><label for='trick1'>Template Name</label> </td><td> <button id ='infoBtn' onclick = 'showModals()' class='primary';'>Info</button><dialog id='dialog'><h2>Trick: Template Trick Name</h2><p>Direction: Template Direction</p><p>Difficulty: Template Difficulty</p><p>Description: Template Description</p><button id ='closeBtn' onclick = 'closeModals()' aria-label='close' class='x'>❌</button></dialog></td></tr>";
const addTrickFormat = "<tr><td></td><td><label for='trick1'> Add a Trick!</label></td><td></td></tr>";


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
    var ele = document.getElementsByName('difficulty')
    clearTable();
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            loadTricks(getDifficulty(ele, i));
        }
    }
}

function changeCheck(id){
    let tricks = [];
    tricks = JSON.parse(localStorage.getItem('tricks'));
    // if (tricksText) {
    //   tricks = tricksText;
    // }
    if(tricks[id].checked == 'True'){
        tricks[id].checked = 'False';
        console.log('False');
    }
    else{
        tricks[id].checked = 'True';
        console.log('True');
    }
    
}


function clearTable(){
    let index = 0;
    const tableBodyEl = document.querySelector('#tricks');
    while(index < tableBodyEl.childElementCount){
        tableBodyEl.deleteRow(index);
        index++;
    }
    

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