//Primitieves 
let age: number;
age = 7;

let usrname : string;
usrname = "john";

let isValid: boolean;
isValid : true;

//arrays
let hobbies: string[];
hobbies =['sports', 'trek'];    


//more comples types (a type defining an object)

let person: {
    usrname: string;
    age: number;
}

person={
    usrname: 'John',
    age: 24
}

//array of an object

let people:{
    name: string;
    age: number
}[];

//Type inference 
let course= 'React trainning';
//course= 2345; //not allowed bcz js sets string as dt for course automatically

//Union types
let demo : string | number | string[]= 'React trainning';
demo=234; //now this allowed

//Type aliases

type People={
    name: string;
    age: 24;
};
let plp: People;
let plp2: People[]; //also can be used an array

//Functions and types

function add(a: number, b: number){
    return a+b;
}
//for return stmt, automatically the type is number

function print(value: any){
    console.log(value);
}//as here no return stmt is present, its type is void automatically

//Generics

function insertAtbeginning(array: any[], value: any){
    const newArr = [value, ...array];
    return newArr;
}

const demoArr = [1, 2, 3] 
const updatedDemoArr = insertAtbeginning(demoArr, 10); // will return [10, 1, 2, 3]
// type of return array will also be any... to avoid this we use generics as follows

function genericsDemo<T>(array: T[], value: T){
    const nwArr = [value, ...array];
    return nwArr;
}

const dmArr = [1, 2,3, 4];
const genDmArr = genericsDemo(dmArr, 10);










