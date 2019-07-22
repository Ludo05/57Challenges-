
const getMonth = (month) => {

    switch (month) {
        case 0:
            return  'Jan';
        case 1:
           return 'Feb';
        case 2:
           return 'March';
        default:
           return  'Not a month'
    }};
console.log(getMonth(340));
