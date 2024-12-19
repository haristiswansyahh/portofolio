// Script untuk interaksi galeri
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const popup = document.createElement('div');
    const popupImage = document.createElement('img');
    const closeButton = document.createElement('span');

    // Tambahkan elemen popup ke body
    popup.classList.add('popup');
    closeButton.classList.add('popup-close');
    closeButton.innerHTML = '&times;';
    popup.appendChild(closeButton);
    popup.appendChild(popupImage);
    document.body.appendChild(popup);

    // Klik pada gambar untuk memperbesar
    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            popupImage.src = item.src;
            popup.style.display = 'flex';
        });
    });

    // Klik tombol close untuk menutup popup
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Klik di luar gambar untuk menutup popup
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});

