function add(a,b){
    return a+b;
}
const mul=(a,b)=>{
    return a*b;
}
console.log(mul(12,11));

const obj={
    name: 'Mathi',
    age:20,
    message:function(){
        let name=obj.name
        return `hello I am ${name} `
    }
}
console.log(obj.name);
console.log(obj.message());

const number=[1,3,5,7,10]
const mnum=number.map((num)=>num*3)
console.log(mnum);

const posNum=number.filter((n)=>n>0)
console.log(posNum);

const oddNum=number.filter((n)=>n%2!=0)
console.log(oddNum)

const total=number.reduce((sum,n)=>sum+n,0)
console.log(total);

const products=[
    {name:'tv',price: 8000},
    {name:'phone',price: 10000},
    {name:'Earphones',price: 2000}
];
const p=products.reduce((product,n)=>product+n.price,0)
console.log(p);

const x=products.filter((n)=>n.price>5000)
console.log(x);

const user={name:'mathi',password:'123456'}
const {name,password}=user
console.log(password);

const num=[1,2,3,4,5];
const [first,second,third,...spread]=num;
console.log(spread);

const arr1 =[1,2,3]
const copy=[...arr1,4,5,6]
console.log(copy);

function add2(...arguments){
    return arguments.reduce((sum,n)=>sum+n,0);
}
console.log(add2(1,2,3,4,5));

function function1(){
    console.log(`from inside callback`)
}
function fun(name,callback){
    callback()
    return `${name} from outside callback`
}
console.log(fun('function',()=>{console.log(`from inside callback`)}));

async function fetchUsers(){
    try{
        const response=await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data=await response.json()
       // console.log(data);
        data.map((a)=>console.log(a.name))
    }catch(error){
        console.log(error);
    }
}
fetchUsers()

