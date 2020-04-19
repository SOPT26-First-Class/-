class TeamMate {
    constructor(name, age, nick) {
        this.name = name ? name : '모름';
        this.nick = nick ? nick : '없음';
        this.age = age ? age : '모름';
    }

    printInfo() {
        console.log('이름은 : ' + this.name + ', 별명은 : ' + this.nick + ', 나이는 : ' + this.age + '입니다')
    }
}

let first_class = [
    new TeamMate('서영', 26, '엄펭'),
    new TeamMate('윤재', 26, '윤자이'),
    new TeamMate('유영', 23),
    new TeamMate('준엽', 26),
    new TeamMate('지혜', 22),
    new TeamMate('형일')
]

first_class.forEach(
    teammate => teammate.printInfo()
);


/*
let first_class = [{
        name: '서영',
        nick: '엄펭',
        age: 26,
        printInfo: function () { // 메소드
            console.log('이름은 : ' + this.name + ',별명은 : ' + this.nick + ',나이는 : ' + this.age + '입니다')
        }
    },
    {
        name: '윤재',
        nick: '윤자이',
        age: 26,
        printInfo: function () { // 메소드
            console.log('이름은 : ' + this.name + ',별명은 : ' + this.nick + ',나이는 : ' + this.age + '입니다')
        }
    },
    {
        name: '유영',
        nick: '',
        age: 23,
        printInfo: function () { // 메소드
            console.log('이름은 : ' + this.name + ',별명은 : ' + this.nick + ',나이는 : ' + this.age + '입니다')
        }
    },
    {
        name: '준엽',
        nick: '',
        age: 26,
        printInfo: function () { // 메소드
            console.log('이름은 : ' + this.name + ',별명은 : ' + this.nick + ',나이는 : ' + this.age + '입니다')
        }
    },
    {
        name: '지혜',
        nick: '',
        age: '',
        printInfo: function () { // 메소드
            console.log('이름은 : ' + this.name + ',별명은 : ' + this.nick + ',나이는 : ' + this.age + '입니다')
        }
    },
    {
        name: '형일',
        nick: '',
        age: 22,
        printInfo: function () { // 메소드
            console.log('이름은 : ' + this.name + ',별명은 : ' + this.nick + ',나이는 : ' + this.age + '입니다')
        }
    },

];
*/