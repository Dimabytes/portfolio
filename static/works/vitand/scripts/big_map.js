ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("big_map", {
            center: [50.693160, 46.145770],
            zoom: 5
        }, {
        });


    myMap.geoObjects
        .add(new ymaps.Placemark([53.195538, 50.101783], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
        .add(new ymaps.Placemark([49.992167, 36.231202], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
        .add(new ymaps.Placemark([45.035470, 38.975313], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
        .add(new ymaps.Placemark([44.723912, 37.768974], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
        .add(new ymaps.Placemark([55.740776, 52.406384], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
        .add(new ymaps.Placemark([54.735147, 55.958727], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
        .add(new ymaps.Placemark([55.159897, 61.402554], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
        .add(new ymaps.Placemark([51.128207, 71.430411], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
        .add(new ymaps.Placemark([52.285577, 76.940947], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
        .add(new ymaps.Placemark([54.989342, 73.368212], {
            balloonContent: '<div class="map_wrap"><div class="map_text"><h5>Lorem ipsum lorem ipsum lorem</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do eiusmod tempor incididunt ut labore adipisicing elit, sed do</p><a href="#">Подробнее</a></div><div style="background-image: url(../img/map_image.jpg)" class="map_img"></div></div>'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#f2494a'
        }))
}
