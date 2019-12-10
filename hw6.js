//  Name: Anas Ahmed
//  Email: anas_ahmed@student.uml.edu

$(document).ready(function(){
  // $('#slider').slider({
  //   animate:"slow"
  // });

  // $("#sliderx1").slider({
  //     min: 1,
  //     max: 20,
  //     change: function(event, ui) {
  //         $(".form input[name='x1']").val( ui.value );
  //     }
  // });

  var sliderx1 = document.getElementById("sliderx1");
  var x1 = document.getElementById("x1");

  sliderx1.oninput = function(){
    x1.innerHTML = this.value;
  }

  $('#sliderx2').slider({
    slide:function(event, ui){
      var value = $("#sliderx2").slider("option", "value");
      $("#x2").val(value);
    }
  });

  $("#x2").keyup(function(){
    $("#sliderx2").slider("option", "value", parseInt($(this).val()));
  });

  $("#slider").slider({
    range: "min",
    min: 1,
    max: 20,
    slide: function(event, ui){
      var valuey1 = $("slidery1").slider("option", "value");
      $("y1").val(valuey1);
    }
  });

  // $('#slidery1').slider({
  //     range: true,
  //     min: 1,
  //     max: 20,
  //     value: $("#y1").val(),
  //     slide:function(event, ui){
  //        $("#y1").val('$' + ui.values[0]);
  //      }
  // });
  //
  // $("#y1").val('$' + $("#slidery1").slider("values", 0));

  // $("#y1").on("keyup", function() {
  // slidery1.slider("value", this.value);
  // });

  $('#slidery2').slider({
    slide:function(event, ui){
       $("y2").val(ui.value);
    }
  });


});

function createTable() {
  var xval1, xval2, yval1, yval2, temp;
  // Assign input values as well as confirm that they are integers
  xval1 = document.getElementById("x1").value;
  if(isNaN(xval1)){document.write("Error, invalid entry");}
  xval1 = parseInt(xval1, 10);
  xval2 = document.getElementById("x2").value;
  if(isNaN(xval2)){document.write("Error, invalid entry");}
  xval2 = parseInt(xval2, 10);
  yval1 = document.getElementById("y1").value;
  if(isNaN(yval1)){document.write("Error, invalid entry");}
  yval1 = parseInt(yval1, 10);
  yval2 = document.getElementById("y2").value;
  if(isNaN(yval2)){document.write("Error, invalid entry");}
  yval2 = parseInt(yval2, 10);

  if(xval2 < xval1){ //Fixes any issues with order for the horizontal axis
    temp = xval1;
    xval1 = xval2;
    xval2 = temp;
  }
  if(yval2 < yval1){ //Fixes any issues with order for the vertical axis
    temp = yval1;
    yval1 = yval2;
    yval2 = temp;
  }
  drawTable(xval1, xval2, yval1, yval2);
}

function drawTable(xstart, xend, ystart, yend){
  var xlength, ylength, i, j;

  xlength = xend - xstart + 1;
  ylength = yend - ystart + 1;

  var tbl = document.getElementById("dynamicTable");

  var row;

  for(i = 0; i <= ylength; i++)
  {
    row = tbl.insertRow(i);
    if(i > 0){
      var cell = row.insertCell(0);
      cell.innerHTML = i + ystart - 1;
    }
    else{
      row.insertCell(0);
    }
    for(j = 1; j <= xlength; j++)
    {
        var cell = row.insertCell(j);
        if(i == 0){     // Special case if it is the first row, only puts the values from xstart to xend
        cell.innerHTML = j + xstart - 1;
      }
      else{             // If not, puts the product of the sums of each
      var cell = row.insertCell(j);
        cell.innerHTML = (j + xstart - 1) * (i + ystart - 1);   // Places the product into the table
      }
    }
  }
}

function clearTable(){
  var table = document.getElementById("dynamicTable");
  table.clear();
}
