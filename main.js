function fcCount(isIncrease) {
    const inputArea = document.getElementById('fc-input-area');
    const inputValue = parseInt(inputArea.value);
    let addCount = inputValue;
    if (isIncrease == true) {
        addCount = inputValue + 1;
    }
    if (isIncrease == false && addCount > 0) {
        addCount = inputValue -1;
    }
    inputArea.value = addCount;
    calculateTotal()
};
function eCount(isIncrease) {
    const inputArea = document.getElementById('e-input-area');
    const inputValue = parseInt(inputArea.value);
    let addCount = inputValue;
    if (isIncrease == true) {
        addCount = inputValue + 1;
    }
    if (isIncrease == false && addCount > 0) {
        addCount = inputValue -1;
    }
    inputArea.value = addCount;
    calculateTotal()
};
function calculateTotal() {
    const fcTotal = document.getElementById('fc-input-area');
    const fcTotalNum = parseInt(fcTotal.value);

    const eTotal = document.getElementById('e-input-area');
    const eTotalNum = parseInt(eTotal.value);

    const subTotal = fcTotalNum * 150 + eTotalNum * 100;
    document.getElementById('subtotal-amount').innerText = subTotal

    const vat = subTotal * 0.1;
    document.getElementById('vat-amount').innerText = vat;

    const grandTotal = subTotal + vat;
    document.getElementById('grand-total').innerText = grandTotal;
};
const submitButton = document.getElementById('submit-button').addEventListener('click', function () {
    const cardSection = document.getElementById('card-section');
    cardSection.style.display = "none";
    document.getElementById('congratulations').style.display = "block";
});