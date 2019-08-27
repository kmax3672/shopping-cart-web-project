<!-- hide script from old browsers

var xmlhttp;
function loadDatabase(url, cfunc){
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=cfunc;  
	xmlhttp.open("GET",url,true);
	xmlhttp.send();

}


function dailyUpdate(){


	loadDatabase("getProducts.php", function()
		{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var obj = JSON.parse(xmlhttp.responseText);	
			var img;
			var bDiv;
			var fieldset;
			var txtDiv;
			var imgDiv;
			var pid;
			var bContainer = document.getElementById("block_container");
			
			for(i=0; i<obj.length; i++){
				pid = obj[i].pid;
			
			
				fieldset = document.createElement("fieldset");
				fieldset.className = "fblocks";
				fieldset.align = 'center';
			
				bDiv = document.createElement('div');
				bDiv.id = 'ublock'+i;
				bDiv.className = 'ublock';
				
				imgDiv = document.createElement('div');
				imgDiv.id = 'uimg'+i; 
				imgDiv.className = 'uimg';
				
				var bottomDiv = document.createElement('div');
				bottomDiv.id = 'ubttom'+i;
				bottomDiv.className = 'ubottom';	

				
				var button = document.createElement('span');
				button.innerHTML = '<button id="add' + i +'" onclick="addProduct(' + pid + ');">Add to Cart</button>';
				
				
				/*
				var button = document.createElement("input");
				button.setAttribute("type", "button");
				button.setAttribute("value", "Add to Cart");
				*/
								
				txtDiv = document.createElement('div');
				txtDiv.id = 'uinner'+i; 
				txtDiv.className = 'utxt';
				
				bottomDiv.appendChild(txtDiv);
				bottomDiv.appendChild(button);
				
				bDiv.appendChild(imgDiv);
				bDiv.appendChild(bottomDiv);
				
				fieldset.appendChild(bDiv)
				bContainer.appendChild(fieldset);
				//bContainer.appendChild(bDiv);
				
			
				img = new Image();
				img.height = "200";
				img.width = "200";
				img.style = "cursor:pointer";
				img.setAttribute("onclick", "showImage('"+ obj[i].Picture +"');");				
				img.onload = createOnloadHandler(imgDiv, txtDiv, img, obj[i]);
				img.src = obj[i].Picture;
				
			}	
			

			}
		});

	
	
}

function createOnloadHandler(iDiv, tDiv, image, elem){
	
	return function(){
		
		var comp = elem.Company;
		var model = elem.Model;
		var pr = elem.Price;
		var parF = parseFloat(pr);
		if( parF % 1 == 0){
			var price = "$" + parF + ".00";
		}
		else{
			var price = "$" + parseFloat(pr);
		}
		var txt = comp + " " + model + "<br>" + price;
		iDiv.appendChild(image);
		tDiv.innerHTML = txt;

		
	};
	
}



function searchProducts(){




}


function addProduct(pid){

	var q = "pid="+pid;


	loadDatabase("addProduct.php?"+q , function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		alert("Product purchased!");

		}
	});


}



function loadCart(){

	loadDatabase("getCart.php", function()
		{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var cart = JSON.parse(xmlhttp.responseText);	
			
			var obj = cart[cart.length-1];
			
			var img;
			var bDiv;
			var fieldset;
			var txtDiv;
			var imgDiv;
			var pid;
			var bContainer = document.getElementById("block_container");
			
			for(i=0; i<obj.length; i++){
				pid = obj[i].pid;
			
			
				fieldset = document.createElement("fieldset");
				fieldset.className = "fblocks";
				fieldset.align = 'center';
			
				bDiv = document.createElement('div');
				bDiv.id = 'ublock'+i;
				bDiv.className = 'ublock';
				
				imgDiv = document.createElement('div');
				imgDiv.id = 'uimg'+i; 
				imgDiv.className = 'uimg';
				
				var bottomDiv = document.createElement('div');
				bottomDiv.id = 'ubttom'+i;
				bottomDiv.className = 'ubottom';	

				
				var button = document.createElement('span');
				button.innerHTML = '<button id="add' + i +'" onclick="removeProduct(' + pid + ');">Remove from Cart</button>';
				
								
				txtDiv = document.createElement('div');
				txtDiv.id = 'uinner'+i; 
				txtDiv.className = 'utxt';
				
				bottomDiv.appendChild(txtDiv);
				bottomDiv.appendChild(button);
				
				bDiv.appendChild(imgDiv);
				bDiv.appendChild(bottomDiv);
				
				fieldset.appendChild(bDiv)
				bContainer.appendChild(fieldset);
				
				
			
				img = new Image();
				img.height = "200";
				img.width = "200";	
				img.style = "cursor:pointer";
				img.setAttribute("onclick", "showImage('"+ obj[i].Picture +"');");	
				img.onload = createOnloadHandler(imgDiv, txtDiv, img, obj[i]);
				img.src = obj[i].Picture;
				
			}	
			

			}
		});



}

function removeProduct(pid){

	var q = "pid="+pid;


	loadDatabase("deleteProduct.php?"+q , function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		location.reload();
		alert("Product removed!");
	
		}
	});


}

function addElements(){



}



// stop hiding -->
