namespace SpriteKind {
    export const NPC = SpriteKind.create()
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    animation.runImageAnimation(Dzakir, [img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `], 500, true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    animation.runImageAnimation(Dzakir, assets.animation`
        NgadiniLeft
    `, 500, true)
})
function doQuiz(_level: number) {
    
    if (_level == 1) {
        result = 0
        if (story.isMenuOpen()) {
            ask1 = randint(0, 9)
            ask2 = randint(0, 9)
            if (posQuiz % 2 == 1) {
                result = ask1 + ask2
                game.showLongText("Calculated:\\n" + convertToText(ask1) + "+" + convertToText(ask2), DialogLayout.Top)
                story.showPlayerChoices(convertToText(result), convertToText(result + randint(1, 4)))
                posQuiz += 1
            } else {
                result = ask1 - ask2
                if (result < 0) {
                    result = ask2 - ask1
                    game.showLongText("Calculated:\\n" + convertToText(ask2) + "-" + convertToText(ask1), DialogLayout.Top)
                    story.showPlayerChoices(convertToText(result), convertToText(result - randint(1, 3)))
                }
                
                game.showLongText("Calculated:\\n" + convertToText(ask1) + "-" + convertToText(ask2), DialogLayout.Top)
                story.showPlayerChoices(convertToText(result), convertToText(result - randint(1, 3)))
                posQuiz = 1
            }
            
            if (result == parseInt(story.getLastAnswer())) {
                info.changeScoreBy(10)
            } else {
                info.changeScoreBy(-5)
            }
            
        }
        
    } else if (_level == 2) {
        
    } else {
        
    }
    
}

controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    animation.runImageAnimation(Dzakir, [img`
                . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 8 f . . . 
                        . . . f f e e e e f 8 8 8 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 8 8 8 8 e f . 
                        . . . f e 8 8 8 f f f f e 8 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . f f e e 4 4 4 e f . . . 
                        . . . . . 4 d d e 8 8 8 f . . . 
                        . . . . . e d d e 8 8 8 f . . . 
                        . . . . . f e e f 4 2 2 f . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . . . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 8 f . . . 
                        . . . f f e e e e f 8 8 8 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 8 8 8 8 e f . 
                        . . . f e 8 8 8 f f f f e 8 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e e e d d d f . . . 
                        . . . . . f 4 d d e 4 e f . . . 
                        . . . . . f e d d e 8 8 f . . . 
                        . . . . f f f e e f 2 2 f f . . 
                        . . . . f f f f f f f f f f . . 
                        . . . . . f f . . . f f f . . .
            `, img`
                . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 8 f . . . 
                        . . . f f e e e e f 8 8 8 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 8 8 8 8 e f . 
                        . . . f e 8 8 8 f f f f e 8 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . f f e e 4 4 4 e f . . . 
                        . . . . . 4 d d e 8 8 8 f . . . 
                        . . . . . e d d e 8 8 8 f . . . 
                        . . . . . f e e f 4 2 2 f . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . . . . f f f . . . . . .
            `, img`
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 8 f . . . 
                        . . . f f e e e e f 8 8 8 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 8 8 8 8 e f . 
                        . . . f e 8 8 8 f f f f e 8 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . 4 d d e 4 4 4 e f . . . 
                        . . . . e d d e 8 8 8 8 f . . . 
                        . . . . f e e f 4 4 2 2 f f . . 
                        . . . . f f f f f f f f f f . . 
                        . . . . . f f . . . f f f . . .
            `], 500, false)
})
function initGame() {
    
    scene.setBackgroundImage(img`
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444cccccccccc
                ccccccccc4e4ceeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444cccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444ccccccc
                ccccccce22222222224bcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444ccccccc
                ccccccce2111e2111eeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444ccccccc
                cccccce42111e2b1b2e54cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444cccc
                ccccc44b211de21112b44ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444444444ccc
                ccccc4e42222222222c4ecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccecc4444444e44cccc
                cccccccee22d11b222ceeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444ccc444ccccccc
                cccccceec221d1c22ecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc4444ccce44ccccccc
                ccccc54ece2111122c444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeccceeeccccccc
                cccccc4fbc2cccc2ce1e4cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccc1bc42222ecc11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccce11b4e2eebcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccfcccfcccfcfcccc
                cccccccc1fdc11cc1dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccffcccfcfcccccc
                cccccccccc1c1d11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcfffcfffcfffcccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccbcbbebbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccbebccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbcbcccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcccbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
                bcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbcbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbcc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc
                bccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
                cecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcccbbccc
                cceeccccccccccccccceecccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbb
                ccbeebbccccccccccccccebcccccccccccccccccccccccccccccccccccccccccccccceeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ecccccccccccccccccccccbbcceecccccccccccccccccccccccccccccccccccccceebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cccccccccccccccccccbbbbebbebbeecccccccccccccccccccccccccccccceeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccccceeeebeeecccccccccccccceeeeecccccccccceeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccccccccccccccccccccccceeeeeeeeeccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cccccccccccccccccccccccccccccccccebeecccceeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
                bbecccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
                eeeeccccccccccccccccccccccccccccceeeeeeeeeeebebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cccccccccccccccccccceeeeeeebeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccceeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccceeeeeeebeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cccccccccccccccccccceeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccceeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccceeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccceeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccceeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbbbbbbdbbbbdbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                eeccceeeeeeeeeeeeebbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                eeeeeeeebbeeeeeebbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ebeeebbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                eeeebeeeeeeceeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                eeeeeeebeeebbeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbbdbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbeeeeeeeeeebeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                eebeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbeeeeeeeeeeeeeeeeeeeeebdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4eeeebbbbbbbbbbbb
                ebbbeeeeebebeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbddeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbb4bbbbbbbbbbbbbbbeeeebbbbbbbbbbbbb
                eeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbddeeddeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbb4bbbbbbbbbbbbbbbbe4eeeebbbbbbbbbbbbb
                bbeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeddedddddeeeeeeeeeeeeeeeeeeeeeeeeebebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                eeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ebbeeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeebbbbbbedbbbbbbbbbbebbbbbbeeeedeeeeeeeeee444444eeeeeebbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                eebbebeeebbeeebbbebeeeebbbbeeeeeeeeeeeeeeeeeeebbbbbeeeebbbbbbbbbbdbbeeeeee4444bb111dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                eeeeeeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeb11dddddddddddddbbbbbbbbbbbbbbbbbbbeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                eeeeeeeebbbbbbbbebbbbeeeeeeeeeebeeeeeeeebbbbbbbeeeeeebeeeeeeeeeeeeee4dddddddd1111ddddddd444dd4444444bbb444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebeeebbe
                eeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebb4be4beeeeedde444d4eee4444bd111111ddddd444444444444444444444444444444bb44444bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebe44eeebbeee444444444444444ee4d444444ddddd1111111ddddd4444444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeee4444ee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444dd51111111d5dd44beeee444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                ebeeeeeeeeeeeeeeeeeeeeeeeeebbeeeebbeeeee444444444444444444ee44444e44444444dd111111dddd44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeece4444444444fce444444444444444444444eeeeeeeeeeeeeee44ddddddddd1bddd444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                e4eee444444444444fffcf44444beecccccf44444444444444444eeeeeeeeeeeeeee444444dddddddddddd44444444444444e4eeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                44eee4444444444efffffffffffccccccccccc44444444e4e4eeeeeeeeeeeeeeeeee444444444dddddd444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeee444ffffffffffffcccccccccccccccf44eeeeceee4eeeeeeeeeeeeeeee4444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeececccccccccccccccceeeeeeeeeeeeeeee
                eeeeeeeeeeeffffffffffffffffffccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444eeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccc
                eeeeeeeeefffffffffffffffffffffccccccccccccccccceeeeeeeeee4eeeeeeeeeeeeee4444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccc
                cccccccffffffffffffffffffffffffccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeee444444444444eeeeeeee44eeeee4e4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceccccccccccccccc
                cccccfffffffffffffffffffffffffcccccccccccccccccceeeeeeeeeeeee44eeeeeeee4eee44444444eeeeeee4444eee4e4e4eeeee44eeeeee4eeeeeeeeeeeeeeeeeeecccccccccccccccccccccccc
                ccffffffffffffffffffffffffffcfccccccecceeeeeeceeeeeeeee44e4eeeeeeeeeeeeeeee44e44d444444eee4eeeeeeeeeee44ee4eeeeeee44ee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                fffffffffffffffffffffffffcffccccceffffffff4eeeeeeeeeee444eeeeeeeeeeeeeeeeee4eeeee44e4e444444444eeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec
                fffffffffffffffffffffffffffffffffffffffffccc4444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeffeeecffff
                ffffffffffffffffffffffffffffffffffffffffffccfcccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeee4eeeeeeecceeeeeeeeeeeeeeeeeeeecfffffffffff
                fffffffffffffffffffffffffffffffffffffffffffcccfcccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeecccfccecceeeeeeeeeeeeeccccccceeeeeeeeeeeeeeeeccffffffffff
                ffffffffffffffffffffffffffcfffffffffffffffffffcfcccccccceeececceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeecccccccccccccceccffcccfffcccccccccfcffffffffffffffffffff
                ffffffffffcffffffffffffffffffffffffffffffffffffffffccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeccccfffffffffffffffffffffffffffffffffffffffffffffffffff
                fcfffffffeffffffffffcfffcfffcfffcfffffcffffffffffffffcccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffcfcfffffffffffffcfccfffffffccffcfcccccccccceeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffff
                ccfffffffffffffffffcfcfffffffffcfffcfcffccffffcefffcfffcccffcccccceeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffcffffffeffffcccefcfffccfcccccceeeeeeeeeeeeeeeeeeeecccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffccccccceeeeeeeeeeeeeeeecccccccccfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffcceccccceeeeeeeeeeeccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfcfcfccecceeeeeeeeeecccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcceceeefccfccccfffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffcfffffffefcffffffffccfffffffffffffffffffffffffffffeefcfffcfecffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffccffffffffefcffccffffcffffffffffffffffffffffcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffcffffffffffffffffffffffffffffffffccffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcffffffffffcfffffffffffffffffffffffffffffffffffffff
    `)
    game.setDialogFrame(assets.image`
        frameDialog
    `)
    isMenu = false
    Dzakir = sprites.create(assets.image`
        Ngadini
    `, SpriteKind.Player)
    scene.cameraFollowSprite(Dzakir)
    tiles.placeOnRandomTile(Dzakir, sprites.dungeon.collectibleInsignia)
    controller.moveSprite(Dzakir)
    posQuiz = 0
    info.setScore(0)
    NPC1 = sprites.create(assets.image`
        NovitaNPC
    `, SpriteKind.NPC)
    tiles.placeOnRandomTile(NPC1, sprites.dungeon.collectibleBlueCrystal)
    NPC2 = sprites.create(assets.image`
        EndangNPC
    `, SpriteKind.NPC)
    tiles.placeOnRandomTile(NPC2, sprites.dungeon.collectibleRedCrystal)
}

controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    animation.runImageAnimation(Dzakir, [img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `], 500, true)
})
function initLevel(_level2: number) {
    if (_level2 == 1) {
        music.play(music.createSong(hex`
                00780004080200
            `), music.PlaybackMode.LoopingInBackground)
        tiles.setCurrentTilemap(tilemap`
            level1
        `)
        info.startCountdown(120)
    } else if (_level2 == 2) {
        info.startCountdown(90)
    } else {
        info.startCountdown(60)
    }
    
    doQuiz(_level2)
}

let NPC2 : Sprite = null
let NPC1 : Sprite = null
let isMenu = false
let posQuiz = 0
let ask2 = 0
let ask1 = 0
let result = 0
let Dzakir : Sprite = null
initLevel(1)
initGame()
forever(function on_forever() {
    
})
