




// select player function --------------
function selectPlayer(name, id){
    if(allPlayers() >= 5){
        alert('You have already added 5 players!!! ')
    }else{
        const showedPlayer = document.getElementById('selected');
        const li = document.createElement('li');
        li.innerText = name;
        showedPlayer.appendChild(li) ;
        
        document.getElementById(id).setAttribute('disabled', true)
        document.getElementById(id).setAttribute('style','background-color:gray')
    }
}

// calculate button listener -----------
document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerRate = convertToInt('player-rate', true);
    if(playerRate !=='' && playerRate > 0){

    const playerCost = document.getElementById('player-cost');
    playerCost.innerText = playerRate * allPlayers();
     } else{
        alert('please!! enter number,')
    }
});

/// total cost calculation ------------------
document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const playerCost = convertToInt('player-cost', false);
        const managerCost = convertToInt('manager-cost', true);
        const couchCost = convertToInt('couch-cost', true);
        const totalCost = playerCost + managerCost + couchCost;
        document.getElementById('total-cost').innerText = totalCost;
        
});

//---------------- shared or common function -------------------

// get value from id and convert string to integer
function convertToInt(id,  isIdInput){
    if(isIdInput === true){
        const inputValue = document.getElementById(id).value;

        if(inputValue !==''){
            return InputNumber = parseInt(inputValue);
        }else{
            alert('please!! enter number,')
        }
        
    }else{
        const textValue = document.getElementById(id).innerText;
        return textNumber = parseInt(textValue);
    }
} 

// ----- Get childNodList from ol tag

function allPlayers(){
    const players = document.querySelectorAll('li');
    return  players.length; 
}
