function getFileType(fileName) {
  let imageExtensions = ['jpg', 'png', 'gif', 'bmp', 'jpeg'];
  let videoExtensions = ['mp4', 'avi', 'mov', 'mkv', 'flv'];
  let docExtensions = ['docx', 'pdf', 'txt', 'pptx', 'xlsx'];
  let extension = fileName.split('.').pop().toLowerCase();

  if (imageExtensions.includes(extension)) {
    return "It's image file";
  } else if (videoExtensions.includes(extension)) {
    return "It's video file";
  } else if (docExtensions.includes(extension)) {
    return "It's document file";
  } else {
    return "It's unknown file";
  }
}

// console.log(getFileType('document.txt'));

// ASSERT //

console.assert(getFileType('example.jpg') === "It's image file", 'Case 1/4');
console.assert(getFileType('movie.MP4') === "It's video file", 'Case 2/4');
console.assert(getFileType('REPORT.docx') === "It's document file", 'Case 3/4');
console.assert(getFileType('unknown.XYZ') === "It's unknown file", 'Case 4/4');
console.log('All tests passed ✅');
