const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
const displayBuddies = data => {
    const buddiesContainer = document.getElementById('buddies-container');
    const buddies = data.results;
    for (const buddy of buddies) {
        const buddyInfo = document.createElement('p');
        buddyInfo.innerText = `Buddy's name: ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}`;
        buddiesContainer.appendChild(buddyInfo);
    }
}
loadBuddies();