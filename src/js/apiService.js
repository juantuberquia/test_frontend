

fetch("./src/data.json")
  .then(data => data.json())
  .then(resp => showInfo(resp))

const showInfo = (resp) => {
  try {
    const source = document.getElementById('template-handlebars').innerHTML;
    const partialSource = document.getElementById('character-details-partial').innerHTML;
    Handlebars.registerPartial('character-details-partial', partialSource);

    const template = Handlebars.compile(source);
    const html = template(resp);
    document.getElementById('content').innerHTML = html;
  } catch (error) {
    console.error('Error rendering template:', error);
  }

}
