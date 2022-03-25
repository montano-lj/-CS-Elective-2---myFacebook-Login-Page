// document.dir(document)

// function validate(){
//     if(document.email)
// }

//SAMPLE LOGIN
var btn = document.getElementById('btn-login');
btn.onclick = function() {
location.assign('https://www.facebook.com/ljdmontano'); 
}

var btn = document.getElementById('fgt-pass');
btn.onclick = function() {
    location.assign('https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0');
}

var btn = document.getElementById('btn-crt-acc');
btn.onclick = function() {
    location.assign('https://www.facebook.com/r.php?r=101');
}