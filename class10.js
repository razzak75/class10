// Email pettern
// ====================

let email= 'abdurrazzak2212@hotmail.com'
let mailPattern= /^[a-z0-9_.]*@[a-z]{3,}\.[a-z]{2,5}$/;
console.log(mailPattern.test(email));



// username pattern
// =====================

let user= 'razzak_75'
let userPattern = /^[a-z0-9~`!@#$%^&*_+-]{3,}$/;
console.log(userPattern.test(user));



// Bangladeshi phone number pattern
// ==================================


let bdPhone= '+8801819611322'
let phonePattern =/^(\+8801|01)[0-9]{9}$/
console.log(phonePattern.test(bdPhone));



// // password pattern 
// =====================

let pass= 'Razzak75!@#%!*&(`<?'
// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
let passPattern= /^[A-Za-z0-9~`!@#$%^&*()_<>?+=]{8,}$/
console.log(passPattern.test(pass));




 // zip code
// ===============


let zip = 4450
let zipPattern= /^[0-9]{4,5}$/
console.log(zipPattern.test(zip))