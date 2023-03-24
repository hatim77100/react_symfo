<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'app_admin')]
    #[IsGranted('ROLE_ADMIN')]
    public function index(SerializerInterface $serializer): Response
    {
        return $this->render('admin.html.twig', [
            'controller_name' => 'AdminController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }

    #[Route('/users', name:'app_users')]
    #[IsGranted('ROLE_ADMIN')]
    public function users(SerializerInterface $serializer): Response
    {
        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
