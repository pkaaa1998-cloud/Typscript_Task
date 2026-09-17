
//---------------customer informaction-----------------------------//



let customername = "praveenkumar";
const customerid = 202;
let membershiptype = "platinum,gold,silver";
console.log(customername);
console.log(customerid);
console.log(membershiptype);
//-----------------product informaction---------------------------//

let ProductName ="computer";
let ProductCategory = "elatranics";
let ProductPrice = 30000;
let QuantityPurchased = 1;
let ProductStockAvailability = 10;
console.log(ProductName);
console.log(ProductCategory);
console.log(ProductPrice);
console.log(QuantityPurchased);
console.log(ProductStockAvailability);

//-------------------veriables for billing-----------------------//
let subtotal=0;
let membershipDiscount=0;
let Gstamount=0;
let totalDiscount=0;
let couponDiscount=0;
let delivarycharge=0;
let finalBillAmount=0;


//-----------------------switch membership discount------------------------------------//


 switch(membershiptype){
   case"platinum":
   console.log("membership:platinum-20% Discount");
   break;
   case"gold":
   console.log("membership:gold-15% Discount");
   break;
   case"silver":
   console.log("membership:silver-10% Discount");
   break;
   default:
       console.log("membership:Regular- No Discount");  
 }

//-----------------------member ship Discount-----------------------------------//

if (membershiptype === "Platinum") {
    console.log(membershipDiscount=subtotal*20/100);
}
else if (membershiptype === "Gold") {
    console.log(membershipDiscount=subtotal*15/100);
}
else if (membershiptype === "Silver") {
    console.log(membershipDiscount=subtotal*10/100);
}
else {
    console.log(membershipDiscount=0);
}
//--------------------------coupun code discount---------------------------//


let couponcode: string = "pk123";
let enterdcoupon="pk123";

if (enterdcoupon === "couponcode") {couponDiscount=subtotal*5/100;
 console.log("coupon is valid");   
console.log("coupon Discount:$"+couponDiscount)}
else(couponDiscount===0)
{console.log("invalid coupon");

}


//--------------product availability-------------------//
let orderstatus="";
if (ProductStockAvailability > 0) {
    console.log("continue purchase");
}
else { console.log("out of stock"); }
orderstatus="order confored";

//-----------------------calculate subtotal----------------------------------------//


subtotal = ProductPrice*QuantityPurchased;
console.log("subtotal:"+subtotal);

//-------------------------------taxiable amount------------------------------//
let taxiableamount=subtotal-totalDiscount;

//---------------------gst calculation----------------------------------------//

const Gstrate :number=18;
let gstamount=taxiableamount*Gstrate/100;
console.log(gstamount);

//-----------------------amount before delivery------------------------------------------//
let amountbeforedelivary =taxiableamount+gstamount;

//------------------------free delivery amount-----------------------------------//
/* delivarycharge=amountbeforedelivary>=2000?0:150; */
//---------------------------delivery states-------------------------------------//
/*  delivarycharge=amountbeforedelivary>=2000?0:150;
let deliverystatus=(deliveryCharge>=2000)?"freedelivery":"deliverycharge 150"; */

//------------------------------discount subtotal-------------------------------//
let discountsubtotal = ("subtotal-discountamount");
console.log(discountsubtotal);

let finalbillAmount = ("discount subtotal+gstamount");
console.log(finalBillAmount);
const deliveryCharge: any = finalbillAmount>= 2000 ? "free delivery(0)" : "otherwise deliverycharge(150)";
console.log(deliveryCharge);


console.log(`
    =================================================================
                         E-commerce Ivvoice
    =================================================================
    
    customer detail
    ---------------
    customer name   :${customername}
    customer id     :${customerid}
    membership type :${membershiptype}
    
    product detail
    ---------------
    product name  :${ProductName}
    category      :${ProductCategory}
    product price :${ProductPrice}
    Quantity      :${QuantityPurchased}
    stock available:${ProductStockAvailability}

    billing deatils
    ---------------
    subtotal     :${subtotal}
    membership discount:${membershipDiscount}

    total discount :${totalDiscount}
    gst(gst rate)  :${gstamount}
    delivery charge:${delivarycharge}

    ----------------------------------------------------------------
    final payable amount :${finalBillAmount}
    ----------------------------------------------------------------
    
    order states    :${orderstatus}

    ==================================================================
            thank you for shopping
    =================================================================        
         
    `);
 

