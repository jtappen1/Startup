
function changeDifficulty(){
    var ele = document.getElementsByName('difficulty')
    clearTable();
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            if(i == 0){
                loadTricks("Easy");
            }
            else if(i ==1){
                loadTricks("Medium");
            }
            else if(i == 2){
                loadTricks("Hard");
            }
            else{
                loadTricks('all');
            }
        }
    }
}
function clearTable(){
    var tricks = document.getElementById("trickRow");
    for(trick in tricks.entries()){
        trick.remove();
    }

}

function loadTricks(whichTricks) {
    let tricks = [];
    const tricksText = JSON.parse(localStorage.getItem('tricks'));
    if (tricksText) {
      tricks = tricksText;
    }
    const tableBodyEl = document.querySelector('#tricks');
    if( whichTricks == 'all'){
        let index = 0;
        while(index < tricks.length){
            const specificTrick = tricks[index];
            index++;

            const checkmarkTdEl = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const descriptionTdEl = document.createElement('td');

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
        while(index < tricks.length){
            const specificTrick = tricks[index];
            index++;
            if(specificTrick.difficulty == whichTricks){
                const checkmarkTdEl = document.createElement('td');
                const nameTdEl = document.createElement('td');
                const descriptionTdEl = document.createElement('td');

                nameTdEl.textContent = specificTrick.name;

                const rowEl = document.createElement('tr');
                rowEl.appendChild(checkmarkTdEl);
                rowEl.appendChild(nameTdEl);
                rowEl.appendChild(descriptionTdEl);

                rowEl.name = "trickRow";

                tableBodyEl.appendChild(rowEl);
            }
        }
    }
    
}

function updateTricks(){
    localStorage.clear();
    let tricksArray = []
    const tricksText = localStorage.getItem('tricks');
    if(tricksText){
        tricksArray = JSON.parse(tricksText);
    }
    
    const trickName = document.querySelector('#addTrick').value;
    const trickDiff = document.querySelector('#difficultySelect').value;
    console.log("The difficulty return val" + trickDiff);
    const descript = "This is a dummy value";
    const backside = "This is a dummy value";
    

    const newTrick = {name: trickName, description: descript, difficulty: trickDiff, backside: backside, checked: "false"};
    // let newTrick = {name : trickName, description : descript, checked : "false"};
    tricksArray[0] = newTrick;
    
    let string = JSON.stringify(tricksArray)
    localStorage.setItem('tricks', string);
    loadTricks();
    // return tricks;
}