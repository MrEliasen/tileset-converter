class Tile47 {
    constructor(size) {
        this.size = size;
        this.size.subTileSize = this.size.tileSize / 2;
        this.pieces = this.getExtractionTemplate();

        this.fullTile = {
            x: this.pieces.c.tiles.center.x,
            y: this.pieces.c.tiles.center.y,
            size: this.size.tileSize,
        };
    }

    getExtractionTemplate() {
        const {tileSize, subTileSize} = this.size;

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