/* eslint no-unused-vars: 0 */
import Tile47 from './templates/tile47.js'

class TilesetCutter {
    constructor(file) {
        this.file = file;
        this.processing = false;

        // holds the source file image
        const sourceCanvas = document.createElement("canvas");
        const sourceCtx = sourceCanvas.getContext('2d');
        this.source = {
            canvas: sourceCanvas,
            ctx: sourceCtx,
            image: null,
        }

        // holds the converted tileset
        const resultCanvas = document.createElement("canvas");
        const resultCtx = resultCanvas.getContext('2d');
        this.result = {
            canvas: resultCanvas,
            ctx: resultCtx,
        };
    }

    load() {
        return new Promise((resolve, reject) => {
            try {
                const reader = new FileReader();

                reader.onload = (event) => {
                    this.preview = event.target.result;
                    resolve();
                }

                reader.readAsDataURL(this.file);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
    process() {
        return new Promise((resolve, reject) => {
            this.processing = true;
            const img = new Image();

            img.onload = () => {
                this.size = {
                    imgWidth: img.width,
                    imgHeight: img.height,
                    tileSize: img.width / 2,
                };

                this.source.canvas.width = img.width;
                this.source.canvas.height = img.height;
                this.source.ctx.drawImage(img, 0, 0);

                this.getTilesetType()
                this.setupTargetCanvas()
                this.convertTileset()
                this.processing = false;
                resolve();
            };

            img.src = this.preview;
            this.source.image = img;
        });
    }

    getTilesetType() {
        const {imgHeight, tileSize} = this.size;

        if (imgHeight === tileSize * 3) {
            this.type = '47';
            return;
        }

        if (imgHeight === tileSize * 2) {
            this.type = '16';
            return;
        } 

        this.type = '63';
    }

    setupTargetCanvas() {
        let height = 0;
        let width = 0;

        switch (this.type) {
            case '47':
                height = this.size.tileSize * 4;
                width = this.size.tileSize * 12;
                break;

            case '16':
                height = this.size.tileSize * 2;
                width = this.size.tileSize * 8;
                break;

            case '63':
                height = this.size.tileSize * 6;
                width = this.size.tileSize * 12;
                break;
        }

        this.result.canvas.height = height;
        this.result.canvas.width = width;
    }

    convertTileset() {
        switch (this.type) {
            case '47':
            case '63':
                this.generate47();
                break;

            case '16':
                break;
        }
    }

    generate47() {
        const {tileSize, subTileSize} = this.size;
        const pieces = this.get47ExtractionTemplate();

        const template = new Tile47(pieces, this.size);
        const drawTemplate = template.generateTemplate();

        drawTemplate.forEach((tile) => {
            for (let i = 0; i < tile.tiles.length; i++) {
                const crop = tile.tiles[i];

                this.result.ctx.drawImage(
                    this.source.image,
                    crop.x, // crop x start
                    crop.y, // crop y start
                    crop.size || subTileSize, // crop size width
                    crop.size || subTileSize, // crop size height
                    tile.targetX + (crop.offsetX || 0), // x position to place it
                    tile.targetY + (crop.offsetY || 0), // x position to place it
                    crop.size || subTileSize, // crop size width
                    crop.size || subTileSize // crop size height
                );
            }
        });
    }

    get47ExtractionTemplate() {
        const {tileSize} = this.size;
        const subTileSize = tileSize / 2;

        const template = {
            a: {
                x: 0,
                y: 0,
                size: tileSize,
            },
            b: {
                tiles: {
                    full: {
                        x: tileSize,
                        y: 0,
                        size: tileSize,
                    },
                },
                subtiles: {
                    tl: {
                        x: tileSize,
                        y: 0,
                        size: subTileSize,
                    },
                    tr: {
                        x: tileSize + subTileSize,
                        y: 0,
                        size: subTileSize,
                    },
                    bl: {
                        x: tileSize,
                        y: subTileSize,
                        size: subTileSize,
                    },
                    br: {
                        x: tileSize + subTileSize,
                        y: subTileSize,
                        size: subTileSize,
                    },
                }
            },
            c: {
                tiles: {
                    tl: {
                        x: 0,
                        y: tileSize,
                        size: tileSize,
                    },
                    tr: {
                        x: tileSize,
                        y: tileSize,
                        size: tileSize,
                    },
                    bl: {
                        x: 0,
                        y: tileSize * 2,
                        size: tileSize,
                    },
                    br: {
                        x: tileSize,
                        y: tileSize * 2,
                        size: tileSize,
                    },
                    center: {
                        x: subTileSize ,
                        y: tileSize + subTileSize,
                        size: tileSize,
                    },
                },
                subtiles: [],
            },
        };

        // generate section c
        let row = 0;
        let col = 0;

        for (let i = 0; i < 16; i++) {
            if (i > 0 && i % 4 === 0) {
                row++;
                col = 0;
            }

            template.c.subtiles.push({
                x: subTileSize * col,
                y: tileSize + (subTileSize * row),
                size: subTileSize,
            });

            col++;
        }

        return template;
    }
}

export default TilesetCutter;