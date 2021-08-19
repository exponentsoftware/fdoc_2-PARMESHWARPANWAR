// 1
function createArrayOfArrays(countries) {
  var countriesArray = new Array();
  for (i in countries) {
    let a = new Array();
    a.push(i.charAt(0).toUpperCase + i.slice(1).toLowerCase);
    a.push(i.slice(0, 3));
    a.push(i.length);
    countriesArray.push(a);
  }
  return countriesArray;
}

// 2

function scoresGreaterThan85(users) {
  const result = users.filter((user) => user.scores > 85);
  return result;
}

function addUser(users, newuser) {
  let result = users.filter((user) => user.name == newuser.name);
  if (result.length > 0) {
    return "User already exists";
  }
  users.push(newuser);
}

function addUserSkill(users, user, skill) {
  for (i in users) {
    if ((i.name = user.name)) {
      i.skill.push(skill);
    }
  }
}

function editUser(users, user) {
  for (i in users) {
    if ((i.name = user.name)) {
      i = user;
    }
  }
}
