/** @module login-script */
/**
* Membuat variabel loginFormElement untuk tampilan form
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input email
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel inputPasswordElement untuk tampilan input password
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk untuk menyimpan email sementara
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk untuk menyimpan password sementara
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Commnet: menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /** 
  * membuat variabel email untuk menyimpan nilai email ketika button ditekan.
  * @constant {string}
  */
  const email = inputEmailElement.value;

  /** 
  * membuat variabel password untuk menyimpan nilai password ketika button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;

  /* Comment: Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment: Jika sesuai maka program akan  berpindah ke halaman home.*/
    goToHome();
  } else {
    
    /* Comment: Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
