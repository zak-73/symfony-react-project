<?php

namespace App\Repository;

use App\Entity\Possessions;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Possessions|null find($id, $lockMode = null, $lockVersion = null)
 * @method Possessions|null findOneBy(array $criteria, array $orderBy = null)
 * @method Possessions[]    findAll()
 * @method Possessions[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PossessionsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Possessions::class);
    }

    // /**
    //  * @return Possessions[] Returns an array of Possessions objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Possessions
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
