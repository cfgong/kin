var groupId = 0;

function init(){
    addGroupButton();
};
function addGroupButton(){

    var group = document.createElement("div");
    group.setAttribute('class', "groupTitle");
    group.setAttribute('id', "addGroupButton");
    group.innerHTML =  "Add Group";

    group.onclick = function(){addGroup();}

    document.getElementById("groups").append(group);
}
function addGroup(){
    var elementId = "group-"+groupId;
    var group = document.createElement("div");
    group.setAttribute('class', "group");
    group.setAttribute('id', elementId);
    group.setAttribute('person_count', 1);

    //document.getElementById("groups").append(group);
    var addGroupButton = document.getElementById("addGroupButton");
    document.getElementById("groups").insertBefore(group, addGroupButton);
    //group title
    groupTitle = document.createElement("DIV");
    groupTitle.setAttribute("class", "groupTitle");
    groupTitleId = elementId+"-groupTitle";
    groupTitle.setAttribute("id", groupTitleId);
    group.append(groupTitle);
    addTextField(groupTitleId, "Group Name ");

    var removeButton = document.createElement("IMG");
    removeButton.setAttribute("class", "removeButton");
    removeButton.setAttribute ("src", 'img/remove.png');
    removeButton.onclick = function(){removeGroup(elementId);}
    groupTitle.appendChild(removeButton);
    //initializing with a single person
    addPerson(elementId);

    //adding one add person button
    var addButton = document.createElement("BUTTON");
    addButton.setAttribute("class", "addButton");
    addButton.innerHTML =  "<i class='material-icons'>add_circle_outline</i>";
    addButton.onclick = function(){addPerson(elementId, addButton);}
    group.appendChild(addButton);

    groupId++;
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
    group.insertBefore(person, addButton);
    //Person Name field
    addTextField(personId,"Name ");
    person.innerHTML += "<br>";
    //Person Relationship Field
    addTextField(personId,"Relationship ");
    //adding a remove person button
    var removeButton = document.createElement("IMG");
    removeButton.setAttribute("class", "removeButton");
    removeButton.setAttribute ("src", 'img/remove.png');
    removeButton.onclick = function(){removePerson(groupId, personId);}
    person.appendChild(removeButton);

    group.setAttribute('person_count',p+1);
}
function removePerson(parentId, personId){
    parent = document.getElementById(parentId);
    child = document.getElementById(personId);
    parent.removeChild(child);
}
function removeGroup(elementId){
    removeElement(elementId);
}

function removeElement(elementId) {
    element = document.getElementById(elementId);
    element.remove(elementId);
}

init();
