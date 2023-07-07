/*fetch(APIurl)
.then(res => res.json())
.then(json => {arr = json.products; 
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        //console.log(element.title);   
    }
})

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");


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
*/
//завдання 3-4
let APIurl = 'https://dummyjson.com/products/';
let arr;
const container = document.querySelector(".container");
const titles = document.querySelector(".titles");
const mainDiv = document.querySelector('.main-div');

function createProduct(element, condition) {
    if (condition) {
        const product = document.createElement("div");
        const productImg = document.createElement("img");
        const addToCart = document.createElement("img");
        const productName = document.createElement("p");
        const price = document.createElement("p");

        product.classList.add("product");
        productImg.classList.add("image");
        addToCart.classList.add("add-to-card-btn");
        productName.classList.add("product-name");
        price.classList.add("price");

        productImg.src = element.images[0];
        addToCart.src = "./images/Add to cart button (1).svg"
        productName.textContent = element.title;
        price.textContent = element.price;

        product.appendChild(productImg);
        product.appendChild(addToCart);
        product.appendChild(productName);
        product.appendChild(price);

        mainDiv.appendChild(product);
    }   
}
 
//add products
fetch(APIurl)
    .then(res => res.json())
    .then(json => {arr = json.products;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            createProduct(element, element.title==element.title)
        };
    });

//range functional 
const rangeInput = document.getElementById("myRange");
rangeInput.addEventListener("change", function() {
    const rangeValue = rangeInput.value;
    mainDiv.innerHTML = '';          
     fetch(APIurl)
    .then(res => res.json())
    .then(json => {arr = json.products;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            createProduct(element, element.price < rangeValue )
        };
    });
});

//add all cathegories button 
const allCategories = document.createElement("button");
allCategories.innerText = "all categories"
container.appendChild(allCategories);
allCategories.classList.add("category-btn");
allCategories.addEventListener('click', ()=>{
    mainDiv.innerHTML = ""
    fetch(APIurl)
    .then(res => res.json())
    .then(json => {arr = json.products;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            createProduct(element, element.title==element.title)
        };
    });  
})
//add category buttons 
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
            const button = document.createElement("button");
            button.id = "button-" + i;
            button.innerText = categoryElement;
            container.appendChild(button);
            button.classList.add("category-btn");

            button.addEventListener('click', (event) => {
                let category = document.getElementById(event.target.id).textContent; 
                mainDiv.innerHTML = '';                
                fetch(APIurl)
                .then(res => res.json())
                .then(
                    json => {
                    arr = json.products;
            
                    for (let index = 0; index < arr.length; index++) {
                        const element = arr[index];
                        createProduct(element, element.category == category)
                    };
                }); 
            });  
        };
    });


    
