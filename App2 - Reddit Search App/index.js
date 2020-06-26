import reddit from './redditapi';


const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
    // Get search term
    const searchTerm = searchInput.value;
    // Get soft
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // Get limit
    const searchLimit = document.getElementById('limit').value;

    // Check input
    if (searchTerm === '') {
        // Show message
        showMessage('Please add a search term','alert-danger');
    }

    // Clear input
    // searchInput.value = '';

    // Search Reddit
    reddit.search(searchTerm, searchLimit, sortBy)
    .then(results => {
        let output = '<div class="card-columns">';
        // Loop through posts
        results.forEach(post => {
            console.log(post);
            // Check for image
            const image = post.preview ? post.preview.images[0].source.url : 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/10/Reddit-Logo-Horizontal.png';
            // Convert Timestamp


// unix timestamp
var ts = post.created_utc;

// convert unix timestamp to milliseconds
var ts_ms = ts * 1000;

// initialize new Date object
var date_ob = new Date(ts_ms);

// year as 4 digits (YYYY)
var year = date_ob.getFullYear();

// month as 2 digits (MM)
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// date as 2 digits (DD)
var date = ("0" + date_ob.getDate()).slice(-2);

// hours as 2 digits (hh)
var hours = ("0" + date_ob.getHours()).slice(-2);

// minutes as 2 digits (mm)
var minutes = ("0" + date_ob.getMinutes()).slice(-2);

// seconds as 2 digits (ss)
var seconds = ("0" + date_ob.getSeconds()).slice(-2);

// date & time as YYYY-MM-DD hh:mm:ss format: 
let formattedTime = date + "/" + month + "/" + year + " " + hours + ":" + minutes;


            output += `
            <div class="card">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${truncateText(post.selftext, 100)}</p>
    <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
    <hr>
    <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
    <span class="badge badge-dark">Score: ${post.score}</span>
    <span class="badge badge-primary">Posted: ${formattedTime}</span>
  </div>
</div>
            `;
        });

        output += '</div>';
        document.getElementById('results').innerHTML = output;
    }); 



    e.preventDefault();
} );



//Show message
function showMessage(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const searchContainer = document.getElementById('search-container');
    //Get search
    const search = document.getElementById('search');

    // Insert message
    searchContainer.insertBefore(div, search);

    // Timeout alert
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}


// Truncate text
function truncateText(text, limit) {
    const shortened = text.indexOf(' ', limit);
    if (shortened == -1) return text;
    return text.substring(0, shortened);
}