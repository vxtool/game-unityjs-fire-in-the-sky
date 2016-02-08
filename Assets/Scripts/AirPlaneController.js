import UnityEngine.Component;
import UnityEngine.Screen;
import UnityEngine.Object;

#pragma strict

var range 				: float;
var AirplaneRigidbody	: Rigidbody2D;

var shot : GameObject;
var shotSpawn : Transform;
var fireRate : float;

private var nextFire : float;

private var h 			: float;
private var v 			: float;
private var xPos 		: float;
private var yPos 		: float;
private var xCurrent 	: float;
private var yCurrent 	: float;


function Start () {

}

function Update () {
	if(Input.GetButton("Fire") && Time.time > nextFire){
		nextFire = Time.time + fireRate;
		Instantiate(shot, shotSpawn.position, shotSpawn.rotation);
	}
}

function FixedUpdate () {
    h 		= Input.GetAxis("Horizontal");
    v 		= Input.GetAxis("Vertical");
    xPos 	= h * range;
    yPos 	= v * range;

    xCurrent = transform.position.x + xPos;
    yCurrent = transform.position.y + yPos;

    if( (xCurrent >= -14.9 && xCurrent <= 14.8) && (yCurrent >= -7 && yCurrent <= 9) ){
		transform.position = new Vector3(xCurrent, yCurrent, 0);
	}
}