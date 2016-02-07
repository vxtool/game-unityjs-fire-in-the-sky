import UnityEngine.Component;

#pragma strict

public var speed : float;
private var y : float;

function Start () {

}

function Update () {
	y = transform.position.y;
	y += speed;
	transform.position = new Vector3(transform.position.x, y, transform.position.z);

	Debug.Log(y);
	if(y <= -100 ) {
		Destroy (transform.gameObject);
	}
}