function solve(a, b, c) {
    let numbers = [a, b, c];

    numbers.sort((x, y) => y - x);

    console.log(numbers.join("\n"));
}

solve(2, 1, 3);