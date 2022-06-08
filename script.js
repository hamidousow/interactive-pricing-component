const slider = document.getElementById("slider");

const numberPagesViews = document.getElementById('pageViews');
let price1 = document.getElementById('price');
let price2 = document.getElementById('price2');
let pageViews = document.getElementById('pageViews');
let checkbox = document.getElementById('checkbox');


// pageViews.innerHTML = nbrPages;

let yearlyPrice = ["5.25" ,"9.00" ,"12.00", "18.00", "24.00"];
let monthlyPrice = ["7.00" ,"12.00" ,"16.00", "24.00", "32.00"];
let price;

let yearlyBilling = checkbox.checked;

checkbox.addEventListener('click', function() {
    let tmp = [""];
    if(yearlyBilling == false) {
        
        yearlyBilling = true;
        
    } else if(yearlyBilling == true) {
        yearlyBilling = false;                  
    }
    
})

setPrice();
setPageViews();

slider.addEventListener('input', function() {
    setPageViews();
    setPrice();    
})

// yearlyBilling ? yearlyBilling : monthlyPrice;




function activeFireSale() {
    console.log(yearlyBilling)    
}

function setPrice() {    
    let i = slider.value;
    price = monthlyPrice[i]
    price1.innerHTML = price;
}

function setPageViews() {
    while(true) {
        if(slider.value == 0) {
            pageViews.innerHTML = "100k";
            // price1.innerHTML = "7";
        }
        else if(slider.value == 1) {
            pageViews.innerHTML = "200k";
            // price1.innerHTML = "12";
        }
        else if(slider.value == 2) {
            pageViews.innerHTML = "400k";
            // price1.innerHTML = "16";
        }
        else if(slider.value == 3) {
            pageViews.innerHTML = "800k";
            // price1.innerHTML = "24";
        }
        else if(slider.value == 4) {
            pageViews.innerHTML = "1600k";
            // price1.innerHTML = "32";
        }

        break;
    }
}










































