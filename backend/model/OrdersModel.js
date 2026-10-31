const {model}=require("mongoose");

const {OrdersSchema}=require('../schemas/OrderssSchema');

const OrdersModel=new model("order",OrdersSchema);

module.exports={OrdersModel};
