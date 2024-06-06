document.getElementById('fetchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = document.getElementById('urlInput').value;

    let response;

    fetch(url)
        .then(result => {
            response = result;

            return Promise.all([
                result.clone().json().catch(() => null),
                result.clone().text()
            ]);
        })
        .then(([ json, text ]) => {
            const decodedResponse = { status: response.status, body: json || text };
            console.log(decodedResponse, response);
            document.getElementById('response').textContent = JSON.stringify(decodedResponse);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('response').textContent = 'Error: ' + error.message;
        });
});
