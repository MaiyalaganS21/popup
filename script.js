
function Validate() {

  var name = document.getElementById("sol").value;
  var mail = document.getElementById("mt").value;
  var val = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (name == "") {
    alert("Please enter the username");
    return false;

  }
  if (mail == "") {
    alert("please enter your email")
    return false;
  }
  if (mail.match(val)) {
    User();
    return true;
  }
  else {
    alert("Email address is invalid please enter the valid email address");
    return false;
  }

}
function updateValidate() {

  var name = document.getElementById("updatesol").value;
  var mail = document.getElementById("updatemt").value;
  var val = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

 if (name == "") {
    alert("Please enter the username");
    return false;
  }
  if (mail == "") {
    alert("please enter your email")
    return false;
  }
  if (mail.match(val)) {
    UpdateUser();
    return true;
  }
  else {
    alert("Email address is invalid please enter the valid email address");
    return false;
  }
}

userlistdata = [];
function User() {

  var a = document.getElementById("sol").value;
  var b = document.getElementById("mt").value;
  var data = {
    name: a,
    email: b,
  }
  userlistdata.push(data);
  var tabledata = "";

  userlistdata.forEach((userdata, index) => {
    tabledata += '<tr><td>' + userdata.name + '</td>' + '<td>' + userdata.email + '</td>' + '<td><button type="button" onclick="edit(' + index + ')" id="one" class="btn btn-success">Edit</button><button type="button"onclick="delet(' + index + ')" class="btn btn-danger">Delete</button></td></tr>'
  });
  document.getElementById("table1").innerHTML = tabledata;
  document.getElementById("sol").value = null;
  document.getElementById("mt").value = null;
  document.getElementById('hello').style.display = 'none'
}
useredit = [];
function edit(index) {
  document.getElementById("updatesol").value = userlistdata[index].name;
  document.getElementById("updatemt").value = userlistdata[index].email;
  document.getElementById("dataindex").value = index;
  document.getElementById('update').style.display = 'inline';
}
function delet(index) {
  let text = " Are you sure want to delete";
  if (confirm(text) == true) {
    userlistdata.splice(index, 1);
    var tabledata = "";

    userlistdata.forEach((userdata, index) => {
      tabledata += '<tr><td>' + userdata.name + '</td>' + '<td>' + userdata.email + '</td>' + '<td><button type="button" onclick="edit(' + index + ')" id="one" class="btn btn-success">Edit</button><button type="button"onclick="delet(' + index + ')" class="btn btn-danger">Delete</button></td></tr>'
    });
    document.getElementById("table1").innerHTML = tabledata;
  } else {
  }
}
function UpdateUser() {
  var a = document.getElementById("updatesol").value;
  var b = document.getElementById("updatemt").value;
  var data = {
    name: a,
    email: b,
  }
  userlistdata[document.getElementById("dataindex").value] = data;
  var tabledata = "";

  userlistdata.forEach((userdata, index) => {
    tabledata += '<tr><td>' + userdata.name + '</td>' + '<td>' + userdata.email + '</td>' + '<td><button type="button" onclick="edit(' + index + ')" id="one" class="btn btn-success">Edit</button><button type="button"onclick="delet(' + index + ')" class="btn btn-danger">Delete</button></td></tr>'
  });
  document.getElementById("table1").innerHTML = tabledata;
  document.getElementById("updatesol").value = null;
  document.getElementById("updatemt").value = null;
  document.getElementById('update').style.display = 'none'
}


















