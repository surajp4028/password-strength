let inputfield = document.querySelector('.container .main-box .form .pass'),
eye =document.querySelector('.container .main-box .field i'),
ps =document.querySelector('.container .main-box .ps-st p'),
pss =document.querySelector('.container .main-box .ps-st p span'),
progress = document.querySelector('.container .main-box .progress .progress-bar'),
lowerupper = document.querySelector('.container .main-box .password-strength .lower-upper i'),
number = document.querySelector('.container .main-box .password-strength .number i'),
special =document.querySelector('.container .main-box .password-strength .special-char i'),
minchar = document.querySelector('.container .main-box .password-strength .min-char i');


inputfield.addEventListener("keyup", function(event){
    event.preventDefault();
    var pass = inputfield.value;
    validate(pass);
});

eye.addEventListener("click", function(){
    
    show();
});
function show(){
    if(inputfield.type == "password"){
        inputfield.type = "text";
        eye.classList.add('fa-eye-slash');
        eye.classList.remove('fa-eye');
    }
    else{
        inputfield.type = "password";
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }
}
function validate(pass){
//   console.log(inputfield.value);  
    // var a =inputfield.value;
    // console.log(a);
    var strength = 0;
    var temp;
    if(pass.match(/([a-z].*[A-Z]|[A-Z].*[a-z])/)){
       temp = strength +=1;
        lowerupper.classList.add('fa-check');
        lowerupper.classList.remove('fa-circle');
        lowerupper.style.color="green";
        

    }
    else{
        lowerupper.classList.remove('fa-check');
        lowerupper.classList.add('fa-circle');
        lowerupper.style.color="black";
        ps.classList.remove('active');
       
    }

    if(pass.match(/([0-9])/)){
        temp =  strength +=1;
        number.classList.add('fa-check');
        number.classList.remove('fa-circle');
        number.style.color="green";
       
    }
    else{
        number.classList.remove('fa-check');
        number.classList.add('fa-circle');
        number.style.color="black";
        ps.classList.remove('active');
      
    }

    if(pass.match(/([!,@,#,$,^,&,*,%])/)){
        temp =  strength +=1;
        special.classList.add('fa-check');
        special.classList.remove('fa-circle');
        special.style.color="green";
       
    }
    else{
        special.classList.remove('fa-check');
        special.classList.add('fa-circle');
        special.style.color="black";
        ps.classList.remove('active');
        
    }
    if(pass.length > 7){
        temp =  strength +=1;
        minchar.classList.add('fa-check');
        minchar.classList.remove('fa-circle');
        minchar.style.color="green";
        
    }
    else{
        minchar.classList.remove('fa-check');
        minchar.classList.add('fa-circle');
        minchar.style.color="black";
        ps.classList.remove('active');
       
    }
    console.log(strength);
   
    if(strength == 1){
    progress.style = "width:0%";
    ps.classList.add('active');
        pss.innerHTML ="not secure!!";
        ps.style.color = "red";
    //console.log(strength);
    }
    else if(strength == 2){
        progress.style = "width:20%";
        progress.style.backgroundColor = "crimson";
        ps.classList.add('active');
        pss.innerHTML ="week!";
        ps.style.color = "red";
       // console.log(strength);
    }
    else if(strength == 3){
        progress.style = "width:60%";
        // progress.style = "background-color:yellow";
        progress.style.backgroundColor = "#e6b212";
        ps.classList.add('active');
        pss.innerHTML ="good";
        ps.style.color = "#e6b212";
       // console.log(strength);
    }
    else if(strength == 4){
        progress.style = "width:100%";
        // progress.style = "background-color:yellow";
        progress.style.backgroundColor = "green";
        ps.classList.add('active');
        pss.innerHTML ="strong";
        ps.style.color = "green";
       // console.log(strength);
    }

}
