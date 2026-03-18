function copy_notification(text){
    let obj = document.createElement("div")
    obj.textContent="Copied \""+text+"\" to Clipboard!"
    obj.classList.add("notification")

    document.getElementById("notification").appendChild(obj)

    let timer = setTimeout(removeNotification, 5000)
    obj.onclick = () => {
        clearTimeout(timer)
        removeNotification()
    }
    function removeNotification(){
        obj.classList.add("remove")

        obj.addEventListener("transitionend", () => {
            obj.remove()
        }, { once: true })
    }
} 

function copytext(element){
    navigator.clipboard.writeText(element)
    copy_notification(element)
}

function openurl(url){
    window.open("https://"+url)
}
