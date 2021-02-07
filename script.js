import countryTexts from "./gov7Array.js";

const countriesNeedingThe = [
  " Dominican Republic",
  " United Arab Emirates",
  " Czech Republic",
  " Netherlands",
  " Philippines",
  " United Kingdom",
  " European Union",
];

//GOV-7 Code
const greenScoredCountries = [
  "Australia",
  "Bahrain",
  "Canada",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Dominican Republic",
  "Ecuador",
  "El Salvador",
  "Austria",
  "Bulgaria",
  "Belgium",
  "Czech Republic",
  "Cyprus",
  "Croatia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Italy",
  "Ireland",
  "Latvia",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Lithuania",
  "Poland",
  "Portugal",
  "Romania",
  "Spain",
  "Slovakia",
  "Sweden",
  "Slovenia",
  "European Union",
  "Honduras",
  "Hong Kong",
  "Israel",
  "Laos",
  "Malaysia",
  "Mexico",
  "New Zealand",
  "Oman",
  "Panama",
  "Peru",
  "Singapore",
  "South Africa",
  "Switzerland",
  "Taiwan",
  "United Kingdom",
];

const yellowScoredCountries = [
  "Bolivia",
  "Brazil",
  "Brunei",
  "Egypt",
  "Ghana",
  "Guatemala",
  "India",
  "Indonesia",
  "Japan",
  "Jordan",
  "Kenya",
  "Kuwait",
  "Morocco",
  "Nicaragua",
  "Norway",
  "Pakistan",
  "Paraguay",
  "Qatar",
  "South Korea",
  "Thailand",
  "Cote d'Ivoire",
  "Philippines",
  "Tunisia",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
];

const redScoredCountries = [
  "Algeria",
  "Angola",
  "Argentina",
  "Bangladesh",
  "Cambodia",
  "China",
  "Ethiopia",
  "Myanmar",
  "Nigeria",
  "Russia",
  "Saudi Arabia",
  "Vietnam",
  "Venezuela",
];

let inputedCountries = "";
let inputedGreen = [];
let inputedYellow = [];
let inputedRed = [];
let res1 = "";
let res2 = "";
let res3 = "";
let singleArr = [""];
let fixedArr = null;
let final = "";
let score6Div = document.querySelector("#score6");
let score7Div = document.querySelector("#score7");

function parseCountries7(input) {
  let inputedList = input.split(",");
  inputedCountries = inputedList;
}

function startTextGeneration7() {
  for (let i = 0; i < inputedCountries.length; i++) {
    for (let j = 0; j < greenScoredCountries.length; j++) {
      if (inputedCountries[i] === greenScoredCountries[j]) {
        inputedGreen.push(" " + greenScoredCountries[j]);
      }
    }
    for (let k = 0; k < yellowScoredCountries.length; k++) {
      if (inputedCountries[i] === yellowScoredCountries[k]) {
        inputedYellow.push(" " + yellowScoredCountries[k]);
      }
    }
    for (let l = 0; l < redScoredCountries.length; l++) {
      if (inputedCountries[i] === redScoredCountries[l]) {
        inputedRed.push(" " + redScoredCountries[l]);
      }
    }
  }

  if (inputedGreen.length > 2) {
    for (let i = 0; i < inputedGreen.length; i++) {
      for (let j = 0; j < countriesNeedingThe.length; j++) {
        if (inputedGreen[i] === countriesNeedingThe[j]) {
          inputedGreen[i] = " the" + countriesNeedingThe[j];
        }
      }
    }

    let lastCountryGreen = inputedGreen.pop();
    res1 =
      "The company operates in" +
      inputedGreen +
      ", and" +
      lastCountryGreen +
      "." +
      " These countries maintain few barriers to trade in goods and services as well as few restrictions on foreign capital flows and investment.";
  } else {
    for (let i = 0; i < inputedGreen.length; i++) {
      for (let j = 0; j < countryTexts.length; j++) {
        if (inputedGreen[i] === countryTexts[j].country) {
          singleArr.push(countryTexts[j].language);
          fixedArr = singleArr.join(" ");
        }
      }
    }
  }

  if (inputedYellow.length > 2) {
    for (let i = 0; i < inputedYellow.length; i++) {
      for (let j = 0; j < countriesNeedingThe.length; j++) {
        if (inputedYellow[i] === countriesNeedingThe[j]) {
          inputedYellow[i] = " the" + countriesNeedingThe[j];
        }
      }
    }

    let lastCountryYellow = inputedYellow.pop();
    res2 =
      " The company operates in" +
      inputedYellow +
      ", and" +
      lastCountryYellow +
      "." +
      " These countries maintain moderate barriers to trade in goods and services or moderate restrictions on foreign capital flows and investment.";
  } else {
    for (let i = 0; i < inputedYellow.length; i++) {
      for (let j = 0; j < countryTexts.length; j++) {
        if (inputedYellow[i] === countryTexts[j].country) {
          singleArr.push(countryTexts[j].language);
          fixedArr = singleArr.join(" ");
        }
      }
    }
  }

  if (inputedRed.length > 2) {
    for (let i = 0; i < inputedRed.length; i++) {
      for (let j = 0; j < countriesNeedingThe.length; j++) {
        if (inputedRed[i] === countriesNeedingThe[j]) {
          inputedRed[i] = " the" + countriesNeedingThe[j];
        }
      }
    }

    let lastCountryRed = inputedRed.pop();
    res3 =
      " The company operates in" +
      inputedRed +
      ", and" +
      lastCountryRed +
      "." +
      " These countries maintain significant barriers to trade including import bans on certain products, severe restrictions on foreign investment, or monopolies by State-Owned Enterprises (SOE's).";
  } else {
    for (let i = 0; i < inputedRed.length; i++) {
      for (let j = 0; j < countryTexts.length; j++) {
        if (inputedRed[i] === countryTexts[j].country) {
          singleArr.push(countryTexts[j].language);
          fixedArr = singleArr.join(" ");
        }
      }
    }
  }
  // fixedArr = singleArr.join(" ");
  // console.log(fixedArr);
  if (res1 === "" && res2 === "" && res3 === "" && fixedArr === null) {
    final =
      "The company does not operate in a country currently listed as imposing significant barriers to trade by the United States Trade Representative.";
  } else {
    final = res1 + res2 + res3 + fixedArr;
  }

  for (let i = 0; i < inputedCountries.length; i++) {
    for (let j = 0; j < inputedGreen.length; j++) {
      if (" " + inputedCountries[i] === inputedGreen[j]) {
        score7Div.style.backgroundColor = "green";
      }
    }
  }
  for (let i = 0; i < inputedCountries.length; i++) {
    for (let j = 0; j < inputedYellow.length; j++) {
      if (" " + inputedCountries[i] === inputedYellow[j]) {
        score7Div.style.backgroundColor = "rgb(232, 232, 0)";
      }
    }
  }
  for (let i = 0; i < inputedCountries.length; i++) {
    for (let j = 0; j < inputedRed.length; j++) {
      if (" " + inputedCountries[i] === inputedRed[j]) {
        score7Div.style.backgroundColor = "red";
      }
    }
  }
}

//INPUT Countries HERE!!
// parseCountries7("India,Germany,Canada,Ireland,China");
// /////
// startTextGeneration7();
// console.log(final);
// //End GOV-7 Code

//GOV-6 Code!!
const watchList = [
  "Thailand",
  "Vietnam",
  "Pakistan",
  "Turkmenistan",
  "Uzbekistan",
  "Egypt",
  "Kuwait",
  "Lebanon",
  "United Arab Emirates",
  "Romania",
  "Turkey",
  "Barbados",
  "Bolivia",
  "Brazil",
  "Canada",
  "Colombia",
  "Dominican Republic",
  "Ecuador",
  "Guatemala",
  "Mexico",
  "Paraguay",
  "Peru",
  "Trinidad & Tobago",
];
const priorityWatchList = [
  "China",
  "Indonesia",
  "India",
  "Algeria",
  "Saudi Arabia",
  "Russia",
  "Ukraine",
  "Argentina",
  "Chile",
  "Venezuela",
];

let inputedCountries6 = "";
let gov6WatchListOutput = [];
let gov6PriorityOutput = [];
let yellowTracker = [];
let redTracker = [];
let masterOutput = [];

function parseCountries6(input) {
  let inputedList6 = input.split(",");
  inputedCountries6 = inputedList6;
}

function startTextGeneration6() {
  for (let i = 0; i < inputedCountries6.length; i++) {
    for (let j = 0; j < watchList.length; j++) {
      if (inputedCountries6[i] === watchList[j]) {
        gov6WatchListOutput.push(" " + inputedCountries6[i]);
        yellowTracker.push(inputedCountries6[i]);
      }
    }
    for (let k = 0; k < priorityWatchList.length; k++) {
      if (inputedCountries6[i] === priorityWatchList[k]) {
        gov6PriorityOutput.push(" " + inputedCountries6[i]);
        redTracker.push(inputedCountries6[i]);
      }
    }
  }
  if (gov6PriorityOutput.length > 0 && gov6WatchListOutput.length > 0) {
    masterOutput.push(...gov6PriorityOutput);
    masterOutput.push(...gov6WatchListOutput);
    if (masterOutput.length > 2) {
      for (let i = 0; i < masterOutput.length; i++) {
        for (let j = 0; j < countriesNeedingThe.length; j++) {
          if (masterOutput[i] === countriesNeedingThe[j]) {
            masterOutput[i] = " the" + countriesNeedingThe[j];
          }
        }
      }

      let lastCountry = masterOutput.pop();
      gov6P.innerHTML =
        "The company maintains business operations in" +
        masterOutput +
        ", and" +
        lastCountry +
        ", which are listed on the United States Trade Representative (USTR) Special 301 Watch List or Priority Watch List.";
    } else {
      for (let i = 0; i < masterOutput.length; i++) {
        for (let j = 0; j < countriesNeedingThe.length; j++) {
          if (masterOutput[i] === countriesNeedingThe[j]) {
            masterOutput[i] = " the" + countriesNeedingThe[j];
          }
        }
      }
      let lastCountry = masterOutput.pop();
      gov6P.innerHTML =
        "The company maintains business operations in" +
        masterOutput +
        " and" +
        lastCountry +
        ", which are listed on the United States Trade Representative (USTR) Special 301 Watch List or Priority Watch List.";
    }
  } else if (gov6WatchListOutput.length > 2) {
    masterOutput.push(...gov6WatchListOutput);
    for (let i = 0; i < masterOutput.length; i++) {
      for (let j = 0; j < countriesNeedingThe.length; j++) {
        if (masterOutput[i] === countriesNeedingThe[j]) {
          masterOutput[i] = " the" + countriesNeedingThe[j];
        }
      }
    }

    let lastCountry = masterOutput.pop();
    gov6P.innerHTML =
      "The company maintains business operations in" +
      masterOutput +
      ", and" +
      lastCountry +
      ", which are listed on the United States Trade Representative (USTR) Special 301 Watch List.";
  } else if (gov6WatchListOutput.length === 2) {
    masterOutput.push(...gov6WatchListOutput);
    for (let i = 0; i < masterOutput.length; i++) {
      for (let j = 0; j < countriesNeedingThe.length; j++) {
        if (masterOutput[i] === countriesNeedingThe[j]) {
          masterOutput[i] = " the" + countriesNeedingThe[j];
        }
      }
    }
    let lastCountry = masterOutput.pop();
    gov6P.innerHTML =
      "The company maintains business operations in" +
      masterOutput +
      " and" +
      lastCountry +
      ", which are listed on the United States Trade Representative (USTR) Special 301 Watch List.";
  } else if (gov6WatchListOutput.length === 1) {
    masterOutput.push(...gov6WatchListOutput);
    for (let i = 0; i < masterOutput.length; i++) {
      for (let j = 0; j < countriesNeedingThe.length; j++) {
        if (masterOutput[i] === countriesNeedingThe[j]) {
          masterOutput[i] = " the" + countriesNeedingThe[j];
        }
      }
    }
    gov6P.innerHTML =
      "The company maintains business operations in" +
      masterOutput +
      ", which is listed on the United States Trade Representative (USTR) Special 301 Watch List.";
  } else if (gov6PriorityOutput.length > 2) {
    masterOutput.push(...gov6PriorityOutput);
    for (let i = 0; i < masterOutput.length; i++) {
      for (let j = 0; j < countriesNeedingThe.length; j++) {
        if (masterOutput[i] === countriesNeedingThe[j]) {
          masterOutput[i] = " the" + countriesNeedingThe[j];
        }
      }
    }
    let lastCountry = masterOutput.pop();
    gov6P.innerHTML =
      "The company maintains business operations in" +
      masterOutput +
      ", and" +
      lastCountry +
      ", which are listed on the United States Trade Representative (USTR) Special 301 Priority Watch List.";
  } else if (gov6PriorityOutput.length === 2) {
    masterOutput.push(...gov6PriorityOutput);
    for (let i = 0; i < masterOutput.length; i++) {
      for (let j = 0; j < countriesNeedingThe.length; j++) {
        if (masterOutput[i] === countriesNeedingThe[j]) {
          masterOutput[i] = " the" + countriesNeedingThe[j];
        }
      }
    }
    let lastCountry = masterOutput.pop();
    gov6P.innerHTML =
      "The company maintains business operations in" +
      masterOutput +
      " and" +
      lastCountry +
      ", which are listed on the United States Trade Representative (USTR) Special 301 Priority Watch List.";
  } else {
    masterOutput.push(...gov6PriorityOutput);
    for (let i = 0; i < masterOutput.length; i++) {
      for (let j = 0; j < countriesNeedingThe.length; j++) {
        if (masterOutput[i] === countriesNeedingThe[j]) {
          masterOutput[i] = " the" + countriesNeedingThe[j];
        }
      }
    }
    gov6P.innerHTML =
      "The company maintains business operations in" +
      masterOutput +
      ", which is listed on the United States Trade Representative (USTR) Special 301 Priority Watch List.";
  }
  if (masterOutput.length === 0) {
    score6Div.style.backgroundColor = "green";
    gov6P.innerHTML =
      "The company does not maintain any business operations in countries that are listed on the United States Trade Representative (USTR) Special 301 Watch List.";
  } else if (masterOutput.length > 0) {
    if (yellowTracker.length > 0) {
      score6Div.style.backgroundColor = "rgb(232, 232, 0)";
    }
    if (redTracker.length > 0) {
      score6Div.style.backgroundColor = "red";
    }
  }
}

// parseCountries6("Canada,Brazil");
// startTextGeneration6();

let submitButton = document.querySelector("#button");
let gov6Input = document.querySelector("#g6");
let gov7Input = document.querySelector("#g7");
let gov7P = document.querySelector("#gov7");
let gov6P = document.querySelector("#gov6");
let resetButton = document.querySelector("#reset");

submitButton.addEventListener("click", runProgram);
resetButton.addEventListener("click", reset);

function reset() {
  inputedCountries6 = "";
  gov6WatchListOutput = [];
  gov6PriorityOutput = [];
  masterOutput = [];
  yellowTracker = [];
  redTracker = [];
  inputedCountries = "";
  inputedGreen = [];
  inputedYellow = [];
  inputedRed = [];
  res1 = "";
  res2 = "";
  res3 = "";
  singleArr = [""];
  fixedArr = [""];
  final = "";
  gov6P.innerHTML =
    "The company does not maintain any business operations in countries that are listed on the United States Trade Representative (USTR) Special 301 Watch List.";
  gov7P.innerHTML =
    "The company does not operate in a country currently listed as imposing significant barriers to trade by the United States Trade Representative.";
  score6Div.style.backgroundColor = "green";
  score7Div.style.backgroundColor = "green";
}

function runProgram() {
  event.preventDefault();
  let x = gov6Input.value;
  let y = gov7Input.value;
  if (gov6Input.value.length === 0 && gov7Input.value.length === 0) {
    alert("Nothing has been inputed. Try Again.");
    reset();
  } else {
    parseCountries6(x);
    startTextGeneration6();
    inputedCountries6 = "";
    gov6WatchListOutput = [];
    gov6PriorityOutput = [];
    masterOutput = [];
    yellowTracker = [];
    redTracker = [];

    parseCountries7(y);
    startTextGeneration7();
    gov7P.textContent = final;
    if (
      inputedGreen.length === 0 &&
      inputedYellow.length === 0 &&
      inputedRed.length === 0
    ) {
      score7Div.style.backgroundColor = "green";
      gov7P.innerHTML =
        "The company does not operate in a country currently listed as imposing significant barriers to trade by the United States Trade Representative.";
    }
    inputedCountries = "";
    inputedGreen = [];
    inputedYellow = [];
    inputedRed = [];
    res1 = "";
    res2 = "";
    res3 = "";
    singleArr = [""];
    fixedArr = [""];
    final = "";
  }
}
//Comments
