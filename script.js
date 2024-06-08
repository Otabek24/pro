let n1 = +prompt("1-sonni kriting")
let n2 = +prompt("2-sonni kriting")
let n3 = +prompt("3-sonni kriting")
if (n2<n1 && n1<n3 || n2>n1 && n1>n3) {
    alert("1-son o'rta qiymat: " + n1)
}else if (n1<n2 && n2<n3 || n1>n2 && n2>n3) {
    alert("2-son o'rta qiymat: " + n2)
}else if (n1<n3 && n3>n2 || n1>n3 && n3>n2) {
    alert("3-son o'rta qiymat: " + n3)
}else{
    alert("Nimadir xato ketdi")
}