document.querySelectorAll('.image').forEach((image) => {
    const picture = image.closest('.picture');
    const popup = picture.querySelector('.popup');
    const closeBtn = popup.querySelector('.close-btn');

    image.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});

document.getElementById("menu-icon").addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
  });
  

