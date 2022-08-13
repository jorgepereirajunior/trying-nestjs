import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableBook1659553330920 implements MigrationInterface {
  name = 'createTableBook1659553330920';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "book" (
                "id" uniqueidentifier NOT NULL,
                "title" varchar(255) NOT NULL,
                "publishedIn" datetime NOT NULL,
                CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "book"
        `);
  }
}
