document.addEventListener('DOMContentLoaded', () => {
    const fname = document.getElementById('name');
    const pass = document.querySelector('#pass');
    const mail = document.querySelector('#email');
    const num = document.querySelector('#num');

    let form = document.querySelector('#form');

    // function for validation
    form.addEventListener('submit',(e)=> {
        e.preventDefault();
        validate();
    });

    const validate = () => {
        const n = fname.value.trim();
        const pas = pass.value.trim();
        const m = mail.value.trim();
        const t = num.value.trim();

        if (n === '') {
            seterror(fname,"**please fill");
        } else {
            setright(fname);
        }

        if (m === '') {
            seterror(mail,'**please fill');
        } else if (!Emailval(m)) {
            seterror(mail,"**please check the email");
        } else {
            setright(mail);
        }

        if (pas === '') {
            seterror(pass,'**please fill');
        } else if (pas.length <= 6) {
            seterror(pass,'**password must be atleast 7 characters');
        } else {
            setright(pass);
        }

        if (t === '') {
            seterror(num,'**please fill');
        } else if (t.length <= 9) {
            seterror(num,'**number must be 10 characters');
        } else {
            setright(num);
        }
    };

    const seterror = (e, message) => {
        const p = e.parentElement;
        const child = p.querySelector('.error-message');
        const emoji = p.querySelector('.symbol');
        child.innerText = message;
        p.classList.add('error');
        p.classList.add('emoji');
        p.classList.remove('right');
        p.classList.remove('symbol');
    };
    
    const setright = (element) => {
        const p = element.parentElement;
        const child = p.querySelector('.error-message');
        child.innerText = '';
        p.classList.add('right');
        p.classList.remove('error');
    };
    
    const Emailval = (email) => {
        return String(email).toLowerCase().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    };
});