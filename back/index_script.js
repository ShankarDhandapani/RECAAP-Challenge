// Initialize Firebase
let config = {
    databaseURL: "https://repldashboard.firebaseio.com/",
    projectId: "repldashboard",
};

firebase.initializeApp(config);
let firestore = firebase.firestore();
// var db = firebase.firestore();
console.log("Cloud Firestores Loaded");
var data_dic = {};

function getDataFromFirestore(){
    // var year_ref = document.getElementById("year");
    // var year = year_ref.options[year_ref.selectedIndex].text;
    // var month_ref = document.getElementById("month");
    // var month = month_ref.options[month_ref.selectedIndex].text;
    // var date_ref = document.getElementById("date");
    // var date = date_ref.options[date_ref.selectedIndex].text;
    // var task_ref = document.getElementById("task");
    // var task = task_ref.options[task_ref.selectedIndex].text;
    var year = "2019", month = "Aug", date = "9", task = "Task1";
    var day;
    if(date == "9") {
        day = "Fri";
    } else {
        day = "Sat";
    }

    console.log("Year : "+year+"\nMonth : "+month+"\nDate : "+date+"\nTask : "+task+"\nDay : "+day);
    let yearCollectionRef = firestore.collection("2019");
    yearCollectionRef.get().then(collections => {
        console.log(data);
        // querysnapshot.docs.forEach((docSnapshot) => {
        //     console.log(docSnapshot.id);
        //     collection_ref.doc(docSnapshot.id.toString()).getCollections().get().then((querysnapshot1) => {
        //         console.log(querysnapshot1.id);
        //     });
        // });
    });

}

function display_data() {
    console.log("Getting data");
    getDataFromFirestore();
    console.log("Data received");
    var output_table = "<table><tr><th>S.No</th><th>Name</th> <th>Completion Time</th></tr>"
    var count = 0;
    for(var val in data_dic){
        count += 1;
        output_table += "<tr><td>"+count+"</td><td>"+val+"</td><td>"+data_dic[val]+"</td></tr>";
    }
    output_table += "</table>"
    document.getElementById("table_data").innerHTML = output_table;
}


// console.log("Doc Ref : ",doc_ref);