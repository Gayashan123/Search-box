const students = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Emily Davis",
    "Michael Miller"
];

let searchBox = document.getElementById('search-box');
let suggestionBox = document.getElementById('suggestion-box');

searchBox.addEventListener('input', () => {
    const input = searchBox.value.toLowerCase();
    suggestionBox.innerHTML = '';

    if (input === '') {
        suggestionBox.style.display = 'none';
        return;
    }

    const matches = students.filter((item) => {
        return item.toLowerCase().includes(input);
    });

    if (matches.length > 0) {
        matches.forEach(match => {
            let suggestionItem = document.createElement('div');
            suggestionItem.textContent = match;
            suggestionItem.className = 'suggestion-item';

            suggestionItem.addEventListener('click', () => {
                searchBox.value = match;
                suggestionBox.innerHTML = '';
                suggestionBox.style.display = 'none';
            });

            suggestionBox.appendChild(suggestionItem);
        });
        suggestionBox.style.display = 'block';
    } else {
        let noMatchItem = document.createElement('div');
        noMatchItem.textContent = 'No matches found';
        noMatchItem.className = 'no-match';
        suggestionBox.appendChild(noMatchItem);
        suggestionBox.style.display = 'block';
    }
});
