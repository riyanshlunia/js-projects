const input = document.getElementById("input")

function reverseFunction(str){
    return str.split("").reverse().join("")
}

function palindromeChecker(){
    const value = input.value;
    const reverse = reverseFunction(value)

    if(value === reverse){
        alert("Palindrome")
    }else{
        alert("Not Palindrome")
    }
}