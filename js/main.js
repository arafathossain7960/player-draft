




// select player function --------------
function selectPlayer(name, id){
    console.log(name, id)
    const selectedPlayer = document.getElementById('selected');
    const li = document.createElement('li');
    li.innerText = name;
    selectedPlayer.appendChild(li) ;
    
 
    document.getElementById(id).setAttribute('disabled', true)
    document.getElementById(id).setAttribute('style','background-color:gray')

    // // document.getElementsByClassName(select).setAttribute('disabled', true)
    // document.getElementsByClassName(select).setAttribute('style','background-color:black')
}

// calculate button listener 
document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerRate = convertToInt('player-rate', true);
    if(playerRate !=='' && playerRate > 0){

    const playerCost = document.getElementById('player-cost');
    playerCost.innerText = playerRate * 5;
     } else{
        alert('please!! enter number,')
    }

})

/// total cost calculation 
document.getElementById('total-calculate-btn').addEventListener('click', function(){

    const playerCost = convertToInt('player-cost', false);
    
        const managerCost = convertToInt('manager-cost', true);
        const couchCost = convertToInt('couch-cost', true);
        const totalCost = playerCost + managerCost + couchCost;
        document.getElementById('total-cost').innerText = totalCost;
        console.log(totalCost)
   
    

  
   
})


// shared or common function ---------
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


