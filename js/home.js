var people = ["Ryan", "Justin", "Joey", "Misha", "Vincent", "Karen", "Kaori", "Evegenia"];
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
//graph
    var nodes = new vis.DataSet([  //change things here to change things for specific Nodes
      {id: 1, fixed: true, borderWidth: 3, size: 30, color: '#BDBDBD', label: 'Me'},
      {id: 2, color: '#BDBDBD', label: 'Family'},
      {id: 3, color: '#BDBDBD', label: 'High School Pals'},
      {id: 4, color: '#BDBDBD', label: 'Coworkers'},
      {id: 5,  color: '#00C853', label: 'Mom'},
      {id: 6, color: '#FFEB3B', label: 'Dad'},
      {id: 7, color: '#FFEB3B', label: 'Riley'},
      {id: 14, color: '#00C853', label: 'Ana'},
      {id: 8, color: '#FFA000', label: 'Ryan'},
      {id: 9, color: '#FFA000', label: 'Justin'},
      {id: 10, color: '#00C853', label: 'Joey'},
      {id: 11, color: '#00C853', label: 'Pam'},
      {id: 12, color: '#00C853', label: 'Jim'},
      {id: 13, color: '#FFA000', label: 'Dwight'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 1, to: 4},
      {from: 2, to: 14},
      {from: 2, to: 5},
      {from: 2, to: 6},
      {from: 2, to: 7},
      {from: 3, to: 8},
      {from: 3, to: 9},
      {from: 3, to: 10},
      {from: 4, to: 11},
      {from: 4, to: 12},
      {from: 4, to: 13}
    ]);

    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {    //edit things here to change properties of all nodes
        interaction:{
          zoomView: false
        },
        nodes: {
            shape: 'dot',
            size: 20,
            font: {
                size: 15,
                color: 'black'
            },
            borderWidth: 4,
            // bordercolor: 'black'
        },
        edges: {
            width: 2
        }

    };
    var network = new vis.Network(container, data, options);

    network.on( 'click', function(properties) {
      // console.log("here");
      var ids = properties.nodes;
      // console.log(ids);
      if (ids == 12) {
        document.getElementById("inputName").innerHTML = "Jim"
        document.getElementById("inputGroup").innerHTML = "Coworkers"
        document.getElementById("inputFrequency").innerHTML = "Biweekly"
        document.getElementById("inputHealth").innerHTML = "Healthy"
        document.getElementById("inputContact").innerHTML = "February 18, 2018"
      } else if (ids == 5) {
        document.getElementById("inputName").innerHTML = "Mom"
        document.getElementById("inputGroup").innerHTML = "Family"
        document.getElementById("inputFrequency").innerHTML = "Daily"
        document.getElementById("inputHealth").innerHTML = "Healthy"
        document.getElementById("inputContact").innerHTML = "March 4, 2018"
      } else if (ids == 6) {
        document.getElementById("inputName").innerHTML = "Dad"
        document.getElementById("inputGroup").innerHTML = "Family"
        document.getElementById("inputFrequency").innerHTML = "Daily"
        document.getElementById("inputHealth").innerHTML = "Semi-Healthy"
        document.getElementById("inputContact").innerHTML = "February 14, 2018"
      }else if (ids == 7) {
        document.getElementById("inputName").innerHTML = "Riley"
        document.getElementById("inputGroup").innerHTML = "Family"
        document.getElementById("inputFrequency").innerHTML = "Biweekly"
        document.getElementById("inputHealth").innerHTML = "Semi-Healthy"
        document.getElementById("inputContact").innerHTML = "February 17, 2018"
      }else if (ids == 14) {
        document.getElementById("inputName").innerHTML = "Ana"
        document.getElementById("inputGroup").innerHTML = "Family"
        document.getElementById("inputFrequency").innerHTML = "Biweekly"
        document.getElementById("inputHealth").innerHTML = "Healthy"
        document.getElementById("inputContact").innerHTML = "February 27, 2018"
      }else if (ids == 9) {
        document.getElementById("inputName").innerHTML = "Justin"
        document.getElementById("inputGroup").innerHTML = "High School Pals"
        document.getElementById("inputFrequency").innerHTML = "Monthly"
        document.getElementById("inputHealth").innerHTML = "Unhealthy"
        document.getElementById("inputContact").innerHTML = "December 4, 2017"
      }else if (ids == 10) {
        document.getElementById("inputName").innerHTML = "Joey"
        document.getElementById("inputGroup").innerHTML = "High School Pals"
        document.getElementById("inputFrequency").innerHTML = "Biweekly"
        document.getElementById("inputHealth").innerHTML = "Healthy"
        document.getElementById("inputContact").innerHTML = "March 4, 2018"
      }else if (ids == 11) {
        document.getElementById("inputName").innerHTML = "Pam"
        document.getElementById("inputGroup").innerHTML = "Coworkers"
        document.getElementById("inputFrequency").innerHTML = "Weekly"
        document.getElementById("inputHealth").innerHTML = "Healthy"
        document.getElementById("inputContact").innerHTML = "February/24/18"
      }else if (ids == 13) {
        document.getElementById("inputName").innerHTML = "Dwight"
        document.getElementById("inputGroup").innerHTML = "Coworkers"
        document.getElementById("inputFrequency").innerHTML = "Biweekly"
        document.getElementById("inputHealth").innerHTML = "Unhealthy"
        document.getElementById("inputContact").innerHTML = "December 19, 2017"
      }else if (ids == 8) {
        document.getElementById("inputName").innerHTML = "Ryan"
        document.getElementById("inputGroup").innerHTML = "High School Pals"
        document.getElementById("inputFrequency").innerHTML = "Monthly"
        document.getElementById("inputHealth").innerHTML = "Unhealthy"
        document.getElementById("inputContact").innerHTML = "January 1, 2018"
      }
      var clickedNodes = nodes.get(ids);
      // console.log('clicked nodes:', clickedNodes);

    });
    document.getElementById("info").addEventListener("mouseover", mouseOver);
    document.getElementById("info").addEventListener("mouseout", mouseOut);
};

function addUpcomingPerson(i){
  var group = document.createElement("div");
  group.setAttribute('class', "group");
  var groupId = "group"+i;
  group.setAttribute('id', groupId);
  document.getElementById("groups").append(group);
  //adding the status bar

  groupStatus= document.createElement("span");
  groupStatus.setAttribute("class", "status");
  groupStatus.setAttribute("class", "upcomingtext");
  groupStatus.innerHTML = "UPCOMING";
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
    var group = document.createElement("div");
    group.setAttribute('class', "group");
    var groupId = "group"+i;
    group.setAttribute('id', groupId);
    document.getElementById("groups").append(group);
    //adding the status bar

    groupStatus= document.createElement("span");
    groupStatus.setAttribute("class", "status");
    groupStatus.setAttribute("class", "overduetext");
    groupStatus.innerHTML = "OVERDUE";
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
    //adding a remove person button
    var removeButton = document.createElement("BUTTON");
    //removeButton.innerHTML =  "Remove";
    removeButton.innerHTML =  "<i class = 'material-icons' class='svg'>check_circle</i> <br> Contacted";
    removeButton.onclick = function(){contactGroup(groupId, lastPerson);}
    group.appendChild(removeButton);

    //adding a postpone button
    var removeButton = document.createElement("span");
    removeButton.setAttribute("class", "postponeButton");

    var postponeButton = document.createElement("BUTTON");
    //removeButton.innerHTML =  "Remove";
    postponeButton.innerHTML =  "<i class = 'material-icons' class='svg'>access_time</i> <br> Postpone";
    removeButton.appendChild(postponeButton);


    tooltip = document.createElement("div");
    tooltip.setAttribute("class", "tooltiptext");
    var tooltipId = groupId + "_tooltip";
    tooltip.setAttribute("id", tooltipId);
    tooltip.style.visibility = "hidden";

    button1 = document.createElement("button");
    button1.innerHTML = "1 Day";
    button1.onclick = function(){removeGroup(groupId, lastPerson);}
    tooltip.append(button1);

    button2 = document.createElement("button");
    button2.innerHTML = "2 Days";
    button2.onclick = function(){removeGroup(groupId, lastPerson);}
    tooltip.append(button2);

    button3 = document.createElement("button");
    button3.innerHTML = "3 Days";
    button3.onclick = function(){removeGroup(groupId, lastPerson);}
    tooltip.append(button3);

    button4 = document.createElement("button");
    button4.innerHTML = "1 Week";
    button4.onclick = function(){removeGroup(groupId, lastPerson);}
    tooltip.append(button4);

    removeButton.append(tooltip);
    postponeButton.onclick = function(){postponeGroup(groupId, lastPerson, tooltipId);}

    group.appendChild(removeButton);


}

function contactGroup(elementId, i){
    element = document.getElementById(elementId);
    element.remove(elementId);

    var currHealth =parseInt(document.getElementById("friendHealth").style.width);
    var newHealth = currHealth + 5+"%";
    document.getElementById("friendHealth").style.width = newHealth;

    lastPerson++;
    addUpcomingPerson(lastPerson);
}
function removeGroup(elementId, i){
    element = document.getElementById(elementId);
    element.remove(elementId);
    lastPerson++;
    addUpcomingPerson(lastPerson);
}
function postponeGroup(elementId, i, tooltipId){
    element = document.getElementById(elementId);
    //toggle visibility
    if (document.getElementById(tooltipId).style.visibility=='hidden'){
        document.getElementById(tooltipId).style.visibility = 'visible';
    }else{
      document.getElementById(tooltipId).style.visibility = 'hidden';
    }

}

function mouseOver() {
    document.getElementById("info").style.color = "red";
    document.getElementById("info").onclick = function(){alert('This how your relationship health is calculated');}

}

function mouseOut() {
    document.getElementById("info").style.color = "gray";
}

init();
