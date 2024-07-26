document.addEventListener('DOMContentLoaded', function () {
    // JavaScript to handle search button click
    document.querySelector('.enter-btn').addEventListener('click', function () {
        const searchTerm = document.querySelector('input[name="term"]').value;
        alert(`You searched for: ${searchTerm}`);
    });
});
