class Groups {
  constructor(list = []) {
    this.list = list;
  }

  get print() {
    this.list.forEach(item => {
      console.log(`${item.name}\nLeader: ${item.leader}`);
      for (let i = 0; i < item.members.length; i++) {
        process.stdout.write(`| ${item.members[i]} `);
      }
      console.log('\n');
    })
  }

  addGroup({ name, leader, members = [] }) {
    this.list.push({ name, leader, members });
    return this;
  }

  removeGroup(groupName) {
    this.list.forEach(item => {
      if (item.name === groupName) {
        item.pop();
      }
    });
    return this;
  }

  addMember(groupName, memberName) {
    this.list.forEach(item => {
      if (item.name === groupName) {
        item.members.push(memberName);
      }
    });
    return this;
  }

  removeMember(groupName, memberName) {
    let temp = memberName.split('');
    for (let i = 0; i < temp.length; i++) {
      temp[i] = temp[i].toLowerCase();
    }
    memberName = temp.join('');
    console.log(memberName);
    this.list.forEach(item => {
      for (let i in item.members) {
        item.members[i] = item.members[i].toLowerCase();
        console.log(item.members[i]);
      }
      if (item.name === groupName) {
        for (let i = 0; i < item.members.length; i++) {
          // item.members[i].toLowerCase();
          if (item.members[i] === memberName) {
            item.members.pop();
          }
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
  members: ['Batman', 'Superman', 'Spiderman']
});
groups.addGroup({
  name: 'Avengers',
  leader: 'Iron Man',
  members: ['Hulk', 'Thor', 'Captain America']
});
// groups.print;

groups.addMember('Justice League', 'Aqua Man');
groups.print;

// groups.removeGroup('avengers');
// groups.print;
//
groups.removeMember('Justice League', 'spiderMan');
groups.print;