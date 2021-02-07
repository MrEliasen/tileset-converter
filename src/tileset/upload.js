/* eslint no-unused-vars: 0, no-debugger: 0 */
import Tileset from './tileset.js'

class Upload {
    constructor(file) {
        this.file = file;
        this.processing = false;
        this.horizontalSheets = 1;
        this.verticalSheets = 1;

        // holds the source file image
        const sourceCanvas = document.createElement("canvas");
        const sourceCtx = sourceCanvas.getContext('2d');
        this.source = {
            canvas: sourceCanvas,
            ctx: sourceCtx,
        }

        // holds the converted tilesets
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

    getTilesetHeight(imageHeight, tileSize) {
        if (imageHeight === tileSize * 3) {
            return tileSize * 4;
        }

        return tileSize * 6;
    }

    generateTileset() {
        return new Promise((resolve, reject) => {
            this.processing = true;
            const img = new Image();

            img.onload = async () => {
                this.source.canvas.width = img.width;
                this.source.canvas.height = img.height;
                this.source.ctx.drawImage(img, 0, 0);

                const tilesetWidth = img.width / this.horizontalSheets;
                const tilesetHeight = img.height / this.verticalSheets;

                const tilesetSize = {
                    imgWidth: tilesetWidth,
                    imgHeight: tilesetHeight,
                    tileSize: tilesetWidth / 2,
                };

                this.result.canvas.width = (tilesetSize.tileSize * 12) * this.horizontalSheets;
                this.result.canvas.height = this.getTilesetHeight(tilesetHeight, tilesetSize.tileSize) * this.verticalSheets;

                const tilesets = [];

                for (let y = 0; y < this.verticalSheets; y++) {
                    let offsetY = tilesetHeight * y;

                    for (let x = 0; x < this.horizontalSheets; x++) {
                        let offsetX = tilesetWidth * x;

                        tilesets.push(new Tileset(
                            img,
                            this.source,
                            tilesetSize,
                            offsetX,
                            offsetY,
                            {x, y}
                        ));
                    }
                }

                await Promise.all(tilesets.map((tileSet) => tileSet.process()));

                tilesets.forEach((tileSet) => {
                    this.result.ctx.drawImage(
                        tileSet.result.canvas,
                        0, // crop x start
                        0, // crop y start
                        tileSet.result.canvas.width,
                        tileSet.result.canvas.height,
                        tileSet.result.canvas.width * tileSet.position.x,
                        tileSet.result.canvas.height * tileSet.position.y,
                        tileSet.result.canvas.width,
                        tileSet.result.canvas.height,
                    );
                });

                this.processing = false;
                resolve();
            };

            img.src = this.preview;
            this.source.image = img;
        });
    }
}

export default Upload;