<?php

namespace App\DataFixtures;

use App\Entity\Client;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // create 20 products
        for ($i = 0; $i < 20; $i++) {
            $product = new Product();
            $product->setName('product '.$i);
            $product->setPrice(mt_rand(10, 100));
            $product->setDescription('description' .$i);
            $manager->persist($product);
        }

        // create 10 clients
        for ($i=0; $i < 10 ; $i++) { 
            $client = new Client();
            $client->setFullName('fullname' .$i);
            $client->setEmail('email' .$i);
            $manager->persist($client);
        }

        $manager->flush();
    }
}
