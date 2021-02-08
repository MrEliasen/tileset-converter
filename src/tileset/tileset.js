/* eslint no-unused-vars: 0 */
import Tile47 from './templates/tile47.js'

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
        this.generate47();
    }

    getTilesetType() {
        const {imgHeight, tileSize} = this.size;

        if (imgHeight === tileSize * 3) {
            this.type = '47';
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

            case '63':
                height = this.size.tileSize * 6;
                width = this.size.tileSize * 12;
                break;
        }

        this.result.canvas.height = height;
        this.result.canvas.width = width;
    }

    generate47() {
        const {tileSize, subTileSize} = this.size;

        const template = new Tile47(this.size);
        const drawTemplate = template.generateTemplate();

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
                    tile.targetY + (crop.offsetY || 0), // x position to place it
                    crop.size || subTileSize, // crop size width
                    crop.size || subTileSize // crop size height
                );
            }
        });

        // if its a 63 tileset, append the bottom 4 tiles to the result
        if (this.type == '63') {
            const wallSize = this.size.tileSize * 2;

            this.result.ctx.drawImage(
                this.source.image,
                this.sourceOffsetX, // crop x start
                this.sourceOffsetY + 3 * this.size.tileSize, // crop y start
                wallSize, // crop size width
                wallSize, // crop size height
                0, // x position to place it
                4 * this.size.tileSize, // x position to place it
                wallSize, // crop size width
                wallSize // crop size height
            );
        }
    }
}

export default Tileset;