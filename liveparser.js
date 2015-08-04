requiredlengthIp = 11;
requiredlengthHw = 11;


function inputName() {
  var nameAddress =document.nameForm.nameType.value;
  var url = "/ipm/ipm/search?name=" + nameAddress;

  $.getJSON( url, function ( jsondata ) {
        listContainer = [];
          var i = 0;
          for (i; i < jsondata.length; i++){
            var jsonData = jsondata[i].fqname;
            if (jsonData.startsWith(nameAddress)) {
              var ipAddress = jsondata[i].ipstr;
              var count = jsondata[i].refcnt;
              var hardware = jsondata[i].hw;
              var name = jsondata[i].fqname
              listContainer.push("<tr> <td>" + name + "</td> <td>" + "<a onclick=\"searchIp('" +
              ipAddress + "');\">" + ipAddress + "</a> </td>" + "<td>" +
              "<a onclick=\"searchHardware('" + hardware + "');\">"
              + hardware + "</a>" + "</td>" +
              "<td>" + count + "</td>" + "</tr>");
            }
          }
          listTable = "<table> <tr> <th>Machine Name</th> <th>Ip Address</th>" +
          "<th>Hardware</th> <th>Count</th>" +
          "</tr>" + listContainer + "</table>"

          $('#listData').html(listTable);

        });


}

// Looking for all the Addresses and storing in a list
function inputList() {
  var listAddress = document.listForm.listType.value;
  var url = "/ipm/ipm/search?ip=" + listAddress;

  $.getJSON( url, function ( jsondata ) {
  listContainer = []
  var i = 0;
  for (i; i < jsondata.length; i++) {
    var jsonData = jsondata[i].ipstr
    if (listAddress.length >= requiredlengthIp) {
      if (jsonData.startsWith(listAddress)) {
        var ipAddress = jsondata[i].ipstr;
        var count = jsondata[i].refcnt;
        var hardware = jsondata[i].hw;
        var name = jsondata[i].fqname;
        listContainer.push("<tr> <td>" + name + "</td> <td>" + "<a onclick=\"searchIp('" +
        ipAddress + "');\">" + ipAddress + "</a> </td>" + "<td>" +
        "<a onclick=\"searchHardware('" + hardware + "');\">"
        + hardware + "</a>" + "</td>" +
        "<td>" + count + "</td>" + "</tr>");
        }
      }
    }

    if (listAddress.length <= requiredlengthIp) {
      listContainer.push("<tr> <td>Needs at least 11 characters for a valid search</td> </tr>");
  }

  listTable = "<table> <tr> <th>Machine Name</th> <th>Ip Address</th>" +
  "<th>Hardware</th> <th>Count</th>" +
  "</tr>" + listContainer + "</table>"

  $('#listData').html(listTable);
  });
}

function inputHardware() {
  var hwAddress = document.hwForm.hwType.value;
  var url = "/ipm/ipm/search?hw=" + hwAddress;

  $.getJSON( url, function ( jsondata ) {

  listContainer = []
  var i = 0;
  for (i; i < jsondata.length; i++) {
    var jsonData = jsondata[i].hw
    if (hwAddress.length >= requiredlengthHw) {
      if (jsonData.startsWith(hwAddress)) {
        var ipAddress = jsondata[i].ipstr;
        var count = jsondata[i].refcnt;
        var hardware = jsondata[i].hw;
        var name = jsondata[i].fqname;
        listContainer.push("<tr> <td>" + name + "</td> <td>" + hardware + "</td>" + "<td>" +
        "<a onclick=\"searchIp('" + ipAddress + "');\">"
        + ipAddress + "</a>" + "</td>" +
        "<td>" + count + "</td>" + "</tr>");
        }
      }
    }

    if (hwAddress.length <= requiredlengthHw) {
      listContainer = [];
      listContainer.push("<tr> <td>Needs at least 12 characters for a valid search</td> </tr>");
  }

  listTable = "<table> <tr> <th>Machine Name</th> <th>Hardware</th>" +
  "<th>Ip Address</th> <th>Count</th>" +
  "</tr>" + listContainer + "</table>"

  $('#listData').html(listTable);
  });
}

function searchHardware(hw) {
  var hardware = hw;
  listContainer = [];
    var i = 0;
    for (i; i < jsondata.length; i++) {
      var jsonData = jsondata[i].hw
      if (hardware.length >= requiredlengthHw) {
        if (jsonData.startsWith(hardware)) {
          var ipAddress = jsondata[i].ipstr;
          var name = jsondata[i].fqname;
          var count = jsondata[i].refcnt;
          listContainer.push("<tr> <td>" + name + "</td> <td>" + hardware + "</td>" + "<td>" +
          "<a onclick=\"searchIp('" + ipAddress + "');\">"
          + ipAddress + "</td>" +
          "<td>" + count + "</td>" + "</tr>");
        }
      }
    }
  listTable = "<table> <tr> <th>Machine Name</th> <th>Hardware</th>" +
  "<th>Ip Address</th> <th>Count</th>" +
  "</tr>" + listContainer + "</table>"
  $('#listData').html(listTable);
}

function searchIp(Ip) {
  var IpAddress = Ip;
  listContainer = [];
    var i = 0;
    for (i; i < jsondata.length; i++) {
      var jsonData = jsondata[i].ipstr
      if (IpAddress.length >= requiredlengthIp) {
        if (jsonData.startsWith(IpAddress)) {
          var ipAddress = jsondata[i].ipstr;
          var hardware = jsondata[i].hw;
          var name = jsondata[i].fqname;
          var count = jsondata[i].refcnt;
          listContainer.push("<tr> <td>" + name + "</td> <td>" + "<a onclick=\"searchIp('" +
          ipAddress + "');\">" + ipAddress + "</a> </td>" + "<td>" +
          "<a onclick=\"searchHardware('" + hardware + "');\">"
          + hardware + "</a> </td>" +
          "<td>" + count + "</td>" + "</tr>");
        }
      }
    }
  listTable = "<table> <tr> <th>Machine Name</th>" +
  "<th>Ip Address</th> <th>Hardware</th> <th>Count</th>" +
  "</tr>" + listContainer + "</table>"
  $('#listData').html(listTable);
}

// }