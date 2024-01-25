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
