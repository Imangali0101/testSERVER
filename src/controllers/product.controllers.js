const products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 350000,
        category: "Телефоны",
        inStock: true,
        image: "/images/iphone15.jpg"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 320000,
        category: "Телефоны",
        inStock: true,
        image: "/images/samsung-s24.jpg"
    },
    {
        id: 3,
        name: "MacBook Air M2",
        price: 450000,
        category: "Ноутбуки",
        inStock: false,
        image: "/images/macbook.jpg"
    },
    {
        id: 4,
        name: "Sony WH-1000XM5",
        price: 180000,
        category: "Наушники",
        inStock: true,
        image: "/images/sony.jpg"
    },
    {
        id: 5,
        name: "iPad Air",
        price: 280000,
        category: "Планшеты",
        inStock: false,
        image: "/images/ipad.jpg"
    },
    {
        id: 6,
        name: "Logitech G Pro X",
        price: 65000,
        category: "Наушники",
        inStock: true,
        image: "/images/logitech.jpg"
    },
    {
        id: 7,
        name: "ASUS TUF Gaming",
        price: 520000,
        category: "Ноутбуки",
        inStock: true,
        image: "/images/asus.jpg"
    },
    {
        id: 8,
        name: "Xiaomi Redmi Note 13",
        price: 95000,
        category: "Телефоны",
        inStock: false,
        image: "/images/xiaomi.jpg"
    },
    {
        id: 9,
        name: "Apple Watch Series 9",
        price: 170000,
        category: "Часы",
        inStock: true,
        image: "/images/watch.jpg"
    },
    {
        id: 10,
        name: "Samsung Galaxy Tab S9",
        price: 300000,
        category: "Планшеты",
        inStock: true,
        image: "/images/tablet.jpg"
    }
];

export const getProducts = (req, res) => {
    res.json({
        message: 'Продукты получены',
        products
    })
}

export const getProduct = (req, res) => {
    const { id } = req.params
    const findProduct = products.find((pr) => pr.id === Number(id) )

    if(!findProduct){
        return res.status(404).json({
            message: 'Product not found'
        })
    }
    res.json({
        message: 'Product found',
        findProduct
    })
}