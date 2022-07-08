let family = {
    'address' : 'seoul',
    members : {},
    addFamily : function(age, name, role) {
        this.members[role] = {
            age: age,
            name: name,
        };
    },
    getHeadcount : () => {
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'louis', 'aunt')
family.addFamily(22, 'max', 'aun1t')
family.addFamily(10, 'test', 'aun2t')
console.log(family.members.aunt)

let printMembers = () => {
    let members = family.members;
    for (role in members) {
        console.log('role =>' + role + ', name =>' + members[role].name + ' age =>' + members[role].age);
    } 
};
printMembers();
console.log('===============================')
let members = family.members;
members['newount'] = {age: 3, name: 'taesik'};
members.test = {age: 4, name: '1taesik'};
members.aun1t = {age: 5, name: 'taesiktest'};
delete members.aunt;
printMembers();