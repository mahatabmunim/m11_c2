// for .. in loop
const colors = ['red', 'green', 'yellow', 'black']

for(let colorIndex in colors){
    console.log('index no:'+ colorIndex + ':' + colors[colorIndex]);
    
}3 
const person = {
    name: 'mahatab',
    age : 39,
    city : 'Barisal'
}

for (let key in person){
    console.log(key+ '=>'+ person[key]);  
}

//function
function colors (){
    const colors = ['red', 'green','balack','yellow']
    for(let color of colors){
        console.log(color)
    }
}
colors()

function userNameValidation(){
    const userName = document.getElementById('userName').value;
    console.log(userName)
    if(userName.length == 0){
        alert('User Name is Required')
    }
}





