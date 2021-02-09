import Tile9 from './tile9';

class Tile6 extends Tile9{
    generateTemplate() {
        this.template = [];
        this.row1();
        this.row2();

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
            targetY: tileSize * 1,
            tiles: [
                tiles.bl,
            ]
        });
        this.template.push({
            targetX: tileSize,
            targetY: tileSize * 1,
            tiles: [
                tiles.bm,
            ]
        });
        this.template.push({
            targetX: tileSize * 2,
            targetY: tileSize * 1,
            tiles: [
                tiles.br,
            ]
        });
    }
}

export default Tile6;