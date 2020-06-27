function getvalue(num){
    console.log(num);
var result = document.getElementById("result");
result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}

function myresult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);

}