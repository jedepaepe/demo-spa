const div = document.getElementById('app');
console.log(div);

fetch('http://localhost:3000/api/products')
    .then((response) => {
        return response.json();
    })
    .then((products) => {
        for (let i = 0; i < products.length; i++) {
            div.innerHTML += products[i].id + ' ' + products[i].name + '<br>';
        }
    });

