The numbers 1-100 are reserved for functional items such as consumable glyphs.

The last 2 digits represent the color of the glyph symbol (besides for 1-99).
Colors are to be used for the element of the glyph.

Color-Offsect   color-name          hex-code        Rarity-Offset
                null                                0100
01              Dark Red            AA0000          0200
02              Red                 FF5555          0300
03              Gold                FFAA00          0400
04              Yellow              FFFF55          0500
05              Dark Green          00AA00          0600
06              Green               55FF55          0700
07              Aqua                55FFFF          0800
08              Dark Aqua           00AAAA          0900
09              Dark Blue           0000AA          1000
10              Blue                5555FF          1100
11              Light Purple        FF55FF          1200
12              Purple              AA00AA          1300
13              White               FFFFFF          1400
14              Gray                AAAAAA          1500
15              Dark Gray           555555          1600
16              Black               000000          1700 

    Note: Colors can have their saturation and brightness adjusted, but their hue should remain the same.

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

The other digits are used for the symbol of glyph. These would correspond to a glyph types such as:

    Damage Reduction glyphs
    Damage buffing glyphs
    Drop chance glyphs
    Chain break glyphs
    Experience boosting glyphs
    Durability glyphs

Note that there may also be plans to have different rarities of glyphs be represented in their sprite.  This will probably take up the some more digit slots.
Additionally We may have our counting start at a larger number to reduce the chance that other resource packs may clash with our custom data values.

The command for testing is:

    /give @s minecraft:paper{CustomModelData:######}
