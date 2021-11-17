<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211023175920 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE possessions ADD users_id INT NOT NULL');
        $this->addSql('ALTER TABLE possessions ADD CONSTRAINT FK_8325018867B3B43D FOREIGN KEY (users_id) REFERENCES users (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8325018867B3B43D ON possessions (users_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE possessions DROP FOREIGN KEY FK_8325018867B3B43D');
        $this->addSql('DROP INDEX UNIQ_8325018867B3B43D ON possessions');
        $this->addSql('ALTER TABLE possessions DROP users_id');
    }
}
