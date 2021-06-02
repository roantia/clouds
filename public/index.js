const popupOverlay = document.querySelector('.popup-overlay')
const keywordsContainer = document.querySelector('.keywords')
const gallery = document.querySelector('.gallery')
let visible

let imgCount = 0
let keywordTitle = document.createElement('div')
keywordTitle.innerHTML = 'Filter by keyword:'
keywordTitle.className = 'keyword'
keywordTitle.id = 'filter'
keywordsContainer.appendChild(keywordTitle)

function ajax(a,b,c){ // Url, Callback, just a placeholder
 c=new XMLHttpRequest;
 c.open('GET',a);
 c.onload=b;
 c.send()
}

for (let k = 0; k < database.length; k++) {
    let keyword = database[k][0][0].split('/')[0]
    let keywordElement = document.createElement('div')
    keywordElement.className = 'keyword'
    keywordElement.innerHTML = `>> ${keyword}`
    keywordsContainer.appendChild(keywordElement)

    let dateContainer = document.createElement('div')
    for (let m = 0; m < database[k].length; m++) {
        let month = database[k][m][0].split('/')[1]
        let monthElement = document.createElement('div')
        monthElement.className = 'month'
        monthElement.innerHTML = `>> ${month} 2021`
        
        dateContainer.appendChild(monthElement)
        dateContainer.style.display='none'
        keywordElement.appendChild(dateContainer)
        imgCount += database[k][m].length

        monthElement.addEventListener('click', () => {
            gallery.innerHTML = ''
            for (let i = 0; i < database[k][m].length; i++) {
                let path = database[k][m][i]
                if (!path.includes(".txt")) {
                    let img = document.createElement('img')
                    img.src = `img/${path}`
                    gallery.appendChild(img)

                    let lang = path.split('/')[2].split('-')[0]
                    let txtpath = window.location.origin + '/img/' + path.split('.')[0] + '.txt'

                    

                    img.addEventListener('click', () => {
                        ajax(txtpath,function(){
                            alert(this.response);
                        });
                        let current = img.offsetHeight
                        img.style.height = (current=='60') ? 'auto' : '60px'
                    })

                }
            }
        })   
    }
    keywordElement.addEventListener('click', () => {
        let current = dateContainer.style.display
        dateContainer.style.display = (current=='block') ? 'none' : 'block'
    })
    
}
function loadImages() {
    for (let r = 0; r < imgCount; r++) {
        let krandom = Math.floor(Math.random()*database.length)
        let mrandom = Math.floor(Math.random()*database[krandom].length)
        let irandom = Math.floor(Math.random()*database[krandom][mrandom].length)
        let path = database[krandom][mrandom][irandom]

        if (!path.includes(".txt")) {
            let img = document.createElement('img')
            img.src = `img/${path}`
            gallery.appendChild(img)
            img.addEventListener('click', () => {
                let current = img.offsetHeight
                img.style.height = (current=='60') ? 'auto' : '60px'
            })
        }
    }
}
setTimeout(loadImages, 100)


function togglePopup(element) {
    visible = element.id
    const popup = document.querySelector('#' + visible+ '.popup')
    
    popup.style.display = 'block'
    popupOverlay.style.display = 'block'
}
function closePopup(element) {
    const popup = document.querySelector('#' + visible+ '.popup')
    
    popup.style.display = 'none'
    popupOverlay.style.display = 'none'
}
