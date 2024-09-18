const url="https://fakestoreapi.com/products";

const products=async()=>{
const res=await fetch(url);
const data=await res.json();
return data;
}
export{products}