let showValue = document.querySelector(".show-value");
const changeValueButton = document.querySelector(".change-value");
const shuffleButton = document.querySelector(".shuffle-value");

changeValueButton.addEventListener("click", changeCheckboxValues);
showValue.addEventListener("click", showSelectedValues);
shuffleButton.addEventListener("click", shuffleCheckboxValues);

function updateResultMessage(message) {
  const resContainer = document.querySelector(".result-container");
  resContainer.textContent = message;
}

function showSelectedValues(e) {
  e.preventDefault();

  let checkboxes = document.querySelectorAll(
    "li.checkbox-item input[type=checkbox]"
  );
  let selectedChecked = Array.from(checkboxes).filter(function (checkbox) {
    return checkbox.checked;
  });

  let selectedValues = selectedChecked.map(function (checkbox) {
    return checkbox.value;
  });

  // resContainer.textContent = `Selected values are: ${selectedValues.join(
  //   ", "
  // )}`;
  const selecctMsg = `Selected values are: ${selectedValues.join(", ")}`;
  updateResultMessage(selecctMsg);
}
function changeCheckboxValues(e) {
  e.preventDefault();
  const newValues = ["JavaScript", "Cybersecurity", "Technology", "Leadership"];
  const checkboxes = document.querySelectorAll(
    "li.checkbox-item input[type=checkbox]"
  );

  let selectedCheckedN = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  );

  let resultMessage = ""; // Storing the messages about changing the checkbox

  selectedCheckedN.forEach((checkbox, i) => {
    const oldValue = checkbox.value;
    checkbox.value = newValues[i];
    checkbox.nextSibling.textContent = newValues[i];

    const changeMsg = `You changed the value from ${oldValue} to ${newValues[i]} \n`;

    resultMessage += `${changeMsg} ,`;
  });

  updateResultMessage(resultMessage); // Update the result message
}

function shuffleCheckboxValues(e) {
  e.preventDefault();
  const checkboxes = document.querySelectorAll(
    "li.checkbox-item input[type=checkbox]"
  );

  const checkboxValues = Array.from(checkboxes).map(
    (checkbox) => checkbox.value
  );

  //Fisher-Yates shuffle algorithm
  for (let i = checkboxValues.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [checkboxValues[i], checkboxValues[j]] = [
      checkboxValues[j],
      checkboxValues[i],
    ];
  }

  checkboxes.forEach((checkbox, index) => {
    checkbox.value = checkboxValues[index];
    checkbox.nextSibling.textContent = checkboxValues[index];
  });

  updateResultMessage("Checkbox values shuffled sucesfuly");
}
