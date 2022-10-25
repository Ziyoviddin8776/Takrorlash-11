(function (){
    console.log("Salom IP Address")
})();

let f;
let x=()=>{
    let a=10;
    f=function (c){
        console.log(a+c)
    }
}
x()
f(4)


let arr=["m","u","t","a","n","t"];
let arrCopy=arr;
console.log(arrCopy)
console.log(arr.slice(0,3))
console.log(arr.splice(0,2))
console.log(arr.reverse())
let arr1=[1,2,3,4];
let arr2=[5,6,7,8]
let y=arr1.concat(arr2)
console.log(y)
console.log(y.join(""))
console.log(arr.at(-1))
console.log(arrCopy)