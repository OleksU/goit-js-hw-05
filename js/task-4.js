const getTotalBalanceByGender = (users, gender) => {
    const balanceArr = [];
    for (const user of users) {
        if (user.gender === gender){
            balanceArr.push(user.balance);
        }
    }
    let totalBalance = 0;
    for (const bal of balanceArr){
        totalBalance += bal;
    }
    return totalBalance;
}

// const getTotalBalanceByGender = (users, gender) => {
//      const totalBalance = users.filter(item => {
//         item.gender.includes(gender)}).reduce((total, num) => {
//         return total + num.balance;},0);
//      return totalBalance;
// }

const allUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers, "male"));

console.log(getTotalBalanceByGender(allUsers, "female"));