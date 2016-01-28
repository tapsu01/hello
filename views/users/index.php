<?php
	$this->registerJs("$('#myTable').DataTable();");
?>

<table class="table table-bordered table-hover table-striped" id="myTable">
	<thead>
		<tr>
			<th>#</th>
			<th>Username</th>
			<th>Password</th>
			<th><a href="#" title="" target="_blank" class="btn btn-primary">Create</a></th>
		</tr>
	</thead>
	<tbody>
		<?php
			foreach( $users as $user ):
			?>
		<tr>
			<td><?= $user->user_id; ?></td>
			<td><?= $user->username; ?></td>
			<td><?= $user->password; ?></td>
			<td>
				<a href="#" title="" target="_blank" class="btn btn-warning">Update</a>
				<a href="#" title="" target="_blank" class="btn btn-danger">Delete</a>
			</td>
		</tr>
		<?php
			endforeach;
		?>
	</tbody>
</table>

