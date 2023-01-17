let carousels = $(".menu-carousel")
let indicators = $(".elipse")

carousels.hide()
indicators.hide()

let min = 0
let max = 1
let current = 0

carousels.eq(current).show(1000)
indicators.show(1000);

$("#slide-right").click(() => {
    carousels.eq(current).hide()

    var temp =  document.getElementById("selected")
    document.getElementById("unselected").id = "selected"
    temp.id = "unselected"

    current++

    if(current > max)
    {
        current = min
    }

    carousels.eq(current).show()
})

$("#slide-left").click(() => {
    carousels.eq(current).hide()
    
    var temp =  document.getElementById("selected");
    document.getElementById("unselected").id = "selected";
    temp.id = "unselected";

    current--

    if(current < min)
    {
        current = max
    }

    carousels.eq(current).show()
})