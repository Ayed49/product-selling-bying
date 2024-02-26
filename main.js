function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
// update case total
    const productTotal = document.getElementById(product + '-total');
     productTotal.innerText = productNumber * price;
   
}


// update mobile plus
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
})

// update phone minus
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})

// case plus update
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber( 'case', 59, true);
})

// case-minus update
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})