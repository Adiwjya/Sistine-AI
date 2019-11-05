const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const search = document.querySelector('.search');
const card_row1 = document.querySelector('.c1');
const card_row2 = document.querySelector('.c2');
const card_row3 = document.querySelector('.c3');
const card_row4 = document.querySelector('.c4');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(params) {
    console.log('Voice Recognition is activated');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content2.textContent = transcript;
    
    readOutLoud(transcript);
};

// ngisi Listener ke Buttonnya

btn.addEventListener('click', ()=>{
    recognition.start();
});

// proses logika
function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.text = "Aku gak ngerti, bisa diulangi ?";

    if (message.includes('hai') || message.includes('Hai') || message.includes('halo') || message.includes('Halo') || message.includes('hay')) {
        const jawaban = salam[Math.floor(Math.random() * salam.length)];
        speech.text = jawaban; 
    } else if (message.includes('Selamat pagi') || message.includes('pagi')) {
        speech.text = 'Selamat pagi Adi';
    }else if (message.includes('selamat malam') || message.includes('malam')) {
        speech.text = 'Selamat malam Adi';
    }else if (message.includes('biodata') || message.includes('status') || message.includes('kenalan')) {
        const jawaban = biodata[Math.floor(Math.random() * biodata.length)];
        speech.text = jawaban; 
    }else if (message.includes('makanan') || message.includes('nasi goreng')) {
        if (message.includes('Go')) {
            speech.text = "Membuka halaman tujuan, mohon tunggu";
            var newmessage = message.substring(0, (message.length - 2));
            content3.value = newmessage;
            setTimeout(function wait(){
                search.submit();
            }, 5000);
        }else{
            const jawaban = makanan_kesukaan[Math.floor(Math.random() * makanan_kesukaan.length)];
            speech.text = jawaban;
        }
    }else if (message.includes('segawon') || message.includes('anjing') || message.includes('asu') || message.includes('gelut')) {
        const jawaban = meso[Math.floor(Math.random() * meso.length)];
        speech.text = jawaban;
    }else if (message.includes('dingin banget') || message.includes('cuek') || message.includes('kok gitu') || message.includes('gelut')) {
        const jawaban = respone[Math.floor(Math.random() * respone.length)];
        speech.text = jawaban;
    }else if (message.includes('com') || message.includes('Go') ) {
        if (message.includes('Go')) {
            speech.text = "Membuka halaman tujuan, mohon tunggu";
            var newmessage = message.substring(0, (message.length - 2));
            content3.value = newmessage;
            setTimeout(function wait(){
                search.submit();
            }, 5000);
        } else {
            speech.text = "Membuka halaman tujuan, mohon tunggu";
            content3.value = message;
            setTimeout(function wait(){
                search.submit();
            }, 5000);
        }
    }else{

    }

    // fitur catatan
    if (message.includes('ubah') || message.includes('edit') || message.includes('Ubah') ) {
        if (message.includes('judul') ) {
            if (message.includes('pertama') ) {
                const judul = document.querySelector('.card-title1');
                var newmessage = message.substring(19 , message.length);
                judul.textContent = newmessage;
                speech.text = "";
            }else if (message.includes('kedua') ) {
                const judul = document.querySelector('.card-title2');
                var newmessage = message.substring(16 , message.length);
                judul.textContent = newmessage;
                speech.text = "";
            }else{
                speech.text = "Perintah kurang lengkap // contoh : ubah 'judul/tittle' (pertama, kedua, ketiga, keempat) 'Judul'";
            }
        }else if (message.includes('catatan') || message.includes('body') || message.includes('isi') ) {
            if (message.includes('pertama') ) {
                const isi = document.querySelector('.card-text1');
                var newmessage = message.substring(17 , message.length);
                isi.textContent = newmessage;
                speech.text = "";
            }else if (message.includes('kedua') ) {
                const isi = document.querySelector('.card-text2');
                var newmessage = message.substring(15 , message.length);
                isi.textContent = newmessage;
                speech.text = "";
            }else{
                speech.text = "Perintah kurang lengkap // contoh : ubah 'catatan/isi/body' (pertama, kedua, ketiga, keempat)";
            }
        }
    }else if (message.includes('tambah') || message.includes('add') ) {
        if (message.includes('judul') ) {
            if (message.includes('pertama') ) {
                const judul = document.querySelector('.card-title1').textContent;
                var newmessage = message.substring(19 , message.length);
                judul.textContent = judul + newmessage;
                speech.text = "";
            }else if (message.includes('kedua') ) {
                const judul = document.querySelector('.card-title2');
                var newmessage = message.substring(16 , message.length);
                judul.textContent = newmessage;
                speech.text = "";
            }else{
                speech.text = "Perintah kurang lengkap // contoh : ubah 'judul/tittle' (pertama, kedua, ketiga, keempat) 'Judul'";
            }
        }else if (message.includes('catatan') || message.includes('body') || message.includes('isi') ) {
            if (message.includes('pertama') ) {
                const isi = document.querySelector('.card-text1');
                var newmessage = message.substring(17 , message.length);
                isi.textContent = newmessage;
                speech.text = "";
            }else if (message.includes('kedua') ) {
                const isi = document.querySelector('.card-text2');
                var newmessage = message.substring(15 , message.length);
                isi.textContent = newmessage;
                speech.text = "";
            }else{
                speech.text = "Perintah kurang lengkap // contoh : ubah 'catatan/isi/body' (pertama, kedua, ketiga, keempat)";
            }
        }
    }else if (message.includes('buat catatan') || message.includes('catatan') ) {
        if (message.includes('pertama') ) {
            const jawaban = card1;
            card_row1.innerHTML = jawaban;
            speech.text = "Catatan siap";
        }else if (message.includes('kedua') ) {
            const jawaban = card2;
            card_row2.innerHTML = jawaban;
            speech.text = "Catatan siap";
        }else if (message.includes('ketiga') || message.includes('ke-3') ) {
            speech.text = "Untuk sementara Catatan terbatas hanya 2";
        }else{
            speech.text = "Perintah kurang lengkap // contoh : buat catatan (pertama, kedua, ketiga, keempat)";
        }
    }else{

    }

    //bantuan

    content.textContent = speech.text; 
    window.speechSynthesis.speak(speech);
}



document.write('<script type="text/javascript" src="assets.js" ></script>');
