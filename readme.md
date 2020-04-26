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
color-name          hex-code        color-offset

Dark Red            AA0000           1
Red                 FF5555           2
Gold                FFAA00           3
Yellow              FFFF55           4
Dark Green          00AA00           5
Green               55FF55           6
Aqua                55FFFF           7
Dark Aqua           00AAAA           8
Dark Blue           0000AA           9
Blue                5555FF          10
Light Purple        FF55FF          11
Purple              AA00AA          12
White               FFFFFF          13
Gray                AAAAAA          14
Dark Gray           555555          15
Black               000000          16
```


### Rarity Offsets
Rarity offsets align to color but also can be along the rank path.

```
name                hex-code        rarity-offset
null                ------           100
Dark Red            AA0000           200
Red                 FF5555           300
Gold                FFAA00           400
Yellow              FFFF55           500
Dark Green          00AA00           600
Green               55FF55           700
Aqua                55FFFF           800
Dark Aqua           00AAAA           900
Dark Blue           0000AA          1000
Blue                5555FF          1100
Light Purple        FF55FF          1200
Purple              AA00AA          1300
White               FFFFFF          1400
Gray                AAAAAA          1500
Dark Gray           555555          1600
Black               000000          1700 
Rank 0              ------          1800
Rank 1              ------          1900
Rank 2              ------          2000
Rank 3              ------          2100
Rank 4              ------          2200
Rank 5              ------          2300
Rank 6              ------          2400
Rank 10             ------          2500
```

### Symbol Offsets

The symbol offsets are based on the remaining digits.

```
Symbol              Symbol-Offset  

symbol_unknown           0
symbol_null          10000
symbol_armor         20000
symbol_arrow         30000
symbol_axe           40000
symbol_chain         50000
symbol_crystal       60000
symbol_fall          70000
symbol_fire          80000
symbol_hoe           90000
symbol_ingot        100000
symbol_pick         110000
symbol_shield       120000
symbol_shovel       130000
symbol_sword        140000
symbol_tree         150000
symbol_scythe       160000
symbol_potion       170000
symbol_travel       180000
symbol_bow          190000
symbol_book         200000
symbol_saddle       210000
symbol_carrot       220000
symbol_scan         230000
symbol_eye          240000

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
