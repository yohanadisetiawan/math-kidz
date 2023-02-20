namespace SpriteKind {
    export const NPC = SpriteKind.create()
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    animation.runImageAnimation(Dzakir, assets.animation`
        NgadiniUp
    `, 500, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    
    isMenu = true
    pause(100)
    if (isMenu == true) {
        doQuiz(isLevel, otherSprite)
        isMenu = false
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    animation.runImageAnimation(Dzakir, assets.animation`
        NgadiniLeft
    `, 500, true)
})
function doQuiz(_level: number, _sprite: Sprite) {
    
    if (_level == 1) {
        result = 0
        ask1 = randint(0, 9)
        ask2 = randint(0, 9)
    } else if (_level == 2) {
        result = 0
        ask1 = randint(10, 99)
        ask2 = randint(10, 99)
    } else if (_level == 3) {
        result = 0
        ask1 = randint(100, 999)
        ask2 = randint(100, 999)
    }
    
    pause(100)
    if (isMenu == true) {
        if (posQuiz % 2 == 1) {
            result = ask1 + ask2
            game.showLongText("Calculated:\\n" + convertToText(ask1) + " + " + convertToText(ask2), DialogLayout.Top)
            story.showPlayerChoices(convertToText(result), convertToText(result + randint(1, 4)))
            posQuiz = 2
            pause(100)
        } else {
            result = ask1 - ask2
            if (result < 0) {
                result = ask2 - ask1
                game.showLongText("Calculated:\\n" + convertToText(ask2) + " - " + convertToText(ask1), DialogLayout.Top)
                story.showPlayerChoices(convertToText(result - randint(1, 3)), convertToText(result))
            }
            
            game.showLongText("Calculated:\\n" + convertToText(ask1) + " - " + convertToText(ask2), DialogLayout.Top)
            story.showPlayerChoices(convertToText(result), convertToText(result - randint(1, 3)))
            posQuiz = 1
            pause(100)
        }
        
        if (story.checkLastAnswer(convertToText(result))) {
            info.changeScoreBy(10)
        } else {
            info.changeScoreBy(-5)
        }
        
        pause(100)
        if (_sprite == NPC1) {
            sprites.destroy(NPC1, effects.spray, 100)
            NPC1 = sprites.create(assets.image`
                NovitaNPC
            `, SpriteKind.NPC)
            tiles.placeOnRandomTile(NPC1, sprites.dungeon.collectibleBlueCrystal)
        } else if (_sprite == NPC2) {
            sprites.destroy(NPC2, effects.smiles, 100)
            NPC2 = sprites.create(assets.image`
                EndangNPC
            `, SpriteKind.NPC)
            tiles.placeOnRandomTile(NPC2, sprites.dungeon.collectibleRedCrystal)
        }
        
        pause(100)
        isMenu = false
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
            `], 500, true)
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
    game.showLongText("Welcome\\nMath Kidz\\nGame!", DialogLayout.Center)
    game.showLongText("(c) 2023 - CS50X\\nFinal Project", DialogLayout.Bottom)
    game.showLongText("Harvard University\\nCreated by Yohan Adi Setiawan", DialogLayout.Bottom)
    game.showLongText("Get score minimum to get next level with dialog to NPC, rember your time!", DialogLayout.Full)
    isMenu = false
    posQuiz = 0
    isLevel = 1
    listTime = [120, 240, 360]
    Dzakir = sprites.create(assets.image`
        Ngadini
    `, SpriteKind.Player)
    NPC1 = sprites.create(assets.image`
        NovitaNPC
    `, SpriteKind.NPC)
    NPC2 = sprites.create(assets.image`
        EndangNPC
    `, SpriteKind.NPC)
    game.setGameOverScoringType(game.ScoringType.HighScore)
    info.setScore(0)
}

function doMusic(_level2: number) {
    music.stopAllSounds()
    if (_level2 == 1) {
        music.play(music.createSong(assets.song`
                Hujan
            `), music.PlaybackMode.LoopingInBackground)
    } else if (_level2 == 2) {
        music.play(music.createSong(assets.song`
                Kebunku
            `), music.PlaybackMode.LoopingInBackground)
    } else if (_level2 == 3) {
        music.play(music.createSong(assets.song`
                Kebunku0
            `), music.PlaybackMode.LoopingInBackground)
    }
    
}

controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    animation.runImageAnimation(Dzakir, assets.animation`
        NgadiniDown
    `, 500, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    
    sprites.destroy(FinalNPC, effects.hearts, 500)
    info.setScore(0)
    controller.moveSprite(Dzakir, 0, 0)
    if (isLevel == 1) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        isLevel = 2
        pause(100)
        initLevel(isLevel)
    } else if (isLevel == 2) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        isLevel = 3
        pause(100)
        initLevel(isLevel)
    } else if (isLevel > 3) {
        game.setGameOverMessage(true, "GAME OVER!")
        game.gameOver(true)
    }
    
})
info.onScore(70, function on_on_score() {
    
    sprites.destroy(FinalNPC)
    FinalNPC = sprites.create(assets.image`
        YohanNPC
    `, SpriteKind.Food)
})
function initLevel(_level22: number) {
    if (_level22 == 1) {
        tiles.setCurrentTilemap(tilemap`
            level1
        `)
    } else if (_level22 == 2) {
        tiles.setCurrentTilemap(tilemap`
            level2
        `)
    } else if (_level22 == 3) {
        tiles.setCurrentTilemap(tilemap`
            level3
        `)
    }
    
    tiles.placeOnRandomTile(Dzakir, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(NPC1, sprites.dungeon.collectibleBlueCrystal)
    tiles.placeOnRandomTile(NPC2, sprites.dungeon.collectibleRedCrystal)
    scene.cameraFollowSprite(Dzakir)
    info.startCountdown(listTime[_level22 - 1])
    doMusic(_level22)
}

let FinalNPC : Sprite = null
let listTime : number[] = []
let NPC2 : Sprite = null
let NPC1 : Sprite = null
let posQuiz = 0
let ask2 = 0
let ask1 = 0
let result = 0
let isMenu = false
let Dzakir : Sprite = null
let isLevel = 0
initGame()
pause(100)
initLevel(isLevel)
forever(function on_forever() {
    if (isMenu == true) {
        controller.moveSprite(Dzakir, 0, 0)
        animation.stopAnimation(animation.AnimationTypes.All, Dzakir)
    } else if (isMenu == false) {
        controller.moveSprite(Dzakir, 100, 100)
    }
    
})
game.onUpdateInterval(500, function on_update_interval() {
    
    if (Dzakir.overlapsWith(FinalNPC)) {
        isLevel += 1
        if (isLevel == 3) {
            tiles.placeOnRandomTile(FinalNPC, sprites.dungeon.stairLadder)
        } else if (isLevel == 1 || isLevel == 2) {
            tiles.placeOnRandomTile(FinalNPC, sprites.dungeon.chestClosed)
        } else {
            game.gameOver(true)
        }
        
    }
    
    if (info.countdown() > 10 && info.countdown() < 20) {
        Dzakir.sayText("Hurry up, time is be up!", 500, false)
    }
    
})
