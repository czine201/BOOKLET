const arrows = document.querySelectorAll('.arrow');
const bookletList = document.querySelectorAll('.booklet-list');

arrows.forEach((arrow, i) => {
  const itemNumber = bookletList[i].querySelectorAll('img').length;
  let clickCounter = 0;
  arrow.addEventListener('click', () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      bookletList[i].style.transform = `translateX(${-300 * clickCounter}px)`;
    } else {
      bookletList[i].style.transform = 'translateX(0)';
      clickCounter = 0;
    }
  });
});
//booklist
document.getElementById('search-icon').addEventListener('click', function() {
        var bookList = document.getElementById('book-list');
        if (bookList.style.display === 'none') {
            bookList.style.display = 'block';
        } else {
            bookList.style.display = 'none';
        }
    });

