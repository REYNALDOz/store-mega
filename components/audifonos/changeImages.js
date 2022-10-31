function changeImage(this) {
    console.log('this')
    var img = document.getElementById("main_product_image");
    img.src = this;
}
function changeImage(img) {
        document.getElementById("mainImage").src = img;
      }