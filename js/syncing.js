
var clicked = [false, false, false, false, false, false];


function fbmess(){
    if(clicked[0] == false){
      document.getElementById('facebook').style="background:var(--gold); color: white;";
      clicked[0]=true;
    }
    else{
      document.getElementById('facebook').style="background: white; color: var(--gold);"
      clicked[0]=false;
    }

  };

function phone(){
  if(clicked[1] == false){
    document.getElementById('phone').style="background:var(--gold); color: white;";
    clicked[1]=true;
  }
  else{
    document.getElementById('phone').style="background: white; color: var(--gold);"
    clicked[1]=false;
  }
  };


function Whatsapp(){
  if(clicked[2] == false){
    document.getElementById('Whatsapp').style="background:var(--gold); color: white;";
    clicked[2]=true;
  }
  else{
    document.getElementById('Whatsapp').style="background: white; color: var(--gold);"
    clicked[2]=false;
  }
  };

function Slack(){
  if(clicked[3] == false){
    document.getElementById('Slack').style="background:var(--gold); color: white;";
    clicked[3]=true;
  }
  else{
    document.getElementById('Slack').style="background: white; color: var(--gold);"
    clicked[3]=false;
  }
  };

function Wechat(){
  if(clicked[4] == false){
    document.getElementById('Wechat').style="background:var(--gold)0; color: white;";
    clicked[4]=true;
  }
  else{
    document.getElementById('Wechat').style="background: white; color: var(--gold);"
    clicked[4]=false;
  }
    };

function Email(){
  if(clicked[5] == false){
    document.getElementById('email').style="background:var(--gold); color: white;";
    clicked[5]=true;
  }
  else{
    document.getElementById('email').style="background: white; color: var(--gold);"
    clicked[5]=false;
  }
  };
