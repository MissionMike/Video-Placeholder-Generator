<?php

if (isset($_GET['video_id'])) {
	try {
		unlink('../' . $_GET['video_id'] . '.jpg');

		echo 'Cleared file ' . $_GET['video_id'] . '.jpg';

	} catch (Exception $e) {
		die();
	}
}
