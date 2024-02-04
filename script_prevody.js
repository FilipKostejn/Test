const decInputs = document.querySelectorAll(".dec");
const binInputs = document.querySelectorAll(".bin");
const hexInputs = document.querySelectorAll(".hex");
let result = "";
let binaryNumber = "";
let hexNumber = "";
let right = 0;
let wrong = 0;

function convertToNumber() {
    // Concatenate values from all input fields
    decInputs.forEach(input => {
    result += input.value;
    result = Number(result);

})
if (result == 0) {
  alert("Please enter a valid number.");
  location.reload();
}
};

function convert() {
    //převedení čísla do binárního pro kontrolu
    binaryNumber = parseInt(result).toString(2).padStart(8, '0');
    console.log(binaryNumber);

    //převedení do hexa na kontrolu
    hexNumber = parseInt(result).toString(16).padStart(2, '0').toUpperCase();
    console.log(hexNumber);
};


document.getElementById("begin").addEventListener("click", function () {
  convertToNumber();
  console.log(result);
  convert();
  document.getElementById("begindiv").style.display = "none";
  document.getElementById("hexa").style.display = "block";
  document.getElementById("bina").style.display = "block";
  document.getElementById("space").style.display = "block";
  document.getElementById("space2").style.display = "block";
  document.getElementById("uvodni").innerHTML = "&nbsp;";
});
decInputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    // Check if the next decimal input element exists
    if (index+1 < decInputs.length) {
      decInputs[index+1].focus();
    }
    else {
      decInputs.forEach(input => {
      input.disabled = true;
      })

  }});
});




binInputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    if (input.value === binaryNumber.charAt(index)) {
      input.style.color = "green";
      input.style.borderColor = "green";
      right+=1;
      if (index < binInputs.length - 1) {
        input.disabled = 'true';
        binInputs[index + 1].focus();
      } else {
        input.disabled = 'true';
        hexInputs[0].focus();
      }
    } else {
      input.style.color = "red";
      input.style.borderColor = "red";
      wrong+=1;
      if (index < binInputs.length - 1) {
        binInputs[index + 1].focus();
        input.disabled = 'true';
    } else {
      input.disabled = 'true';
      hexInputs[0].focus();
    }
  }});
});

// Add event listeners to each .hex input
hexInputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    if (input.value.toUpperCase() === hexNumber.charAt(index)) {
      input.style.color = "green";
      input.style.borderColor = "green";
      right+=1;
      if (index < hexInputs.length - 1) {
        hexInputs[index + 1].focus();
        input.disabled = 'true';
      } else {
          input.disabled = 'true';
          document.getElementById('buttons').style.display = "block";
          console.log('dokončen příklad');
    }
    } else {
      input.style.color = "red";
      input.style.borderColor = "red";
      wrong+=1;
      if (index < hexInputs.length - 1) {
        hexInputs[index + 1].focus();
        input.disabled = 'true';
    } else {
        input.disabled = 'true';
        document.getElementById('buttons').style.display = "block";
        console.log('dokončen příklad');
    }
  }});
});




document.getElementById('downloadCsv').addEventListener('click', function next() {
  console.log('export do csv');
  console.log("Spravne: " + right+ ", spatne: " + wrong);
});

