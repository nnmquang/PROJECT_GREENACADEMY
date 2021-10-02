const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".nav-link");
const panes = $$(".tab-pane");

const tabActive = $(".nav-link.active")
const line = $("#myTab .line")
console.log([line]);

// console.log(tabs, panes)

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        // console.log(pane)
        // console.log(this);
        $('.nav-link.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        this.classList.add('active');
        pane.classList.add('active');
        
    };
});




