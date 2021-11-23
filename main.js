const closeBtn = document.querySelector(".x-close");
const container = document.querySelector(".payment-container");
const launch = document.querySelector(".payment-launch");

closeBtn.addEventListener("click", closeModal);
container.addEventListener("click", closeModal2);

// Launch DOM can be replaced by any action that makes payment successful
launch.addEventListener("click", openModal);

// Closes the modal when closeBtn is clicked
function closeModal() {
  console.log(document.querySelector("body"));
  if (container.classList.contains("rem-modal")) {
  } else {
    container.classList.add("rem-modal");
    setTimeout(() => {
      container.style.display = "none";
    }, 500);
    setTimeout(() => {
      document.querySelector("body").style.overflow = "visible";
    }, 600);
  }
}

// CLoses the modal when the payment-container is clicked
function closeModal2(e) {
  if (e.target.classList.contains("payment-container")) {
    if (container.classList.contains("rem-modal")) {
      container.classList.remove("rem-modal");
    } else {
      container.classList.add("rem-modal");
      setTimeout(() => {
        container.style.display = "none";
      }, 500);
      setTimeout(() => {
        document.querySelector("body").style.overflow = "visible";
      }, 600);
    }
  }
  return;
}

/**
 * Opens the modal when the launch button is clicked(optional)
 * Opens the modal if payment is successful
 */
function openModal() {
  container.classList.remove("rem-modal");
  container.style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
}
