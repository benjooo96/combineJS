// koppla html till js med form
var form = document.getElementById('form3');

form.addEventListener('submit', function(b) {
    b.preventDefault();
    
    // koppla input av color t js
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    

    // visa färger i sections
    document.querySelector('.box1').style.backgroundColor = color1;
    document.querySelector('.box2').style.backgroundColor = color2;
});

// koppla form 1 till js
 var form = document.getElementById('form1');

 form.addEventListener('submit', function(b) {
     b.preventDefault();
     
     // efter submit ska ett message komma fram
     var fram = confirm('Amen Hallå Ja!!');
     
});

// koppla form 2 till js
var form = document.getElementById('form2');

form.addEventListener('submit', function(b) {
     b.preventDefault();

     // om ålder är över 18 = message. OM under 18 = anothermessage
     var age = document.getElementById;
     if('age >== 18') {
         alert('You are great.');
     } else {
        alert('You are a kid.');
     }
});


