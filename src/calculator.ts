let amountInput = document.getElementById("amount-input") as HTMLInputElement;
let personsInput = document.getElementById("persons-input") as HTMLInputElement;
let selectedService = document.getElementById("selected-service") as HTMLInputElement;
let calculateBtn = document.getElementById("calculate-btn") as HTMLElement;
let outputArea = document.querySelector("#output-area") as HTMLElement;


calculateBtn?.addEventListener("click", ()=>{
    calculateTip();
});


let serviceRating = 0;
function getServiceRating (){
    
    if (selectedService.value === "Gut"){
        serviceRating = 20;
    } else if (selectedService.value === "So mittel"){
        serviceRating = 10;
    } else if (selectedService.value === "Mies"){
        serviceRating = 2;
    }
}    

function calculateTip (){
    getServiceRating ();
    outputArea.innerHTML = "";
    let tipAmount = (Number(amountInput.value) / 100) * serviceRating;
    let totalBillAmount = (Number(amountInput.value)) + tipAmount;
    let amountPerPerson = totalBillAmount / Number(personsInput.value) ;
    let billAmountOutput = outputArea?.appendChild(document.createElement("p"));
    billAmountOutput.innerHTML = `Höhe der Rechnung: ${totalBillAmount}`;

    let tipAmountOutput = outputArea?.appendChild(document.createElement("p"));
    tipAmountOutput.innerHTML = `Höhe des Trinkgeldes: ${tipAmount}`;

    let billAmountPerPerson = outputArea?.appendChild(document.createElement("p"));
    billAmountPerPerson.innerHTML = `Betrag pro Person: ${amountPerPerson}`;
};
