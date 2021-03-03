const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === undefined || +members === 0) return false;
  let j = 0;
  const membersID = [];
  let secretName = "";

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string" && Number.isNaN(+members[i])) {
      let friendName = members[i].trim();
      console.log(friendName, friendName[0].toUpperCase());
      membersID[j] = friendName[0].toUpperCase();
      j++;
    }
  }
  console.log(membersID);

  for (let i = 0; i < membersID.length; i++) {
    for (let j = 0; j < membersID.length; j++) {
      if (membersID[j] > membersID[j + 1])
        [membersID[j], membersID[j + 1]] = [membersID[j + 1], membersID[j]];
    }
  }
  for (let i = 0; i < membersID.length; i++) {
    secretName += membersID[i];
  }

  if (secretName !== "") {
    return secretName;
  } else {
    return false;
  }
};
