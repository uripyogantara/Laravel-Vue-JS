<?php

use Illuminate\Database\Seeder;
use Faker\Factory;
use App\Author;
class AuthorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker=Factory::create();
        Author::truncate();
        for ($i=0; $i <20 ; $i++) { 
        	Author::create([
        		'name'		=> $faker->name,
        		'address'	=> $faker->address,
        		'phone'		=> $faker->phoneNumber
        	]);
        }
    }
}
