const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

// js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});


function enviar(){

  var en= document.getElementById ('core').value; 
  var e= document.getElementById ('contras').value;
  var f= document.getElementById ('inicioform');
  console.log (username);

 inicioform.addEventListener("submit", (e) => {
  e.preventDefault();

  if(correo.value=="" || contras.value==""){

    alert("No hay datos disponibles :(");

  }

 else {
  
    alert("Formulario enviado correctamente :)");
    console.log(
      ` Bienvenido ${correo.value} `
    );

     correo.value = "";
     contras.value = "";
  }
});


}

// js code to appear signup and login form
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});
