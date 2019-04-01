var r;
function random() {
    r = Math.floor(Math.random() * 120) + 19
}

random()
$(".random").html(r)

function crystalValue() {
var crystals = []
    for (let i = 0; i < 4; i++) {
        var a = Math.floor(Math.random() * 12) + 1
        while (crystals.indexOf(a) != -1) {
            var a = Math.floor(Math.random() * 12) + 1
        }
        crystals.push(a)
        let id = "#" + i
            $(id).attr("data-value", a)

        console.log (crystals)
    }
}

crystalValue()

$(".image-holder").on("click", function () {
    var sum = $(".counter")
    var count = parseInt(sum.html())+parseInt($(this).attr("data-value"))

    sum.html(count)
    console.log("r: "+r)
    console.log("count: "+count)
    console.log("loose: "+$(".loose").html())
    console.log("win: "+$(".win").html())
   if (count == r) {
        var wins = parseInt($(".win").html()) + 1
        $(".win").html(wins)
        random()
        $(".random").html(r)
        crystalValue()
        sum.html("0")
    } else if (count > r) {
        var loses = parseInt($(".loose").html()) + 1
        $(".loose").html(loses)
        random()
        $(".random").html(r)
        crystalValue()
        sum.html("0")
    }
})

