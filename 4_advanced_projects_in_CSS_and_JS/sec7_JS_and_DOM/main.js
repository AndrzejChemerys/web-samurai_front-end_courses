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