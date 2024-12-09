document.addEventListener("DOMContentLoaded", () => {
  const background = document.getElementById("background");

  // Daftar gambar
  const images = ["img/1.avif", "img/2.avif", "img/3.avif", "img/4.avif", "img/5.avif"];

  let currentIndex = 0;

  // Fungsi untuk mengganti gambar
  const changeBackground = () => {
    currentIndex = (currentIndex + 1) % images.length; // Ganti ke gambar berikutnya
    background.style.opacity = "0"; // Hilangkan gambar saat transisi

    setTimeout(() => {
      background.style.backgroundImage = `url(${images[currentIndex]})`; // Ganti gambar
      background.style.opacity = "0.5"; // Tampilkan kembali gambar
    }, 1000); // Delay sinkron dengan durasi transisi
  };

  // Ganti gambar setiap 5 detik
  setInterval(changeBackground, 5000);
});

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");

  // Menampilkan atau menyembunyikan ikon berdasarkan mode
  const iconMoon = document.getElementById("iconMoon");
  const iconSun = document.getElementById("iconSun");

  if (body.classList.contains("dark")) {
    iconMoon.classList.add("hidden");
    iconSun.classList.remove("hidden");
  } else {
    iconMoon.classList.remove("hidden");
    iconSun.classList.add("hidden");
  }
}

//kirim pesan
document.getElementById("whatsappForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Ambil nilai dari form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validasi field
  if (!name || !email || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  // Format pesan untuk WhatsApp
  var whatsappMessage = `Nama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;

  // URL WhatsApp dengan pesan yang sudah diformat
  var whatsappUrl = `https://wa.me/6281316627877?text=${whatsappMessage}`;

  // Arahkan ke URL WhatsApp
  window.open(whatsappUrl, "_blank");
});

//cek view
// Cek apakah ada data view count di local storage
let viewCount = localStorage.getItem("viewCount");

if (!viewCount) {
  viewCount = 1; // Jika belum ada, mulai dari 1
} else {
  viewCount = parseInt(viewCount) + 1; // Tambahkan hitungan
}

// Simpan kembali ke local storage
localStorage.setItem("viewCount", viewCount);

console.log(`Website ini telah dilihat sebanyak: ${viewCount} kali pada browser ini.`);

AOS.init({});
