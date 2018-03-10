
var clicked = [false, false, false, false, false, false];


function fbmess(){
    if(clicked[0] == false){
      document.getElementById('facebookmessenger').style="background:var(--medium-orange); color: white;";
      clicked[0]=true;
    }
    else{
      document.getElementById('facebookmessenger').style="background: white; color: black;"
      clicked[0]=false;
    }

  };

function phone(){
  if(clicked[1] == false){
    document.getElementById('phone').style="background:var(--medium-orange); color: white;";
    clicked[1]=true;
  }
  else{
    document.getElementById('phone').style="background: white; color: black;"
    clicked[1]=false;
  }
  };


function Whatsapp(){
  if(clicked[2] == false){
    document.getElementById('Whatsapp').style="background:var(--medium-orange); color: white;";
    clicked[2]=true;
  }
  else{
    document.getElementById('Whatsapp').style="background: white; color: black;"
    clicked[2]=false;
  }
  };

function Slack(){
  if(clicked[3] == false){
    document.getElementById('Slack').style="background:var(--medium-orange); color: white;";
    clicked[3]=true;
  }
  else{
    document.getElementById('Slack').style="background: white; color: black;"
    clicked[3]=false;
  }
  };

function Wechat(){
  if(clicked[4] == false){
    document.getElementById('Wechat').style="background:var(--medium-orange)0; color: white;";
    clicked[4]=true;
  }
  else{
    document.getElementById('Wechat').style="background: white; color: black;"
    clicked[4]=false;
  }
    };

function Email(){
  if(clicked[5] == false){
    document.getElementById('email').style="background:var(--medium-orange); color: white;";
    clicked[5]=true;
  }
  else{
    document.getElementById('email').style="background: white; color: black;"
    clicked[5]=false;
  }
  };
