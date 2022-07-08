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
family.addFamily(322, 'lou12is', 'aun1t')
family.addFamily(10, 'lou34is', 'aun2t')
console.log(family.members.aunt)


// 객체 이해하기
// 객체를 만드는방법은 let family = {}  <<< 객체를 만든 것
// 객체는 키와 값으로 이루어진다.
