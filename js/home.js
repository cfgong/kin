var people = ["Victor", "Nathan", "Jessica", "Kerui", "Hannah", "Bob"];
var images = []

function init(){
    document.getElementById("groups").innerHTML = "Status Bar <br>";
    for (var i =0; i<3; i++){
        addGroup();
    }
    
};
function addGroup(){
    var elementId = "group-"+groupId;

    var group = document.createElement("div");
    group.setAttribute('class', "group");
    group.setAttribute('id', elementId);
    group.setAttribute('person_count', 1);
    
    document.getElementById("groups").append(group);
    //group title
    groupTitle = document.createElement("DIV");
    groupTitle.setAttribute("class", "groupTitle");
    groupTitleId = elementId+"-groupTitle";
    groupTitle.setAttribute("id", groupTitleId);
    group.append(groupTitle);
    addTextField(groupTitleId, "Group Name: ");
    
    //initializing with a single person
    addPerson(elementId); 
    
    groupId++; 
    groupCount++;
    
}
function addTextField(parentId, labelStr){
    var parent = document.getElementById(parentId);
    
   // document.getElementById(parentId).innerHTML += labelStr;
    
    var text = document.createElement("INPUT");
    text.setAttribute("placeholder", labelStr);
    text.setAttribute("type", "text");
    
    parent.appendChild(text);
}
function addPerson(groupId, addButton){
    var group = document.getElementById(groupId);
    var p = parseInt(group.getAttribute('person_count'));
    var personId = groupId+"person-"+p; 
    
    //Person Div
    var person = document.createElement("DIV");
    person.setAttribute("class", "person"); 
    person.setAttribute("id", personId); 
    group.append(person);
    
    //Person Name field
    addTextField(personId,"Name: ");
    person.innerHTML += "<br>";
    
    //Person Relationship Field 
    addTextField(personId,"Relationship: ");
    
    //adding a remove person button
    var removeButton = document.createElement("BUTTON");
    removeButton.innerHTML =  "Remove";
    removeButton.onclick = function(){removePerson(groupId, personId);}
    person.appendChild(removeButton);
}
function removePerson(parentId, personId){
    parent = document.getElementById(parentId);
    child = document.getElementById(personId);
    parent.removeChild(child);
}
function removeGroup(elementId){
    removeElement(elementId);
    groupCount--;
}

function removeElement(elementId) {
    element = document.getElementById(elementId);
    element.remove(elementId);
}

init();