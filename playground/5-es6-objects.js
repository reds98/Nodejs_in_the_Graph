//Object property shorthand
const name="Andrew"
const userAge=22
const user={
    name,
    age:userAge,
    location:"Costa Rica"
}
console.log(user)
//Object destructuring
 const product={
     label:"Red notebook",
     price:3,
     stock:201,
     salePrice:undefined
 }
const {label:productLabel,price,stock,rating=5}=product
console.log(productLabel,price,stock,rating)