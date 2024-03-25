function add_gif(element) {
    var text = element.innerText;
    var replacedText = text.replace('o', '<img src="Symbol_Animation.GIF" alt="gif">');
    element.innerHTML = replacedText;
}