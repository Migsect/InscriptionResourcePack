# Inscription Resource Pack

This resource pack is meant to be used with the [Inscription Spigot/Bukkit Plugin](https://github.com/Migsect/Inscription).

It makes use of custom model data set by the plugin to add custom sprites to glyphs to show their rarity, type, and element. 

## Offsets

Offsets are used to determine the custom model data for a specific texture.

Offsets can be made using the following equation:
```
Color-Offset + Rarity-Offset + Symbol-Offset 
```

The offset is shown by the following digit places:
```
XXXX YY ZZ

XXXX = Symbol offset
YY = Rarity offset
ZZ = Color offset
```

### Color Offsets

Color offsets are used by rarity and glyph color to provide a set of colors based on minecraft's 16 chat colors.
Note that in the future this list may expand to contain colors that match minecraft's 16 dye colors as well.
```
color-name          hex-code        Color-Offset    Rarity-Offset

null                ------          --              0100
Dark Red            AA0000          01              0200
Red                 FF5555          02              0300
Gold                FFAA00          03              0400
Yellow              FFFF55          04              0500
Dark Green          00AA00          05              0600
Green               55FF55          06              0700
Aqua                55FFFF          07              0800
Dark Aqua           00AAAA          08              0900
Dark Blue           0000AA          09              1000
Blue                5555FF          10              1100
Light Purple        FF55FF          11              1200
Purple              AA00AA          12              1300
White               FFFFFF          13              1400
Gray                AAAAAA          14              1500
Dark Gray           555555          15              1600
Black               000000          16              1700 
```

### Symbol Offsets

The symbol offsets are based on the remaining digits.

```
Symbol              Symbol-Offset  

symbol_unknown      000000
symbol_null         010000
symbol_armor        020000
symbol_arrow        030000
symbol_axe          040000
symbol_chain        050000
symbol_crystal      060000
symbol_fall         070000
symbol_fire         080000
symbol_hoe          090000
symbol_ingot        100000
symbol_pick         110000
symbol_shield       120000
symbol_shovel       130000
symbol_sword        140000
symbol_tree         150000
```

## Generator Script

`createJsonData.js` is used to generate the model data files.  It utilizes `createJsonDataConfig.json` to determine what files to use when generating the model data as well as what offset correlates to what file.  To use `createJsonData.js`, you need to have `NodeJS` installed.

### Usage

Run the script from the resource pack root.
```
node createJsonData.js
```

## Debugging

The command for testing is:

    /give @s minecraft:paper{CustomModelData:######}
