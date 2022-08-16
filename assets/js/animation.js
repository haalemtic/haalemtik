function slide() {
    var images = [];

    images[0] = ['illustration1.png'];
    images[1] = ['illustration2.png'];
    images[2] = ['illustration3.png'];
    images[3] = ['illustration4.png'];
    var index = 0;
    
    function change() {
      document.getElementById("slideset").src = "assets/img/"+images[index];
      if (index == 3) {
        index = 0;
      } else {
        index++;
      }
    
      setTimeout(change, 3000);
    }
    
    window.onload = change();
}

slide();