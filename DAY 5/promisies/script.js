const request = window.fetch("https://dummyjson.com/recipes");
console.log(request);
console.log(request);

const parentElem = document.getElementsByTagName("main")[0];
request
  .then((response) => {
    console.log("Response : ", response);
    const pr2 = response.json();
    pr2.then((data) => {
      console.log("Data ", data);
      const { recipes } = data;
      console.log(recipes);
      recipes.forEach(({ name, image, cuisine, rating, servings }) => {
        const popUpData = { name, image, cuisine, rating, servings };
        const newDiv = document.createElement("div");
        newDiv.className = "card";
        newDiv.innerHTML = `
        <p>${name}</p>
        <img src='${image}' width='200' height='200'>
        <p>${cuisine}</p>
        <p>${rating}</p>
        <p>${servings}</p>

    `;

        parentElem.appendChild(newDiv);
      });
    });
    parent.appendChild(newDiv);
  })
  .catch((err) => {
    alert("unable to get product ---> ", err.message);
  });
