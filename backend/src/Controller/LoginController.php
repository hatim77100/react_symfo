<?php

namespace App\Controller;

use App\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Serializer\SerializerInterface;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    #[IsGranted('PUBLIC_ACCESS')]
    public function index(AuthenticationUtils $authenticationUtils, SerializerInterface $serializer): Response
    {
        $error = $authenticationUtils->getLastAuthenticationError();

        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render(
            'login/index.html.twig',
            [
                'controller_name' => 'LoginController',
                'last_username' => $lastUsername,
                'error'         => $error,
                'user' => $serializer->serialize($this->getUser(), 'jsonld'),
            ]
        );
    }

    #[Route('/logout', name: 'app_logout')]
    #[IsGranted('ROLE_USER')]
    public function logout()
    {
        $this->redirectToRoute('app_home_page');
    }

    #[Route('/api/login_check', name: 'app_login_check')]
    public function api_login(): JsonResponse
    {
        $user = $this->getUser();

        return new JsonResponse([
            'email' => $user->getEmail(),
            'roles' => $user->getRoles(),
        ]);
    }
}
