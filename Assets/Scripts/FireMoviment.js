import UnityEngine.Component;

#pragma strict

var speed 	: float;

private var y 		: float;
private var rend 	: Renderer;

function Start () {

}

function Update () {
	y = transform.position.y;
	y += speed;
	transform.position = new Vector3(transform.position.x, y, transform.position.z);

	if(rend && !rend.isVisible){
		Destroy (transform.gameObject);
	}
}