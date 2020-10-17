<?php

/**
 * Gets a vimeo thumbnail url
 * Thank you @Erdal G. @link https://stackoverflow.com/questions/1361149/get-img-thumbnails-from-vimeo
 * @param mixed $id A vimeo id (ie. 1185346)
 * @return thumbnail's url
 */
function get_vimeo_thumbnail($id)
{
	$data = file_get_contents("http://vimeo.com/api/v2/video/$id.json");
	$data = json_decode($data);
	return $data[0]->thumbnail_large;
}
