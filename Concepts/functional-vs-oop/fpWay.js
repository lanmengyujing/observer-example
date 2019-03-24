import Student from './Student';

function selector(country, school) {
    return function (student) {
        return student.address.country === country &&
            student.school === school;
    };
}
const findStudentsBy = function (friends, predicate) {
    return friends.filter(predicate);
};


var curry = new Student('Haskell', 'Curry',
    '111-11-1111', 'Penn State');
curry.address = new Address('US');

var turing = new Student('Alan', 'Turing',
    '222-22-2222', 'Princeton');
turing.address = new Address('England');

var church = new Student('Alonzo', 'Church',
    '333-33-3333', 'Princeton');
church.address = new Address('US');

var kleene = new Student('Stephen', 'Kleene',
    '444-44-4444', 'Princeton');
kleene.address = new Address('US');

findStudentsBy([curry, turing, church, kleene],
    selector('US', 'Princeton'));
//-> [church, kleene]