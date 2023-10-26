"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTags1693316908928 = void 0;
class CreateTags1693316908928 {
    constructor() {
        this.name = 'CreateTags1693316908928';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tags"`);
    }
}
exports.CreateTags1693316908928 = CreateTags1693316908928;
//# sourceMappingURL=1693316908928-CreateTags.js.map