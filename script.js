document.getElementById('submitBtn').addEventListener('click', async function() {
    const newsText = document.getElementById('newsText').value;

    if (!newsText.trim()) {
        alert("Please enter some text to analyze!");
        return;
    }

    // Simulating the result (You can replace this with an actual API call to your Flask backend)
    const result = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newsText })
    });
    const data = await result.json();

    // Update result on the webpage
    const resultElement = document.getElementById('result');
    if (data.is_fake) {
        resultElement.textContent = "This is fake news!";
        resultElement.classList.add('false');
        resultElement.classList.remove('true');
    } else {
        resultElement.textContent = "This news is real.";
        resultElement.classList.add('true');
        resultElement.classList.remove('false');
    }
});
