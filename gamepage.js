player1=localStorage.getItem("User1");
player2=localStorage.getItem("User2");
document.getElementById("user1name").innerHTML=player1+ " : ";
document.getElementById("user2name").innerHTML=player2 + " : ";
p1score=0;
p2score=0;
document.getElementById("u1score").innerHTML=p1score;
document.getElementById("u2score").innerHTML=p2score;


function send(){
    number1 = document.getElementById("no1").value;
number2 = document.getElementById("no2").value;
actual_ans=parseInt(number1) * parseInt(number2);
q="<h4>Q. "+ number1 +" X "+ number2 +"</h4><br>"
a="<input type='number' id='answer' placeholder='Type the answer'><br>"
btn="<button onclick='check()' class='btn btn-success'>Check</button>"
name1=q+a+btn
document.getElementById("answerdiv").innerHTML=name1;
}


var qt="p1"
var at="p2"
function check(){
uans=document.getElementById("answer").value;
console.log(uans);

if (actual_ans == uans){
    if (at=="p1"){
        p1score= p1score + 1;
        document.getElementById("u1score").innerHTML=p1score;
    }

    else{
        p2score= p2score + 1;
        document.getElementById("u2score").innerHTML=p2score;
    }

    
}

if (qt=="p1"){
    qt="p2";
    document.getElementById("questionturn").innerHTML="Question Turn - " + player2;
}

else if (qt == "p2"){
qt="p1";
document.getElementById("questionturn").innerHTML="Question Turn - " + player1;
}

if (at=="p1"){
    at="p2";
    document.getElementById("answerturn").innerHTML="Answer Turn - " + player2;
}

else if (at == "p2"){
at="p1";
document.getElementById("answerturn").innerHTML="Answer Turn - " + player1;
}

document.getElementById("answerdiv").innerHTML=" ";

}