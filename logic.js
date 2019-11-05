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
    const jawaban = makanan_kesukaan[Math.floor(Math.random() * makanan_kesukaan.length)];
    speech.text = jawaban;
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
}