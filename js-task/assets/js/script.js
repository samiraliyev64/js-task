// Task 1
let myStr = "Salam Kamran Jabiyev";
let count = 0;
for (const item1 of myStr) {
    count = 0;
    for (const item2 of myStr) {
        if(item1 == item2){
            count++;
        }
    }
    console.log(`${item1} : ${count}`);
}

// Task 2
const myObj = 
{
    name:"Samir",
    surname: "Aliyev",
    age:20
}
myObj.age=25;
const frozenObj = Object.freeze(myObj);
console.log(frozenObj);


