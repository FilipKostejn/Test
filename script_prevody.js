// Get all elements with the class "dec", "bin", and "hex"
const decInputs = document.querySelectorAll(".dec");
const binInputs = document.querySelectorAll(".bin");
const hexInputs = document.querySelectorAll(".hex");

// Define a function that generates a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
  // We multiply by (max - min + 1) and add min to get a random number in the desired range.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 0 and 255 and convert it to a string
const randomNumber = getRandomNumber(0, 255).toString();

// Format the random number with leading zeros if it has less than 3 digits
// The padStart() function adds leading zeros to the number until it reaches a length of 3
const formattedNumber = randomNumber.padStart(3, '0');

// Populate each .dec input with the digits of the formatted number
// Loop through each .dec input field and assign the corresponding digit of the formatted number
for (let i = 0; i < decInputs.length; i++) {
  if (formattedNumber.length > i) {
    decInputs[i].value = formattedNumber.charAt(i);
  }
}

// Convert the random number to binary and pad with leading zeros
// The parseInt() function converts the random number to a decimal number, then toString(2) converts it to binary
// padStart(8, '0') adds leading zeros to make sure the binary number has 8 digits
const binaryNumber = parseInt(randomNumber).toString(2).padStart(8, '0');
console.log(binaryNumber);

// Convert the random number to hexadecimal and pad with leading zeros
// The parseInt() function converts the random number to a decimal number, then toString(16) converts it to hexadecimal
// padStart(2, '0') adds leading zeros to make sure the hexadecimal number has 2 digits
const hexNumber = parseInt(randomNumber).toString(16).padStart(2, '0').toUpperCase();
console.log(hexNumber);


//--------------------------------------NEW--------------------------------
binInputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    if (input.value === binaryNumber.charAt(index)) {
      input.style.color = "green";
      input.style.borderColor = "green";
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
      if (index < hexInputs.length - 1) {
        hexInputs[index + 1].focus();
        input.disabled = 'true';
      } else {
          input.disabled = 'true';
          console.log('mrdko');
    }
    } else {
      input.style.color = "red";
      input.style.borderColor = "red";
      if (index < hexInputs.length - 1) {
        hexInputs[index + 1].focus();
        input.disabled = 'true';
    } else {
        input.disabled = 'true';
        console.log('mrdko');
    }
  }});
});
