const fetchData = async () => {
    const api = "https://dummyjson.com/products";
    const data = await fetch(api);
    const mainData = await data.json()
    return mainData.products
}


const logFun = (p)=>{
    console.log(p);
}

const data = fetchData()
data.map(logFun)


