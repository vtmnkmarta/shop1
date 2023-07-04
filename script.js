let APIurl = 'https://dummyjson.com/products/';

let arr;

fetch(APIurl)
.then(res => res.json())
.then(json => {arr = json.products; 
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        //console.log(element.title);   
    }
})

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const container = document.querySelector(".container");
const titles = document.querySelector(".titles");

btn1.addEventListener("click", ()=>{
    fetch(APIurl)
    .then(res => res.json())
    .then(json => {arr = json.products; 
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element.price < 50) {
                console.log(element.title);
            }
             
        }
    })
})


btn2.addEventListener("click", ()=>{
    fetch(APIurl)
    .then(res => res.json())
    .then(json => {arr = json.products; 

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element.price > 50) {
               console.log(element.title);
            }   
        }
    })
})

//завдання 3-4
fetch(APIurl)
    .then(res => res.json())
    .then(json => {arr = json.products;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            const product = document.createElement("p");
            product.innerText = element.title;
            titles.appendChild(product);
        }
    });
const rangeInput = document.getElementById("myRange");
rangeInput.addEventListener("change", function() {
    const rangeValue = rangeInput.value;
    titles.innerHTML = ""
    fetch(APIurl)
    .then(res => res.json())
    .then(json => {arr = json.products;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element.price < rangeValue){
                const sortProduct = document.createElement("p")
                sortProduct.innerText = element.title + " " + element.price
                titles.appendChild(sortProduct);
                container.appendChild(titles);
            }
        };
    });
});

// завдання 5
arrCategory =[];
fetch(APIurl)
    .then(res => res.json())
    .then(json => {arr = json.products;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (!arrCategory.includes(element.category)) {
                arrCategory.push(element.category)
            };
        }
        for (let i = 0; i < arrCategory.length; i++) {
            const categoryElement = arrCategory[i]
            const par = document.createElement("p");
            par.innerText = categoryElement;
            container.appendChild(par);
        }
    })
    
    
    
