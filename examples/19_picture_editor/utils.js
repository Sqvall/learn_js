const elt = (type, props, ...children) => {
  const dom = document.createElement(type);
  if (props) Object.assign(dom, props);
  for (const child of children) {
    if (typeof child !== 'string') {
      dom.appendChild(child);
    } else {
      dom.appendChild(document.createTextNode(child));
    }
  }
  return dom;
};

export default elt;
