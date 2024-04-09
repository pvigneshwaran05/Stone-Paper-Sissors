$("button").click(function(){
    var id = $(this).attr("id");
    process(id);
    // $(".head").addClass("hide");
    $(".head").text("Check out your 'SCORE' now")
    setTimeout(function(){
        $(".head").text("Choose again and 'INCREASE' your score");
    },1000);
})

var score=0;


function process(id){
    var things=["stone","paper","sissors"]
    var num=Math.floor(Math.random()*10)%3;
    var u=id;
    var i=things.indexOf(u);
    var c=things[num];
    var win=decide(num,i);
    $("#win").text("You chose "+u+" and the computer chose "+c);
    if(u==c){
        var text='Draw';
        
    }
    else if(win==i){
        var text="Hurray You win";
        score++;
    }   
    else{
        var text="Sorry Better Luck Next Time";
        score--;
    }

      $(".result").text(text);

      image(u,c);
      $(".score").text("Score : "+score);
      color(text);
}

function color(text){
    if(text=="Draw"){
        c="white"
    }
    else if(text=="Hurray You win"){
        c="green"
    }
    else{
        c="red"
    }

    if(score==0){
        sc="white"
    }
    else if(score>0){
        sc="green"
    }
    else{
        sc="red"
    }

    $(".result").removeClass("white green red").addClass(c);
    $(".score").removeClass("white green red").addClass(sc);
}

function decide(a,b){
    if((a==0 && b==1)||(a==1 && b==0)){
        return 1;
    }
    else if((a==1 && b==2)||(a==2 && b==1)){
        return 2;
    }
    else if(a==b){
        return 8;
    }
    else{
        return 0;
    }
}


function image(u,c){
    $("#u").attr("src","./"+u+".png");
    $("#c").attr("src","./"+c+".png");
    $(".main").addClass("show");
    $("#user").text(u);
    $("#comp").text(c);
}


