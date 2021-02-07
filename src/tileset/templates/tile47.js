/* eslint no-unused-vars: 0 */

class Tile47 {
    constructor(pieces, size) {
        this.size = size;
        this.size.subTileSize = this.size.tileSize / 2;
        this.pieces = pieces;

        this.fullTile = {
            sourceX: this.pieces.c.tiles.center.x,
            sourceY: this.pieces.c.tiles.center.y,
        };
    }

    generateTemplate() {
        this.template = [];
        this.row1();
        this.row2();
        this.row3();
        this.row4();
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
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 3,
            targetY: 0,
            tiles: [
                this.fullTile,
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
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
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                },
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
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
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                },
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
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
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
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
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
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
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                },
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
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
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                },
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
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
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
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
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
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
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
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
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
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
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
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
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
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
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 4,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
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
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
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
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 7,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
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
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                },
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
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
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
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
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 11,
            targetY: tileSize * 2,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
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
                this.fullTile,
                {
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.br.x,
                    sourceY: b.tiles.br.y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 1,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 2,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.bl.x,
                    sourceY: b.tiles.bl.y,
                    offsetY: subTileSize,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 3,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 4,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.tl.x,
                    sourceY: b.tiles.tl.y,
                }
            ]
        });

        this.template.push({
            targetX: tileSize * 5,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 6,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: b.tiles.tr.x,
                    sourceY: b.tiles.tr.y,
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
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
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
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
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
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });

        this.template.push({
            targetX: tileSize * 10,
            targetY: tileSize * 3,
            tiles: [
                this.fullTile,
                {
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
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
                    sourceX: c.subtiles[1].x,
                    sourceY: c.subtiles[1].y,
                },
                {
                    sourceX: c.subtiles[2].x,
                    sourceY: c.subtiles[2].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[4].x,
                    sourceY: c.subtiles[4].y,
                },
                {
                    sourceX: c.subtiles[8].x,
                    sourceY: c.subtiles[8].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[13].x,
                    sourceY: c.subtiles[13].y,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[14].x,
                    sourceY: c.subtiles[14].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
                {
                    sourceX: c.subtiles[7].x,
                    sourceY: c.subtiles[7].y,
                    offsetX: subTileSize,
                },
                {
                    sourceX: c.subtiles[11].x,
                    sourceY: c.subtiles[11].y,
                    offsetX: subTileSize,
                    offsetY: subTileSize,
                },
            ]
        });
    }
}

export default Tile47;