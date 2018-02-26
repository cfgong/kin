var people = ["Victor", "Nathan", "Michelle", "Misha", "Vincent", "Karen", "Kaori", "Evegenia"];
var images = [];
var days = [];
var lastPerson = 0;
var max = 0;

function init(){
    //populating images list
  for (var i = 0; i < people.length; i++){
    var t = "img/image" + i + ".jpg";
    images.push(t);
  }
    max = images.length;

    //populating days list
    for (var i = -3; i < people.length; i++){
    days.push(Math.abs(i));
  }

    lastPerson = 3;
    for (var i =0; i<lastPerson; i++){
        addOverduePerson(i);
    }
    addUpcomingPerson(3);

};
function addPerson(i, labelStr){
  var group = document.createElement("div");
  group.setAttribute('class', "group");
  var groupId = "group"+i;
  group.setAttribute('id', groupId);
  document.getElementById("groups").append(group);
  //adding the status bar

  groupStatus= document.createElement("span");
  groupStatus.setAttribute("class", "status");
  groupStatus.innerHTML = labelStr;
  group.append(groupStatus);

  groupDays= document.createElement("span");
  groupDays.setAttribute("class", "days");
  groupDays.innerHTML = days[i]+" days";
  group.append(groupDays);

  //adding an image
  img = document.createElement("img");
  img.setAttribute("src", images[i]);
  img.setAttribute("class", "proPic");
  group.append(img);
  //group.innerHTML+="<br>";

  //group title
  groupTitle = document.createElement("DIV");
  groupTitle.setAttribute("class", "groupTitle");
  groupTitleId = "groupTitle"+i;
  groupTitle.setAttribute("id", groupTitleId);
  groupTitle.innerHTML = people[i];
  group.append(groupTitle);
  return groupId;
}
function addOverduePerson(i){
    var groupId = addPerson(i, "OVERDUE");
    var group = document.getElementById(groupId);
    //adding a remove person button
    var removeButton = document.createElement("BUTTON");
    //removeButton.innerHTML =  "Remove";
    removeButton.innerHTML =  "<i class = 'material-icons' class='svg'>check_circle</i> <br> Remove";
    removeButton.onclick = function(){removeGroup(groupId, lastPerson);}
    group.appendChild(removeButton);

    //adding a postpone button
    var removeButton = document.createElement("BUTTON");
    removeButton.innerHTML =  "<img src ='img/postpone.svg' class = 'svg'><br>Postpone";
    removeButton.onclick = function(){postponeGroup(groupId, lastPerson);}
    group.appendChild(removeButton);
}
function addUpcomingPerson(i){
    var groupId = addPerson(i, "UPCOMING");
}
function removeGroup(elementId, i){
    element = document.getElementById(elementId);
    element.remove(elementId);
    lastPerson++;
    addUpcomingPerson(lastPerson);
    /**
    if (lastPerson >= max){
        lastPerson = 0;
    }
    addPerson(lastPerson);
    lastPerson++;

    if (lastPerson<max){
        addPerson(lastPerson);
        lastPerson++;
    }
    **/
}
function postponeGroup(elementId, i){
    prompt('Specify the number of days to postpone', 1);
    removeGroup(elementId, i);
}



init();
