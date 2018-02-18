var groupId = 0; 
var groupCount = 0; 

var personHtml= ''; 
function init(){
    addGroup();
};
function addGroup(){
    var elementId = "group-"+groupId;

    var group = document.createElement("div");
    group.setAttribute('class', "group");
    group.setAttribute('id', elementId);
    group.setAttribute('person_count', 1);
    
    //var end = document.getElementById("add_group");
    //document.body.insertBefore(group, end); //adding group to body
    document.getElementById("groups").append(group);
    //group title
    addTextField(elementId, "Group: ");
    
    var removeButton = document.createElement("BUTTON");
    removeButton.innerHTML =  "Remove Group";
    removeButton.onclick = function(){removeGroup(elementId);}
    group.appendChild(removeButton);
    
    //initializing with a single person
    addPerson(elementId); 
    
    //adding one add person button
    var addButton = document.createElement("BUTTON");
    addButton.innerHTML =  "Add Person";
    addButton.onclick = function(){addPerson(elementId, addButton);}
    group.appendChild(addButton);
    
    groupId++; 
    groupCount++;
    
}
function addTextField(parentId, labelStr){
    var parent = document.getElementById(parentId);
    
    document.getElementById(parentId).innerHTML += labelStr;
    
    var text = document.createElement("INPUT");
    text.setAttribute("placeholder",name);
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
    group.insertBefore(person, addButton);
    
    //Person Name field
    addTextField(personId,"Name: ");
    person.innerHTML += "<br>";
    
    //Person Relationship Field 
    addTextField(personId,"Relationship: ");
    
    //adding a remove person button
    var removeButton = document.createElement("BUTTON");
    removeButton.innerHTML =  "remove this person";
    removeButton.onclick = function(){removePerson(groupId, personId);}
    person.appendChild(removeButton);
    
    //person_count addition
    group.setAttribute('person_count',p+1);
    console.log("ADDING"+group.getAttribute("person_count"));
}
function removePerson(parentId, personId){
    console.log("REMOVE"+personId);
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