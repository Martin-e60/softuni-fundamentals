function loginPassword(arr) {
    let username = arr[0];
    let correctPassword = username.split('').reverse().join('');

    for (let i = 1; i < arr.length; i++) {
        let passwordGuess = arr[i];

        if (passwordGuess === correctPassword) {
            console.log(`User ${username} logged in.`);
            break;
        }

        if (i === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log('Incorrect password. Try again.');
    }
} 