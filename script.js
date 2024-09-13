const slider = document.getElementById("slider");

let finalPrice = document.getElementById('price');
let pageViews = document.getElementById('pageViews');
let checkbox = document.getElementById('checkbox');

let monthlyPrice = ["7.00" ,"12.00" ,"16.00", "24.00", "32.00"];
let price;

let isYearlyBillingEnabled = false;

setPrice();
setPageViews(slider.value);

slider.addEventListener('input', function() {
    setPageViews(slider.value);
    setPrice();    
})

checkbox.addEventListener('click', ()=> {
    activeBilling();
    setPrice();    
})


function activeBilling() {
    if(checkbox.checked) {
        isYearlyBillingEnabled = true; 
    } else {            
        isYearlyBillingEnabled = false;                    
    }
}

function setPrice() {
    price = isYearlyBillingEnabled ? calculateYearlyPrice(monthlyPrice[slider.value]) : monthlyPrice[slider.value];
    finalPrice.innerHTML = price;        
}

// 
function setPageViews(inputValue) {
    while(true) {
        if(inputValue == 0) {
            pageViews.innerHTML = "100k";
        }
        else if(inputValue == 1) {
            pageViews.innerHTML = "200k";
        }
        else if(inputValue == 2) {
            pageViews.innerHTML = "400k";
        }
        else if(inputValue == 3) {
            pageViews.innerHTML = "800k";
        }
        else if(inputValue == 4) {
            pageViews.innerHTML = "1600k";
        }
        break;
    }
}

function calculateYearlyPrice(price) {
    let multiply = price * 0.25;
    let result = price - multiply;
    return result.toFixed(2)
}










































