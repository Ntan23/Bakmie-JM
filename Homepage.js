let our_menu_carousels = $(".menu-carousel")
let elipse_indicators = $(".elipse")

our_menu_carousels.hide();
elipse_indicators.hide();

let min = 0
let max = 1
let current = 0

our_menu_carousels.eq(current).show(1000)
elipse_indicators.show(1000)

$("#slide-right").click(() => {
    our_menu_carousels.eq(current).hide()

    var temp =  document.getElementById("selected")
    document.getElementById("unselected").id = "selected"
    temp.id = "unselected"

    current++

    if(current > max)
    {
        current = min
    }

    our_menu_carousels.eq(current).show()
})

$("#slide-left").click(() => {
    our_menu_carousels.eq(current).hide()
    
    var temp =  document.getElementById("selected");
    document.getElementById("unselected").id = "selected";
    temp.id = "unselected";

    current--

    if(current < min)
    {
        current = max
    }

    our_menu_carousels.eq(current).show()
})
