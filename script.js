const slider = document.getElementById("slider");
let toggleCheckbox = document.querySelector('.switch input');
const numberPagesViews = document.getElementById('pageViews');
let price1 = document.getElementById('price');
let price2 = document.getElementById('price2');
let yearlyBilling = false;
let periodBilling = document.querySelectorAll('.periodBilling');

/* slider price on input */
let sumMonthly = [8, 16, 32, 64];
let multiple = 15;
price1.innerHTML = "$" + (slider.value * multiple);

slider.oninput = function () {
    slider.value = this.value;
    price1.innerHTML = "$" + (slider.value * multiple);
    //console.log(yearlyBilling)
    //console.log(checkbox.checked)
}

toggleCheckbox.addEventListener('change', function(){
    if(yearlyBilling == false) {
        yearlyBilling = true;
        
    } else {
        yearlyBilling = false;
    }
    console.log(yearlyBilling);       
});

periodBilling.innerHTML = "/ yearly";

console.log(periodBilling.innerHTML)





































