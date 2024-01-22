// Get all elements with the class "dec", "bin", and "hex"
const decInputs = document.querySelectorAll(".dec");
const binInputs = document.querySelectorAll(".bin");
const hexInputs = document.querySelectorAll(".hex");
let right = 0;
let wrong = 0;

//Generování náhodného čísla od 0 do 255
function getRandomNumber(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 0 and 255 and convert it to a string
let randomNumber = getRandomNumber(0, 255).toString();

//přídání 0 před číslo aby vždy byly 3 číslice
let formattedNumber = randomNumber.padStart(3, '0');

//zapsání čísla
for (let i = 0; i < decInputs.length; i++) {
  if (formattedNumber.length > i) {
    decInputs[i].value = formattedNumber.charAt(i);
  }
}

//převedení čísla do binárního pro kontrolu
let binaryNumber = parseInt(randomNumber).toString(2).padStart(8, '0');
console.log(binaryNumber);

//převedení do hexa na kontrolu
let hexNumber = parseInt(randomNumber).toString(16).padStart(2, '0').toUpperCase();
console.log(hexNumber);


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

/*NOVÉ*/

document.getElementById('next').addEventListener('click', function next() {
  // Generuj nové náhodné číslo
  let newRandomNumber = getRandomNumber(0, 255).toString();
  let newFormattedNumber = newRandomNumber.padStart(3, '0');

  // Aktualizuj desítkové vstupy
  for (let i = 0; i < decInputs.length; i++) {
    if (newFormattedNumber.length > i) {
      decInputs[i].value = newFormattedNumber.charAt(i);
      decInputs[i].style.color = ""; // Resetuj barvy
      decInputs[i].style.borderColor = "";
      decInputs[i].disabled = false; // Resetuj disable
    }
  }

  // Převedení do binárního pro kontrolu
  let newBinaryNumber = parseInt(newRandomNumber).toString(2).padStart(8, '0');
  console.log("nové číslo: " + newBinaryNumber);

  // Převedení do hexa pro kontrolu
  let newHexNumber = parseInt(newRandomNumber).toString(16).padStart(2, '0').toUpperCase();
  console.log("nové číslo: " + newHexNumber);

  // Aktualizuj binární vstupy
  binInputs.forEach((input, index) => {
    input.value = "";
    input.style.color = "";
    input.style.borderColor = "";
    input.disabled = false;
  });

  // Aktualizuj hexadecimální vstupy
  hexInputs.forEach((input, index) => {
    input.value = "";
    input.style.color = "";
    input.style.borderColor = "";
    input.disabled = false;
  });

  // Skryj tlačítko
  document.getElementById('buttons').style.display = "none";
  console.log('generace dalšího příkladu');

  //nutné aby fungovala kontrola
  binaryNumber = newBinaryNumber;
  hexNumber = newHexNumber;
});


document.getElementById('downloadCsv').addEventListener('click', function next() {
  console.log('export do csv');
  console.log("Spravne: " + right+ ", spatne: " + wrong);
});