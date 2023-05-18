function openBook(bookId) {
    var sections = document.querySelectorAll('.book-content');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }
    document.getElementById(bookId + '-content').classList.remove('hidden');
}
