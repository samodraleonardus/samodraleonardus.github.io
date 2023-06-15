const container1 = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs= document.querySelectorAll('.thumb');
container1.addEventListener('click', function(e){
// console.log(e.target);
//  klik thum hasil console <img src="/Gambar/taan-huyn-kTjH9K98GS0-unsplash.jpg" alt="" class="thumb">
if(e.target.className =='thumb'){
jumbo.src=e.target.src ;
jumbo.classList.add('fade');
// <img src="http://127.0.0.1:5500/Gambar/lance-reis-Px6zfDrki40-unsplash.jpg" alt="" class="jumbo fade">
// saat di klik thum yang lain atau kedua kali fade tidak muncul karena class fade sudah ada, karena
// klik pertama, untuk muncul kan lagi harus refresh browser  
// ditambahkan setTimeout(function() untuk menghilangkan fade setelah waktu tertentu
setTimeout(function(){
                jumbo.classList.remove('fade');
            },500);           
            // saat thum di klik tambahkan class active
            // <img src="/Gambar/taan-huyn-kTjH9K98GS0-unsplash.jpg" alt="" class="thumb active">
            // saat klik thum yang lain mempunyai class active
            // thumb yang di klik sebelumnya tetap mempunyai class active
            // yang kita inginkan thumb yang sebelumnya di klik tidak mempunya class active            
                    thumbs.forEach(function(thumb){
                        // if(thumb.classList.contains('active')){
                        //     thumb.classList.remove('active');
                        // }
                        thumb.className = 'thumb';
                    });
                    e.target.classList.add('active');
}
});




