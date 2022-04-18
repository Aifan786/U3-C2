// Store cart items in local storage with key: "items"

const url = `https://grocery-masai.herokuapp.com/items`

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log("res:", res)
        console.log("res:",res.data)
        collectData(res.data)
    })
    .catch(function(err){
        console.log("err:", err)
    });

function collectData(data){

    var products = JSON.parse(localStorage.getItem("items"))||[];

    var container = document.getElementById("items")
    var button = document.getElementById("add_to_cart")
    var count = document.getElementById("item_count")
    var i=0;
    data.map(function(el,index){
        
        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;
        image.setAttribute("class","size")

        let name = document.createElement("h2");
        name.innerText = el.name;
        name.setAttribute("class","align")

        let price = document.createElement("h4");
        price.innerText = el.price;
        price.setAttribute("class","prc")

        let btn = document.createElement("button");
        btn.innerText = "Add to cart";
        btn.setAttribute("class","align")
        btn.addEventListener("click", function(){
            addItem(el,index);
        })

        box.append(image,name,price,btn)
        container.append(box);

    })

    function addItem(el,index){

        products.push(el);
        i++;
        document.querySelector("p").innerText = i
        localStorage.setItem("items", JSON.stringify(products))

    }

}
