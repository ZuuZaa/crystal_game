class Fighter {
    constructor(h, a, d) {
        this.health = h
        this.attack = a
        this.damage = d
    }
    
    fight() {
        var enemylife = enemy.health -= this.attack
        var yourlife = this.health -= enemy.damage
        
        if (yourlife <= 0) {
            $("footer .score").html("OUCH!!! YOU LOOSE :(")
            $(".restart img").attr("src", "http://www.clker.com/cliparts/2/0/B/d/D/v/button-reset-hi.png")
        }
        if (enemylife <= 0) {

            $("footer .score").html("YAHOOO! YOU WIN :)")
            $(".restart img").attr("src", "http://www.clker.com/cliparts/2/0/B/d/D/v/button-reset-hi.png")
        }
        $(".you .life").html(yourlife)
        $(".enemy .life").html(enemylife)
        var att = this.attack
        var dam = enemy.damage
        $(".s1").html(" You  atacked   " + enemy + "   for  ")
        $(".s2").html(att)
        $(".s3").html("   damage")
        att = att + this.attack.
        $(".ss1").html(enemy + "atacked" + $(this).attr("id") + "for")
        $(".ss2").html(dam)
        $(".ss3").html("damage")
        
       }
    }

var players = {

    RYU: new Fighter(120, 10, 8),

    DHALSIM: new Fighter(100, 8, 10),

    CHUNLI: new Fighter(170, 22, 25),

    GUIDE: new Fighter(150, 25, 22),
}
console.log(players)
$(".character").on("click", function () {
    if ($(".you").is(":empty")) {
        $(".you").append($(this))
        obj = $(this).attr("id")
        you = players[$(this).attr("id")]
        console.log(you)
        $("#head-tytle").html("CHOOSE ENEMY TO FIGHT")


    } else if ($(".enemy").is(":empty")) {
        $(".enemy").append($(this))
        $(".button img").attr("src", "https://cdn131.picsart.com/270423334002211.png?r240x240")
        enemy = players[$(this).attr("id")]
        console.log(enemy)

    }
})

$(".button").on("click", function () {
    you.fight()

})






