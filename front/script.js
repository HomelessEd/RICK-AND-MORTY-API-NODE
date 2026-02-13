const characterInput = document.getElementById('characterName');
const characterInfo = document.getElementById('characterInfo');

function getCharacterInfo() {
    const name = characterInput.value.trim();

    fetch (`http://localhost:3000/characters/${encodeURIComponent(name)}`)
    .then(response => {
        if (!response.ok) throw new Error('Sorry they are not here');
        return response.json();
    })
    .then(data => {
        characterInfo.innerHTML = '';
        data.forEach(char => {
        
        characterInfo.innerHTML += `
        <h2>${char.name}</h2>
        <img src="${char.image}" alt="${char.name}">
        <p>Status: ${char.status}</p>
        <p>Species: ${char.species}</p>
        <p>Gender: ${char.gender}</p>
        <p>Origin: ${char.origin.name}</p>
      `;
    });
})
    .catch(error => {
        characterInfo.innerHTML = `<p> Cannot get Character`;
    });
}
