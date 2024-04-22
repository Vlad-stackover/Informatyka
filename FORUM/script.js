function Sprawdz(form) {
    if ((form.nick.value || form.topic.value || form.title.value || form.text.value) == '') {
        alert('Empty field!!!');
        form.focus();
        return false;
    }
    
    return true;
}