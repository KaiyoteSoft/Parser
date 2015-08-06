requiredlengthHw = 11;
$(document).ready(function() {
  $('body').keydown(function(e) {
    if (e.keyCode == 13) {
      alert("Must click the search button... sorry");
    }
  })
});


function errorMessage(error) {
  if (error=="error") {
    alert("What you have searched for is not available in our database");
  }
  if (error=="octetError") {
    alert("You need at least 3 octets for a valid search");
  }
  if (error=="hardwareError") {
    alert("You need at least 12 characters for a valid search");
  }
}

// Takes the name inputed from the from and searches the json data
function inputName() {
  $('#listData').html(" ");  
  $('#listData').html("Loading..."); 
  var nameAddress =document.nameForm.nameType.value;
  // var url = "/ipm/ipm/search?name=" + nameAddress;

  // $.getJSON( url, function ( jsondata ) {
  listContainer = [];
  var count = 0
  var i = 0;
  for (i; i < jsondata.length; i++){
    var jsonData = jsondata[i].fqname;
    if (jsonData.startsWith(nameAddress)) {
      var ipAddress = jsondata[i].ipstr;
      var count = jsondata[i].refcnt;
      var hardware = jsondata[i].hw;
      var name = jsondata[i].fqname;
// This part of the code translates and edits the times seen
      var first = jsondata[i].firstseen;
      var last = jsondata[i].lastseen;
        var firstSeen = new Date(first);
        var lastSeen = new Date(last);
        var stringFirst = firstSeen.toString();
        var stringLast = lastSeen.toString();
        if(stringFirst.length > 15) stringFirst = stringFirst.substring(0,15);
        if(stringLast.length > 15) stringLast = stringLast.substring(0,15);
// And this is where it ends --> Copy the code in between these comments
      count = count + 1;
      listContainer.push("<tr> <td>" + name + "</td> <td>" + "<a onclick=\"searchIp('" +
      ipAddress + "');\">" + ipAddress + "</a> </td>" + "<td>" +
      "<a onclick=\"searchHardware('" + hardware + "');\">" 
      + hardware + "</a>" + "</td>" +
      "<td>" + count + "</td> </tr>"); //this has been changed
    }
    
  } 
    if (count < 1) {
      listContainer.push("<tr> <td>What you have searched for is" + 
        " not available in our database </td> </tr>");
      errorMessage("error");
    }

  listTable = "<table> <tr> <th>Machine Name</th> <th>Ip Address</th>" + 
  "<th>Hardware</th> <th>Count</th>" + 
  "</tr>" + listContainer + "</table>"

  $('#listData').html(" ");  
  $('#listData').html(listTable);
  document.nameForm.nameType.value = ('');
  // });
}

// Looking for all the Addresses and storing in a list
function inputList() {
  $('#listData').html(" "); 
  $('#listData').html("Loading..."); 
  var listAddress = document.listForm.listType.value;
  // var url = "/ipm/ipm/search?ip=" + listAddress;

  // $.getJSON( url, function ( jsondata ) {
  listContainer = []
  var i = 0;
  var count = 0;
// Creating the octet and preparing to check correct length
  var ipOctet = listAddress.split('.');
  var minOctetLength = 3
  
  for (i; i < jsondata.length; i++) {
    var jsonData = jsondata[i].ipstr
    if (ipOctet.length >= minOctetLength) {
      if (jsonData.startsWith(listAddress)) {
        var ipAddress = jsondata[i].ipstr;
        var count = jsondata[i].refcnt;
        var hardware = jsondata[i].hw;
        var name = jsondata[i].fqname;
// This part of the code translates and edits the times seen
        var first = jsondata[i].firstseen;
        var last = jsondata[i].lastseen;
          var firstSeen = new Date(first);
          var lastSeen = new Date(last);
          var stringFirst = firstSeen.toString();
          var stringLast = lastSeen.toString();
          if(stringFirst.length > 15) stringFirst = stringFirst.substring(0,15);
          if(stringLast.length > 15) stringLast = stringLast.substring(0,15);
// And this is where it ends --> Copy the code in between these comments
        count = count + 1;
        listContainer.push("<tr> <td>" + name + "</td> <td>" + "<a onclick=\"searchIp('" +
        ipAddress + "');\">" + ipAddress + "</a> </td>" + "<td>" +
        "<a onclick=\"searchHardware('" + hardware + "');\">" 
        + hardware + "</a>" + "</td>" +
        "<td>" + count + "</td> </tr>"); 
        }
      }
    }
    
    if (count < 1) {
      listContainer.push("<tr> <td>What you have searched for is" + 
        " not available in our database </td> </tr>");
      errorMessage("error");
    }

    if (ipOctet.length <= minOctetLength) {
      listContainer.push("<tr> <td>Needs at least 3 octets for a valid search</td> </tr>");
      errorMessage("octetError");
    } 

  listTable = "<table> <tr> <th>Machine Name</th> <th>Ip Address</th>" + 
  "<th>Hardware</th> <th>Count</th> </tr>" + listContainer + "</table>"

  $('#listData').html(" "); 
  $('#listData').html(listTable);
  document.listForm.listType.value = ('');

  // });
}

// Takes the string inputed from the hardware from and searches for it in the json data
function inputHardware() {
  $('#listData').html(" "); //get this and
  $('#listData').html("Loading..."); //this
  var hwAddress = document.hwForm.hwType.value;
  // var url = "/ipm/ipm/search?hw=" + hwAddress;

  // $.getJSON( url, function ( jsondata ) {

  listContainer = []
  var i = 0;
  var count = 0;
  for (i; i < jsondata.length; i++) {
    var jsonData = jsondata[i].hw
    if (hwAddress.length >= requiredlengthHw) {
      if (jsonData.startsWith(hwAddress)) {
        var ipAddress = jsondata[i].ipstr;
        var count = jsondata[i].refcnt;
        var hardware = jsondata[i].hw;
        var name = jsondata[i].fqname;
// This part of the code translates and edits the times seen
        var first = jsondata[i].firstseen;
        var last = jsondata[i].lastseen;
          var firstSeen = new Date(first);
          var lastSeen = new Date(last);
          var stringFirst = firstSeen.toString();
          var stringLast = lastSeen.toString();
          if(stringFirst.length > 15) stringFirst = stringFirst.substring(0,15);
          if(stringLast.length > 15) stringLast = stringLast.substring(0,15);
// And this is where it ends --> Copy the code in between these comments
        count = count + 1;
        listContainer.push("<tr> <td>" + name + "</td> <td>" + hardware + "</td>" + "<td>" +
        "<a onclick=\"searchIp('" + ipAddress + "');\">" 
        + ipAddress + "</a>" + "</td>" +
        "<td>" + count + "</td> </tr>"); 
        }
      }
    }

    if (count < 1) {
      listContainer.push("<tr> <td>What you have searched for is" + 
        " not available in our database </td> </tr>");
      errorMessage("error");
    }
    
    if (hwAddress.length <= requiredlengthHw) {
      listContainer.push("<tr> <td>System needs at least 12 characters for a valid search</td> </tr>");
      errorMessage("hardwareError");
  }

  listTable = "<table> <tr> <th>Machine Name</th> <th>Hardware</th>" + 
  "<th>Ip Address</th> <th>Count</th> </tr>" + listContainer + "</table>"

  $('#listData').html(" ");
  $('#listData').html(listTable);
  document.hwForm.hwType.value = ('');

  // });
}

// Allows search by hardware within the table
function searchHardware(hw) {
  $('#listData').html(" ");  
  $('#listData').html("Loading..."); 
  var hardware = hw;
  // var url = "/ipm/ipm/search?hw=" + hardware;

  // $.getJSON( url, function ( jsondata ) {
  listContainer = [];
    var i = 0;
    for (i; i < jsondata.length; i++) {
      var jsonData = jsondata[i].hw
      if (hardware.length >= requiredlengthHw) {
        if (jsonData.startsWith(hardware)) {
          var ipAddress = jsondata[i].ipstr;
          var name = jsondata[i].fqname;
          var count = jsondata[i].refcnt;
// This part of the code translates and edits the times seen
        var first = jsondata[i].firstseen;
        var last = jsondata[i].lastseen;
          var firstSeen = new Date(first);
          var lastSeen = new Date(last);
          var stringFirst = firstSeen.toString();
          var stringLast = lastSeen.toString();
          if(stringFirst.length > 15) stringFirst = stringFirst.substring(0,15);
          if(stringLast.length > 15) stringLast = stringLast.substring(0,15);
// And this is where it ends --> Copy the code in between these comments
          listContainer.push("<tr> <td>" + name + "</td> <td>" + hardware + "</td>" + "<td>" + 
          "<a onclick=\"searchIp('" + ipAddress + "');\">"
          + ipAddress + "</td>" +
          "<td>" + count + "</td> <td> </tr>"); 
        }
      }
    }
  listTable = "<table> <tr> <th>Machine Name</th> <th>Hardware</th>" +
  "<th>Ip Address</th> <th>Count</th> </tr>" + listContainer + "</table>" 
  
  $('#listData').html(" "); 
  $('#listData').html(listTable);


  // });
}

// Allows search by ip address within the table
function searchIp(Ip) {
  $('#listData').html(" "); 
  $('#listData').html("Loading..."); 
  var IpAddress = Ip;
  // var url = "/ipm/ipm/search?ip=" + IpAddress;

  // $.getJSON( url, function ( jsondata ) {
  listContainer = [];
    var i = 0;
    for (i; i < jsondata.length; i++) {
      var jsonData = jsondata[i].ipstr
        if (jsonData.startsWith(IpAddress)) {
          var ipAddress = jsondata[i].ipstr;
          var hardware = jsondata[i].hw;
          var name = jsondata[i].fqname;
          var count = jsondata[i].refcnt;
// This part of the code translates and edits the times seen
        var first = jsondata[i].firstseen;
        var last = jsondata[i].lastseen;
          var firstSeen = new Date(first);
          var lastSeen = new Date(last);
          var stringFirst = firstSeen.toString();
          var stringLast = lastSeen.toString();
          if(stringFirst.length > 15) stringFirst = stringFirst.substring(0,15);
          if(stringLast.length > 15) stringLast = stringLast.substring(0,15);
// And this is where it ends --> Copy the code in between these comments
          listContainer.push("<tr> <td>" + name + "</td> <td>" + "<a onclick=\"searchIp('" +
          ipAddress + "');\">" + ipAddress + "</a> </td>" + "<td>" +
          "<a onclick=\"searchHardware('" + hardware + "');\">" 
          + hardware + "</a> </td>" +
          "<td>" + count + "</td> <td>" + stringLast + "</td></tr>"); //this is needed
        }
      }
  listTable = "<table> <tr> <th>Machine Name</th>" +
  "<th>Ip Address</th> <th>Hardware</th> <th>Count</th> </tr>" + listContainer + "</table>" 
  
  $('#listData').html(" "); 
  $('#listData').html(listTable);

  // });
}



