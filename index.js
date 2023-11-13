// let products = [
//     {
//         name: "soda",
//         price: 10000,
//         godno: 2040
//     },
//     {
//         name: "chocolate",
//         price: 8000,
//         godno: 2024
//     },
//     {
//         name: "ice cream",
//         price: 13000,
//         godno: 2023
//     },
//     {
//         name: "yogurt",
//         price: 9000,
//         godno: 2023
//     },
//     {
//         name: "lienergy",
//         price: 21000,
//         godno: 2024
//     },
//     {
//         name: "fusetea",
//         price: 7000,
//         godno: 2024
//     },
//     {
//         name: "lays",
//         price: 18000,
//         godno: 2023
//     },
//     {
//         name: "18+",
//         price: 8000,
//         godno: 2024
//     },
//     {
//         name: "namak",
//         price: 2000,
//         godno: 2024
//     },
//     {
//         name: "orange juice",
//         price: 10000,
//         godno: 2024
//     },
//     {
//         name: "clear man",
//         price: 50000,
//         godno: 2025
//     },
//     {
//         name: "saxar",
//         price: 12000,
//         godno: 2025
//     },
//     {
//         name: "moloko",
//         price: 11000,
//         godno: 2023
//     },
//     {
//         name: "pechenki",
//         price: 15000,
//         godno: 2024
//     },
//     {
//         name: "muka",
//         price: 150000,
//         godno: 2024

//     }
// ]

// let arr_sail = []

// let discount = +prompt('discount %')

// for (let item of products) {
//     // console.log(item.name + ': ' + `${item.price - (discount * item.price / 100)}`);
//     let sail_price = `${item.price - (discount * item.price / 100)}`
//     arr_sail.push({
//         name: item.name,
//         godno: item.godno,
//         price: sail_price
//     })
// }

// console.table(products);
// console.table(sail_price)



let people = [
    {
        name: "bobur",
        age: 43,
        isMarried: false,
        wifes: ['kamila', 'safir', 'allayor']
    },
    {
        name: "ismail",
        age: 12,
        isMarried: true,
        wifes: ['nikita', 'malika']
    },
    {
        name: "allayor",
        age: 14,
        isMarried: true,
        wifes: ['denis', 'dima', 'dimon', 'xbegim']
    },
    {
        name: "sardor ml",
        age: 18,
        isMarried: false,
        wifes: ['safiya']
    },
    {
        name: "safir",
        age: 20,
        isMarried: true,
        wifes: ['maryam']
    }
]

let guilties = []

let innocent = []

people.forEach(item => {
    if(item.age >= 18 && item.wifes.length <= 1){
        innocent.push(item)
        document.write(`Innocent </br>
        name: ${item.name},</br>
        age: ${item.age},</br>
        isMarried: ${item.isMarried},</br>
        wifes: ${item.wifes} 
        </br> </br> </br>`)
    }else{
        guilties.push(item)       
        document.write(`Guilty </br>
        name: ${item.name},</br>
        age: ${item.age},</br>
        isMarried: ${item.isMarried},</br>
        wifes: ${item.wifes} 
        </br> </br> </br>`)
    }
})

console.table(guilties)
console.table(innocent)
