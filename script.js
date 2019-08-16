function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function testmeta1(){
document.getElementsByTagName("META")[0].content = "#DC7D2D";
}

function testmeta2(){
document.getElementsByTagName("META")[0].content = "#54DFF4";
}

function testmeta3(){
document.getElementsByTagName("META")[0].content = "#95CC3B";
}
