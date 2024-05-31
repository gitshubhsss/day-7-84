let response =`{"fact":"A cat has the ability to rotate their ears 180 degrees,with the help of 32 muscles that they use to control them.","length":113}`;
let res=JSON.parse(response);

console.log(res);

let student={
    name:"mansi singh",
    class:"4th Year Engineering"
}

let jsonStudent=JSON.stringify(student);
console.log(jsonStudent);