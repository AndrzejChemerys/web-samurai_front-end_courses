const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(node);

  if (txt) {
    const text = document.createTextNode(txt);
    element.appendChild(text);
  }
  if (attr) {
    element.setAttribute(attr, value);
  }
  document.querySelector('.content').appendChild(element);

}

const searchElements = (event, nameElement) => {
  event.preventDefault();
  const infoElement = document.querySelector('.result');
  infoElement.textContent = '';
  const elements = document.querySelectorAll(nameElement);
  if (elements.length) {
    infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie znalazłem ${elements.length} elementów <strong>${nameElement}</strong></p>`;
    showInfo(elements, infoElement)
  } else {
    infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie nie znalazłem elementów <strong>${nameElement}</strong></p>`;
    return;
  }

}