const nama  = document.getElementById('nama')
const alamat  = document.getElementById('alamat')
const form  = document.getElementById('form')

form.addEventListener('submit', function(event){
    var nonumber = /\d/.test(nama.value)
    if(nonumber) {
        alert('Nama tidak boleh mengandung angka');
        event.preventDefault()
    }else if ( nama.value == '' || nama.value == null){
        alert('Mohon masukkan nama anda')
        event.preventDefault()
    }else if(alamat.value == '' || alamat.value == null){
        alert('Mohon isi alamat anda dengan lengkap')
        event.preventDefault()
    }
})   