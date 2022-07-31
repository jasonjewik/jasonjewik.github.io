function loadREADME() {
    const converter = new showdown.Converter();
    const target = document.getElementById('README');

    fetch('https://raw.githubusercontent.com/jasonjewik/jasonjewik/main/README.md')
    .then((response) => response.text())
    .then((text) => converter.makeHtml(text))
    .then((html) => target.innerHTML = html);
}

window.addEventListener('load', loadREADME);