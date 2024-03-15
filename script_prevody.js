const decInputs = document.querySelectorAll(".dec");
const binInputs = document.querySelectorAll(".bin");
const hexInputs = document.querySelectorAll(".hex");
let result = "";
let binaryNumber = "";
let hexNumber = "";
let right = 0;
let wrong = 0;
var dataToExport = [];
var automat = "";
var entered_bin = "";
var entered_hex = "";


function addRow() {
  date = new Date().toLocaleString('cs-CZ');     //podle https://stackoverflow.com/a/30245911
  console.log("addrow fce");
  dataToExport.push([result, entered_bin, binaryNumber, entered_hex, hexNumber, right, wrong, date, automat]);
}

document.getElementById("downloadCsv").addEventListener("click", function() {
      // Vytvoření obsahu CSV souboru
      var csvContent = "Cislo_na_prevod; Zadane_bin; Spravne_bin; Zadane_hex; Spravne_hex;  Pocet_spravne; Pocet_spatne; Cas_ukonceni; Automaticke_prevedeni\n";
      dataToExport.forEach(function (row) {
          csvContent += row.join(";") + "\n";
      });
  
      // Vytvoření a stažení CSV souboru
      var blob = new Blob([csvContent], { type: 'text/csv' });
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'exported_data.csv';
      link.click();
})





function convertToNumber() {
    // Concatenate values from all input fields
    decInputs.forEach(input => {
    result += input.value;
    result = Number(result);

})
if (result == 0) {
  alert("Prvně zadejte číslo.");
  location.reload();
}
if (result >255) {
  alert("Číslo nesmí být větší než 255.");
  location.reload();
}
};



function displayConvertedValues() {
  // Display converted values in corresponding input fields
  binInputs.forEach((input, index) => {
      input.value = binaryNumber.charAt(index);
      input.disabled = true;
  });
  entered_bin="-";
  entered_hex="-";


  hexInputs.forEach((input, index) => {
      input.value = hexNumber.charAt(index);
      input.disabled = true;
  });
  addRow();
}

function convert() {
    //převedení čísla do binárního pro kontrolu
    binaryNumber = parseInt(result).toString(2).padStart(8, '0');
    console.log(binaryNumber);

    //převedení do hexa na kontrolu
    hexNumber = parseInt(result).toString(16).padStart(2, '0').toUpperCase();
    console.log(hexNumber);
};


document.getElementById("begin").addEventListener("click", function () {
  if (document.getElementById("check").checked) {
    console.log("mic check nigga");
    automat = "ano";
    begin();
    displayConvertedValues();
    document.getElementById('buttons').style.display = "block";
    document.getElementById("uvodni2").innerHTML = "Správně převedené čísla vypadají takto:"
  } else {
    begin();
    automat = "ne";
    binInputs[0].focus();
  }
});


function begin () {
  convertToNumber();
    console.log(result);
    convert();
    document.getElementById("begindiv").style.display = "none";
    document.getElementById("domu").style.display = "none";
    document.getElementById("hexa").style.display = "block";
    document.getElementById("bina").style.display = "block";
    document.getElementById("uvodni2").style.display = "block";
    document.getElementById("space").style.display = "block";
    document.getElementById("zpet").style.display = "block";
    document.getElementById("space2").style.display = "block";
    document.getElementById("uvodni").style.display = "none";
    document.getElementById("checkbox").style.display = "none";
};




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
    entered_bin+=input.value;
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
    entered_hex+=input.value.toUpperCase();
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
          addRow();
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
        addRow();
    }
  }});
});





document.getElementById('zpet').addEventListener('click', function() {
  window.location.reload(); //příkaz na reload stránky
})

document.getElementById('next').addEventListener('click', function() {
 // window.location.reload(); //příkaz na reload stránky
  result = "";
  binaryNumber = "";
  hexNumber = "";
  right = 0;
  wrong = 0;
  automat = "";
  entered_bin = "";
  entered_hex = "";
  binInputs.forEach((input, index) => {
    input.value = "";
    input.disabled = false;
    input.style.color = 'rgba(0, 0, 0, 0.5)';
    input.style.borderColor = 'rgba(0, 0, 0, 0.3)';
});
hexInputs.forEach((input, index) => {
  input.value = "";
  input.disabled = false;
  input.style.color = 'rgba(0, 0, 0, 0.5)';
  input.style.borderColor = 'rgba(0, 0, 0, 0.3)';
});
decInputs.forEach((input, index) => {
  input.value = "";
  input.disabled = false;
  input.style.color = 'rgba(0, 0, 0, 0.5)';
  input.style.borderColor = 'rgba(0, 0, 0, 0.3)';
});

  document.getElementById("begindiv").style.display = "flex";
  document.getElementById("domu").style.display = "block";
  document.getElementById("hexa").style.display = "none";
  document.getElementById("bina").style.display = "none";
  document.getElementById("uvodni2").style.display = "none";
  document.getElementById("space").style.display = "none";
  document.getElementById("zpet").style.display = "none";
  document.getElementById("space2").style.display = "none";
  document.getElementById("uvodni").style.display = "block";
  document.getElementById("checkbox").style.display = "flex";
  document.getElementById('buttons').style.display = "none";
})
