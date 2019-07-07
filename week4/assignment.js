
-----Assignment 1: Callback Function--------------------------

function delayedResult(n1, n2, delayTime, callback){
  let result = n1 + n2;
  setTimeout(callback, delayTime, result);
}

delayedResult(4, 5, 3000, function(result){
  console.log(result);
});

delayedResult(-5, 10, 2000, function(result){
  window.alert(result);
});

-----Assignment 2: Callback Function and Advanced HTML DOM-----
function ajax(src, callback){
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function (){
    const products = JSON.parse(xhr.responseText);
    let productInformation ="";
    if(xhr.readyState == 4 && xhr.status === 200){
      for(let i = 0; i < 3; i += 1){
        productInformation += `<li>name : ${products[i].name}</li>`;
        productInformation += `<li>price : ${products[i].price}</li>`;
        productInformation += `<li>description : ${products[i].description}</li>`;
      callback(productInformation);
      }
    }
  };
  xhr.open('GET', 'src');
  xhr.send();
}
function render(data){
  let p = document.querySelector('.productList');
  let ul = document.createElement('ul');
  ul.innerHTML = data;​
  p.appendChild(ul);​
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
  render(response);
});
