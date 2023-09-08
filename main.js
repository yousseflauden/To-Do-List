/*

    chalange 1


var The_titles = {title : "Elzero", discrp : "ELzero web school", date:"25/10"}
var type = `
<div>
    <h3>
        Hello ${The_titles.title}
    </h3>
    <p>
        ${The_titles.discrp}
    </p>
    <span>
    ${The_titles.date}
    </span>
</div>
`;
document.write(type.repeat(4))*/




/*
    chalange 2

let a = "-100";
let b = "20";
let c = 30;
let g = true;

console.log(-a * b)//2000
console.log(-a + ++c + ++g * ++b) //173
*/







/*
// chalange 3

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// find the smallest num in all val.
console .log(Math.min(a, b, c, d));


// use variable a & d one time to get the neaded output
console.log(Math.pow(a, Math.floor(d)));

// get int "2"from variable d with 4 mithods
console.log(Math.round(d));
console.log(Number.parseInt(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));

// use variable b & d to get yhis values.
console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2));    // 66.67 => String
console.log(Math.ceil(Math.trunc(b)/Math.ceil(d)));    // 67 => Number

*/

let taskinput = document.querySelectorAll('input');
let addtaskbtn = document.getElementById('addtaskbtn');
let alltask = document.getElementById('alltask');
let notask = document.getElementById('notask');
let notaclossvalidationmassagebtnsk = document.getElementById('clossvalidationmassagebtn');
let validationmassage = document.getElementById('validationmassage');


console.log("111")
addtaskbtn.onclick = function() {
    if(taskinput[0].value.trim() == "" || taskinput[1].value.trim() == ""){
        if(taskinput[0].value.trim() ==""){
            validationmassagebtn.innerHTML = "you must enter name"
            validationmassage.style.display = 'block';
        }else if(taskinput[1].value.trim() == ""){

        }
    }
}



