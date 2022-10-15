const btnEl = document.querySelector('.form_btn')
const popupEl = document.querySelector('.popup')
const cancelEl = document.querySelector('.close_popup')
const confirmEl = document.querySelector('.btn_confirm')
const emailEl = document.getElementById('emailInp')
const passwordEl = document.getElementById('passwordInp')
const insertEl = document.getElementById('paste_text')
const formEl = document.querySelector('.main')
const massageEl = document.getElementById('massage')


btnEl.addEventListener('click', function (e){
    const title_e = emailEl.value
    const title_p = passwordEl.value

    if(!validate(title_e , title_p) ){
        alert('enter some email and password')
        clear()
        return
    }
    if(!validateEmail(title_e)) {
        alert('email not valid');
        clear()
        return false;
    }
    const el = createElement(title_e)
    popupOpen(popupEl)
    renderElement(insertEl,el)


    confirmEl.addEventListener('click', function (e){
        formEl.classList.add('close')
        popupEl.classList.remove('open')
        const elem = createElem(title_e)
        renderElement(massageEl,elem)

    })
    e.preventDefault()
    clear()
})
function validate(title_e, title_p){
    if (!title_e.trim() || !title_p.trim() ){
        return false
    }else {
        return true
    }
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function clear(){
    emailEl.value = ''
    passwordEl.value = ''
}

cancelEl.addEventListener('click', function (e){
    popupClose(cancelEl.closest('.popup'))

})

function popupOpen(popupEl){
    popupEl.classList.add('open')
    popupEl.addEventListener('click', function (e){
        if (!e.target.closest('.popup_content')){
            popupClose(e.target.closest('.popup'))
        }
        e.preventDefault()
    })

}

function popupClose(popupActive){
    popupActive.classList.remove('open')
}

function createElement(title){
    return `
            <span>${title}</span>
        `
}

function createElem(title){
    return `
            <div class="hello">Hello, user with email ${title}</div>
            <img class="img" src="https://picsum.photos/400" alt="some picture">
        `
}

function renderElement(container, element) {
    container.innerHTML = element
}

