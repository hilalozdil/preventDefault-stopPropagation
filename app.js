let usePrevent = true;
let useStop = true;

document.querySelector('.link').addEventListener('click', function (e) {
    if (usePrevent) {
        e.preventDefault();
        alert("preventDefault aktif olduğundan link tıklanması engellendi.");
    } else {
        alert("Linke tıklandı.")
    }
});

document.querySelector('.form').addEventListener('submit', function (e) {
    if (usePrevent) {
        e.preventDefault();
        alert("preventDefault aktif olduğundan form gönderimi engellendi");
    } else {
        alert("Form gönderildi");
    }
});

document.querySelector('.check').addEventListener('click', function (e) {
    if (usePrevent) {
        e.preventDefault();
        alert("preventDefault aktif olduğundan checkbox işaretlenmesi engellendi!");
    } else {
        alert("checkbox işaretlendi");
    }
});

document.querySelector('.outer').addEventListener('click', function (e) {
    alert("Dıştaki div'e tıkladınız");
});

document.querySelector('.inner').addEventListener('click', function (e) {
    if (useStop) {
        e.stopPropagation();
        alert("stopPropagation aktif olduğundan iç div'e tıklandı, dış div etkilenmedi.");
    } else {
        alert("önce iç div'in mesajı ardından dış div'in mesajı görüntülenir.");
    }
});


