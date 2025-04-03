function convertMarkdownToHTML(markdownText) {
    var converter = new showdown.Converter();
    return converter.makeHtml(markdownText);
}

fetch('../md/resume.md')
    .then(response => response.text())
    .then(data => {
        const htmlContent = convertMarkdownToHTML(data);
        document.querySelector('.content').innerHTML = htmlContent;
    })
    .catch(error => console.error('Error Open File:', error));
