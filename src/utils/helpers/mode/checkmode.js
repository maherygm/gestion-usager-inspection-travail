export const checkmode = () => {
    if (localStorage.getItem('supermode') === null) {
        localStorage.setItem('supermode', "false");
    }

    if (localStorage.getItem('supermode') === "true") {
        document.body.classList.add('darktheme');
    } else {
        document.body.classList.remove('darktheme');
    }
}