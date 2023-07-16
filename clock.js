let isim=document.querySelector('#myName');
myName.innerHTML= prompt("İsminiz?");

    function zamanGuncelle() {
        var guncelZaman = document.querySelector('#myClock');
        var tarih = new Date();

        var saat = tarih.getHours(); 
        var dakika = tarih.getMinutes(); 
        var saniye = tarih.getSeconds();

        var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        
        var gun = gunler[tarih.getDay()];

        var zaman = `${saat}:${dakika}:${saniye}, ${gun}`;

        guncelZaman.innerHTML = zaman;

        setTimeout(zamanGuncelle, 1000);
    }
zamanGuncelle();
