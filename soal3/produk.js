const products = [
    {
      id: 1, name: "Laptop", price: 1200, category: "Electronics",
    },
    {
      id: 2, name: "Smartphone", price: 800, category: "Electronics",
    },
    {
      id: 3, name: "Coffee Maker", price: 50, category: "Home Appliances",
    },
    {
      id: 4, name: "Running Shoes", price: 80, category: "Fashion",
    },
    {
      id: 5,name: "Headphones", price: 100, category: "Electronics",
    },
    {
      id: 6, name: "Digital Camera", price: 500, category: "Electronics",
    },
    {
      id: 7, name: "Toaster", price: 30, category: "Home Appliances",
    },
    {
      id: 8, name: "Backpack", price: 40, category: "Fashion",
    },
    {
      id: 9, name: "4K Smart TV", price: 800, category: "Electronics",
    },
    {
      id: 10, name: "Microwave Oven", price: 70, category: "Home Appliances",
    },
    {
      id: 11, name: "Gaming Console", price: 400, category: "Electronics",
    },
    {
      id: 12, name: "Leather Jacket", price: 120, category: "Fashion",
    },
    {
      id: 13, name: "Wireless Mouse", price: 20, category: "Electronics",
    },
    {
      id: 14, name: "Blender", price: 60, category: "Home Appliances",
    },
    {
      id: 15, name: "Wristwatch", price: 60, category: "Fashion",
    },
    {
      id: 16, name: "Desk Lamp", price: 25, category: "Home Appliances",
    },
]

const totalPrice = () => {
    const total = products.reduce((sum, product) => sum + product.price, 0)
    console.log("Total harga semua produk: "+total);
}

const createNewArray = () => {
    let newArray = []
    const product = products.filter(product => product.price > 100)
    // console.log(product);
    newArray.push(...product)
    console.log("Produk dengan harga di atas 100 adalah sebagai berikut: ");
    console.table(newArray);
    countAverage(newArray)
}

const countAverage = (array) => {
    const total = array.reduce((sum, product) => sum + product.price, 0)
    const average = total / array.length
    console.log("Rata-rata harga produk: "+average);
}

const ascSortProducts = () => {
    const sortedProducts = products.sort((a, b) => a.price - b.price)
    console.log("Produk diurutkan dari harga termurah: ");
    console.table(sortedProducts);
}

const categoryProducts = () => {
    const fashions = products.filter(product => {
        return product.category === "Fashion"
    })

    const electronics = products.filter(product => {
        return product.category === "Electronics"
    })

    const homeAppliances = products.filter(product => {
        return product.category === "Home Appliances"
    })

    console.log("Jumlah produk kategori Fashion: "+fashions.length);
    console.table(fashions);
    console.log("");
    console.log("Jumlah produk kategori Electronics: "+electronics.length);
    console.table(electronics);
    console.log("");
    console.log("Jumlah produk kategori Home Appliances: "+homeAppliances.length);
    console.table(homeAppliances);
}

const changeNameProduct = () => {
    const updateProducts = products.map(product => {
        if (product.price < 50) {
            return {...product, name: "Produk Hemat"}
        } else if (product.price > 200) {
            return {...product, name: "Produk Premium"}
        } else {
            return product
        }
    })

    console.table(updateProducts);
}


const findProduct = () => {
    const nameProduct = 'lApToP'
    const product = products.find(product => product.name.toLowerCase() === nameProduct.toLowerCase())

    if (product) {
        console.log(product);
    } else {
       console.log("Produk tidak ditemukan")
    }
}

totalPrice()
createNewArray()
ascSortProducts()
categoryProducts()
changeNameProduct()
findProduct()