import UnityEngine.Component;
import UnityEngine.Screen;

#pragma strict

var range 				: float;
var AirplaneRigidbody	: Rigidbody2D;

private var h 			: float;
private var v 			: float;
private var xPos 		: float;
private var yPos 		: float;
private var xCurrent 	: float;
private var yCurrent 	: float;


function Start () {

}

function Update () {
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