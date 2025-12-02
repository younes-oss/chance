const products = [
    { id: 1, name: "Stylo", price: 5 },
    { id: 2, name: "Cahier", price: 20 },
    { id: 3, name: "Règle", price: 10 }
];

const productList = document.getElementById("productList");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");

console.log(productList);

function displayProducts(products) {

    productList.innerHTML = ""
    products.forEach(prod => {
        console.log(prod);

        const div = document.createElement("div");
        div.innerHTML = `name : ${prod.name} --- Prix : ${prod.price} DH `
        productList.appendChild(div);

    })

}

function ajouterProduct(nameValue, prixValeur) {

    const product = {
        id: Date.now(),
        name: nameValue,
        price: prixValeur
    };



    products.push(product);

}

addBtn.addEventListener('click', () => {

    console.log("click")
    const inputNom = document.getElementById("nameInput").value;
    const inputPrix = document.getElementById("priceInput").value;

    console.log(inputPrix);


    ajouterProduct(inputNom, inputPrix);
    displayProducts(products);

})

searchInput.addEventListener('input', () => {
    productList.innerHTML = "";
    const searchValue = searchInput.value.toLowerCase();
    console.log(searchValue);

    const filtered = products.filter(prod =>
        prod.name.toLowerCase().includes(searchValue)
    );

    if (filtered) {
        filtered.forEach(prod => {
            const div = document.createElement("div");
            div.textContent = prod.name;
            productList.appendChild(div);
        })
            

    }else

        displayProducts(products);


})

displayProducts(products);