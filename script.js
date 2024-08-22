let toastBox = document.getElementById("toastBox");
let successmsg = `<i class="fa-solid fa-circle-check"></i> Successfully Submited `;
let errormsg = `<i class="fa-solid fa-circle-xmark"></i> Error`;
let invalidmsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid message`;

function showtoast(msg, status = "success") {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (status === "error") {
    toast.classList.add("error");
  }

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

const form = document.querySelector("#contact-us-form");
const spinner  = document.querySelector("#spinner")

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  spinner.style.display = "block";


  const formData = new FormData(this);

  //   const response = await fetch('http://localhost:5000/send-email', {
  //     method: 'POST',
  //     body: new URLSearchParams(formData)
  //   })

  //   if (response.ok) {
  //     showtoast("Thanks for contacting us, we will get back to you soon")
  //   } else {
  //     const error = await response.json();
  //     console.log(error.message)
  //     showtoast("error.message", "error")
  //   }

  await new Promise((res) => setTimeout(res, 5000));

  spinner.style.display = "none";
  showtoast("Thank you for contacting us, we will get back to you soon!");
});
