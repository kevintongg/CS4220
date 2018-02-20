class Groups {
  constructor(list = []) {
    this.list = list;
  }

  get print() {
    this.list.forEach((item) => {
      console.log(`${item.name}\nLeader: ${item.leader}`);
      for (let i = 0; i < item.members.length; i++) {
        process.stdout.write(`| ${item.members[i]} `);
      }
      console.log('\n');
    });
    return this;
  }

  addGroup({ name, leader, members = [] }) {
    this.list.push({ name, leader, members });
    return this;
  }

  removeGroup(groupName) {
    this.list.forEach((item, index, object) => {
      if (item.name.toLowerCase() === groupName) {
        object.splice(index, 1);
      }
    });
    return this;
  }

  addMember(groupName, memberName) {
    this.list.forEach((item) => {
      if (item.name === groupName) {
        item.members.push(memberName);
      }
    });
    return this;
  }

  removeMember(groupName, memberName) {
    this.list.forEach((item) => {
      for (let i = 0; i < item.members.length; i++) {
        if (item.members[i].toLowerCase() === memberName.toLowerCase()) {
          item.members.splice(i, 1);
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
  members: ['Batman', 'Superman', 'Spiderman'],
});
groups.addGroup({
  name: 'Avengers',
  leader: 'Iron Man',
  members: ['Hulk', 'Thor', 'Captain America'],
});
// groups.print;
//
// groups.addMember('Justice League', 'Aqua Man');
// groups.print;
//
// groups.removeGroup('avengers');
// groups.print;
//
// groups.removeMember('Justice League', 'spiderMan');
// groups.print;

const person = {
  first: 'Elon',
  last: 'Musk',
  twitter: '@elonmusk',
  company: 'Space X',
};

function displayName() {
  const { first, last } = person;
  console.log(`${first} ${last}`);
}

// displayName(person);

function combineName(object, key, destination) {
  const fullName = key.map(k => object[k]).filter(value => value).join(' ');
  delete person.first;
  delete person.last;

  object[destination] = fullName;
}

combineName(person, ['first', 'last'], 'name');

// console.log(person);

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
  }]
];

function createObject(array) {
  return {
    1: {
      name: array[0][0].value,
      twitter: array[0][1].value,
      company: array[0][2].value
    },
    2: {
      name: array[1][0].value,
      twitter: array[1][1].value,
      company: array[1][2].value
    }
  };
}

console.log(createObject(people));
