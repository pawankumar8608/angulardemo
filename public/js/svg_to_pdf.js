/**
 * @param {SVGElement} svg
 * @param {Function} callback
 * @param {jsPDF} callback.pdf
 * */
function svg_to_pdf(svg, pdfPage,options, callback) {
  svgAsDataUri(svg, options, function(svg_uri) {
    var image = document.createElement('img');

    image.src = svg_uri;
    image.onload = function() {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var doc = new jsPDF(pdfPage.orientation, 'mm',pdfPage.size);
      var dataUrl;

      canvas.width = image.width;
      canvas.height = image.height;
     // context.drawImage(image, 0, 0, image.width, image.height);
	   context.drawImage(image, 10, 10);
      dataUrl = canvas.toDataURL('image/png');
     // doc.addImage(dataUrl, 'PNG', 0, 0, image.width, image.height);
	   doc.addImage(dataUrl, 'PNG', 10, 10);

      callback(doc);
    }
  });
}

/**
 * @param {string} name Name of the file
 * @param {string} dataUriString
*/
function download_pdf(name, dataUriString) {
  var link = document.createElement('a');
  link.addEventListener('click', function(ev) {
    link.href = dataUriString;
    link.download = name;
    document.body.removeChild(link);
  }, false);
  document.body.appendChild(link);
  link.click();
}