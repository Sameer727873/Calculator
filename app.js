function getnumber(num){
var result = document.getElementById("result")
result.value += num;



}

function clearresult(){
    var result = document.getElementById("result")
    result.value =  "";
}

function result(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}


