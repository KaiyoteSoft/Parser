requiredlengthIp = 11;
requiredlengthHw = 4;

// function inputHardware() {
//    // Searches by Hardware Address
//    	var hwAddress = document.hwForm.hwType.value;
//    	var i = 0;
//    	for (i; i < jsondata.length; i++) {
//    		if (jsondata[i].hw==hwAddress) {
//    			var ip_data = jsondata[i].ipstr;
//    			var count = jsondata[i].refcnt;
//    			var hw = hwAddress;
//    			var machineName = jsondata[i].fqname;
//    		}
//    	};


//    	var tableData2 = "<h2>Hardware search result</h2><table> <tr>" + 
// 	 "<th>Machine Name</th> <th>Ip Address</th>" + 
// 	 "<th>Hardware Address</th> <th>Count</th> </tr>" +
// 	 "<tr> <td>" + machineName + "</td> <td>" + ip_data +  "</td>" + 
// 	 "<td>" + hw + "</td> <td>" + count + "</td> </tr>" + 
// 	 "<tr> <td>" + machineName + "</td> <td>" + ip_data +  "</td>" + 
// 	 "<td>" + hw + "</td> <td>" + count + "</td> </tr>" + 
// 	 " </table>";
// 	 console.log(tableData2);
// 	 $('#compData2').html(tableData2);
// }

// function inputIp() {
//   // Searches by ip Address
//      var num1 = document.myform.ipType.value;
//      var ip_data = num1;
//      var i = 0;
//      for (i; i < jsondata.length; i++){
//      	if (jsondata[i].ipstr==ip_data){
//      		var hw = jsondata[i].hw;
//      		var count = jsondata[i].refcnt;
//      		var machineName = jsondata[i].fqname;
//      	}
//      };  

//      var tableData = "<h2>Ip search result </h2> <table> <tr>" + 
// 	 "<th>Machine Name</th> <th>Ip Address</th>" + 
// 	 "<th>Hardware Address</th> <th>Count</th> </tr>" +
// 	 "<tr> <td>" + machineName + "</td> <td>" + ip_data +  "</td>" + 
// 	 "<td>" + hw + "</td> <td>" + count + "</td> </tr>" + 
// 	 "<tr> <td>" + machineName + "</td> <td>" + ip_data +  "</td>" + 
// 	 "<td>" + hw + "</td> <td>" + count + "</td> </tr>" +
// 	 " </table>";

// 	$('#compData1').html(tableData);   
//   }

// Looking for all the Addresses and storing in a list
  function inputList() {
    var listAddress = document.listForm.listType.value;

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

    listTable = "<table> <tr> <td>Machine Name</td> <td>Ip Address</td>" + 
    "<td>Hardware</td> <td>Count</td>" + 
    "</tr>" + listContainer + "</table>"

    $('#listData').html(listTable);
  }

function inputHardware() {
  var hwAddress = document.hwForm.hwType.value;

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
      listContainer.push("<tr> <td>Needs at least 11 characters for a valid search</td> </tr>");
  }

  listTable = "<table> <tr> <td>Machine Name</td> <td>Hardware</td>" + 
  "<td>Ip Address</td> <td>Count</td>" + 
  "</tr>" + listContainer + "</table>"

  $('#listData').html(listTable);
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
  listTable = "<table> <tr> <td>Machine Name</td> <td>Hardware</td>" +
  "<td>Ip Address</td> <td>Count</td>" + 
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
  listTable = "<table> <tr> <td>Machine Name</td>" +
  "<td>Ip Address</td> <td>Hardware</td> <td>Count</td>" + 
  "</tr>" + listContainer + "</table>"
  $('#listData').html(listTable);
}

// }


