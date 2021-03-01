function components() {
  var i = 0;

  /* HTML список */

  var mycont = `
<div class="element">
  <select class="teachers">
    <option selected disabled>Teachers</option>
    <option>Abduvali</option>
    <option>Hasan</option>
    <option>Jamol</option>
    <option>Rafiq</option>
  </select>
</div>
<div class="element">
  <select class="subjects">
    <option selected disabled>Subjects</option>
    <option>Math</option>
    <option>IT</option>
    <option>Physics</option>
    <option>Technical Drawing</option>
  </select>
</div>
<div class="element">
  <select class="rooms">
    <option selected disabled>Rooms</option>
    <option>305</option>
    <option>205</option>
    <option>407</option>
    <option>405</option>
    <option>302</option>
  </select>
</div>
`;

  /* HTML список конец*/

  var l = 0;
  var limit = document.getElementsByClassName("swapwithcont").length;
  for (; i < limit; i++) {
    var teacher = document
      .getElementsByTagName("teacher")
      [i].innerHTML[0].toUpperCase();
    var subject = document
      .getElementsByTagName("subject")
      [i].innerHTML[0].toUpperCase();
    var room = document.getElementsByTagName("room")[i].innerHTML;

    l += 1;
    document.getElementById("ch" + l).innerHTML = mycont;

    if (teacher == "H") {
      document.getElementsByClassName("teachers")[i].value = "Hasan";
    } else if (teacher == "R") {
      document.getElementsByClassName("teachers")[i].value = "Rafiq";
    } else if (teacher == "J") {
      document.getElementsByClassName("teachers")[i].value = "Jamol";
    } else if (teacher == "A") {
      document.getElementsByClassName("teachers")[i].value = "Abduvali";
    }
    if (subject == "M") {
      document.getElementsByClassName("subjects")[i].value = "Math";
    } else if (subject == "I") {
      document.getElementsByClassName("subjects")[i].value = "IT";
    } else if (subject == "P") {
      document.getElementsByClassName("subjects")[i].value = "Physics";
    } else if (subject == "T") {
      document.getElementsByClassName("subjects")[i].value =
        "Technical Drawing";
    }
    if (room == "305") {
      document.getElementsByClassName("rooms")[i].value = "305";
    } else if (room == "405") {
      document.getElementsByClassName("rooms")[i].value = "405";
    } else if (room == "205") {
      document.getElementsByClassName("rooms")[i].value = "205";
    } else if (room == "407") {
      document.getElementsByClassName("rooms")[i].value = "407";
    } else if (room == "302") {
      document.getElementsByClassName("rooms")[i].value = "302";
    }
  }
}
