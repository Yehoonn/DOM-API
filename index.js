function createReact() {
  const fragment = document.createDocumentFragment();
  const monsterArray = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀"];
  monsterArray.forEach((value) => {
    const section = document.createElement("section");
    const textNode = document.createTextNode(value);
    section.appendChild(textNode);
    fragment.appendChild(section);
  });
}

createReact();
