let inputVal = document.getElementById('deg');
var deg_type = document.querySelectorAll('input[name = "deg_type"]')
let converterBtn = document.getElementById('converterBtn');
let resultcont = document.getElementById('result');
converterBtn.addEventListener('click', () => {
    let val = inputVal.value;
    if(val == ""){
      alert("Enter any number")
      return false;
    }
    else if (isNaN(val)) {
        alert("Enter Numeric value only")
        return false;
    } 
    else {
        let deg_type_val;
        for (const x of deg_type) {
            if (x.checked) {
                deg_type_val = x.value;
                console.log(x.value)
                break;
            }
        }
            if (deg_type_val == "celsius") {
                var result = (parseFloat(val) * 9 / 5) + 32;
                resultcont.innerHTML = `${result}°F`
            }
            else if(deg_type_val == "fahrenheit")  {
                var result = (parseFloat(val) - 32) / 1.8;
                resultcont.innerHTML = `${result}°C`
            }
        
    }

    })