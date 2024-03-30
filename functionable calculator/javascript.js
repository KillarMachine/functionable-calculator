let elem=document.getElementsByClassName("btn");
let inp=document.getElementById("in");
let string="";
for(let key in elem){
    elem[key].onclick=function(){
        if(elem[key].value=="C"){
            string="";
            inp.value="";
            
        inp.style.color="white";
        inp.style.textAlign="right";
        }
        else
    if(elem[key].value=="="){
        try{
            inp.style.color="greenyellow";
            string=eval(string);
        }catch(e){
            inp.style.color="rgb(244, 136, 136)";
            string="Syntax error!";
            inp.style.textAlign="center";
        }
        
        inp.value=string;
        string="";
    }else{
        string+=elem[key].value;
        inp.value=string;
        inp.style.color="white";
        inp.style.textAlign="right";
    }
    }
}