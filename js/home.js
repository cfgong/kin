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
//graph
    var nodes = new vis.DataSet([  //change things here to change things for specific Nodes
      {id: 1, borderWidth: 3, size: 30, fixed: true, color: 'orange', label: 'Me'},
      {id: 2, color: 'purple', label: 'Family'},
      {id: 3, color: 'yellow', label: 'High School Pals'},
      {id: 4, color: 'green', label: 'Coworkers'},
      {id: 5,  color: 'purple', label: 'Mom'},
      {id: 6, color: 'purple', label: 'Dad'},
      {id: 7, color: 'purple', label: 'Riley'},
      {id: 14, color: 'purple', label: 'Ana'},
      {id: 8, color: 'yellow', label: 'Ryan'},
      {id: 9, color: 'yellow', label: 'Justin'},
      {id: 10, color: 'yellow', label: 'Joey'},
      {id: 11, color: 'green', label: 'Pam'},
      {id: 12, color: 'green', label: 'Jim'},
      {id: 13, color: 'green', label: 'Dwight'}
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
        document.getElementById("inputContact").innerHTML = "2/18/18"
      } else if (ids == 5) {
        document.getElementById("inputName").innerHTML = "Mom"
        document.getElementById("inputGroup").innerHTML = "Family"
        document.getElementById("inputFrequency").innerHTML = "Daily"
        document.getElementById("inputHealth").innerHTML = "Healthy"
        document.getElementById("inputContact").innerHTML = "3/4/18"
      } else if (ids == 6) {
        document.getElementById("inputName").innerHTML = "Dad"
        document.getElementById("inputGroup").innerHTML = "Family"
        document.getElementById("inputFrequency").innerHTML = "Daily"
        document.getElementById("inputHealth").innerHTML = "Semi-Healthy"
        document.getElementById("inputContact").innerHTML = "2/14/18"
      }else if (ids == 7) {
        document.getElementById("inputName").innerHTML = "Riley"
        document.getElementById("inputGroup").innerHTML = "Family"
        document.getElementById("inputFrequency").innerHTML = "Biweekly"
        document.getElementById("inputHealth").innerHTML = "Semi-Healthy"
        document.getElementById("inputContact").innerHTML = "2/17/18"
      }else if (ids == 14) {
        document.getElementById("inputName").innerHTML = "Ana"
        document.getElementById("inputGroup").innerHTML = "Family"
        document.getElementById("inputFrequency").innerHTML = "Biweekly"
        document.getElementById("inputHealth").innerHTML = "Healthy"
        document.getElementById("inputContact").innerHTML = "2/27/18"
      }else if (ids == 9) {
        document.getElementById("inputName").innerHTML = "Justin"
        document.getElementById("inputGroup").innerHTML = "High School Pals"
        document.getElementById("inputFrequency").innerHTML = "Monthly"
        document.getElementById("inputHealth").innerHTML = "Poor"
        document.getElementById("inputContact").innerHTML = "12/4/17"
      }else if (ids == 10) {
        document.getElementById("inputName").innerHTML = "Joey"
        document.getElementById("inputGroup").innerHTML = "High School Pals"
        document.getElementById("inputFrequency").innerHTML = "Biweekly"
        document.getElementById("inputHealth").innerHTML = "Healthy"
        document.getElementById("inputContact").innerHTML = "3/4/18"
      }else if (ids == 11) {
        document.getElementById("inputName").innerHTML = "Pam"
        document.getElementById("inputGroup").innerHTML = "Coworkers"
        document.getElementById("inputFrequency").innerHTML = "Weekly"
        document.getElementById("inputHealth").innerHTML = "Healthy"
        document.getElementById("inputContact").innerHTML = "2/24/18"
      }else if (ids == 13) {
        document.getElementById("inputName").innerHTML = "Dwight"
        document.getElementById("inputGroup").innerHTML = "Coworkers"
        document.getElementById("inputFrequency").innerHTML = "Biweekly"
        document.getElementById("inputHealth").innerHTML = "poor"
        document.getElementById("inputContact").innerHTML = "12/19/17"
      }else if (ids == 8) {
        document.getElementById("inputName").innerHTML = "Ryan"
        document.getElementById("inputGroup").innerHTML = "High School Pals"
        document.getElementById("inputFrequency").innerHTML = "Monthly"
        document.getElementById("inputHealth").innerHTML = "Poor"
        document.getElementById("inputContact").innerHTML = "1/1/18"
      }
      var clickedNodes = nodes.get(ids);
      // console.log('clicked nodes:', clickedNodes);

    });
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
    removeButton.innerHTML =  "<i class = 'material-icons' class='svg'>check_circle</i> <br> Contacted";
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
    prompt('How many days would you like to postpone?', 1);
    removeGroup(elementId, i);
}



init();
