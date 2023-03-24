<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ProductController extends AbstractController
{
    #[Route('/products', name: 'app_product')]
    #[IsGranted('PUBLIC_ACCESS')]
    public function index(SerializerInterface $serializer): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }

    #[Route('/products/create', name: 'app_product_create')]
    #[IsGranted('ROLE_ADMIN')]
    public function create(SerializerInterface $serializer): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }

    #[Route('/products/show/{id}', name: 'app_product_show')]
    #[IsGranted('PUBLIC_ACCESS')]
    public function show(SerializerInterface $serializer): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }

    #[Route('/products/edit/{id}', name: 'app_product_edit')]
    #[IsGranted('ROLE_ADMIN')]
    public function edit(SerializerInterface $serializer): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
