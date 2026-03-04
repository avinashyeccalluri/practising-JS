const user = {
    name: 'Alice',
    settings: {
        theme: 'dark',
        notifications: true
    }
};

const userCopied = {...user , settings: { ...user.settings  , theme: 'light'}};

console.log(user)
console.log(userCopied)

const setB = new Set(listB);
const intersection = listA.filter(id => setB.has(id));