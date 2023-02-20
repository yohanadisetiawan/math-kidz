// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010500000001000000040100000003010100000000010000000001000000000101010100000100000101010000010101010000000000000000000000000000010104000000000000000001010000010101010101010101010000000000000001010300010000000000000000000004010100000100000000000101010101010101000001000000000000010000000001010000000000000000000100000004010100000000000000000000000001010101010101010100000100000000000001010000000000000001000001000000010103000000000000010003010000020101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 2 2 . . 2 . . 2 2 2 . . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 2 . . 2 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . . . . 2 2 2 2 2 2 2 
2 . . 2 . . . . . . 2 . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 . . 2 . . . . . . 2 
2 . . . . . . . 2 . . 2 . . . 2 
2 . . . . . . . 2 . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight1,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
