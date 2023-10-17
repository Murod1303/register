// varables
const elForm = document.querySelector(".form");
const elName = document.querySelector(".input-name");
const elSurname = document.querySelector(".input-lname");
const elEmail = document.querySelector(".input-email");
const elPasword = document.querySelector(".input-pasword");
const elRepeatPasword = document.querySelector(".input-rpasword");
const elSelectValue = document.querySelector(".select-value");
const elbirthday = document.querySelector(".input-Birthday");
const elCheckbox = document.querySelector(".input-checkbox");


// taos
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')



const usersArr = []
elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  
  /* valuelarni olvoldim */
  const nameValue = elName.value.trim();
  const surnameValue = elSurname.value.trim();
  const emailValue = elEmail.value.trim();
  const elPasValue = elPasword.value.trim();
  const elRPasValue = elRepeatPasword.value.trim();
  const genderValue = elRepeatPasword.value.trim();
  const birthdayValue = elRepeatPasword.value.trim();
  const firstcharName = nameValue.substring(0, 1);
  const firstcharNameUpper = firstcharName.toUpperCase();
  const firstcharLName = surnameValue.substring(0, 1);
  const firstcharLNameUpper = firstcharLName.toUpperCase();
  
  
  // name validation 
  const regName = (smth) => {
    return String(smth).match(/^[a-zA-Z]{2,30}$/g);
  };
  
  if (regName(nameValue) === null || firstcharName != firstcharNameUpper) {
    document.querySelector(".invalid-span").style.display = "block";
    document.querySelector(".form__span").classList.add("invalid");
    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
    elName.classList.add("invalid-input");
    return;
  } else {
    document.querySelector(".invalid-span").style.display = "none";
    document.querySelector(".form__span").classList.remove("invalid");
    elName.classList.remove("invalid-input");
  }
  
  // last name validation
  if (regName(surnameValue) === null || firstcharLName != firstcharLNameUpper) {
    document.querySelector(".invalid-lname").style.display = "block";
    document.querySelector(".span-surname").classList.add("invalid");
    elSurname.classList.add("invalid-input");
    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
    return;
  } else {
    document.querySelector(".invalid-lname").style.display = "none";
    document.querySelector(".span-surname").classList.remove("invalid");
    elSurname.classList.remove("invalid-input");
  }
  // name and lastname end
  
  // email
  const regEmail = (smth) => {
    return String(smth).match(
      /^([A-Z|a-z|0-9]{3,20})+(\@)+([A-Z|a-z|0-9]){3,8}\.[a-z]{2,5}$/gm
      );
    };
    
    if (!regEmail(emailValue)) {
      document.querySelector(".invalid-email").style.display = "block";
      document.querySelector(".span-email").classList.add("invalid");
      elEmail.classList.add("invalid-input");
      document.querySelector(".email-btn").style.backgroundImage =
      "url('../images/emailerr.svg')";
      if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }
      return;
    } else {
      document.querySelector(".invalid-email").style.display = "none";
      document.querySelector(".span-email").classList.remove("invalid");
      elEmail.classList.remove("invalid-input");
      document.querySelector(".email-btn").style.backgroundImage =
      "url('../images/email.svg')";
    }
    
    // pasword validation  similar
    if (elPasValue != elRPasValue) {
      document.querySelector(".invalid-repasword").style.display = "block";
      document.querySelector(".span-pasword").classList.add("invalid");
      
      document.querySelector(".invalid-reepasword").style.display = "block";
      document.querySelector(".span-rpasword").classList.add("invalid");
      
      elPasword.classList.add("invalid-input");
      elRepeatPasword.classList.add("invalid-input");
      if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }
    } else {
      document.querySelector(".invalid-repasword").style.display = "none";
      document.querySelector(".span-pasword").classList.remove("invalid");
      
      document.querySelector(".invalid-reepasword").style.display = "none";
      document.querySelector(".span-rpasword").classList.remove("invalid");
      
      elPasword.classList.remove("invalid-input");
      elRepeatPasword.classList.remove("invalid-input");
    }
    
    
    // Pasword validation 
    const regPas = (smth) => {
      return String(smth).match(/^(?=.*\d)(?=.*[a-z]).{8,20}$/gm);
    };
    
    if (!regPas(elPasValue)) {
      document.querySelector(".invalid-pasword").style.display = "block";
      document.querySelector(".span-pasword").classList.add("invalid");
      elPasword.classList.add("invalid-input");
      document.querySelector(".eye-Btn").style.backgroundImage =
      "url('../images/eyeErr.svg')";
      if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }
      return;
    } else {
      document.querySelector(".invalid-pasword").style.display = "none";
      document.querySelector(".span-pasword").classList.remove("invalid");
      elPasword.classList.remove("invalid-input");
      document.querySelector(".eye-Btn").style.backgroundImage =
      "url('../images/eye.svg')";
    }
    // repeat pasword validation 
    if (!regPas(elRPasValue)) {
      document.querySelector(".invalid-rpasword").style.display = "block";
      document.querySelector(".span-rpasword").classList.add("invalid");
      elRepeatPasword.classList.add("invalid-input");
      document.querySelector(".eye-BtnR").style.backgroundImage =
      "url('../images/eyeErr.svg')";
      if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }
      return;
    } else {
      document.querySelector(".invalid-rpasword").style.display = "none";
      document.querySelector(".span-rpasword").classList.remove("invalid");
      elRepeatPasword.classList.remove("invalid-input");
      document.querySelector(".eye-Btn").style.backgroundImage =
      "url('../images/eye.svg')";
    }
    
    // create obj 
    const usersObj = {
      "id": usersArr.length ? usersArr.length + 1 : 1,
      "username": elName.value,
      "user_surname": elSurname.value,
      "user_email": elEmail.value,
      "user_pasword": elPasword.value,
      "user_gender": elSelectValue,
      "user_birthday": elbirthday.value,
    };
    usersArr.push(usersObj);
    localStorage.setItem("user", JSON.stringify(usersArr));
    
  });

  document.querySelector(".eye-Btn").addEventListener("click", ()=> {
    if (elPasword.type == "password") {
      elPasword.type="text"
      console.log("dawdaw");
    }else{
      elPasword.type = "password"
    }
  })
  document.querySelector(".eye-BtnR").addEventListener("click", ()=> {
    if (elRepeatPasword.type == "password") {
      elRepeatPasword.type="text"
      console.log("dawdaw");
    }else{
      elRepeatPasword.type = "password"
    }
  })
  

  
  // register qilib bulib indexga otadi 
  const user = JSON.parse(localStorage.getItem("user"))
  if (user === null) {
  }else if (user.length) {
    user.forEach(element => {
      if (element.user_email) {
        location.reload()
        window.location.pathname = "../index.html"
      }

      
    });
  }
  
  
  
  
  