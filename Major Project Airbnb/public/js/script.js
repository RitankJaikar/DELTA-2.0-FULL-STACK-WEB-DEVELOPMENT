// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();




// Navbar
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  // Check if the screen is larger than 'md' (desktop sizes)
  if (window.innerWidth >= 992) {  // 'lg' breakpoint (992px) for Bootstrap and above
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down -> hide navbar
      navbar.style.top = "-80px"; // Adjust based on your navbar height
    } else {
      // Scrolling up -> show navbar
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  }
});