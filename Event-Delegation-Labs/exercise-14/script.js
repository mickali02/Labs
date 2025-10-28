// Exercise 14: Sortable Table
const thead = document.querySelector('thead');
const tbody = document.getElementById('table-body');

// TODO: Add click listener to thead using event delegation
// HINT: Check if clicked element is a TH with class 'sortable'
// HINT: Get the data-column attribute
// HINT: Get all rows as array: Array.from(tbody.querySelectorAll('tr'))
// HINT: Sort rows based on column index (0=name, 1=age, 2=score)
// HINT: For numbers: use parseFloat(), for strings: use localeCompare()
// HINT: Clear tbody and append sorted rows

// Your code here:
const sortOrder = {};

thead.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.classList.contains('sortable')) return;

    const columnName = target.getAttribute('data-column');
    const columnMap = { name: 0, age: 1, score: 2 }; // map names to indices
    const columnIndex = columnMap[columnName];

    // Toggle sort order: default ascending
    sortOrder[columnName] = sortOrder[columnName] === 'asc' ? 'desc' : 'asc';
    const order = sortOrder[columnName];

    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((a, b) => {
        const aText = a.children[columnIndex].textContent;
        const bText = b.children[columnIndex].textContent;
        const isNumeric = !isNaN(parseFloat(aText)) && !isNaN(parseFloat(bText));
        let comparison = isNumeric
            ? parseFloat(aText) - parseFloat(bText)
            : aText.localeCompare(bText);
        return order === 'asc' ? comparison : -comparison;
    });

    // Clear tbody and append sorted rows
    tbody.innerHTML = '';
    rowsArray.forEach(row => tbody.appendChild(row));
});