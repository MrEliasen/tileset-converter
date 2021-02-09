class Tile9 {
    constructor(size) {
        this.size = size;
        this.size.subTileSize = this.size.tileSize / 2;
        this.pieces = this.getExtractionTemplate();

        this.fullTile = {
            x: this.pieces.tiles.center.x,
            y: this.pieces.tiles.center.y,
            size: this.size.tileSize,
        };
    }

    getExtractionTemplate() {
        const {tileSize, subTileSize} = this.size;

        const template = {
            tiles: {
                tl: {
                    x: 0,
                    y: 0,
                    size: tileSize,
                },
                tm: {
                    x: subTileSize,
                    y: 0,
                    size: tileSize,
                },
                tr: {
                    x: tileSize,
                    y: 0,
                    size: tileSize,
                },

                ml: {
                    x: 0,
                    y: subTileSize,
                    size: tileSize,
                },
                center: {
                    x: subTileSize ,
                    y: subTileSize,
                    size: tileSize,
                },
                mr: {
                    x: tileSize,
                    y: subTileSize,
                    size: tileSize,
                },

                bl: {
                    x: 0,
                    y: tileSize,
                    size: tileSize,
                },
                bm: {
                    x: subTileSize,
                    y: tileSize,
                    size: tileSize,
                },
                br: {
                    x: tileSize,
                    y: tileSize,
                    size: tileSize,
                },
            },
        };

        return template;
    }

    generateTemplate() {
        this.template = [];
        this.row1();
        this.row2();
        this.row3();

        return this.template;
    }

    row1() {
        const {tiles} = this.pieces;
        const {tileSize} = this.size;

        this.template.push({
            targetX: 0,
            targetY: 0,
            tiles: [
                tiles.tl,
            ]
        });
        this.template.push({
            targetX: tileSize,
            targetY: 0,
            tiles: [
                tiles.tm,
            ]
        });
        this.template.push({
            targetX: tileSize * 2,
            targetY: 0,
            tiles: [
                tiles.tr,
            ]
        });
    }

    row2() {
        const {tiles} = this.pieces;
        const {tileSize} = this.size;

        this.template.push({
            targetX: 0,
            targetY: tileSize,
            tiles: [
                tiles.ml,
            ]
        });
        this.template.push({
            targetX: tileSize,
            targetY: tileSize,
            tiles: [
                tiles.center,
            ]
        });
        this.template.push({
            targetX: tileSize * 2,
            targetY: tileSize,
            tiles: [
                tiles.mr,
            ]
        });
    }

    row3() {
        const {tiles} = this.pieces;
        const {tileSize} = this.size;

        this.template.push({
            targetX: 0,
            targetY: tileSize * 2,
            tiles: [
                tiles.bl,
            ]
        });
        this.template.push({
            targetX: tileSize,
            targetY: tileSize * 2,
            tiles: [
                tiles.bm,
            ]
        });
        this.template.push({
            targetX: tileSize * 2,
            targetY: tileSize * 2,
            tiles: [
                tiles.br,
            ]
        });
    }
}

export default Tile9;