function init(){
  document.getElementById('group_daily').style.background = "white";
  document.getElementById('group_custom').style.background = "white";
  document.getElementById('group_weekly').style.background = "white";
  document.getElementById('group_monthly').style.background = "white";
  document.getElementById('group_biWeekly').style.background = "white";
  // document.getElementById('2').style.background = "white";
  // document.getElementById('7').style.background = "white";
  // document.getElementById('12').style.background = "white";
  // document.getElementById('1').style.background = "white";
  // document.getElementById('3').style.background = "white";
  // document.getElementById('4').style.background = "white";
  // document.getElementById('5').style.background = "white";
  // document.getElementById('6').style.background = "white";
  // document.getElementById('8').style.background = "white";
  // document.getElementById('9').style.background = "white";
  // document.getElementById('10').style.background = "white";
  // document.getElementById('11').style.background = "white";
  // document.getElementById('13').style.background = "white";
  // document.getElementById('14').style.background = "white";
  // document.getElementById('15').style.background = "white";
}

function disableIndividual(){
     $(".individual_frequency").prop("disabled", true); //
}

function group_daily() {
  //console.log(document.getElementById('group_daily').style.background);
  if (document.getElementById('group_daily').style.background == "white") {
    //console.log(document.getElementById('group_daily').style.background);
    document.getElementById('group_daily').style.background = "#FFC107";
    document.getElementById('1').style.background = "#FFC107";
    document.getElementById('6').style.background = "#FFC107";
    document.getElementById('11').style.background = "#FFC107";
    document.getElementById('2').style.background = "white";
    document.getElementById('3').style.background = "white";
    document.getElementById('4').style.background = "white";
    document.getElementById('5').style.background = "white";
    document.getElementById('7').style.background = "white";
    document.getElementById('8').style.background = "white";
    document.getElementById('9').style.background = "white";
    document.getElementById('10').style.background = "white";
    document.getElementById('12').style.background = "white";
    document.getElementById('13').style.background = "white";
    document.getElementById('14').style.background = "white";
    document.getElementById('15').style.background = "white";
    document.getElementById('group_custom').style.background = "white";
    document.getElementById('group_weekly').style.background = "white";
    document.getElementById('group_monthly').style.background = "white";
    document.getElementById('group_biWeekly').style.background = "white";

    // console.log(document.getElementById('group_daily').style.background);
  } else {
    console.log("hello");
    document.getElementById('group_daily').style.background = "white";
    document.getElementById('1').style.background = "white";
    document.getElementById('6').style.background = "white";
    document.getElementById('11').style.background = "white";

  }
  //need to figure out how to disable
}

function group_weekly() {
  if (document.getElementById('group_weekly').style.background == "white") {
    document.getElementById('group_weekly').style.background = "#FFC107";
    document.getElementById('2').style.background = "#FFC107";
    document.getElementById('7').style.background = "#FFC107";
    document.getElementById('12').style.background = "#FFC107";
    document.getElementById('1').style.background = "white";
    document.getElementById('3').style.background = "white";
    document.getElementById('4').style.background = "white";
    document.getElementById('5').style.background = "white";
    document.getElementById('6').style.background = "white";
    document.getElementById('8').style.background = "white";
    document.getElementById('9').style.background = "white";
    document.getElementById('10').style.background = "white";
    document.getElementById('11').style.background = "white";
    document.getElementById('13').style.background = "white";
    document.getElementById('14').style.background = "white";
    document.getElementById('15').style.background = "white";
    document.getElementById('group_custom').style.background = "white";
    document.getElementById('group_daily').style.background = "white";
    document.getElementById('group_monthly').style.background = "white";
    document.getElementById('group_biWeekly').style.background = "white";
  } else {
    document.getElementById('group_weekly').style.background = "white";
    document.getElementById('2').style.background = "white";
    document.getElementById('7').style.background = "white";
    document.getElementById('12').style.background = "white";
  }
}

function group_biWeekly() {
  if (document.getElementById('group_biWeekly').style.background == "white") {
    document.getElementById('group_biWeekly').style.background = "#FFC107"
    document.getElementById('3').style.background = "#FFC107"
    document.getElementById('8').style.background = "#FFC107"
    document.getElementById('13').style.background = "#FFC107"
    document.getElementById('2').style.background = "white"
    document.getElementById('1').style.background = "white"
    document.getElementById('4').style.background = "white"
    document.getElementById('5').style.background = "white"
    document.getElementById('6').style.background = "white"
    document.getElementById('7').style.background = "white"
    document.getElementById('9').style.background = "white"
    document.getElementById('10').style.background = "white"
    document.getElementById('11').style.background = "white"
    document.getElementById('12').style.background = "white"
    document.getElementById('14').style.background = "white"
    document.getElementById('15').style.background = "white"
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"

  } else {
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('3').style.background = "white"
    document.getElementById('8').style.background = "white"
    document.getElementById('13').style.background = "white"
  }
}

function group_monthly() {
  if (document.getElementById('group_monthly').style.background == "white") {
    document.getElementById('group_monthly').style.background = "#FFC107"
    document.getElementById('4').style.background = "#FFC107"
    document.getElementById('9').style.background = "#FFC107"
    document.getElementById('14').style.background = "#FFC107"
    document.getElementById('2').style.background = "white"
    document.getElementById('1').style.background = "white"
    document.getElementById('3').style.background = "white"
    document.getElementById('5').style.background = "white"
    document.getElementById('6').style.background = "white"
    document.getElementById('7').style.background = "white"
    document.getElementById('8').style.background = "white"
    document.getElementById('10').style.background = "white"
    document.getElementById('11').style.background = "white"
    document.getElementById('12').style.background = "white"
    document.getElementById('13').style.background = "white"
    document.getElementById('15').style.background = "white"
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
  } else {
    document.getElementById('group_monthly').style.background = "white"
    document.getElementById('4').style.background = "white"
    document.getElementById('9').style.background = "white"
    document.getElementById('14').style.background = "white"
  }
}

function group_custom() {
  if (document.getElementById('group_custom').style.background == "white") {
    document.getElementById('group_custom').style.background = "#FFC107"
    document.getElementById('5').style.background = "#FFC107"
    document.getElementById('10').style.background = "#FFC107"
    document.getElementById('15').style.background = "#FFC107"
    document.getElementById('2').style.background = "white"
    document.getElementById('1').style.background = "white"
    document.getElementById('3').style.background = "white"
    document.getElementById('4').style.background = "white"
    document.getElementById('6').style.background = "white"
    document.getElementById('7').style.background = "white"
    document.getElementById('8').style.background = "white"
    document.getElementById('9').style.background = "white"
    document.getElementById('11').style.background = "white"
    document.getElementById('12').style.background = "white"
    document.getElementById('13').style.background = "white"
    document.getElementById('14').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"

  } else {
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('5').style.background = "white"
    document.getElementById('10').style.background = "white"
    document.getElementById('15').style.background = "white"
  }
}

function mom_daily() {
  document.getElementById('1').style.background = "#FFC107"
  document.getElementById('2').style.background = "white"
  document.getElementById('3').style.background = "white"
  document.getElementById('4').style.background = "white"
  document.getElementById('5').style.background = "white"
  if(document.getElementById('group_daily').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function mom_weekly() {
  document.getElementById('2').style.background = "#FFC107"
  document.getElementById('1').style.background = "white"
  document.getElementById('3').style.background = "white"
  document.getElementById('4').style.background = "white"
  document.getElementById('5').style.background = "white"
  if(document.getElementById('group_weekly').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function mom_biWeekly() {
  document.getElementById('3').style.background = "#FFC107"
  document.getElementById('2').style.background = "white"
  document.getElementById('1').style.background = "white"
  document.getElementById('4').style.background = "white"
  document.getElementById('5').style.background = "white"
  if(document.getElementById('group_biWeekly').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function mom_monthly() {
  document.getElementById('4').style.background = "#FFC107"
  document.getElementById('2').style.background = "white"
  document.getElementById('3').style.background = "white"
  document.getElementById('1').style.background = "white"
  document.getElementById('5').style.background = "white"
  if(document.getElementById('group_monthly').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function mom_custom() {
  document.getElementById('5').style.background = "#FFC107"
  document.getElementById('2').style.background = "white"
  document.getElementById('3').style.background = "white"
  document.getElementById('4').style.background = "white"
  document.getElementById('1').style.background = "white"
  if(document.getElementById('group_custom').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function dad_daily() {
  document.getElementById('6').style.background = "#FFC107"
  document.getElementById('7').style.background = "white"
  document.getElementById('8').style.background = "white"
  document.getElementById('9').style.background = "white"
  document.getElementById('10').style.background = "white"
  if(document.getElementById('group_daily').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function dad_weekly() {
  document.getElementById('7').style.background = "#FFC107"
  document.getElementById('6').style.background = "white"
  document.getElementById('8').style.background = "white"
  document.getElementById('9').style.background = "white"
  document.getElementById('10').style.background = "white"
  if(document.getElementById('group_weekly').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function dad_biWeekly() {
  document.getElementById('8').style.background = "#FFC107"
  document.getElementById('7').style.background = "white"
  document.getElementById('6').style.background = "white"
  document.getElementById('9').style.background = "white"
  document.getElementById('10').style.background = "white"
  if(document.getElementById('group_biWeekly').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function dad_monthly() {
  document.getElementById('9').style.background = "#FFC107"
  document.getElementById('7').style.background = "white"
  document.getElementById('8').style.background = "white"
  document.getElementById('6').style.background = "white"
  document.getElementById('10').style.background = "white"
  if(document.getElementById('group_monthly').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function dad_custom() {
  document.getElementById('10').style.background = "#FFC107"
  document.getElementById('7').style.background = "white"
  document.getElementById('8').style.background = "white"
  document.getElementById('9').style.background = "white"
  document.getElementById('6').style.background = "white"
  if(document.getElementById('group_custom').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function bran_daily() {
  document.getElementById('11').style.background = "#FFC107"
  document.getElementById('12').style.background = "white"
  document.getElementById('13').style.background = "white"
  document.getElementById('14').style.background = "white"
  document.getElementById('15').style.background = "white"
  if(document.getElementById('group_daily').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function bran_weekly() {
  document.getElementById('12').style.background = "#FFC107"
  document.getElementById('11').style.background = "white"
  document.getElementById('13').style.background = "white"
  document.getElementById('14').style.background = "white"
  document.getElementById('15').style.background = "white"
  if(document.getElementById('group_weekly').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function bran_biWeekly() {
  document.getElementById('13').style.background = "#FFC107"
  document.getElementById('12').style.background = "white"
  document.getElementById('11').style.background = "white"
  document.getElementById('14').style.background = "white"
  document.getElementById('15').style.background = "white"
  if(document.getElementById('group_biWeekly').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function bran_monthly() {
  document.getElementById('14').style.background = "#FFC107"
  document.getElementById('12').style.background = "white"
  document.getElementById('13').style.background = "white"
  document.getElementById('11').style.background = "white"
  document.getElementById('15').style.background = "white"
  if(document.getElementById('group_monthly').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}

function bran_custom() {
  document.getElementById('15').style.background = "#FFC107"
  document.getElementById('12').style.background = "white"
  document.getElementById('13').style.background = "white"
  document.getElementById('14').style.background = "white"
  document.getElementById('11').style.background = "white"
  if(document.getElementById('group_custom').style.background != "#FFC107"){
    document.getElementById('group_custom').style.background = "white"
    document.getElementById('group_weekly').style.background = "white"
    document.getElementById('group_biWeekly').style.background = "white"
    document.getElementById('group_daily').style.background = "white"
    document.getElementById('group_monthly').style.background = "white"
  }
}
init();
