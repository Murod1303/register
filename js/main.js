const user = JSON.parse(localStorage.getItem("user"))
// agar user register qilmagan bulsa registerga otvoradi 
if (user === null) {
  location.reload()
  window.location.pathname = "../register.html"
}

/* varables */
const elForm = document.querySelector(".big__form")
const elDetailsForm = document.querySelector(".details__form")
const elServisesForm = document.querySelector(".servises")
const elBudjetForm = document.querySelector(".budjet__form")
const elName = document.querySelector(".input-name")
const elEmail = document.querySelector(".input-email")
const elNumber = document.querySelector(".input-number")
const elCompany = document.querySelector(".input-company")
const elRadio = document.getElementsByName("servises")
const elRadioB = document.getElementsByName("budjet")
const elBtn = document.querySelector(".btn-bootstrap")
const userArrNew = []




  elForm.addEventListener("submit", evt=> {
    evt.preventDefault()
    
    // input valuelarni oldim 
    const nameValue = elName.value.trim()
    const emailValue = elEmail.value.trim()
    const numberValue = elNumber.value.trim()
    const companyValue = elCompany.value.trim()
    

    // name validation
    const regNameV = (smth) => {
      return String(smth).match(/^[a-zA-Z]{2,30}$/g);
    };
    if (!regNameV(nameValue)) {
      document.querySelector(".error-name").style.display = "block";
      document.querySelector(".input-name").classList.add("error__input");
      document.querySelector(".dform-name").classList.add("error-color");
      return
    }else {
      document.querySelector(".error-name").style.display = "none";
      document.querySelector(".input-name").classList.remove("error__input");
      document.querySelector(".dform-name").classList.remove("error-color");
    }
    
    // email validation 
    if (emailValue.endsWith("@gmail.com") || emailValue.endsWith("@mail.ru")) {
      document.querySelector(".error-email").style.display = "none";
      document.querySelector(".input-email").classList.remove("error__input");
      document.querySelector(".dform-email").classList.remove("error-color");
    }else {
      document.querySelector(".error-email").style.display = "block";
      document.querySelector(".input-email").classList.add("error__input");
      document.querySelector(".dform-email").classList.add("error-color");
      return
    }
    
    
    // phone number validation 
    const regPhone = (smth)=> {
      return String(smth).match(/^[+]998(90|91|93|94|95|97|98|99)[0-9]{7}$/g)
    };
    
    if (!regPhone(numberValue)) {
      document.querySelector(".error-number").style.display = "block";
      document.querySelector(".input-number").classList.add("error__input");
      document.querySelector(".dform-phone").classList.add("error-color");
      return
    }else {
      document.querySelector(".error-number").style.display = "none";
      document.querySelector(".input-number").classList.remove("error__input");
      document.querySelector(".dform-phone").classList.remove("error-color");
    }
    
    // company name
    if (companyValue.length > 30 || companyValue.length < 2) {
      document.querySelector(".error-company").style.display = "block";
      document.querySelector(".input-company").classList.add("error__input");
      document.querySelector(".dform-company").classList.add("error-color");
      return
    }else {
      document.querySelector(".error-company").style.display = "none";
      document.querySelector(".input-company").classList.remove("error__input");
      document.querySelector(".dform-company").classList.remove("error-color");
    }
    
    // radio inputlarni objectga kiritdim
    let newObjCh = {}
    const ele = document.getElementsByName('budjet');
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked){
        const budjetUser = ele[i].value
        newObjCh["budjet"] = `${budjetUser}`
      }}
      const elew = document.getElementsByName('servises');
      for (i = 0; i < elew.length; i++) {
        if (elew[i].checked){
          const serviseUser = elew[i].value
          newObjCh["servise"] = `${serviseUser}`
        }}
        // console.log(budjetUser, serviseUser);
        
        // newObj yaratildi va valularni kiritildi 
        const newObj = {
          id: userArrNew.length ? userArrNew.length + 1 : 1,
          name:elName.value.trim(),
          email:elEmail.value.trim(),
          number:elNumber.value.trim(),
          companyName:elCompany.value.trim(),
          choose:newObjCh,
        }
        // arrayga push qilindi 
        userArrNew.push(newObj)
        localStorage.setItem("chooseUser", JSON.stringify(userArrNew))    
        
        document.querySelector(".details__wrapper").style.display = "none"
        document.querySelector(".summary__wrapper").style.display = "block"
      })
    
      // render qilib oldim 
    const usersRender =  JSON.parse(localStorage.getItem("chooseUser"))
    if (usersRender != null) {
      usersRender.forEach(item => {
        document.querySelector(".output-name").textContent = item.name
        document.querySelector(".output-email").textContent = item.email
        document.querySelector(".output-contact").textContent = item.number
        document.querySelector(".output-company").textContent = item.companyName
        document.querySelector(".output-service").textContent = item?.choose.servise
        document.querySelector(".output-budjet").textContent = item?.choose.budjet+"$"
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(document).ready(function(){
      $('.details__list').slick({
        dots: false,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    });