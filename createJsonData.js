'use strict';

const fs = require('fs');

const config = require("./createJsonDataConfig.json");

const startingNumber = config.starting_number;

const glyphBlank = config.glyph_blank;

const glyphRarities = config.glyph_rarities;
const glyphRaritiesIncrement = config.glyph_rarities_increment;
const glyphRaritiesVariations = config.glyph_rarities_variations;

const glyphSymbols = config.glyph_symbols;
const glyphSymbolsIncrement = config.glyph_symbols_increment;
const glyphSymbolsVariations = config.glyph_symbols_variations;

const glyphColors = config.glyph_colors;
const glyphColorsIncrement = config.glyph_colors_increment;
const glyphColorsVariations = config.glyph_colors_variations;


const TEXTURES_FOLDER = "assets/minecraft/textures";
const MODELS_FOLDER = "assets/minecraft/models";

const BASE_MODELS_FILE = `${MODELS_FOLDER}/item/paper.json`
const GLYPH_FOLDER = "item/glyph";
const BASE_MODELS_GLYPH_FOLDER = `${MODELS_FOLDER}/${GLYPH_FOLDER}`;

let modelsJson = {
    parent: "item/generated",
    textures: {
        layer0: "item/paper"
    },
    overrides: []
};

class ModelData
{
    constructor()
    {
        this.layers = [];
        this.modelData = null;
    }

    addLayer(layer)
    {
        this.layers.push(layer);
    }

    getModelPath()
    {
        return `${GLYPH_FOLDER}/${this.modelData}`;
    }
    getFilePath()
    {
        return `${MODELS_FOLDER}/${GLYPH_FOLDER}/${this.modelData}.json`
    }

    setModelData(number)
    {
        this.modelData = number;
    }

    renderLayers()
    {
        let layers = {};
        this.layers.forEach((layer, index)=>{
            layers[`layer${index}`] = layer;
        })
        return layers;
    }
    
    render()
    {
        return {
            "parent": "item/generated",
            "textures": this.renderLayers()
        };
    }

    getOverride()
    {
        return {
            predicate: {custom_model_data: this.modelData},
            model: this.getModelPath()
        }
    }

}

let modelDataObjects = [];

function handleColors(symbol, rarity, modelData)
{
    glyphColorsVariations.forEach((color, index)=>{
        let modelDataObject = new ModelData();
        modelDataObject.setModelData(modelData + index * glyphColorsIncrement)
        // Creating the layers, null if the value is already falsy.
        let layers = [ 
            color ? `${glyphColors}/${color}` : null, 
            symbol ? `${glyphSymbols}/${symbol}` : null, 
            rarity ? `${glyphRarities}/${rarity}` : null
        ]
        layers.forEach((item)=>{
            if(!item) // skipping a layer if it's null
            {
                return;
            }
            modelDataObject.addLayer(item);
        });
        modelDataObjects.push(modelDataObject);
    });
}

function handleSymbols(rarity, modelData)
{
    glyphSymbolsVariations.forEach((symbol, index)=>{
        handleColors(symbol, rarity, modelData + index * glyphSymbolsIncrement);
    });
}

function handleRarities(modelData)
{
    glyphRaritiesVariations.forEach((rarity, index)=>{
        handleSymbols(rarity, modelData + index * glyphRaritiesIncrement);
    });
}

function main()
{
    let blank = new ModelData();
    blank.addLayer(glyphBlank);
    blank.setModelData(startingNumber);
    modelDataObjects.push(blank);

    // populates data objects with the other model objects.
    handleRarities(startingNumber + glyphRaritiesIncrement);

    modelDataObjects.sort((a,b)=>{
        return a.modelData - b.modelData;
    }).forEach((item)=>{
        modelsJson.overrides.push(item.getOverride());
        const data = JSON.stringify(item.render(), null, 4);
        fs.writeFileSync(item.getFilePath(), data);
        console.log("Wrote:", item.getFilePath());
    });

    const data = JSON.stringify(modelsJson, null, 4);
    fs.writeFileSync(BASE_MODELS_FILE, data);
    console.log("Wrote:", BASE_MODELS_FILE);
}

main();