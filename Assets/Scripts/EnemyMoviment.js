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

function OnTriggerEnter2D(other : Collider2D){
  Debug.Log(other.tag);
  if(other.tag == "Player"){
    transform.position.y = startY;
    transform.position.x = Random.Range(-13,13);
    AirPlaneController.life -= 1;

    if(AirPlaneController.life == 0){
      SceneManager.LoadScene('Lose');
    }
  }

  if(other.tag == "Shot"){
    transform.position.y = startY;
    transform.position.x = Random.Range(-13,13);
    AirPlaneController.points += 5;
  }
}
