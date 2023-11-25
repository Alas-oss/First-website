let photosIndx = 1;
showPhotos(photosIndx);

function plusPhotos(n) {
  showPhotos(photosIndx += n);
}

function currentPhotos(n) {
  showPhotos(photosIndx = n);
}

function showPhotos(n) {
  let photos = document.getElementsByClassName("myPhotos");
  let cnt;
  if (n > photos.length) {slideIndx = 1}
  if (n < 1) {photosIndx = photos.length}
  for (cnt = 0; cnt < photos.length; cnt++) {
    photos[cnt].style.display = "none";
  }
  photos[photosIndx-1].style.display = "block";

}
