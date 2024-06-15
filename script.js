let billInput = document.getElementById('bill-input');
let fivePercentages = document.getElementById('five-percentages');
let tenPercentages = document.getElementById('ten-percentages');
let fifteenPercentages = document.getElementById('fifteen-percentages');
let twentyFive = document.getElementById('twentyfive-percentages');
let fifty = document.getElementById('fifty-percentages');
let customDiscount = document.getElementById('custom-discount');
let personInput = document.getElementById('person-input');
let personTip = document.getElementById('person-tip');
let totalDiscount = document.getElementById('total-discount');
let tipEls = document.querySelectorAll("input[name='tip']")

billInput.addEventListener('input', (e)=>{
    const bill = e.currentTarget.valueAsNumber;
    totalDiscount.innerText = `${bill}`
})
