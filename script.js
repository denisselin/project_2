//массив для склада
storagebank = [{
    id: 1,
    name: 'GPU',
    quantity: 3,
    cost: 15
}, {
    id: 2,
    name: 'CPU',
    quantity: 10,
    cost: 100
}, {
    id: 3,
    name: 'RAM',
    quantity: 50,
    cost: 15
},];
//массив для корзины
storagebasket = [];

webix.ui({
    rows: [
        {
            template: 'Магазин орг техники', type: "header"
        },
        {
            cols: [
                {
                    template: 'Склад',
                    type: "header"
                },
                {
                    template: 'Корзина',
                    type: "header"
                }]
        },
        {
            cols: [
                {
                    view: 'list',
                    id: 'Storage_1',
                    template: "#name#  ||  #quantity#  ||  #cost#" ,
                    select: 'true',
                    data: storagebank,

                    onDblClick: 'Event'
                },
                {
                    view: 'list',
                    id: 'Storage_2',
                    template: "#name#  ||  #quantity#  ||  #cost",
                    select: 'true',
                    data: storagebasket,
                    onDblClick: 'Event'
                }]
        },
        {
            template: 'Итог:', type: "header", id:'Summ'
        },
    ],
})
;
function Event() {
    
}