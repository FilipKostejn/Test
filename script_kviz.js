var zadani1 = '';  // proměnná držící hodnotu prvního zadaného čísla v binární soustavě
var zadani2 = '';  // proměnná držící hodnotu druhého zadaného čísla v binární soustavě
var hodnota1 = 0;  // proměnná držící hodnotu prvního zadaného čísla v dekadické soustavě
var hodnota2 = 0;  // proměnná držící hodnotu druhého zadaného čísla v dekadické soustavě        
var hodnota_vysledku = 0;  //proměnná která drží správnou hodnotu výsledku v dekadické soustavě
var vysledek_bin = '';     // proměnná držící správnou výslednou hodnotu výsledku v binární soustavě
var y = -1; //pomocná proměnná pro kontrolu 1 nebo 0 na "y" pozici "vysledek_bin"
var spravne = 0;
var spatne = 0;
var delka = 1;
var operace = 0;  //pomocná proměnná pro rozlišení, jakou operaci uživatel vybral (pro druhý a další příklady)
var data = [];      //proměnná pro uložení informací, které jsou exportovány do CSV souboru
var sekundy = 0;    //proměnná držící čas řešení příkladu
var date = '';      //proměnná držící datum ukončení příkladu

var zadany_vysledek = '';
var index_test = 9;
const cis1Inputs = document.querySelectorAll(".cisla1 input");
const cis2Inputs = document.querySelectorAll(".cisla2 input");
const vysInputs = document.querySelectorAll(".vysledek input");

document.getElementById('moznost1').addEventListener('click', function() {
    if (index_test > 0) {
      // Nastavíme hodnotu aktuálního inputu na 1
      vysInputs[index_test].value = "1";
      console.log("TEST: ", index_test);
      index_test--;
      
      if (delka < vysledek_bin.length) {
        console.log("HEJ HEJ: ", vysledek_bin.charAt(y));
        switch (vysledek_bin.charAt(y)) {
          case '1':
            spravne++;
            document.getElementById('spravne').textContent = spravne;
            vysInputs[index_test+1].style.color = "green";
            vysInputs[index_test+1].style.borderColor = "green";
            y--;
            break;
          case '0':
            spatne++;
            document.getElementById('spatne').textContent = spatne;
            vysInputs[index_test+1].style.color = "red";
            vysInputs[index_test+1].style.borderColor = "red";
            y--;
            break;
        }
        delka++;
      } else {
        switch (vysledek_bin.charAt(y)) {
          case '1':
            spravne++;
            document.getElementById('spravne').textContent = spravne;
            vysInputs[index_test+1].style.color = "green";
            vysInputs[index_test+1].style.borderColor = "green";
            y--;
            break;
          case '0':
            spatne++;
            document.getElementById('spatne').textContent = spatne;
            vysInputs[index_test+1].style.color = "red";
            vysInputs[index_test+1].style.borderColor = "red";
            y--;
            break;
        }
        delka++;
        document.getElementById("next").style.display = 'block';
        document.getElementById('buttony01').style.display = 'none';
        console.log("cas na novy priklad");
        for (let index = 0; index <= 9; index++) {
          zadany_vysledek += vysInputs[index].value;
          
        }
        console.log("ZADANY VYSLEDEK: ", zadany_vysledek);
        date = new Date().toLocaleString('cs-CZ');     //podle https://stackoverflow.com/a/30245911
        data.push({cislo1: zadani1, cislo2: zadani2, vysledek: vysledek_bin, zadano: zadany_vysledek, spravne: spravne, spatne: spatne, cas: sekundy.toFixed(1) + "s", casUkonceni: date});
      }
    }
  });
  
    
document.getElementById('moznost2').addEventListener('click', function() {
    if (index_test > 0) {
        // Nastavíme hodnotu aktuálního inputu na 1
        vysInputs[index_test].value = "0";
        console.log("TEST: ", index_test);
        index_test--;
        
        if (delka < vysledek_bin.length) {
            console.log("HEJ HEJ: ", vysledek_bin.charAt(y));
          switch (vysledek_bin.charAt(y)) {
            case '0':
              spravne++;
              document.getElementById('spravne').textContent = spravne;
              vysInputs[index_test+1].style.color = "green";
            vysInputs[index_test+1].style.borderColor = "green";
              y--;
              break;
            case '1':
              spatne++;
              document.getElementById('spatne').textContent = spatne;
              vysInputs[index_test+1].style.color = "red";
            vysInputs[index_test+1].style.borderColor = "red";
              y--;
              break;
          }
          delka++;
        } else {
          switch (vysledek_bin.charAt(y)) {
            case '0':
              spravne++;
              document.getElementById('spravne').textContent = spravne;
              vysInputs[index_test+1].style.color = "green";
            vysInputs[index_test+1].style.borderColor = "green";
              y--;
              break;
            case '1':
              spatne++;
              document.getElementById('spatne').textContent = spatne;
              vysInputs[index_test+1].style.color = "red";
            vysInputs[index_test+1].style.borderColor = "red";
              y--;
              break;
          }
          delka++;
          document.getElementById("next").style.display = 'block';
          document.getElementById('buttony01').style.display = 'none';
          console.log("cas na novy priklad");
          for (let index = 0; index <= 9; index++) {
            zadany_vysledek += vysInputs[index].value;
            
          }
          console.log("ZADANY VYSLEDEK: ", zadany_vysledek);
          date = new Date().toLocaleString('cs-CZ');     //podle https://stackoverflow.com/a/30245911
    data.push({cislo1: zadani1, cislo2: zadani2, vysledek: vysledek_bin, zadano: zadany_vysledek, spravne: spravne, spatne: spatne, cas: sekundy.toFixed(1) + "s", casUkonceni: date});
        }
      }

})



document.getElementById('btn_scitani').addEventListener('click', function scitani() { 
    operace = 1;
    vytvoreni_zadani(8,8);
    zacatek();
    
    console.log("hodnota vysledku: ",hodnota_vysledku);
    vysledek_bin=hodnota_vysledku.toString(2);
    console.log("vysledek v bin: ",vysledek_bin);
    y += vysledek_bin.length;       //nastaví y na hodnotu délky výsledku (-1 + "vysledek_bin.legth") (-1 kvůli pozici 0 stringu)
    

})
document.getElementById('btn_odcitani').addEventListener('click', function odcitani() { 
    operace = 2;
    vytvoreni_zadani(8,7);
    zacatek();
    console.log("hodnota vysledku: ",hodnota_vysledku);
    vysledek_bin=hodnota_vysledku.toString(2);
    console.log("vysledek v bin: ",vysledek_bin);
    y += vysledek_bin.length;       //nastaví y na hodnotu délky výsledku (-1 + "vysledek_bin.legth") (-1 kvůli pozici 0 stringu)
})
document.getElementById('btn_deleni').addEventListener('click', function deleni() { 
    operace = 3;
    vytvoreni_zadani(8,4);
    zacatek();
    hodnota_vysledku=Math.floor(hodnota1/hodnota2);
    console.log("hodnota vysledku: ",hodnota_vysledku);
    vysledek_bin=hodnota_vysledku.toString(2);
    console.log("vysledek v bin: ",vysledek_bin);
    y += vysledek_bin.length;       //nastaví y na hodnotu délky výsledku (-1 + "vysledek_bin.legth") (-1 kvůli pozici 0 stringu)
})
document.getElementById('btn_nasobeni').addEventListener('click', function nasobeni() { 
    operace = 4;
    vytvoreni_zadani(5,5);
    zacatek();
    console.log("hodnota vysledku: ",hodnota_vysledku);
    vysledek_bin=hodnota_vysledku.toString(2);
    console.log("vysledek v bin: ",vysledek_bin);
    y += vysledek_bin.length;       //nastaví y na hodnotu délky výsledku (-1 + "vysledek_bin.legth") (-1 kvůli pozici 0 stringu)
})

//FUNKCE
function zacatek() {
    document.getElementById('detaily').style.display = 'flex';
    document.getElementById('priklady').style.display = 'flex';
    document.getElementById('vyber_okno').style.display = 'none';
    document.getElementById('uvod').style.display = 'none';
    document.getElementById('domu').style.display = 'none';
    document.getElementById('buttony01').style.display = 'flex';
    document.getElementById('zpet').style.display = 'block';
    document.getElementById('downloadCsv').style.display = 'block';
    setInterval(casInc, 100);
}

function funkce_0nebo1() {   //funkce na vytvoření náhodného čísla od 0 do 1
    return Math.round(Math.random()); 
};

function vytvoreni_zadani(delka_cisla1, delka_cisla2) {

    while ((hodnota2 > hodnota1) || (hodnota1==0) || (hodnota2==0)) {          // while loop pro kontrolu, aby 2. číslo nebylo větší než 1. nebo aby se číslo nerovnalo 0
        hodnota1=0;
        hodnota2=0;
        zadani1='';
        zadani2='';
        j=7;
        x=7;
        console.log("nulovani hodnot");
        for (let index = 0; index < delka_cisla1; index++) {   // generace prvního zadaného čísla
            zadani1 += funkce_0nebo1();   
        }

        for (let index = 0; index < delka_cisla2; index++) {   // generace druhého zadaného čísla
            zadani2 += funkce_0nebo1();   
        }
        hodnota1 = parseInt(zadani1, 2);        //převod 1. čísla na dekadické
        hodnota2 = parseInt(zadani2, 2);        // převod 2. čísla na dekadické
        console.log("prevod cisel na deka: ", hodnota1, "....", hodnota2);
    } 

    // Použijeme .padStart(8, '0') k doplnění nul
    binaryNumber1 = zadani1.padStart(8, '0');
    binaryNumber2 = zadani2.padStart(8, '0');
    console.log("prvni bin cislo: ",binaryNumber1);
    console.log("druhe bin cislo: ",binaryNumber2);

    switch (operace) {
        case 1:
            hodnota_vysledku=hodnota1+hodnota2;
            cis2Inputs[1].value = "+";
            break;
        case 2:
            hodnota_vysledku=hodnota1-hodnota2;
            cis2Inputs[1].value = "-";
            break;
        case 3:
            hodnota_vysledku=Math.floor(hodnota1/hodnota2);
            cis2Inputs[1].value = "÷";
            break;
        case 4:
            hodnota_vysledku=hodnota1*hodnota2;
            cis2Inputs[1].value = "·";
            break;

    }


    // Zapisujeme jednotlivé bity binárního čísla do inputů
    for (var i = 2; i < cis1Inputs.length; i++) {
      cis1Inputs[i].value = binaryNumber1[i-2];
    }
    for (var i = 2; i < cis2Inputs.length; i++) {
        cis2Inputs[i].value = binaryNumber2[i-2];
    }
}

function casInc() {
    sekundy+=0.1;
    document.getElementById('cas').textContent = sekundy.toFixed(1) + "s";
}

//nastavení dalšího příkladu (vymázání hodnot pro přepsání)

document.getElementById('next_btn').addEventListener('click', function() {
  console.log("kliknuti na dalsi priklad");
  document.getElementById("next").style.display = 'none';
    sekundy = 0;
    zadani1 = ''; 
    zadani2 = ''; 
    hodnota1 = 0; 
    hodnota2 = 0;  
    hodnota_vysledku = 0; 
    vysledek_bin = '';     
    y = -1; 
    zadany_vysledek = '';
    spravne = 0;
    spatne = 0;
    delka = 1;
    index_test = 9;
    document.getElementById('spatne').textContent='-';
    document.getElementById('spravne').textContent='-';

    for (let index = 0; index <= 9; index++) {
      vysInputs[index].value = '';
      vysInputs[index].style.color = 'rgba(0, 0, 0, 0.5)';
      vysInputs[index].style.borderColor = 'rgba(0, 0, 0, 0.3)';
    }

    switch (operace) {
      case 1:
        vytvoreni_zadani(8,8);
        zacatek();
        console.log("hodnota vysledku: ",hodnota_vysledku);
        vysledek_bin=hodnota_vysledku.toString(2);
        console.log("vysledek v bin: ",vysledek_bin);
        y += vysledek_bin.length; 
        break;
      case 2:
        vytvoreni_zadani(8,7);
        zacatek();
        console.log("hodnota vysledku: ",hodnota_vysledku);
        vysledek_bin=hodnota_vysledku.toString(2);
        console.log("vysledek v bin: ",vysledek_bin);
        y += vysledek_bin.length;
        break;
      case 3:
        vytvoreni_zadani(8,4);
        zacatek();
        hodnota_vysledku=Math.floor(hodnota1/hodnota2);
        console.log("hodnota vysledku: ",hodnota_vysledku);
        vysledek_bin=hodnota_vysledku.toString(2);
        console.log("vysledek v bin: ",vysledek_bin);
        y += vysledek_bin.length;
        break;
      case 4:
        vytvoreni_zadani(5,5);
        zacatek();
        console.log("hodnota vysledku: ",hodnota_vysledku);
        vysledek_bin=hodnota_vysledku.toString(2);
        console.log("vysledek v bin: ",vysledek_bin);
        y += vysledek_bin.length;
        break;
    }
  })

document.getElementById('zpet').addEventListener('click', function() {
    window.location.reload(); //příkaz na reload stránky
})



//KÓD ZE STRÁNKY https://dcode.domenade.com/tutorials/easiest-way-to-export-csv-file-in-javascript (UPRAVENÝ)
document.getElementById("downloadCsv").addEventListener("click", function() {
    downloadCsv("data.csv", json2csv.parse(data));
});
function downloadCsv(filename, csvData) {
    const element = document.createElement("a");

    element.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
    element.setAttribute("download", filename);
    element.style.display = "none";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

