//append for last
//prepend for first
//insert for any position

const parent=document.getElementById("root");

const title=document.createElement("h1");
parent.append(title);

title.innerText="Hello form DOM 1!";
title.style.textDecoration="underline";
title.style.textDecorationColor="magenta";

const title2=document.createElement("h1");
title2.innerText="Hello form DOM 2!";

parent.append(title2);