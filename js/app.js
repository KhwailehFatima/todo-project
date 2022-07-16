
var userName = prompt("what's your name?")
var userGender = prompt("what's your gender (male/Female)?")
var userAge = prompt("what's your age?")
if (userAge <= 0) alert("Your age is less than or equal zero")
msgConfirm = confirm("Do you want to skip the welcoming message?")
if (msgConfirm) { }
else {

    if (userGender == "Male" || userGender == "male") { alert(" Welcome Mr" + " " + userName) }

    if (userGender == "Female" || userGender == "female") { alert("Welcome Ms" + " " + userName) }
    //if(userGender !==("Male"||"male"||"Female"||"female")){alert("")}
    else alert("")
}
q1Prompt=prompt("Did you solve your tasks?")
if (q1Prompt=="")q1Prompt="invalid"
q2Prompt=prompt("Did you understand HTML?")
if (q2Prompt=="")q2Prompt="invalid"
q3Prompt=prompt("Did you understand CSS?")
if (q3Prompt=="")q3Prompt="invalid"

const arr=[];
arr.push (q1Prompt, q2Prompt, q3Prompt);
console.log(arr);