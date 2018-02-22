var people = ["Victor", "Nathan", "Kaetlyn", "Kristi", "Michelle", "Bradie", "Vincent", "Karen", "Kaori", "Evegenia"];
var images = [];
var lastPerson = 0; 
var max = 0; 

function init(){
    //populating images list
  for (var i = 0; i < people.length; i++){
    var t = "img/image" + i + ".jpg";
    images.push(t);
      console.log(images[i]);
  }
    max = images.length; 
    document.getElementById("groups").innerHTML = "Status Bar <br>";
    lastPerson = 4; 
    for (var i =0; i<lastPerson; i++){
        addPerson(i);
    }
    
};
function addPerson(i){
    var group = document.createElement("div");
    group.setAttribute('class', "group");
    var groupId = "group"+i;
    group.setAttribute('id', groupId);
    
    document.getElementById("groups").append(group);
    //group title
    groupTitle = document.createElement("DIV");
    groupTitle.setAttribute("class", "groupTitle");
    groupTitleId = "groupTitle"+i;
    groupTitle.setAttribute("id", groupTitleId);
    groupTitle.innerHTML = people[i];
    group.append(groupTitle);
    
    //adding an image 
    img = document.createElement("img");
    img.setAttribute("src", images[i]);
    group.append(img);
    group.innerHTML+="<br>";
    
    //adding a remove person button
    var removeButton = document.createElement("BUTTON");
    removeButton.innerHTML =  "Remove";
    removeButton.onclick = function(){removeGroup(groupId, lastPerson);}
    group.appendChild(removeButton);
    
    //adding a postpone button
    var removeButton = document.createElement("BUTTON");
    removeButton.innerHTML =  "Postpone";
    removeButton.onclick = function(){postponeGroup(groupId, lastPerson);}
    group.appendChild(removeButton);  
}
function removeGroup(elementId, i){
    element = document.getElementById(elementId);
    element.remove(elementId);
    /**
    if (lastPerson >= max){
        lastPerson = 0; 
    }
    addPerson(lastPerson);
    lastPerson++;
    **/
    if (lastPerson<max){
        addPerson(lastPerson);
        lastPerson++;
    }
}
function postponeGroup(elementId, i){
    prompt('Specify the number of days to postpone', 1);
    removeGroup(elementId, i);
}



init();