<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class DashBoardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dash_board')]
    #[IsGranted('ROLE_USER')]
    public function index(SerializerInterface $serializer): Response
    {
        return $this->render('dash_board/index.html.twig', [
            'controller_name' => 'DashBoardController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
