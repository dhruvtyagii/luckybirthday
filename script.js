const dateofBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumberButton = document.querySelector('#check-number');
const outputBox = document.querySelector("#output-box")


checkNumberButton.addEventListener('click', checkNumberIsLucky)

function checkNumberIsLucky(){
    const dob = dateofBirth.value;
    const sum = calculateSum(dob);
    if(dob&&sum)
    compareValues(sum, luckyNumber.value)
    else
    outputBox.innerText = "Please enter both fields";
}

function compareValues(sum, luckyNumber){

    if(sum%luckyNumber===0){
        outputBox.innerText = "Your birthday is lucky";
    }
    else{
        outputBox.innerText = "Your birthday is not lucky";
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    var sum = 0;
    for(let index = 0; index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

