const passwordValidator = (password) => {
    const isnum = (string) => /^\d+$/.test(string);
    const isword = (string) => /^\w+$/.test(string);
    const wordPlusOneNumber = (string) => /\w\d+/.test(string);
    const special  = (string) => /[!@#$%^&*(),.?":{}|<>\d+\w+]+/.test(string);

    if(password.length < 8 && isnum(password)){
        console.log('Very weak password')
    } else
        if(password.length < 8 && isword(password)){
        console.log('Weak password')
    } else
        if(password.length >= 8 && wordPlusOneNumber(password)){
            console.log('Strong  password')
        } else
        if(password.length >= 8 && special(password)){
            console.log('Very strong  password')
        }
};

passwordValidator('ddjddddjd!!!3')
