<?php

namespace App\Controller;

use App\Entity\Possessions;
use App\Entity\Users;
use ContainerXraA6c8\getDoctrine_Orm_DefaultEntityManager_PropertyInfoExtractorService;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use JMS\Serializer\SerializerBuilder;
use JMS\Serializer\Exception\Exception;
use JMS\Serializer\Builder;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }

   /**
    * @Route("/api/show/users", name="users")
    * @return \Symfony\Component\HttpFoundation\JsonResponse
    */
    public function showUsers()
    {
        $users= $this->getDoctrine()->getRepository('App:Users')->findAll();
        $serializer = SerializerBuilder::create()->build();

        $response = new Response();
        $response->setContent($serializer->serialize($users, 'json'));
        //dd($users);
        return $response;


    }

    /**
     * @Route("/api/delete/user/{id}", name="user_delete")
     */
    public function deleteUser($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $users = $entityManager->getRepository(Users::class)->find($id);

        $entityManager->remove($users);
        $entityManager->flush();

        return $this->redirectToRoute('users', [
            'id' => $users->getId()
        ]);
    }

    /**
     * @Route("/api/user/possessions/{id}", name="possessions")
     */
    public function getPossessionsByUsers($id)
    {

        $users= $this->getDoctrine()->getRepository('App:Users')->find($id);

        $serializer = SerializerBuilder::create()->build();
        $possessions = $users->getPossessions();
        $response = new Response();
        $response->setContent($serializer->serialize($possessions, 'json'));
        //dd($possessions);
        return $response;
    }

    /**
     * @Route("/api/user/birthdate/{id}", name="birth_date")
     */
    public function getNewDates($id)
    {
        $date = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository(Users::class)
            ->find($id);
        $dateInterval = $date->getBirthDate();
        $dateNaissance = $dateInterval->diff(new \DateTime());
        //
        //dd(Response);
        //$date = $dateNaissance->getBirthDate();



//
        $serializer = SerializerBuilder::create()->build();
        $response = new Response();
        $response->setContent($serializer->serialize($dateNaissance, 'json'));
        //dd($dateInterval);
        return $response;

        //return $dateInterval->y;

        //return $this->birthDate;
    }
}
