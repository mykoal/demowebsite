function openBook(id) {
    var sections = document.querySelectorAll('.content');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }
    document.getElementById(id).classList.remove('hidden');
}