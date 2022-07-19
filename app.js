//unknown type is better than any type
//because you cannot assign unknown type to a fixed type, you can to use a if check statement
var variable;
var text;
variable = 3;
variable = "string";
//add extra line to avoid error: cannot assign unknown type to a fixed type
if (typeof variable === "string") {
    text = variable;
}
//never return type - f that never return
function generateError(message, code) {
    //throw will crash your script
    throw {
        message: message,
        code: code
    };
}
generateError("An error occur!", 500);
