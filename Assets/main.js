const copyText = () => {

    var copyText = document.getElementById('form'); 
    copyText.select(); 
    document.execCommand('copy');    

}

const characters = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',1,2,3,4,5,6,7,8,9,0,'@','!','#','$','^','&','*']; 

for (let i = 6; i <= 128; i++) {

    document.getElementById('seleccion').innerHTML += `
    
    <option value="${i}">${i}</option>
    
    `; 
    
    
}

function generatePassword() {

    

    let seleccion = document.getElementById('seleccion'); 

    let opcionSeleccionada = seleccion.options[seleccion.selectedIndex].value; 
    console.log(opcionSeleccionada); 

   

    var password = []; 

    for (let i = 0; i < opcionSeleccionada; i++) {
    
      var item = characters[Math.floor(Math.random()*characters.length)];  
      password.push(item)
        
    }
    
    let finalResult = password.join(""); 
    document.getElementById('form').value = finalResult; 

}

generatePassword(); 



