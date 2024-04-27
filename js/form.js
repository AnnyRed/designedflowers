function handleReviewFormSubmit(event) {
    event.preventDefault();
  
    var userName = document.getElementById('userName').value;
    var userResponse = document.getElementById('userResponse').value;
    
    if (!userName || !userResponse) {
        alert('Будь ласка, заповніть обидва поля: ім\'я та відгук.');
        return;
    }
    
    var li = document.createElement('li');
  
    var div = document.createElement('div');
        div.className = 'div_1_reviews';
  
    var h5 = document.createElement('h5');
        h5.className = 'h_5_reviews';
        h5.textContent = userName;
  
    var p = document.createElement('p');
        p.className = 'p_reviews';
        p.textContent = '“' + userResponse + '”';
  
    div.appendChild(h5);
    div.appendChild(p);
  
    li.appendChild(div);
  
    document.getElementById('reviewList').appendChild(li);
  
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push({userName: userName, userResponse: userResponse});
        localStorage.setItem('reviews', JSON.stringify(reviews));

    document.getElementById('userName').value = '';
    document.getElementById('userResponse').value = '';
}

document.getElementById('reviewForm').addEventListener('submit', handleReviewFormSubmit);

var defaultCount = 2;

function addReviews(start, end, reviews) {
  var reviewList = document.getElementById('reviewList');
    for (var i = start; i < end; i++) {
        var li = document.createElement('li');
        var div = document.createElement('div');
            div.className = 'div_1_reviews';
        var h5 = document.createElement('h5');
            h5.className = 'h_5_reviews';
            h5.textContent = reviews[i].userName;
        var p = document.createElement('p');
            p.className = 'p_reviews';
            p.textContent = '“' + reviews[i].userResponse + '”';
            div.appendChild(h5);
            div.appendChild(p);
            li.appendChild(div);
            reviewList.appendChild(li);
  }
}

onload = function() {
  var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  var count = Math.min(defaultCount, reviews.length);
  addReviews(0, count, reviews);

  document.getElementById('showMore').addEventListener('click', function() {
    addReviews(count, reviews.length, reviews);

    this.style.display = 'none';
  });
};

    //   localStorage.removeItem('reviews');