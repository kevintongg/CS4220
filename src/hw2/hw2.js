class Groups {
  constructor(list = []) {
    this.list = list;
  }

  get print() {
    this.list.forEach((e) => {
      console.log(`${e.name}\nLeader: ${e.leader}`);
      for (let i = 0; i < e.members.length; i++) {
        process.stdout.write(`| ${e.members[i]} `);
      }
      console.log('\n');
    });
    return this;
  }

  addGroup({ name, leader, members = [] }) {
    this.list.push({
      name,
      leader,
      members,
    });
    return this;
  }

  removeGroup(groupName) {
    this.list.forEach((e, i, obj) => {
      if (e.name.toLowerCase() === groupName) {
        obj.splice(i, 1);
      }
    });
    return this;
  }

  addMember(groupName, memberName) {
    this.list.forEach((e) => {
      if (e.name === groupName) {
        e.members.push(memberName);
      }
    });
    return this;
  }

  removeMember(groupName, memberName) {
    this.list.forEach((e) => {
      for (let i = 0; i < e.members.length; i++) {
        if (e.members[i].toLowerCase() === memberName.toLowerCase()) {
          e.members.splice(i, 1);
        }
      }
    });
    return this;
  }
}

const groups = new Groups();

groups.addGroup({
  name: 'Justice League',
  leader: 'Wonder Woman',
  members: [
    'Batman',
    'Superman',
    'Spiderman',
  ],
});

groups.addGroup({
  name: 'Avengers',
  leader: 'Iron Man',
  members: [
    'Hulk',
    'Thor',
    'Captain America',
  ],
});

groups.print;

groups.addMember('Justice League', 'Aqua Man');
groups.print;

groups.removeGroup('avengers');
groups.print;

groups.removeMember('Justice League', 'spiderMan');
groups.print;

const person = {
  first: 'Elon',
  last: 'Musk',
  twitter: '@elonmusk',
  company: 'Space X',
};

function displayName() {
  const { first, last } = person;
  console.log(`${first} ${last}\n`);
}

displayName(person);

function combineName(obj, key, dest) {
  const fullName = key.map(k => obj[k]).filter(value => value).join(' ');
  delete person.first;
  delete person.last;

  obj[dest] = fullName;
}

combineName(person, ['first', 'last'], 'name');

console.log(person);
console.log();

const people = [
  [{
    key: 'name',
    value: 'Elon Musk',
  }, {
    key: 'twitter',
    value: '@elonmusk',
  }, {
    key: 'company',
    value: 'Space X',
  }], [{
    key: 'name',
    value: 'Tim Cook',
  }, {
    key: 'twitter',
    value: '@tim_cook',
  }, {
    key: 'company',
    value: 'Apple',
  }],
];

function createObject(array) {
  const object = {};
  array.forEach((arr, i) => {
    const temp = {};
    arr.forEach((obj) => {
      temp[obj.key] = obj.value;
    });
    object[i + 1] = temp;
  });
  return object;
}

console.log(createObject(people));
