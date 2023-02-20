@namespace
class SpriteKind:
    NPC = SpriteKind.create()

def on_up_pressed():
    animation.run_image_animation(Dzakir, assets.animation("""
        NgadiniUp
    """), 500, True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite, otherSprite):
    global isMenu
    isMenu = True
    pause(100)
    if isMenu == True:
        doQuiz(isLevel, otherSprite)
        isMenu = False
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC, on_on_overlap)

def on_left_pressed():
    animation.run_image_animation(Dzakir, assets.animation("""
        NgadiniLeft
    """), 500, True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def doQuiz(_level: number, _sprite: Sprite):
    global result, ask1, ask2, posQuiz, NPC1, NPC2, isMenu
    if _level == 1:
        result = 0
        ask1 = randint(0, 9)
        ask2 = randint(0, 9)
    elif _level == 2:
        result = 0
        ask1 = randint(10, 99)
        ask2 = randint(10, 99)
    elif _level == 3:
        result = 0
        ask1 = randint(100, 999)
        ask2 = randint(100, 999)
    pause(100)
    if isMenu == True:
        if posQuiz % 2 == 1:
            result = ask1 + ask2
            game.show_long_text("Calculated:\\n" + convert_to_text(ask1) + " + " + convert_to_text(ask2),
                DialogLayout.TOP)
            story.show_player_choices(convert_to_text(result),
                convert_to_text(result + randint(1, 4)))
            posQuiz = 2
            pause(100)
        else:
            result = ask1 - ask2
            if result < 0:
                result = ask2 - ask1
                game.show_long_text("Calculated:\\n" + convert_to_text(ask2) + " - " + convert_to_text(ask1),
                    DialogLayout.TOP)
                story.show_player_choices(convert_to_text(result - randint(1, 3)),
                    convert_to_text(result))
            game.show_long_text("Calculated:\\n" + convert_to_text(ask1) + " - " + convert_to_text(ask2),
                DialogLayout.TOP)
            story.show_player_choices(convert_to_text(result),
                convert_to_text(result - randint(1, 3)))
            posQuiz = 1
            pause(100)
        if story.check_last_answer(convert_to_text(result)):
            info.change_score_by(10)
        else:
            info.change_score_by(-5)
        pause(100)
        if _sprite == NPC1:
            sprites.destroy(NPC1, effects.spray, 100)
            NPC1 = sprites.create(assets.image("""
                NovitaNPC
            """), SpriteKind.NPC)
            tiles.place_on_random_tile(NPC1, sprites.dungeon.collectible_blue_crystal)
        elif _sprite == NPC2:
            sprites.destroy(NPC2, effects.smiles, 100)
            NPC2 = sprites.create(assets.image("""
                EndangNPC
            """), SpriteKind.NPC)
            tiles.place_on_random_tile(NPC2, sprites.dungeon.collectible_red_crystal)
        pause(100)
        isMenu = False

def on_right_pressed():
    animation.run_image_animation(Dzakir,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def initGame():
    global isMenu, posQuiz, isLevel, listTime, Dzakir, NPC1, NPC2
    scene.set_background_image(img("""
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
    """))
    game.set_dialog_frame(assets.image("""
        frameDialog
    """))
    game.show_long_text("Welcome\\nMath Kidz\\nGame!", DialogLayout.CENTER)
    game.show_long_text("(c) 2023 - CS50X\\nFinal Project", DialogLayout.BOTTOM)
    game.show_long_text("Harvard University\\nCreated by Yohan Adi Setiawan",
        DialogLayout.BOTTOM)
    game.show_long_text("Get score minimum to get next level with dialog to NPC, rember your time!",
        DialogLayout.FULL)
    isMenu = False
    posQuiz = 0
    isLevel = 1
    listTime = [120, 240, 360]
    Dzakir = sprites.create(assets.image("""
        Ngadini
    """), SpriteKind.player)
    NPC1 = sprites.create(assets.image("""
        NovitaNPC
    """), SpriteKind.NPC)
    NPC2 = sprites.create(assets.image("""
        EndangNPC
    """), SpriteKind.NPC)
    game.set_game_over_scoring_type(game.ScoringType.HIGH_SCORE)
    info.set_score(0)
def doMusic(_level2: number):
    music.stop_all_sounds()
    if _level2 == 1:
        music.play(music.create_song(assets.song("""
                Hujan
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
    elif _level2 == 2:
        music.play(music.create_song(assets.song("""
                Kebunku
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
    elif _level2 == 3:
        music.play(music.create_song(assets.song("""
                Kebunku0
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)

def on_down_pressed():
    animation.run_image_animation(Dzakir, assets.animation("""
        NgadiniDown
    """), 500, True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    global isLevel
    sprites.destroy(FinalNPC, effects.hearts, 500)
    info.set_score(0)
    controller.move_sprite(Dzakir, 0, 0)
    if isLevel == 1:
        music.stop_all_sounds()
        music.play(music.melody_playable(music.magic_wand),
            music.PlaybackMode.UNTIL_DONE)
        isLevel = 2
        pause(100)
        initLevel(isLevel)
    elif isLevel == 2:
        music.stop_all_sounds()
        music.play(music.melody_playable(music.magic_wand),
            music.PlaybackMode.UNTIL_DONE)
        isLevel = 3
        pause(100)
        initLevel(isLevel)
    elif isLevel > 3:
        game.set_game_over_message(True, "GAME OVER!")
        game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def on_on_score():
    global FinalNPC
    sprites.destroy(FinalNPC)
    FinalNPC = sprites.create(assets.image("""
        YohanNPC
    """), SpriteKind.food)
info.on_score(70, on_on_score)

def initLevel(_level22: number):
    if _level22 == 1:
        tiles.set_current_tilemap(tilemap("""
            level1
        """))
    elif _level22 == 2:
        tiles.set_current_tilemap(tilemap("""
            level2
        """))
    elif _level22 == 3:
        tiles.set_current_tilemap(tilemap("""
            level3
        """))
    tiles.place_on_random_tile(Dzakir, sprites.dungeon.collectible_insignia)
    tiles.place_on_random_tile(NPC1, sprites.dungeon.collectible_blue_crystal)
    tiles.place_on_random_tile(NPC2, sprites.dungeon.collectible_red_crystal)
    scene.camera_follow_sprite(Dzakir)
    info.start_countdown(listTime[_level22 - 1])
    doMusic(_level22)
FinalNPC: Sprite = None
listTime: List[number] = []
NPC2: Sprite = None
NPC1: Sprite = None
posQuiz = 0
ask2 = 0
ask1 = 0
result = 0
isMenu = False
Dzakir: Sprite = None
isLevel = 0
initGame()
pause(100)
initLevel(isLevel)

def on_forever():
    if isMenu == True:
        controller.move_sprite(Dzakir, 0, 0)
        animation.stop_animation(animation.AnimationTypes.ALL, Dzakir)
    elif isMenu == False:
        controller.move_sprite(Dzakir, 100, 100)
forever(on_forever)

def on_update_interval():
    global isLevel
    if Dzakir.overlaps_with(FinalNPC):
        isLevel += 1
        if isLevel == 3:
            tiles.place_on_random_tile(FinalNPC, sprites.dungeon.stair_ladder)
        elif isLevel == 1 or isLevel == 2:
            tiles.place_on_random_tile(FinalNPC, sprites.dungeon.chest_closed)
        else:
            game.game_over(True)
    if info.countdown() > 10 and info.countdown() < 20:
        Dzakir.say_text("Hurry up, time is be up!", 500, False)
game.on_update_interval(500, on_update_interval)
