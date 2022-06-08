const slider = document.getElementById("slider");

let price1 = document.getElementById('price');
let price2 = document.getElementById('price2');
let pageViews = document.getElementById('pageViews');
let checkbox = document.getElementById('checkbox');

let yearlyPrice = ["5.25" ,"9.00" ,"12.00", "18.00", "24.00"];
let monthlyPrice = ["7.00" ,"12.00" ,"16.00", "24.00", "32.00"];
let price;

let yearlyBilling = checkbox.checked;

setPrice();
setPageViews();

slider.addEventListener('input', function() {
    setPageViews();
    setPrice();    
})

checkbox.addEventListener('click', ()=> {
    activeBilling();
    setPrice();    
})


function activeBilling() {
    if(yearlyBilling == false) {
        yearlyBilling = true;
        // console.log("prix reduit")
    
    } else {            
        yearlyBilling = false;
        // console.log("prix normal")                        
    }
}

function setPrice() {
    price = yearlyBilling ? yearlyPrice : monthlyPrice;    
    let i = slider.value;
    price1.innerHTML = price[i];
    price2.innerHTML = price[i];      
}

function setPageViews() {
    while(true) {
        if(slider.value == 0) {
            pageViews.innerHTML = "100k";
        }
        else if(slider.value == 1) {
            pageViews.innerHTML = "200k";
        }
        else if(slider.value == 2) {
            pageViews.innerHTML = "400k";
        }
        else if(slider.value == 3) {
            pageViews.innerHTML = "800k";
        }
        else if(slider.value == 4) {
            pageViews.innerHTML = "1600k";
        }
        break;
    }
}










































