// Dummy data
const data = {
    Product : [
        {ProductuserName : "Product 1 ", ProductId : 1, TotalProductSales : 100},
        {ProductuserName : "Product 2 ", ProductId : 2, TotalProductSales : 90},
        {ProductuserName : "Product 3 ", ProductId : 3, TotalProductSales : 80},
        {ProductuserName : "Product 4 ", ProductId : 4, TotalProductSales : 70},
        {ProductuserName : "Product 5 ", ProductId : 5, TotalProductSales : 60},
        {ProductuserName : "Product 6 ", ProductId : 6, TotalProductSales : 50},
        {ProductuserName : "Product 7 ", ProductId : 7, TotalProductSales : 40},
        {ProductuserName : "Product 8 ", ProductId : 8, TotalProductSales : 30},
        {ProductuserName : "Product 9 ", ProductId : 9, TotalProductSales : 20},
        {ProductuserName : "Product 10 ", ProductId :10, TotalProductSales : 10},
    ],
       
   
     Sales : [
        {ProductId : 1, slaesID : 1, salesQuntity  : 100,SalesDateTime: Date.now()},
        {ProductId : 1, slaesID : 2, salesQuntity  : 90, SalesDateTime: Date.now()},
        {ProductId : 2, slaesID : 3, salesQuntity  : 80, SalesDateTime: Date.now()},
        {ProductId : 2, slaesID : 4, salesQuntity  : 70, SalesDateTime: Date.now()},
        {ProductId : 3, slaesID : 5, salesQuntity  : 60, SalesDateTime: Date.now()},
        {ProductId : 4, slaesID : 6, salesQuntity  : 50, SalesDateTime: Date.now()},
        {ProductId : 5, slaesID : 7, salesQuntity  : 40, SalesDateTime: Date.now()},
        {ProductId : 6, slaesID : 8, salesQuntity  : 30, SalesDateTime: Date.now()},
        {ProductId : 7, slaesID : 9, salesQuntity  : 20 , SalesDateTime: Date.now()},
        {ProductId : 8, slaesID :10, salesQuntity  : 10 , SalesDateTime: Date.now()},
    ],
    user: [
        { userName: 'USER 1', userID:1, salesID: 1 },
        { userName: 'USER 2', userID:2, salesID: 2 },
        { userName: 'USER 3', userID:3, salesID: 2 },
        { userName: 'USER 4', userID:4, salesID: 2 },
        { userName: 'USER 5', userID:5, salesID: 2 },
        { userName: 'USER 6', userID:6, salesID: 3 },
        { userName: 'USER 7', userID:7, salesID: 3 },
        { userName: 'USER 8', userID:8, salesID: 4 },
        { userName: 'USER 9', userID:9, salesID: 5 },
        { userName: 'USER 10',userID:10, salesID: 10 }
    ],

    inventory : [
        { userName: 'USER 1', userID:1, inventoryID: 1, ProductId: 1, date : Date.now(), quantity :10 },
        { userName: 'USER 2', userID:2, inventoryID: 2, ProductId: 1, date : Date.now(), quantity :100},
        { userName: 'USER 3', userID:3, inventoryID: 3, ProductId: 1, date : Date.now(), quantity :20 },
        { userName: 'USER 4', userID:4, inventoryID: 4, ProductId: 1, date : Date.now(), quantity :30 },
        { userName: 'USER 5', userID:5, inventoryID: 5, ProductId: 1, date : Date.now(), quantity :40 },
        { userName: 'USER 6', userID:6, inventoryID: 6, ProductId: 1, date : Date.now(), quantity :50 },
        { userName: 'USER 7', userID:7, inventoryID: 7, ProductId: 1, date : Date.now(), quantity :60 },
        { userName: 'USER 8', userID:8, inventoryID: 8, ProductId: 1, date : Date.now(), quantity :70 },
        { userName: 'USER 9', userID:9, inventoryID: 9, ProductId: 1, date : Date.now(), quantity :80 },
        { userName: 'USER 10',userID:10, inventoryID: 10, ProductId: 1, date : Date.now(), quantity :90 }
    ]
};

module.exports = data;
