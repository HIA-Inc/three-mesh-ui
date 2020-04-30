
/*
	Job: Create and return a plane mesh according to dimensions and style parameters
	Knows: Dimension and style of the plane to create
*/

import { Mesh, PlaneBufferGeometry, MeshLambertMaterial } from 'three';

const DEFAULT_MATERIAL = new MeshLambertMaterial({
	color: 0x000000,
	side: 2,
	transparent: true,
	opacity: 0.2
});

function Frame( width, height, material ) {

	const mesh = new Mesh(
		new PlaneBufferGeometry( width, height ),
		material ? material : DEFAULT_MATERIAL
	);
	mesh.name = "MeshUI-Frame"

	return mesh;

};

export default Frame
