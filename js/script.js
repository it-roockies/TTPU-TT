// function change() {
//   i = 0;
//   limit = document.getElementsByClassName("subjects").length;
//   for (; i < 6; i++) {
//     document.getElementsByClassName("teachers")[
//       i
//     ].innerHTML = document.getElementsByTagName("teacher")[i].innerHTML;

//     document.getElementsByClassName("subjects")[
//       i
//     ].innerHTML = document.getElementsByTagName("subject")[i].innerHTML;

//     document.getElementsByClassName("rooms")[
//       i
//     ].innerHTML = document.getElementsByTagName("room")[i].innerHTML;
//   }
// }

function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    console.log(reader.result);
    document.getElementById("data").innerHTML = reader.result;
    components();
    // change();
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}
