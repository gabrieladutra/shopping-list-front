const animals = [
    {name: 'Ghost', specie: 'dog'},
    {name: 'Bran', specie: 'dog'},
    {name: 'Bill', specie: 'cat'},
    {name: 'Cleo', specie: 'cat'},
    {name: 'Jimmy', specie: 'parrot'},
    {name: 'Lullaby', specie: 'rabbit'},
]

/*equal to:
const otherDog = function (animal) {
    return animal.specie == 'dog'
} or  equal to:
const isDog = animal => {
    return animal.specie == 'dog'
}*/

const animalNames = []

for (let i = 0; i < animals.length; i++) {
    animalNames.push(animals[i].name)
}

console.log(animalNames)
const isDog = animal => animal.specie === 'dog'
const getDogName = dog => dog.name

const dogsNames = animals.filter(isDog).map(getDogName)

console.log(dogsNames)

const productList = [
    {
        id: 'x12',
        name: 'roupas',
        listOfProducts: [
            {
                quantitity: 1,
                name: 'camisa',
                price: 21.0,
                isPurchased: true,
            },
            {
                quantitity: 1,
                name: 'short',
                price: 321.0,
                isPurchased: true,
            },
        ],
    },
    {
        id: 'zx13',
        name: 'lista de hoje',
        listOfProducts: [
            {
                quantitity: 2,
                name: 'mel',
                price: 1.0,
                isPurchased: false,
            },
            {
                quantitity: 1,
                name: 'candy',
                price: 2.0,
                isPurchased: true,
            },
        ],
    },
]

const isProductListNameEquals = (productList, name) => productList.name === name
const getListOfProducts = productList => productList.listOfProducts

const getListOfProductsByProductListName = (name, productLists) =>
    productLists
        .filter(currentProductList =>
            isProductListNameEquals(currentProductList, name)
        )
        .map(getListOfProducts)

const getProducts = productList
    .filter((productList, name) => productList.name == name)
    .flatMap(productList => productList.listOfProducts)

console.log(getProducts)
// find
const numbers = [1, 3, 4, 5, 8567, 43345, 9, 9]
const firstGreaterThan1000 = numbers.find(number => number > 1000)
const findFirstNumberGreaterThan1000 = array =>
    array.find(number => number > 1000)

console.log(firstGreaterThan1000)

const places = ['EUA', 'Canada', 'Germany', 'Spain']

const findPlace = places => places.find(place => place.includes('Spain'))

console.log(findPlace)

//const productName = productName => productName

const searchProductList = productListName =>
    productList.find(productList => productListName === productList.name)
console.log(searchProductList('roupas'))
// const findProduct = productList.find(
//     product => product.name === 'lista de hoje'
// )

const findProductListById = productId =>
    productList.find(productList => productId === productList.id)

//(productList => productList.id)
console.log(findProductListById('zx13'))

// findIndex

const students = [
    {name: 'Luke', age: 17},
    {name: 'Eve', age: 20},
    {name: 'Dylan', age: 21},
]

//const isAdult = age => students.findIndex(age.age > 18)
//console.log(isAdult(15))

//idDaLista/ novaLista
const updateProductList = (productLists, productListId, newList) => {
    const indexToUpdate = productLists.findIndex(
        productList => productList.id === productListId
    )
    productLists[indexToUpdate] = newList
}
// foreach

const randomNumbers = [2, 45, 6, 7, 8]

randomNumbers.forEach(currentNumber => console.log(currentNumber * 100))

const searchedNameList = []
const searchProductLists = productList.forEach((currentProductList, name) => {
    if (currentProductList.name == name) {
        searchedNameList.push(currentProductList)
    }
    console.log(searchedNameList)
})

// flatMap

// some
const someProductNotPurchased = productList[0].listOfProducts.some(
    product => !product.isPurchased
)
const numbers3 = [1, 3, 8]
const someNumberIsEven = numbers.some(number => number % 2 === 0)
const numbers2 = [1, 3, 8]

// every
const otherNumbers = [2, 4, 1]
const everyNumbersIsEven = otherNumbers.every(number => number % 2 === 0)

// reduce

const intPromise = new Promise((resolve, reject) => {
    try {
        // ....
        resolve(1)
    } catch (e) {
        reject(e)
    }
})

intPromise
    .then(resultado => {
        10 + resultado
    })
    .catch(exp => {})

const myPromise = new Promise((resolve, reject) => {
    let sunglassesQuantity = 0
    if (sunglassesQuantity > 0) {
        resolve('Promise is resolved successfully. ')
    } else {
        reject('Promise is rejected, sunglasses are sold out')
    }
})
    .then(message => console.log(message))
    .catch(message => console.log(message))
