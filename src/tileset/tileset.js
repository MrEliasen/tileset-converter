/* eslint no-unused-vars: 0 */
import Tile47 from './templates/tile47'
import Tile9 from './templates/tile9'
import Tile6 from './templates/tile6'

class Tileset {
    constructor(img, source, tilesetSize, offsetX, offsetY, position) {
        this.image = img;
        this.size = tilesetSize;
        this.sourceOffsetX = offsetX;
        this.sourceOffsetY = offsetY;
        this.position = position;

        this.source = source;
        this.source.image = img;

        // holds the converted tileset
        const resultCanvas = document.createElement("canvas");
        const resultCtx = resultCanvas.getContext('2d');
        this.result = {
            canvas: resultCanvas,
            ctx: resultCtx,
        };
    }

    async process() {
        this.getTilesetType()
        this.setupTargetCanvas()

        if (this.type != '9') {
            this.generate47()
        } else {
            this.generate9()
        }
    }

    getTilesetType() {
        const {imgHeight, tileSize} = this.size;

        if (imgHeight === tileSize * 3) {
            this.type = '47';
            return;
        }

        if (imgHeight === tileSize * 2) {
            this.type = '9';
            return;
        }

        this.type = '63';
    }

    setupTargetCanvas() {
        let height = 0;
        let width = 0;

        switch (this.type) {
            case '9':
                height = this.size.tileSize * 3;
                width = this.size.tileSize * 6;
                break;

            case '47':
                height = this.size.tileSize * 4;
                width = this.size.tileSize * 12;
                break;

            case '63':
                height = this.size.tileSize * 7;
                width = this.size.tileSize * 12;
                break;
        }

        this.result.canvas.height = height;
        this.result.canvas.width = width;
    }

    generate47() {
        const {tileSize, subTileSize} = this.size;

        const template47 = new Tile47(this.size);
        const drawTemplate = template47.generateTemplate();

        drawTemplate.forEach((tile) => {
            for (let i = 0; i < tile.tiles.length; i++) {
                const crop = tile.tiles[i];

                this.result.ctx.drawImage(
                    this.source.image,
                    this.sourceOffsetX + crop.x, // crop x start
                    this.sourceOffsetY + crop.y, // crop y start
                    crop.size || subTileSize, // crop size width
                    crop.size || subTileSize, // crop size height
                    tile.targetX + (crop.offsetX || 0), // x position to place it
                    tile.targetY + (crop.offsetY || 0), // y position to place it
                    crop.size || subTileSize, // crop size width
                    crop.size || subTileSize // crop size height
                );
            }
        });

        // if its a 63 tileset, append the bottom 4 tiles as a 3x3
        if (this.type == '63') {
            const tile47OffsetY = 4 * this.size.tileSize;
            const tile47CutOffsetY = 3 * this.size.tileSize;

            const template9 = new Tile9(this.size);
            const drawTemplate9 = template9.generateTemplate();

            for (let t = 0; t < drawTemplate9.length; t++) {
                const tile = drawTemplate9[t];

                for (let i = 0; i < tile.tiles.length; i++) {
                    const crop = tile.tiles[i];

                    this.result.ctx.drawImage(
                        this.source.image,
                        this.sourceOffsetX + crop.x, // crop x start
                        tile47CutOffsetY + this.sourceOffsetY + crop.y, // crop y start
                        crop.size, // crop size width
                        crop.size, // crop size height
                        tile.targetX + (crop.offsetX || 0), // x position to place it
                        tile47OffsetY + tile.targetY + (crop.offsetY || 0), // y position to place it
                        crop.size, // crop size width
                        crop.size // crop size height
                    );
                }
            }

            const template6 = new Tile6(this.size);
            const drawTemplate6 = template6.generateTemplate();
            const tile9OffsetX = 3 * this.size.tileSize;

            for (let t = 0; t < drawTemplate6.length; t++) {
                const tile = drawTemplate6[t];

                for (let i = 0; i < tile.tiles.length; i++) {
                    const crop = tile.tiles[i];

                    this.result.ctx.drawImage(
                        this.source.image,
                        this.sourceOffsetX + crop.x, // crop x start
                        tile47CutOffsetY + this.sourceOffsetY + crop.y, // crop y start
                        crop.size, // crop size width
                        crop.size, // crop size height
                        tile9OffsetX + tile.targetX + (crop.offsetX || 0), // x position to place it
                        tile47OffsetY + tile.targetY + (crop.offsetY || 0), // y position to place it
                        crop.size, // crop size width
                        crop.size // crop size height
                    );
                }
            }
        }
    }

    generate9() {
        const {tileSize, subTileSize} = this.size;

        const template9 = new Tile9(this.size);
        const drawTemplate9 = template9.generateTemplate();

        for (let t = 0; t < drawTemplate9.length; t++) {
            const tile = drawTemplate9[t];

            for (let i = 0; i < tile.tiles.length; i++) {
                const crop = tile.tiles[i];

                this.result.ctx.drawImage(
                    this.source.image,
                    this.sourceOffsetX + crop.x, // crop x start
                    this.sourceOffsetY + crop.y, // crop y start
                    crop.size || subTileSize, // crop size width
                    crop.size || subTileSize, // crop size height
                    tile.targetX + (crop.offsetX || 0), // x position to place it
                    tile.targetY + (crop.offsetY || 0), // y position to place it
                    crop.size || subTileSize, // crop size width
                    crop.size || subTileSize // crop size height
                );
            }
        }

        const template6 = new Tile6(this.size);
        const drawTemplate6 = template6.generateTemplate();
        const tile9OffsetX = 3 * this.size.tileSize;

        for (let t = 0; t < drawTemplate6.length; t++) {
            const tile = drawTemplate6[t];

            for (let i = 0; i < tile.tiles.length; i++) {
                const crop = tile.tiles[i];

                this.result.ctx.drawImage(
                    this.source.image,
                    this.sourceOffsetX + crop.x, // crop x start
                    this.sourceOffsetY + crop.y, // crop y start
                    crop.size || subTileSize, // crop size width
                    crop.size || subTileSize, // crop size height
                    tile9OffsetX + tile.targetX + (crop.offsetX || 0), // x position to place it
                    tile.targetY + (crop.offsetY || 0), // y position to place it
                    crop.size || subTileSize, // crop size width
                    crop.size || subTileSize // crop size height
                );
            }
        }
    }
}

export default Tileset;