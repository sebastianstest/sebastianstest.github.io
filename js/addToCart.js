
mybutton = document.getElementById("addToCart");
const elOutput2 = document.getElementById("productsNameAndPrice");
const elOutput1 = document.getElementById("totalPrice");


function addToCart(id) {
    if (sessionStorage.getItem('productIDinCart')) {
        let existing = sessionStorage.getItem('productIDinCart');
        let newValue = existing + "," + id;
        sessionStorage.setItem("productIDinCart", newValue);
    } else {
        sessionStorage.setItem("productIDinCart", id);
    }
    window.alert("product was added!")
}

function deleteCart(){
    sessionStorage.clear();
    localStorage.clear();
    location.reload();
}

function deleteCartItem(id){
    let stringWithProductId = sessionStorage.getItem('productIDinCart');
    var arrayWithProductsId = stringWithProductId.split(",");
    //Remove specific item
    var arrayWithoutId = removeItem(arrayWithProductsId, id);
    //String  back to string
    var stringToSessionStorage = arrayWithoutId.join(",");
    // overwrite chart again (setitem)
    sessionStorage.setItem("productIDinCart", stringToSessionStorage);

}

function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            return array;
        }
    }
}

function calculateCart(){

    let stringWithProductId = sessionStorage.getItem('productIDinCart');
    let arrayFromCart = stringWithProductId.split(",");

    let singleProduct = 0;
    var totalPrice = 0;

    console.log("ett")

    // Test first item in cart
    for (k = 0; k < arrayFromCart.length; k++) {
        //Test first item in cart against all products
        for (i = 0; i < skinCareData.length; i++) {
                // if
            if (arrayFromCart[k] == skinCareData[i].productID ) {
                singleProduct = skinCareData[i].price;
                totalPrice = totalPrice + singleProduct;
                sessionStorage.setItem("totalSum", totalPrice);
            }
        }
    }
}


function listOfProductsInCart(){
    let stringWithProductId = sessionStorage.getItem('productIDinCart');
    let arrayFromCart = stringWithProductId.split(",");

    let singleProduct = 0;
    let totalPrice = 0;

    let singleProductNameAndCost = "<br> ";
    let allProductsNameAndCost = " ";


    // Test first item in cart
    for (k = 0; k < arrayFromCart.length; k++) {
        //Test first item in cart against all products
        for (i = 0; i < skinCareData.length; i++) {

            if (arrayFromCart[k] == skinCareData[i].productID ) {
                singleProduct = skinCareData[i].price;
                totalPrice = totalPrice + singleProduct;
                sessionStorage.setItem("totalSum", totalPrice);

                singleProductNameAndCost =  skinCareData[i].title + ", Price:" + skinCareData[i].price +"sek"+ " <br> ";
                allProductsNameAndCost = allProductsNameAndCost + singleProductNameAndCost;
            }
        }
    }

    elOutput2.textContent = allProductsNameAndCost;
    elOutput1.textContent = "Total Sum: " + sessionStorage.getItem("totalSum") + "kr for all products in cart";
}

// Not the most gorgeous solution..

var skinCareData =  [{
    "productID": "S0001",
    "category": "skinCare",
    "src": "skinCare/product1.jpg",
    "hyperLink": "productSinglePage.html",
    "classImg": "product_img",

    "title": "Petitgrain Reviving Body Gel – 150mL",
    "infoText": "En efter-sol återfuktare förstärkt med Aloe Vera och Panthenol för att mjukna och lugna huden. Grapefrukt och Citron att får huden att svalna, balanseras och 'väcka' huden. ",
    "ingredients": " Grapefruktskal, Panthenol, hassel ",
    "arom": " Citrus, fräsch, grön ",
    "price": 330
},
    {
        "productID": "S0002",
        "category": "skinCare",
        "src": "skinCare/product2.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "Violet Leaf Hair Balm – 60mL",
        "infoText": "En formande kräm förstärkt med närande fetter och återfuktande nötoljaxtrakt som mjukar och formar håret. ",
        "ingredients": "Camellia nöt, morotsolja, Lavendel ",
        "arom": "Grön, jordnärlig, varm ",
        "price": 290
    },
    {
        "productID": "S0003",
        "category": "skinCare",
        "src": "skinCare/product3.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "Shine – 25mL",
        "infoText": "En silikonfri återfuktande olja som stärker och mjukar upp hår, levererar essentiella fettsyror och ger släthet och glans utan uppbyggnad eller oljiga rester.  ",
        "ingredients": " Boragefrö, Jojoba Frö, Petitgrain ",
        "arom": "Grön, citrus, blommig ",
        "price": 350
    },
    {
        "productID": "S0004",
        "category": "skinCare",
        "src": "skinCare/product4.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "Volumising Shampoo – 500mL",
        "infoText": "En upplyftande formula förstärkt med Polyquaternium 67 för att hjälpa till att separera håraxlarna för volym och kropp, medan botaniska oljor levererar hydrering och glans. ",
        "ingredients": "Fänkålfrön, Pepparmyntsblad, Rosemaryblad ",
        "arom": "Mint, örtartad ",
        "price": 500
    },
    {
        "productID": "S0005",
        "category": "skinCare",
        "src": "skinCare/product5.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "Herbal Deodorant Roll-On – 50mL",
        "infoText": "Ett alkoholfritt, roll-on-alternativ till Herbal Deodorant spray. Innehåller zink Ricinoleate, Wasabi-extrakt och en komplementär blandning av eteriska oljor för att minska och maskera obehaglig lukt. ",
        "ingredients": "Sage Leaf, Zink Ricinoleate, Wasabi Extrakt ",
        "arom": "Herbaceous, camphorous, fresh ",
        "price": 260
    },
    {
        "productID": "S0006",
        "category": "skinCare",
        "src": "skinCare/product6.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "In Two Minds Facial Hydrator – 60mL",
        "infoText": "En snabbt absorberande formula som ger lättviktig återfuktning med en matt finish, perfekt för blandad hudtyp.\n ",
        "ingredients": "Hasselnöt, Sandalträ, Andiroba Seed ",
        "arom": "fresh ",
        "price": 670
    },
    {
        "productID": "S0007",
        "category": "skinCare",
        "src": "skinCare/product7.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "In Two Minds Facial Toner – 200mL",
        "infoText": "En mildt sammandragande formulering för att slutföra rengöringsprocessen samtidigt som den lugnande och balanserar huden.\n ",
        "ingredients": "Witch Hazel, Niacinamide, Chamomile Bud ",
        "arom": "Soothed, balanserad, uppdaterad ",
        "price": 330
    },
    {
        "productID": "S0008",
        "category": "skinCare",
        "src": "skinCare/product8.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "Hwyl Eau de Parfum 50ml",
        "infoText": "En spännande doft med inslag av excentricitet. Påminner om en Hinoki skog med rökiga noter och subtila kryddor. Eau de Parfum för män och kvinnor. ",
        "ingredients": "Cypress, Frankincense, Vetiver ",
        "arom": "Rökig, Träig ",
        "price": 1290
    },
    {
        "productID": "S0009",
        "category": "skinCare",
        "src": "skinCare/product9.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "Nurturing Conditioner 500ml",
        "infoText": "En närande behandling förstärkt med sheasmör och vitamin E som hydratiserar och tampar krusigt hår för att lämna den blank och anmärkningsvärt mjuk. ",
        "ingredients": "Tokoferol, Söt mandel, sheasmör ",
        "arom": "Mint, Örtig, Nötig ",
        "price": 430
    },
    {
        "productID": "S00010",
        "category": "skinCare",
        "src": "skinCare/product10.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "Immediate Moisture Facial Hydrosol 60 mL",
        "infoText": "Ett uppfriskande, rosdoftande ansiktsspray för att återuppliva hud och sinnen. ",
        "ingredients": "Rosenblad, bergamott & kamomill ",
        "arom": "Rosenblad, uppfriskande ",
        "price": 330
    },
    {
        "productID": "S00011",
        "category": "skinCare",
        "src": "skinCare/product11.jpg",
        "hyperLink": "productSinglePage.html",
        "classImg": "product_img",

        "title": "Lucent Facial Concentrate 60 mL",
        "infoText": "Ett lätt serum med mattande effekt som lugnar, balanserar och stärker hyn med hjälp av vitamin C och B3. Ideal som daglig vitaminboost för normal till torr hy eller som fristående återfuktande produkt för den med fet hy. ",
        "ingredients": " Water (Aqua), Glycerin, Sodium Ascorbyl Phosphate, Niacinamide, PEG-40 Hydrogenated Castor Oil, Phenoxyethanol, Citric Acid, Xanthan Gum.",
        "arom": "Mild, inslag av ros Produktens konsistens: Vattenbaserat serum  ",
        "price": 1030
    }
]





























