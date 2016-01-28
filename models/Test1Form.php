<?php

namespace app\models;

use Yii;
use yii\base\Model;

class Test1Form extends Model
{

	public $name;
	public $password;
	public $password_repeat;
	public $email;
	
	function __construct()
	{
		
	}

	public function rules()
	{
		return [
			['name', 'required', 'message'=>'Please enter your name...'],
			['password', 'required', 'message'=>'Please enter your password'],
			['password_repeat', 'required', 'message'=>'Please enter your password again...'],
			['email', 'required', 'message'=>'Please enter valid email...'],
			[['name', 'password', 'password_repeat', 'email'], 'string', 'min'=>6, 'max'=>255],
			['password', 'safe'],
			['password_repeat', 'compare'],
			['email', 'email', 'message'=>'Email not valid! Please try again...']
		];
	}
}

