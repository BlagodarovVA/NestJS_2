import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1693316908928 implements MigrationInterface {
  name = 'SeedDb1693316908928';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('fedor', 'fedor@mail.by', '2b$10$IkEdW/liROgnjxUlrXVq6eWuenqOGOt6DSEZX2KVQRn7CpSZBqVPC')`,
    );

    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('vasya', 'vasya@mail.by', '$2b$10$bdKugAqWcv1n.Pkr6Rmr9eICKdLQ.MhVd6wx5HRX27bkaWERcmdby')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'homyak,nestjs', 2)`,
    );
  }

  public async down(): Promise<void> {}
}
