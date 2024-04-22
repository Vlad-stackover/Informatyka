function Sprawdz(form) {
    if (form.fname.value == '') {
        alert('Pole Imię musi być wypełnione');
        form.fname.focus();
        return false;
    }
    if (form.lname.value == '') {
        alert('Pole Nazwisko musi być wypełnione');
        form.lname.focus();
        return false;
    }
    if (form.mess.value == '') {
        alert('Pole "Wiadomość" musi być wypełnione');
        form.mess.focus();
        return false;
    }
    if (form.pesel.value == '') {
        alert('Pole "Pesel" musi być wypełnione');
        form.pesel.focus();
        return false;
    }
    if (form.email.value == '') {
        alert('Pole "Email" musi być wypełnione');
        form.email.focus();
        return false;
    }
    return true;
}