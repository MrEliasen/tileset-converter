/* eslint no-unused-vars: 0 */

class Tile47 {
    constructor(pieces, size) {
        this.size = size;
        this.size.subTileSize = this.size.tileSize / 2;
        this.pieces = pieces;

        this.fullTile = {
            x: pieces.c.tiles.center.x,
            y: pieces.c.tiles.center.y,
            size: this.size.tileSize,
        };
    }

    generateTemplate() {
        this.template = [];
        this.row1();
        this.row2();
        this.row3();
        this.row4();

        return this.template;
    }

    row1() {
        const {b} = this.pieces;
        const {tileSize, subTileSize} = this.size;

        // row 1
        this.template.push({
            targetX: tileSize,
            targetY: 0,
            tiles: [
                this.fullTile,
            ]
        });

        this.template.push({
            targetX: tileSize * 2,
            targetY: 0,
            tiles: [
                this.fullTile,
                b.subtiles.tl
            ]
        });

        this.template.push({
            targetX: tileSize * 3,
            targetY: 0,
            tiles: [
                this.fullTile,
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 4,
            targetY: 0,
            tiles: [
                this.fullTile,
                b.subtiles.tl,
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 5,
            targetY: 0,
            tiles: [
                this.fullTile,
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 6,
            targetY: 0,
            tiles: [
                this.fullTile,
                b.subtiles.tl,
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 7,
            targetY: 0,
            tiles: [
                this.fullTile,
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                },
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 8,
            targetY: 0,
            tiles: [
                this.fullTile,
                b.subtiles.tl,
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                },
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 9,
            targetY: 0,
            tiles: [
                this.fullTile,
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 10,
            targetY: 0,
            tiles: [
                this.fullTile,
                b.subtiles.tl,
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 11,
            targetY: 0,
            tiles: [
                this.fullTile,
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                },
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                },
            ]
        });
    }

    row2() {
        const {b, c} = this.pieces;
        const {tileSize, subTileSize} = this.size;

        this.template.push({
            targetX: 0,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                b.subtiles.tl,
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                },
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 1,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                },
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 2,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                b.subtiles.tl,
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                },
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 3,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                },
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                },
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 4,
            targetY: tileSize,
            tiles: [
                b.tiles.full,
            ]
        });

        this.template.push({
            targetX: tileSize * 5,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                c.subtiles[4],
                {
                    ...c.subtiles[8],
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 6,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                c.subtiles[4],
                {
                    ...c.subtiles[8],
                    offsetY: subTileSize,
                },
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 7,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                c.subtiles[4],
                {
                    ...c.subtiles[8],
                    offsetY: subTileSize,
                },
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 8,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                c.subtiles[4],
                {
                    ...c.subtiles[8],
                    offsetY: subTileSize,
                },
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                },
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 9,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                c.subtiles[1],
                {
                    ...c.subtiles[2],
                    offsetX: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 10,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                c.subtiles[1],
                {
                    ...c.subtiles[2],
                    offsetX: subTileSize,
                },
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 11,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                c.subtiles[1],
                {
                    ...c.subtiles[2],
                    offsetX: subTileSize,
                },
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                }
            ]
        });
    }

    row3() {
        const {b, c} = this.pieces;
        const {tileSize, subTileSize} = this.size;

        this.template.push({
            targetX: 0,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                c.subtiles[1],
                {
                    ...c.subtiles[2],
                    offsetX: subTileSize,
                },
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                },
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 1,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    ...c.subtiles[7],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[11],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 2,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    ...c.subtiles[7],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[11],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 3,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    ...c.subtiles[7],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[11],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                b.subtiles.tl,
            ]
        });

        this.template.push({
            targetX: tileSize * 4,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                b.subtiles.tl,
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[7],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[11],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 5,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    ...c.subtiles[13],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[14],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 6,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    ...c.subtiles[13],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[14],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                b.subtiles.tl
            ]
        });

        this.template.push({
            targetX: tileSize * 7,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    ...c.subtiles[13],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[14],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 8,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    ...c.subtiles[13],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[14],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                b.subtiles.tl,
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 9,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                c.subtiles[4],
                {
                    ...c.subtiles[8],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[7],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[11],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 10,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                c.subtiles[1],
                {
                    ...c.subtiles[2],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[13],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[14],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 11,
            targetY: tileSize * 2,
            tiles: [
                c.tiles.tl,
            ]
        });
    }

    row4() {
        const {b, c} = this.pieces;
        const {tileSize, subTileSize} = this.size;

        this.template.push({
            targetX: 0,
            targetY: tileSize * 3,
            tiles: [
                c.tiles.tl,
                {
                    ...b.subtiles.br,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 1,
            targetY: tileSize * 3,
            tiles: [
                c.tiles.tr,
            ]
        });

        this.template.push({
            targetX: tileSize * 2,
            targetY: tileSize * 3,
            tiles: [
                c.tiles.tr,
                {
                    ...b.subtiles.bl,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 3,
            targetY: tileSize * 3,
            tiles: [
                c.tiles.br,
            ]
        });

        this.template.push({
            targetX: tileSize * 4,
            targetY: tileSize * 3,
            tiles: [
                c.tiles.br,
                b.subtiles.tl
            ]
        });

        this.template.push({
            targetX: tileSize * 5,
            targetY: tileSize * 3,
            tiles: [
                c.tiles.bl,
            ]
        });

        this.template.push({
            targetX: tileSize * 6,
            targetY: tileSize * 3,
            tiles: [
                c.tiles.bl,
                {
                    ...b.subtiles.tr,
                    offsetX: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 7,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                c.subtiles[0],
                {
                    ...c.subtiles[3],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[4],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[7],
                    offsetY: subTileSize,
                    offsetX: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 8,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                c.subtiles[0],
                {
                    ...c.subtiles[1],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[12],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[13],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 9,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                c.subtiles[8],
                {
                    ...c.subtiles[12],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[15],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[11],
                    offsetX: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 10,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                c.subtiles[2],
                {
                    ...c.subtiles[3],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[14],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[15],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 11,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                c.subtiles[0],
                {
                    ...c.subtiles[3],
                    offsetX: subTileSize,
                },
                {
                    ...c.subtiles[12],
                    offsetY: subTileSize,
                },
                {
                    ...c.subtiles[15],
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });
    }
}

export default Tile47;