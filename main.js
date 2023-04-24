//CLOCK
var clock = document.getElementById("dateTime");
function displayTimeDate()
{
  var today = new Date();
  var date = today.getDate() +  "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  console.log(dateTime);
  clock.innerHTML = dateTime;
}
//currency script
function changeCurrency(money) 
{
  var selectedCurrency = document.getElementById("currency").value;
  
  if (selectedCurrency == "cad") 
  {
    money = `CAD$${money.toFixed(2)}`;
  }
  else if (selectedCurrency == "usd")
  {
    
    money = `USD$${(money * 0.79).toFixed(2)}`;
  }
  else
  {
    money = `GBP${(money * 0.59).toFixed(2)}`;
  }
  return money;
  
}
//store item constructor
function Store(id,name,price,quantityOnHand,maximumPerCustomer,category,costOfShipping,reviews,description,image)
  {
  this.id = id; 									//String
  this.name = name;								//String
  this.price = price;								//Number
  this.quantityOnHand = quantityOnHand; //Number
  this.maximumPerCustomer = maximumPerCustomer;	//Number
  this.category = category;						//String
  this.costOfShipping = costOfShipping;			//Number
  this.reviews = reviews;							//Array
  this.description = description;					//String
  this.image = image;								//String
}
//cart constructor
function Cart(id, price, qty, shipping, max) 
{
  this.id = id;									//String
  this.price = price;								//Float
  this.qty = qty;									//Integer
  this.shipping = shipping;						//Float
  this.maximumPerCustomer = max;      //Int    
}
//Global array variables
var aStoreItems = [];
var aCartItems = [];
//preloader function
window.onload = function pageLoader()
{

//all goods
aStoreItems.push(new Store("P001", "Prince of Persia: The Sands of Time (remake)", 49.90,3,2, "Playstation", 2, ["PS4 game"], ["The remake of the classic game loved all the time is returning in a new appearance."], "images/1max (2).jpg"));
aStoreItems.push(new Store("P002", "Elder Ring", 79.90,8,1, "Playstation", 2, ["PS4 game"], "The new game from FromSoftware, which created such games as Dark Souls, Bloodborne and etc. in open-world.", "images/1max (3).jpg"));
aStoreItems.push(new Store("P003", "Horizon: Forbidden West", 79.90,5,1, "Playstation", 2, ["PS4 game"], ["Continue your adventure in the post-apocalyptic world together with Aloy."], "images/1max (4).jpg"));
aStoreItems.push(new Store("P004", "Disco Elysium", 39.90,15,3, "Playstation", 2, ["PS4 game"], ["The story is about a police officer and his companion who has to face difficulties during an investigation in the officer's mind include his issues with alcohol."], "images/1max (5).jpg"));
aStoreItems.push(new Store("P005", "Returnal", 69.90,7,1, "Playstation", 2, ["PS5 game"], ["Next-gen, roguelike, high-budget game. Escape from the ancient civilization, but do not think that it would be easy."], "images/1max (6).jpg"));
aStoreItems.push(new Store("P006", "Demon's Souls", 49.90,7,1, "Playstation", 2, ["PS5 game"], ["Graphics!!!! but the gameplay is the same as many years ago"], "images/1max (7).jpg"));
aStoreItems.push(new Store("X001", "Cyberpunk", 49.90,70,5, "X-box", 2, ["X-box game"], ["I am still believe in CDPR"], "images/2max.jpg"));
aStoreItems.push(new Store("X002", "Stalker 2", 69.90,20,1, "X-box", 2, ["X-box game"], ["NFT in stalker 2? I have just returned my money back"], "images/2max (2).jpg"));
aStoreItems.push(new Store("X003", "Crusader Kings 3", 63.90,20,2, "X-box", 2, ["X-box game"], ["Interesting, but you should love games like that one to understand how to play exactly. A bit complicated."], "images/2max (3).jpg"));
aStoreItems.push(new Store("X004", "HALO: Infinite", 79.90,30,1, "X-box", 2, ["X-box game"], ["This game has buried the competitors as bf 2024 and CoD!"], "images/2max (4).jpg"));
aStoreItems.push(new Store("X005", "Forza Horizon 5", 79.90,28,1, "X-box", 2, ["X-box game"], ["I do not really love to play racing games, but this one is gonna be my exception"], "images/2max (5).jpg"));
aStoreItems.push(new Store("N001", "Animal Crossing", 79.90,74,2, "Nintendo", 2, ["Nintendo game"], ["Last update has made this game more interesting"], "images/3max (1).jpg"));
aStoreItems.push(new Store("N002", "MarioKart Delux 8", 79.90,64,2, "Nintendo", 2, ["Nintendo game"], ["AMAZING!!!! 12 out of 10!!! WWWWOOOOOWWWW!"], "images/3max (2).jpg"));
aStoreItems.push(new Store("N003", "Star Wars: The Skywalker Saga", 79.90,4,1, "Nintendo", 2, ["Nintendo game"], [""], "images/3max (4).jpg"));
aStoreItems.push(new Store("N004", "Luigi's Mansion 3", 79.90,45,5, "Nintendo", 2, ["Nintendo game"], ["quite fun"], "images/3max.jpg"));
aStoreItems.push(new Store("N005", "Mario and Rabbits: Sparks of Hope", 79.90,3,1, "Nintendo", 2, ["Nintendo game"], [""], "images/3max (5).jpg"));
aStoreItems.push(new Store("N006", "Pokemon Legends: Arceus", 79.90,5,1, "Nintendo", 2, ["Nintendo game"], [""], "images/3max (7).jpg"));
aStoreItems.push(new Store("PC001", "World of Warcraft: Shadowland", 49.90,58,3, "PC", 2, ["PC game"], ["Jizz, Where is Arthas???"], "images/4max (2).jpg"));
aStoreItems.push(new Store("PC002", "DOOM: Eternal", 39.90,72,3, "PC", 2, ["PC game"], ["fresh demons' meat around, awesome!!!"], "images/4max (3).jpg"));
aStoreItems.push(new Store("PC003", "Jedi: Fallen Order", 39.90,25,3, "PC", 2, ["PC game"], ["Almost a dark souls kinda game, but in a star wars universe and of course easier"], "images/4max (4).jpg"));
aStoreItems.push(new Store("PC004", "Destiny 2", 19.90,26,3, "PC", 2, ["PC game"], ["MMO but shooter, a cool combination"], "images/4max (5).jpg"));
aStoreItems.push(new Store("PC005", "Need for Speed: Payback", 19.90,6,3, "PC", 2, ["PC game"], ["Boring, Underground 2 was a much better"], "images/4max (6).jpg"));

  displayTimeDate();
  createItem(aStoreItems);
  showCartItems();
}
//creting and showing whole items
function createItem(array) 
{  
  var goods = document.querySelector(".allGames");
  goods.innerHTML = "";

  for (let i = 0; i < array.length; i++)
  {
    var div = document.createElement("div");
    div.classList = "item";

    var spanId = document.createElement("span");
    spanId.innerText = `Game ID: ${array[i].id}\n`;
    div.append(spanId);
    
    var spanName = document.createElement("span");
    spanName.innerText = `Name: ${array[i].name}\n`;
    div.append(spanName);

    var spanPrice = document.createElement("span");
    spanPrice.innerText = `Price: ${changeCurrency(array[i].price)} \n`;
    div.append(spanPrice);

    var spanQuantityOnHand = document.createElement("span");
    spanQuantityOnHand.innerText = `Items in shop: ${array[i].quantityOnHand}\n`;
    div.append(spanQuantityOnHand);

    var spanMaximumPerCustomer = document.createElement("span");
    spanMaximumPerCustomer.innerText = `Quantity per customer: ${array[i].maximumPerCustomer}\n`;
    div.append(spanMaximumPerCustomer);

    var tempImg = document.createElement("img");
    tempImg.src = `${array[i].image}`;
    div.append(tempImg);
    goods.append(div);
  }
}
//adding the purchases into the cart
function addToCart() {
  var good = document.getElementById("itemId").value;
  var amountItems = parseInt(document.getElementById("itemQuantity").value);
  var product;
  var id;

  for (var i = 0; i < aCartItems.length; i++) {

      if (good == aCartItems[i].id) {
          product = aCartItems[i];
      }
  }

  for (var x = 0; x < aStoreItems.length; x++) {
      if (good == aStoreItems[x].id) {
          id = x;
      }
  }

  if (product) {
      if (amountItems <= product.maximumPerCustomer && product.qty != product.maximumPerCustomer) 
      {
        if ((product.qty + amountItems) <= product.maximumPerCustomer) {
          product.qty += amountItems;
          aStoreItems[id].quantityOnHand -= amountItems;
        } else {
          product.qty = product.maximumPerCustomer;
          aStoreItems[id].quantityOnHand -= product.maximumPerCustomer - amountItems;
        }
      }
  } else 
  {
      
    if (id !== undefined) 
    {
      if ((amountItems) <= aStoreItems[id].maximumPerCustomer) 
      {
        aCartItems.push(new Cart(aStoreItems[id].id, aStoreItems[id].price, amountItems,
        aStoreItems[id].costOfShipping, aStoreItems[id].maximumPerCustomer));
        aStoreItems[id].quantityOnHand -= amountItems;
      } else 
      {
        aCartItems.push(new Cart(aStoreItems[id].id, aStoreItems[id].price, aStoreItems[id].maximumPerCustomer,
        aStoreItems[id].costOfShipping, aStoreItems[id].maximumPerCustomer));
        aStoreItems[id].quantityOnHand -= aStoreItems[id].maximumPerCustomer;
      }
    } else {
        alert('No id found');
    }
  }
  createItem(aStoreItems);
  showCartItems();
}
//filter by category (click on the pictures)
//to show all click on category bar
function filter(category) 
{
  var z = 0;
  var aFilter = [];

  while (z < aStoreItems.length)
  {
    if ( aStoreItems[z].category == category)
    {
      aFilter.push(aStoreItems[z]);
    }
    z++;
  }
  createItem(aFilter);
}
//introduce cart items into the devision 
function showCartItems() 
{
  var outPut = document.querySelector("#cartOutput");
  var tax = "13%";
  
  outPut.innerText = "| ID | Price | Qty | Shipping | Tax | Total |";
  
  if (aCartItems.length == 0)
  (
    outPut.innerText += "\n No items in the cart, add items in the cart"
  )
  else
  {
    for(var i = 0; i < aCartItems.length; i++)
    {
      var p = document.createElement("p");
      var span = document.createElement("span");
      
      p.innerText = `${aCartItems[i].id} | ${aCartItems[i].price} | ${aCartItems[i].qty} | ${aCartItems[i].shipping} | ${tax} | ${changeCurrency(parseFloat(((aCartItems[i].price * aCartItems[i].qty) * 1.13) + aCartItems[i].shipping))}`
      outPut.append(p);
    }
  }
}
//alert details of games
function itemDitails() 
{
  var itemID = document.getElementById("itemId").value;

  for(var index = 0; index < aStoreItems.length; index++)
  {
    if (aStoreItems[index].id == itemID)
    {
      window.alert 
      (
        `Item Details:
        \n ID: ${aStoreItems[index].id} 
        \n Name: ${aStoreItems[index].name}
        \n Price: ${aStoreItems[index].price}
        \n Qty Available: ${aStoreItems[index].quantityOnHand}
        \n Max Per Customer: ${aStoreItems[index].maximumPerCustomer}
        \n Cost of Shipping: ${aStoreItems[index].costOfShipping}
        \n Description: ${aStoreItems[index].reviews}
        \n Reviews: ${aStoreItems[index].description}`
      )
    }
    else if (itemID == false)
    {
      window.alert("Please, provide appropriate ID!")
      break;
    }
  }
}
//review function
function addReview() 
{
  var aRev = prompt("Write a review here");
  var gameID = document.getElementById("itemId").value;

  for(z = 0; z < aStoreItems.length; z++)
  {
    if (gameID == aStoreItems[z].id)
    {
      aStoreItems[z].description.push(` | ${aRev}`);
      window.alert("Thanks for your review!");
    }
    else if (gameID == false || aRev == false)
    {
      window.alert("Provide a valid Game ID or write a review!");
      break;
    }
  }
}
//removing from cart
function removeFromCart() 
{
  var itemToRemove = document.getElementById("itemId").value;
  var qtyToRemove = document.getElementById("itemQuantity").value;
  qtyToRemove = parseInt(qtyToRemove);
  var id;

  for (var x = 0; x < aStoreItems.length; x++) {
    if (itemToRemove == aStoreItems[x].id) 
    {
        id = x;
    }
  }
  for (var v = 0; v < aCartItems.length; v++)
  {
    if (aCartItems[v].id == itemToRemove && aCartItems[v].qty > qtyToRemove)
    {
      aCartItems[v].qty -= qtyToRemove;
      aStoreItems[id].quantityOnHand += qtyToRemove; 
    }
    else if (aCartItems[v].qty <= qtyToRemove && aCartItems[v].id == itemToRemove)
    {
      aStoreItems[id].quantityOnHand += aCartItems[v].qty; 
      aCartItems.splice(v,1);
    }
  }
  showCartItems();
  createItem(aStoreItems);
}