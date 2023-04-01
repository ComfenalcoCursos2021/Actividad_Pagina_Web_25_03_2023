addEventListener("DOMContentLoaded", async(e)=>{
    // https://instructormiguel.000webhostapp.com/Actividad_Pagina_Web_25_03_2023/api.php
    let peticion = await fetch("https://instructormiguel.000webhostapp.com/Actividad_Pagina_Web_25_03_2023/api.php");
    let datos = await peticion.json();
    document.querySelector(".navigation").innerHTML = datos.header;
    document.querySelector(".textBox").innerHTML = datos.section.pagrahp;
    document.querySelector(".imgBox").innerHTML = datos.section.image;
    document.querySelector(".thumb").innerHTML = datos.footer;
    document.querySelector(".sci").innerHTML = datos.nav;
})

























function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')        
}