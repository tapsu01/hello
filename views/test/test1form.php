<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

if(Yii::$app->session->hasFlash('success'))
{
	echo "Data sent successfully..";
}
?>

<?php $form = ActiveForm::begin(); ?>
<?= $form->field($model, 'name'); ?>
<?= $form->field($model, 'password')->passwordInput(); ?>
<?= $form->field($model, 'password_repeat')->passwordInput(); ?>
<?= $form->field($model, 'email'); ?>

<?= Html::submitButton('Submit', ['class'=>'btn btn-success']); ?>

<?php ActiveForm::end(); ?>




