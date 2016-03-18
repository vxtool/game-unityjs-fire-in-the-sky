import UnityEngine.Component;

#pragma strict

var startX : float;
var startY : float;
var endY   = -12;
var speed : float;

private var y 		: float;
private var rend 	: Renderer;

function Start () {
  transform.position.y = startY;
}

function Update () {
	y = transform.position.y;
	y += speed;
	transform.position = new Vector3(transform.position.x, y, transform.position.z);

  if(transform.position.y <= endY){
    transform.position.y = startY;
    transform.position.x = Random.Range(-13,13);
   }

	// if(rend && !rend.isVisible){
	// 	Destroy (transform.gameObject);
	// }
}

function OnBecameInvisible () {
	//Debug.Log("invisible");
}

function OnBecameVisible() {
	//Debug.Log("visible");
}

function OnTriggerEnter(other:Collider){
  if(other.CompareTag("Player")){
    transform.position.y = startY;
    transform.position.x = Random.Range(-13,13);
  }

  if(other.CompareTag("Shot")){
    transform.position.y = startY;
    transform.position.x = Random.Range(-13,13);
  }
}
