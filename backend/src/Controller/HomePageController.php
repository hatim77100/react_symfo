<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Routing\Annotation\Route;

class HomePageController extends AbstractController
{
    #[Route('/', name: 'app_home_page')]
    #[IsGranted('PUBLIC_ACCESS')]
    public function index(SerializerInterface $serializer): Response
    {

        return $this->render('home_page/index.html.twig', [
            'controller_name' => 'HomePageController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
