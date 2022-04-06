/*var uploadField = document.getElementById("file");

uploadField.onchange = function() {
    if(this.files[0].size > 2097152){
       alert("File is too big!");
       this.value = "";
    };
};
*/
// Create list value
const dropdown = [];
// reset input
const event1 = document.querySelector('#reset1'); 
event1.addEventListener('click', clearInput); 
    
function clearInput() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";

    }
    var selects = document.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++) {
        selects[i].value = "#";
    }
}
// dropdown
const button1 = document.getElementById("dropdown1");
button1.addEventListener("change", dropdownValue1);
const button2 = document.getElementById("dropdown2");
button2.addEventListener("change", dropdownValue2);
function dropdownValue1 () {
    var a = document.querySelector('#dropdown1').value;
    dropdown.push(a);
}
function dropdownValue2 () {
    var b = document.querySelector('#dropdown2').value;
    dropdown.push(b);
}
// alert namef
const alertBut = document.getElementById('send1');
alertBut.addEventListener('click', alertF1);

function alertF1 (e) {
    e.preventDefault()
    var name = document.getElementById('name1').value;
    if (name == '') {
        document.querySelector('#alert1').classList.add('show');
        setTimeout(function(){
            document.querySelector('#alert1').classList.remove('show');
        }, 800); 

    }
}
// alert name 2
const alertBut2 = document.getElementById('send1');
alertBut.addEventListener('click', alertF2);

function alertF2 (e) {
    e.preventDefault()
    var name = document.getElementById('name2').value;
    if (name == '') {
        document.querySelector('#alert2').classList.add('show');
        setTimeout(function(){
            document.querySelector('#alert2').classList.remove('show');
        }, 800); 

    }
}
const alertBut3 = document.getElementById('send1');
alertBut.addEventListener('click', alertF3);

function alertF3 (e) {
    e.preventDefault()
    var name = document.getElementById('email').value;
    if (name == '') {
        document.querySelector('#alert3').classList.add('show');
        setTimeout(function(){
            document.querySelector('#alert3').classList.remove('show');
        }, 800); 

    }
}
