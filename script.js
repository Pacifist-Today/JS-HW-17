
function padString (str, num, sym, bool = true) {
    if (isNaN(str) && typeof str === "string") {
        if (typeof num === "number") {
            if (isNaN(sym) && sym.length === 1) {
                if (bool === true) {
                    if (str.length - 1 < num) {
                        for (let i = str.length; i < num; i++) {
                            str += sym;
                        }
                        return str
                    }   else if (str.length - 1 > num ){
                        let difference = -(num - str.length + 1)
                        let result = str.substr(0, difference)
                        return result
                    }
                }   else if (bool === false) {
                    if (str.length - 1 < num) {
                        for (let i = str.length; i < num; i++) {
                            str = sym + str
                        }
                        return str
                    }   else if (str.length - 1 > num ){
                        let result = str.substr(-num, num)
                        return result
                    }

                }   else return alert("Неверно! Введите булевое значение")
            }   else return alert("Неверно! Введите символ")
        }   else return alert("Неверно! Введите число")
    }   else return alert("Неверно! Введите слово")
}

console.log(padString("happiness", 12, "*")) //default: true
console.log(padString("happiness", 4, "*")) //default: true
console.log(padString("happiness", 13, "*", false)) //false
console.log(padString("happiness", 5, "*", false)) //false