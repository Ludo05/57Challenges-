const user = {username: 'Lewis', password: 'password'};


const SignIn = (password) => {
    if(password === user.password){
        console.log('You have logged in')
    } else {
        console.log('Sorry wrong credentials');
    }
};

SignIn('password');
SignIn('PaSsWoRd');
