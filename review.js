var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var closeBtn = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const stars = document.querySelectorAll('.star');

stars.forEach((star, idx) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            if (i <= idx) {
                s.style.color = '#ffb700';
            } else {
                s.style.color = '#ccc';
            }
        });
    });
});