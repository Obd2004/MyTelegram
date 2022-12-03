let elul = document.querySelector('.users')
let elHeader = document.querySelector('.header')
let elChat = document.querySelector('.chats')
let elForm = document.querySelector('.form')
let Icon = document.querySelector('.icons')
let elIcon = document.querySelector('.my__icon')
let elIcon1 = document.querySelector('.my__icon1')
let elIcon2 = document.querySelector('.my__icon2')
let elIcon3 = document.querySelector('.my__icon3')
let elIcon4 = document.querySelector('.my__icon4')
let elIcon5 = document.querySelector('.my__icon5')
let elUlLi = document.querySelector('.ul__li')
let myUser = document.querySelector('.my__users')
let liUl = document.querySelector('.li__ul')
let elFooter = document.querySelector('.footer')
let elVxod = document.querySelector('.vxod')

let kod = document.querySelector('.kod')
elVxod.addEventListener('click', ()=>{
    if(kod.value == 11111){
        let login = document.querySelector('.loging__page')
        login.style.display = 'none'
        elHeader.classList.add('block')
    }

})

let elFooter1 = document.querySelector('.footer1')
let elFoot = document.querySelector('.foot')

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then(users=> {
    console.log(users);
    mapper(users)
})


let a = 0

function mapper(abc){
    const inp = document.createElement('li')
    inp.innerHTML = `<input type="text" placeholder="Поиск" class="input__poisk">`
    elUlLi.appendChild(inp)
    const lock = document.createElement('li')
    lock.innerHTML = `<button class="lock__btn"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-unlock" viewBox="0 0 16 16">
        <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
      </svg></button>`
    elUlLi.appendChild(lock)
    abc.forEach(e => {
        let elBtn = document.createElement('button')
        let newLI = document.createElement('li')
        newLI.innerHTML = e.username
        newLI.setAttribute('class', 'user__li')
        
        let newName = document.createElement('li')
        newName.innerHTML = e.name
        newName.setAttribute('class', 'user__name')
        elBtn.setAttribute('id', a += 1)

        let elUser = document.createElement('li')
        elUser.innerHTML = `<button type="submit" id="" class="my__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle icon" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
        </button>`

        elUser.style.marginTop = '5px'
        let elem = document.createElement('div')
        let el = document.createElement('div')

        el.appendChild(elUser)
        elBtn.appendChild(el)
        elem.appendChild(newLI)
        elem.appendChild(newName)
        elBtn.appendChild(elem)

        

        elul.appendChild(elBtn)
        elul.appendChild(myUser)
        elBtn.setAttribute('class', 'my__btn')
        

        let lock = document.querySelector('.lock__btn')
        lock.addEventListener('click', ()=>{
            elHeader.classList.remove('block')
            document.querySelector('.loging__page').style.display = 'block'
        })
        
        
    })
    let elButton = document.querySelectorAll(".my__btn")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(posts=>{
        maret(posts)
        console.log(posts);
    })
    function maret(data) {
        let newList = document.createElement('li')
        newList.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>`
        newList.setAttribute('class', 'my__list')
        elForm.appendChild(newList)

        
        for (let i = 1; i <= 6; i++) {
            
            let newBtn = document.createElement('li')
            newBtn.innerHTML = `<button type="submit" id="${i}" class="my__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle icon" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </button>`
            newBtn.setAttribute('class', 'newbtn')
            elForm.appendChild(newBtn)
        }        
        
        liUl.style.display = 'none'
        
        elButton.forEach((q)=>{
            q.addEventListener('click', ()=>{
                
                elChat.innerHTML = ''
                fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then(users=> {
                    users.forEach(y=>{
                        let newDiv = document.createElement('div')
        let elIcp = document.createElement('li')
        elIcp.innerHTML = `<svg class="xlmns" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>`
        newDiv.appendChild(elIcp)
        elIcp.setAttribute('class','asd')

        let elIcp1 = document.createElement('li')
        elIcp1.innerHTML = `<svg class="xlmns" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>`
        newDiv.appendChild(elIcp1)
        elIcp1.setAttribute('class','asd')

        let elIcp2 = document.createElement('li')
        elIcp2.innerHTML = `<button class="youbtn"><svg class="xlmns" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-layout-sidebar-reverse" viewBox="0 0 16 16">
        <path d="M16 3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3zm-5-1v12H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9zm1 0h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2V2z"/>
      </svg></button>`
        newDiv.appendChild(elIcp2)
        elIcp2.setAttribute('class','asd')
                    

        let elIcp3 = document.createElement('li')
        elIcp3.innerHTML = `
        <svg class="xlmns" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>`
        newDiv.appendChild(elIcp3)
        elIcp3.setAttribute('class','asd')
        newDiv.setAttribute('class', 'ispaniya')
        liUl.appendChild(newDiv)
        liUl.style.display = 'block'

        if(q.id == y.id){
            elIcp3.classList.add('block')
                            liUl.classList.remove('none')
                            let cla = document.querySelector('.cla')
                            
                            elFoot.innerHTML = ''

                            cla.style.display = 'block'

                            liUl.innerHTML = ''
                            let li__ul = document.createElement('li')
                            li__ul.innerHTML = `<h4>${y.username}</h4>`
                            liUl.appendChild(li__ul)
                            
                            let elDiv = document.createElement('div')
                            let elH3 = document.createElement('li')
                            elH3.innerHTML = ``
                            elH3.innerHTML = ` <div>
                            <div style="display: flex;">
                            <button type="submit" id="" class="my__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle icon" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            </button>
                            <h3 class="you__user">${y.username}</h3>
                            </div>
                            <hr class="hr__r">
                            <div style="display: flex;">
                            <svg class="neldiv" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                            <div>
                            <h6 class="svgb">${y.phone}</h6>
                            <p class="" style="margin-left: 20px;color: #6C7883;">Телефон</p>
                            <h6 class="svgb">${y.name}</h6>
                            <p style="margin-left: 20px;color: #6C7883;">О себе</p>
                            <h6 class="svgb">@${y.website}</h6>
                            <p style="margin-left: 20px;color: #6C7883;">Имя пользователя</p>
                            </div>
                                    </div>
                                    
                                    <hr class="hr__r">
                                <div class="neldiv">
                                    <svg class="top" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                                        </svg>
                                        <h6>Уведомления</h6>
                                        </div>
                                        
                                        </div>`
                            elDiv.appendChild(elH3)
                            elFoot.appendChild(elDiv)

                            let elContainer = document.querySelector('.container')
                            let elZxc = document.querySelector('.wdt')
                            // elZxc.addEventListener('click', ()=>{
                            //     cla.style.display = 'none'
                            //     elContainer.style.width = '860px'
                            // })

                            
                        }
                    })
                    
                })
                let input = document.createElement('li')
                    input.innerHTML = `<input type="text" placeholder="Xabar kiriting" class="text">`
                    input.addEventListener('keyup', (e)=>{
                        console.log(e.keyCode);
                        if(e.keyCode == 13){
                            input.textContent = ' '
                            input.innerHTML = `<input type="text" placeholder="Xabar kiriting" class="text">`
                        }
                    })
                    elChat.appendChild(input)
                data.forEach(t=>{
                    let idle = q.id *1 + 1
                    if(idle == t.userId){
                        let newH4 = document.createElement('li')
                        newH4.innerHTML = t.title
                        newH4.setAttribute('class', 'chat')
                        newH4.style.marginLeft = '20px'
                        elChat.appendChild(newH4)  
                    }
                    if(q.id == t.userId){
                        let newH3 = document.createElement('li')
                        newH3.innerHTML = t.title
                        newH3.setAttribute('class', 'chat')
                        newH3.classList.add('tg__blue')
                        elChat.appendChild(newH3)
                    }
                    
                })
                
            })
        })
        let myIcon = document.querySelectorAll('.my__icon')
        let Btn = document.querySelectorAll('.my__btn')
        myIcon.forEach((h)=>{
            elChat.innerHTML = ''
                h.addEventListener('click', ()=>{
                    elChat.innerHTML = ''

                    Btn.forEach(b => {
                        if(h.id == 2){
                            Btn[0].style.display = 'flex' 
                            Btn[1].style.display = 'flex' 
                            b.style.display = 'none'
                        }
                        else if(h.id == 1){
                            b.style.display= 'flex'
                        }
                        else if(h.id == 3){
                            Btn[2].style.display = 'flex' 
                            Btn[3].style.display = 'flex' 
                            b.style.display = 'none'
                        }else if(h.id == 4){
                            Btn[4].style.display = 'flex' 
                            Btn[5].style.display = 'flex' 
                            b.style.display = 'none'
                        }
                        else if(h.id == 5){
                            Btn[6].style.display = 'flex' 
                            Btn[7].style.display = 'flex' 
                            b.style.display = 'none'
                        }else if(h.id == 6){
                            Btn[8].style.display = 'flex' 
                            Btn[9].style.display = 'flex' 
                            b.style.display = 'none'
                        }else{
                            console.log('error');
                        }
                    })
                })
                     
        })
    }
}
