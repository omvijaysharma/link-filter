// Function to filter the link
document.getElementById('filterBtn').addEventListener('click', function () {
    const input = document.getElementById('inputLink').value.trim();
    
    if (!input) {
        alert('Please enter a link');
        return;
    }

    try {
        const url = new URL(input);
        // Remove all query parameters
        url.search = '';
        // Display the clean URL
        document.getElementById('outputLink').value = url.href;
    } catch (error) {
        alert('Invalid URL! Please enter a valid link.');
    }
});

// Function to copy the filtered link
document.getElementById('copyBtn').addEventListener('click', function () {
    const filteredLink = document.getElementById('outputLink').value;

    if (!filteredLink) {
        alert('No filtered link to copy!');
        return;
    }

    // Copy the filtered link to the clipboard
    navigator.clipboard.writeText(filteredLink).then(() => {
        alert('Filtered link copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy the link. Please try again.');
        console.error(err);
    });
});