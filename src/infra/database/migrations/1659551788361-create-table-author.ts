import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableAuthor1659551788361 implements MigrationInterface {
  name = 'createTableAuthor1659551788361';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "author" (
                "id" uniqueidentifier NOT NULL,
                "name" varchar(255) NOT NULL,
                CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "author"
        `);
  }
}
