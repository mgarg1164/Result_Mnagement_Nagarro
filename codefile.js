var students = [];   // storing all results here
function addResult(){

    var roll = document.getElementById("roll").value.trim();
    var name = document.getElementById("name").value.trim();
    var dob  = document.getElementById("dob").value;
    var score = document.getElementById("score").value.trim();
    //hiding errors first 
    document.getElementById("rollErr").classList.add("d-none");
    document.getElementById("nameErr").classList.add("d-none");
    document.getElementById("dobErr").classList.add("d-none");
    document.getElementById("scoreErr").classList.add("d-none");

    var hasError = false;   //checking any issue

    // roll validation
    if(roll === ""){
        document.getElementById("rollErr").classList.remove("d-none");
        hasError = true;
    }
    // name validation
    if(name === ""){
        document.getElementById("nameErr").classList.remove("d-none");
        hasError = true;
    }
    // dob validation
    if(dob === ""){
        document.getElementById("dobErr").classList.remove("d-none");
        hasError = true;
    }
// score validation 
    if(score === ""){
        document.getElementById("scoreErr").innerText = "Score cannot be empty";
        document.getElementById("scoreErr").classList.remove("d-none");
        hasError = true;
    }
    else if(score < 0){
        document.getElementById("scoreErr").innerText = "Score cannot be less than 0";
        document.getElementById("scoreErr").classList.remove("d-none");
        hasError = true;
    }
    else if(score > 100){
    document.getElementById("scoreErr").innerText = "Score cannot be more than 100";
    document.getElementById("scoreErr").classList.remove("d-none");
        hasError = true;
    }



    if(hasError){
        return;  // stopping if wrong 
    }
    //creating object for one student 
var studentObj = {
        rollNo : roll,
        name   : name,
        dob    : dob,
        score  : score
    };
    students.push(studentObj);     // storing in array
    alert("Student result added !!");
document.getElementById("resultForm").reset();
}
function showList(){

    var tableBody = document.getElementById("resultTable");
    tableBody.innerHTML = "";   // empty first
    for(var i=0; i < students.length; i++){      
        var row = "<tr>" +
  "<td>" + students[i].rollNo + "</td>" +
        "<td>" + students[i].name   + "</td>" +
    "<td>" + students[i].dob    + "</td>" +
"<td>" + students[i].score  + "</td>" +
        "</tr>";

        tableBody.insertAdjacentHTML("beforeend", row);   // adding row
    }

    document.getElementById("formCard").classList.add("d-none");
    document.getElementById("tableBox").classList.remove("d-none");
}
function hideList(){

    document.getElementById("tableBox").classList.add("d-none");  
    document.getElementById("formCard").classList.remove("d-none"); 

}
