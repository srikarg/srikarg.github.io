// https://github.com/ghiculescu/jekyll-table-of-contents
$(function() {
  let headers = $('h1, h2, h3, h4, h5, h6').filter(function() {
    return this.id;
  }); // get all headers with an ID

  let output = $('.toc');

  if (!headers.length || !output.length) return;

  let get_level = function(ele) {
    return parseInt(ele.nodeName.replace('H', ''), 10);
  };

  let highest_level = headers
    .map(function(_, ele) {
      return get_level(ele);
    })
    .get()
    .sort()[0];

  let level = get_level(headers[0]),
    this_level,
    html = '<ol>';

  headers.each(function(_, header) {
    this_level = get_level(header);

    if (this_level === level)
      // same level as before; same indenting
      html += `<li><a class="smooth-scroll" href="#${header.id}">${header.innerHTML}</a>`;
    else if (this_level < level)
      // higher level than before; end parent ol
      html += `</li></ol></li><li><a class="smooth-scroll" href="#${header.id}">${header.innerHTML}</a>`;
    else if (this_level > level)
      // lower level than before; expand the previous to contain a ol
      html += `<ol><li><a class="smooth-scroll" href="#${header.id}">${header.innerHTML}</a>`;
    level = this_level; // update for the next one
  });
  html += '</ol>';

  output
    .hide()
    .html(html)
    .show('fast');
});
