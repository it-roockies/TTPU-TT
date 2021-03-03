function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    console.log(reader.result);
    document.getElementById("data").innerHTML = reader.result;
    components();
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}
