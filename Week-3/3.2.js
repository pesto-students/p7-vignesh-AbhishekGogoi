var person = {
    firstName: 'Abhishek',
    lastName: 'Gogoi',
    display: function() {
        return `My name is ${this.firstName} ${this.lastName}`
    }
}
var loveCoding = function(firstInterest, secondInterest) {
    console.log(`${this.display()} and I am learning ${firstInterest} and ${secondInterest} `)
}

var personDetails = loveCoding.bind(person)

personDetails('Javascript', 'React')
loveCoding.call(person, 'HTML', 'CSS')
loveCoding.apply(person, ['Node', 'MongoDB'])