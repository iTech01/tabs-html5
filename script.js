document.addEventListener('DOMContentLoaded', ()=>{
    const tabs = document.querySelectorAll('.tabs div');
    const tabsContent = document.querySelectorAll('.tabs-content div')

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabsContent.forEach((content) => {
            content.classList.remove('active')
            })
            tabs.forEach((tab) => {
            tab.classList.remove('active')
            })
            tabsContent[index].classList.add('active')
            tabs[index].classList.add('active')
        })
    })
})
    