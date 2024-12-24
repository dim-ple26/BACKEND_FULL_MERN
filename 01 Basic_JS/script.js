//ARRAYS
var arr = [1,2,3,4,"dimple", true]


// for every value of array run the function
arr.forEach(function(val) {
     console.log(val+ "hello")
})

// MAP
var arr1=[1,2,3,4]
var ans =arr1.map(function(val){
    return val*5;
})
console.log(ans)

//FILTER
var arr_f=[2,6,7,9,0.9,5]
var arrans_f= arr_f.filter(function(val) {
    if(val>5){return true;}
    else return false;

    
})
console.log(arrans_f)

// FIND
arr_f.find(function(val){
    if(val==2) return val
})

// indexof

// Object
var obj = {
    name:"dimple",
    age:19
}
Object.freeze(obj)
console.log(obj)
console.log(obj.name)
obj['name']

// functon length
function abcd(a,b) {
    return 0;
}

async function my_func(){
    var blob=await fetch('https://randomuser.me./api/') // this line will wait to execute
    // ab if we run blob.json without await then promise is pending

    //thats why humko iske aage bhi await lagana padhega
    ansa=await blob.json();
// will now give result 
// basically rok k rkhana hai ise
    console.log(ansa.results[0].name)


    // ansa.results[0].gender
    // 'male'
    // ansa.results[0].email
    // 'mathys.leclercq@example.com'
    // ansa.results[0].name
    // {title: 'Mr', first: 'Mathys', last: 'Leclercq'}

}
my_func();



