player1=localStorage.getItem("player1_name");
player2=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("Player1").innerHTML= player1+":";
document.getElementById("Player2").innerHTML=player2+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("Question").innerHTML="Question turn -"+player1;
document.getElementById("Answer").innerHTML="Answer turn -"+player2;

function check(){
    
    var one=document.getElementById("one").value;
    var two=document.getElementById("two").value;
    result=parseInt(one)*parseInt(two);
    console.log(result);

    

    question="<h4 id='display'>"+one+" x "+two+"</h4>";
    answer="<br>Answer : <input type='text' id='text'>";
    button="<br> <br> <button class='btn btn-info' onclick='send()'> Check </button>";
    row=question+answer+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("one").value="";
    document.getElementById("two").value="";

}

question_turn="player1";
answer_turn="player2";

function send(){
  
    var get_ans=document.getElementById("text").value;

    if(get_ans==result){

        if(answer_turn=="player1"){

            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }

    }

    if(question_turn=="player1"){

        question_turn="player2";
        document.getElementById("Question").innerHTML="Question Turn - "+player2;
    }
    else{
        question_turn="player1";
        document.getElementById("Question").innerHTML="Question Turn - "+player1;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("Answer").innerHTML="Answer Turn -  "+player2;
    }
    else{
        answer_turn="player1";
        document.getElementById("Answer").innerHTML="Answer Turn - "+player1;
    }
    document.getElementById("output").innerHTML="";
}
