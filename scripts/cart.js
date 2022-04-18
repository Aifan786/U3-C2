
var show = JSON.parse(localStorage.getItem("items"))

var store = document.getElementById("cart")

var value = document.getElementById("cart_total")
var total = show.reduce(function(sum,el){

    return sum+Number(el.price);

},0)
value.innerText = `${total}`

show.map(function(el,index){

    var box = document.createElement("div")

    let image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class","size")

    let name = document.createElement("h2");
    name.innerText = el.name;
    name.setAttribute("class","align")

    let price = document.createElement("h4");
    price.innerText = el.price;
    price.setAttribute("class","prc")

    let rmv = document.createElement("button");
    rmv.innerText = "Remove";
    rmv.setAttribute("id","remove")
    rmv.addEventListener("click",function(){
        removeItem(el,index)
    })

    box.append(image,name,price,rmv)
    store.append(box);

})

function removeItem(el,index){

    show.splice(index,1)
    window.location.reload();
    localStorage.setItem("items", JSON.stringify(show))
}