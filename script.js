const slider = document.getElementById("slider");
const output = document.getElementById("price");
let checkbox = document.querySelector('.switch input');
const numberPagesViews = document.getElementById('pageViews');

/* slider price */
output.innerHTML = "$" + slider.value;
numberPagesViews.innerHTML = (6 * slider.value) + "k";

slider.oninput = function() {
    output.innerHTML = "$" + this.value;
    numberPagesViews.innerHTML = (6 * this.value) + "k";
}

/* monthly and yearly billing checkbox */
let toggleCheckbox = () => {    
    if(checkbox.checked === true) {
        slider.oninput = function() {
            output.innerHTML = "$" + this.value / 4;
            numberPagesViews.innerHTML = (7.5 * this.value) + "k";
        }        
    }
}





