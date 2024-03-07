function Fibonacci(number) {
    let a = 0;
    let b = 1;

    while (b <= number) {
        if (b === number) {
            return true;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }

    return false;
}

let inputNumber = 34;
let message = Fibonacci(inputNumber) ? "O número informado pertence à sequência de Fibonacci." : "O número informado NÃO pertence à sequência de Fibonacci.";
console.log(message);