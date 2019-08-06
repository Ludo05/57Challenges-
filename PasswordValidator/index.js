module.exports.passwordValidator = (password) => {
    const isnum = (string) => /\d+/.test(string);
    const isword = (string) => /\w+/.test(string);
    const special  = (string) => /[!@*?()]/.test(string);

    const passwordReplies = (password) => [`Please enter a password`, `The password '${password}' is a very weak password`, `The password '${password}' is a weak password`,
        `The Password ${password} is a strong password`, `The password ${password} is a very strong password`, 'can\'t be validated'];

    //Remember the order of the if statements are important!!!
    let level;
    if(password === '') {
        level =  0
    } else if(password.length > 0 && password.length < 8 && isnum(password)){
        level = 1
    } else
        if(password.length > 0 &&  password.length < 8 && isword(password)){
        level = 2
    } else
        if(password.length >= 8 &&  (isnum(password) && isword(password) && special(password))){
        level =  4
    } else
        if(password.length >= 8 && (isnum(password) && isword(password))) {
            level = 3
        } else {
            level = 5;
        }

        return passwordReplies(password)[level]
};


