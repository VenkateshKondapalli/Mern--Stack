const title = document.getElementById("greetings");

const handleUserName = (e) => {
  // console.log("typed");
  // console.log("----");
  // console.log(e);
  const elem = e.target;
  console.log(elem.value);
  title.innerText = `Hello ${elem.value}!`;
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);
  // const input1 = e.target[0].value;
  // const input2 = e.target[1].value;
  // const input3 = e.target[2].value;
  // console.log(input1);
  // console.log(input2);
  // console.log(input3);

  const username = e.target.usernameTemp.value;
  const email = e.target.baseEmail.value;
  const password = e.target.abcdPassword.value;

  if (!email.endsWith("@lpu.in")) {
    alert("please enter your LPU email ID");
  } else {
    //calling API
    //send the data-> resister the element;
  }
};

//onkeyup is for at that time elements ,onkeydown runs one step slow ,onchange runs when it click anywhere other that that
