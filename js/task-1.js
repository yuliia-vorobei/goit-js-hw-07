const li = document.querySelectorAll(".item");
console.log(`Number of categories: ${li.length}`);
li.forEach((item) => {
  const heading = item.querySelector("h2");
  const elements = item.querySelectorAll("ul li");
  console.log(`Category: ${heading.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
