document.getElementById('button1').onclick = loadText;

document.getElementById('button2').onclick = loadJSON;

document.getElementById('button3').onclick = loadREST;

// Load text
function loadText() {
    fetch('data.txt')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.getElementById('result').innerHTML = data
    })
    .catch(function(error) {
        console.log(error);
    })
}

// Load end print JSON
function loadJSON() {
    fetch('employees.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let html = '';
        data.forEach(item => {
            html += `
            <li>${item.name} - ${item.job}</li>
            `;
        });
        // Insert into the HTML
        document.getElementById('result').innerHTML = html;
    })
}

// Print the response from a REST API 

function loadREST() {
    fetch('http://picsum.photos/list')
    .then(response => {
        return response.json();
    })
    .then(images => {
        let html = '';

        images.forEach(image => {
            html += `
                <li>
                    <a target="_blank" href="${image.post_url}">View Image</a>
                    ${image.author}
                </li>
            `
        });
        // Insert into the HTML
        document.getElementById('result').innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    })
}