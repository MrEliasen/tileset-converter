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
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 3,
            targetY: 0,
            tiles: [
                this.fullTile,
                {
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 4,
            targetY: 0,
            tiles: [
                this.fullTile,
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                },
                {
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
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
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                },
                {
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 10,
            targetY: 0,
            tiles: [
                this.fullTile,
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
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
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
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
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                },
                {
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
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
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 4,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                },
                {
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 5,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                {
                    x: c.subtiles[4].x,
                    y: c.subtiles[4].y,
                },
                {
                    x: c.subtiles[8].x,
                    y: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 6,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                {
                    x: c.subtiles[4].x,
                    y: c.subtiles[4].y,
                },
                {
                    x: c.subtiles[8].x,
                    y: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 7,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                {
                    x: c.subtiles[4].x,
                    y: c.subtiles[4].y,
                },
                {
                    x: c.subtiles[8].x,
                    y: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                {
                    x: c.subtiles[4].x,
                    y: c.subtiles[4].y,
                },
                {
                    x: c.subtiles[8].x,
                    y: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                {
                    x: c.subtiles[1].x,
                    y: c.subtiles[1].y,
                },
                {
                    x: c.subtiles[2].x,
                    y: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 10,
            targetY: tileSize,
            tiles: [
                this.fullTile,
                {
                    x: c.subtiles[1].x,
                    y: c.subtiles[1].y,
                },
                {
                    x: c.subtiles[2].x,
                    y: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                {
                    x: c.subtiles[1].x,
                    y: c.subtiles[1].y,
                },
                {
                    x: c.subtiles[2].x,
                    y: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
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
                {
                    x: c.subtiles[1].x,
                    y: c.subtiles[1].y,
                },
                {
                    x: c.subtiles[2].x,
                    y: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                    x: c.subtiles[7].x,
                    y: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[11].x,
                    y: c.subtiles[11].y,
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
                    x: c.subtiles[7].x,
                    y: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[11].x,
                    y: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
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
                    x: c.subtiles[7].x,
                    y: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[11].x,
                    y: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 4,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    x: c.subtiles[7].x,
                    y: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[11].x,
                    y: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
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
                    x: c.subtiles[13].x,
                    y: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[14].x,
                    y: c.subtiles[14].y,
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
                    x: c.subtiles[13].x,
                    y: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[14].x,
                    y: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 7,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    x: c.subtiles[13].x,
                    y: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[14].x,
                    y: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
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
                    x: c.subtiles[13].x,
                    y: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[14].x,
                    y: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                },
                {
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 9,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    x: c.subtiles[4].x,
                    y: c.subtiles[4].y,
                },
                {
                    x: c.subtiles[8].x,
                    y: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[7].x,
                    y: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[11].x,
                    y: c.subtiles[11].y,
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
                {
                    x: c.subtiles[1].x,
                    y: c.subtiles[1].y,
                },
                {
                    x: c.subtiles[2].x,
                    y: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[13].x,
                    y: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[14].x,
                    y: c.subtiles[14].y,
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
                    x: b.tiles.br.x,
                    y: b.tiles.br.y,
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
                    x: b.tiles.bl.x,
                    y: b.tiles.bl.y,
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
                {
                    x: b.tiles.tl.x,
                    y: b.tiles.tl.y,
                }
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
                    x: b.tiles.tr.x,
                    y: b.tiles.tr.y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 7,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                {
                    x: c.subtiles[0].x,
                    y: c.subtiles[0].y,
                },
                {
                    x: c.subtiles[3].x,
                    y: c.subtiles[3].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[4].x,
                    y: c.subtiles[5].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[7].x,
                    y: c.subtiles[7].y,
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
                {
                    x: c.subtiles[0].x,
                    y: c.subtiles[0].y,
                },
                {
                    x: c.subtiles[1].x,
                    y: c.subtiles[1].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[12].x,
                    y: c.subtiles[12].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[13].x,
                    y: c.subtiles[13].y,
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
                {
                    x: c.subtiles[8].x,
                    y: c.subtiles[8].y,
                },
                {
                    x: c.subtiles[12].x,
                    y: c.subtiles[12].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[15].x,
                    y: c.subtiles[15].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[11].x,
                    y: c.subtiles[11].y,
                    offsetX: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 10,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                {
                    x: c.subtiles[2].x,
                    y: c.subtiles[2].y,
                },
                {
                    x: c.subtiles[14].x,
                    y: c.subtiles[14].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[3].x,
                    y: c.subtiles[3].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[15].x,
                    y: c.subtiles[15].y,
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
                {
                    x: c.subtiles[0].x,
                    y: c.subtiles[0].y,
                },
                {
                    x: c.subtiles[3].x,
                    y: c.subtiles[3].y,
                    offsetX: subTileSize,
                },
                {
                    x: c.subtiles[12].x,
                    y: c.subtiles[12].y,
                    offsetY: subTileSize,
                },
                {
                    x: c.subtiles[15].x,
                    y: c.subtiles[15].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });
    }
}

export default Tile47;