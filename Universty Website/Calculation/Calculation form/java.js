function validation() {
    var Name = document.getElementById("name").value;
    if (Name == "") {
        document.getElementById("demo1").innerHTML = " Enter you Data";
    }
    else {
        document.getElementById("demo1").innerHTML = "";
    }
    var contact = document.getElementById("contact").value;
    if (contact < 0 || contact == "") {
        document.getElementById('demo2').innerHTML = " Invalid entry";

    }
    else {
        document.getElementById("demo2").innerHTML = "";
    }
    var Age = document.getElementById("Age").value;
    if (Age < 18 || Age == "") {
        document.getElementById("demo3").innerHTML = " Invalid entry";
    }
    else {
        document.getElementById("demo3").innerHTML = "";
    }
    /*var Gender = document.getElementsByName('Gender');
    var radioVal = 0;
    for (var i = 0; i < Gender.length; i++) {
        if (Gender[i].checked) {
            var g = document.getElementById('textarea').innerHTML = Gender[i].value;
            break;
        }
    }
    var Major = document.getElementsByName('Majors');
    var radioVal = 0;
    for (var i = 0; i < Major.length; i++) {
        if (Major[i].checked) {
            var t = document.getElementById('textarea').innerHTML = Major[i].value;
            break;
        }
    }
    var Degree = document.getElementsByName('Degree');
    var radioVal = 0;
    for (var i = 0; i < Degree.length; i++) {
        if (Degree[i].checked) {
            var h = document.getElementById('textarea').innerHTML = Degree[i].value;
            break;
        }
    }*/
    var hours = document.getElementById("hours").value;
    if (hours < 9 || hours == "") {
        document.getElementById("demo5").innerHTML = " Invalid entry";
    }
    else {
        document.getElementById("demo5").innerHTML = "";
    }
    var Amount = document.getElementById("Amount").value;
    if (Amount < 260 || Amount == "") {
        document.getElementById("demo6").innerHTML = " Invalid entry";
    }
    else {
        document.getElementById("demo6").innerHTML = "";
    }
    var y = f * g - (f * g * 15 / 100);
    var all = "Name: " + Name + "\nContact info:: " + contact + "\nAge: " + Age +/*"\nGender: "+g+"\nMajor: "+t+"\nDegree: "+h+*/"\nHours: " + hours + "\nAmount: " + Amount + "\nIncome Salary: " + y;
    document.getElementById('hi').innerHTML = alert(all);
}