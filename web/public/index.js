var data = {};
var classroom_ref = document.getElementById("classroom");
var classroom = classroom_ref.options[classroom_ref.selectedIndex].value;

document.addEventListener('DOMContentLoaded', function() {
    var database = firebase.database().ref().child(classroom);
    
    database.on("value", function(snapshot) {
        snapshot.forEach(element => {
            console.log("Element :  "+JSON.stringify(element));
        });
    });
});

function display_data() {
    // var task_ref = document.getElementById("task");
    // var task = task_ref.options[task_ref.selectedIndex].value;
    // var table = `<table>
    // <tr>
    //   <th>S.no</th>
    //   <th>User Name</th>
    //   <th>Time</th>
    //   <th>Date</th>
    // </tr>`;
   
    // var count = 0;
    
    //console.log(database);
    // database.on("value", function(snapshot) {
    //     snapshot.forEach(element => {
    //         count =count+1;
    //         table += "<tr><td>"+count+"</td><td>"+element.key+"</td><td>"+element.child('time').val()+"</td><td>"+element.child('date').val()+"</td></tr>";
    //         console.log(element.key+"\nDate : "+element.child('date').val()+"\nTime : "+element.child('time').val())
    //     });
    // });
    
    // table += "</table>";
    // document.getElementById("table_data").innerHTML = table;
    // console.log("Classroom name : "+classroom+"\nTask : "+task);
}