function malumotlarniKorsatish() {
    // Inputlardan qiymatlarni olish
    const ism = document.getElementById('ism').value;
    const familiya = document.getElementById('familiya').value;
    const yosh = document.getElementById('yosh').value;
    const manzil = document.getElementById('manzil').value;

    // Kiritilgan ma'lumotlarni tekshirish
    if (!ism || !familiya || !yosh || !manzil) {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    // Natija div elementini olish
    const natija = document.getElementById('natija');

    // Natijani HTML formatida tayyorlash
    const natijaMalumot = `
        <h3>Sizning ma'lumotlaringiz:</h3>
        <p><strong>Ism:</strong> ${ism}</p>
        <p><strong>Familiya:</strong> ${familiya}</p>
        <p><strong>Yosh:</strong> ${yosh}</p>
        <p><strong>Manzil:</strong> ${manzil}</p>
    `;

    // Natijani sahifaga chiqarish
    natija.innerHTML = natijaMalumot;
    natija.classList.add('active');
}  