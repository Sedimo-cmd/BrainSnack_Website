
const product = [
{
	id:0,
	image: 'Coke.jpeg',
	title: "Coca cola",
	price: 120,
},
{
	
	id:1,
	image:  'Coke.jpeg',
	title: " Coca cola",
	price: 100,
},
{
	
	id:2,
	image: 'Coke.jpeg',
	title: " Coca cola",
	price: 100,
},
{
	
	id:3,
	image:  'Coke.jpeg',
	title: " Coca cola",
	price: 100,
},
];

const categories = [...new Set(product.map((item)=>{return item}))];
	
	let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>

{
	var {image, title, price} = item;
	return(
		  ` <div class="box">
		     <div class="imgBox">
		        <img class="images" src=${image}></img>
			</div>
		 <div class="bottom">
		<p>${title}</p>
		<h2>$ ${price}.00</h2>`+ "<button onclick='addtobasket("+(i++)+")'>Add to Basket</button>"+ `</div>
		</div>`
		
		)
}
).join('');

var basket =[];

function addtobasket(a)
{
	basket.push({...categories[a]});
	displayBasket();
}


function delElement(a)
{
	basket.splice(a,1);
	displayBasket();
}

function displayBasket(a)
{
	let j =0,total=0;
	document.getElementById('Itemcount').innerHTML=basket.length;
	document.getElementById('total').innerHTML = "$ "+0+".00";
	var data =  "<p id='basket-text'>Basket is empty, buy to power up the brain...</p>" ;
	
	if(basket.length==0)
	{
		document.getElementById('cartItem').innerHTML = data;
	}
	else
	{
		document.getElementById("cartItem").innerHTML = basket.map((items)=>
		{
			var {image,title,price} = items;
		    total = total + price;
			document.getElementById("total").innerHTML = "$ "+ total +".00";
			return(
				`<div class='cart-item'>
				 <div class='row-img'>
				     <img class='rowimg' src=${image}>
				 </div>
					 <p style='font-size:25px;'>${title}</p>
					 <h2 style='font-size:20px;'>$ ${price}.00</h2>`
					 +"<button class='trash' onclick='delElement("+(j++) +")'>Remove</button></div>"
				  );
		}).join('');
	}
}