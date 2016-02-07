import UnityEngine.Component;

#pragma strict

public var range 				: float;
public var AirplaneRigidbody	: Rigidbody2D;

private var h 			: float;
private var v 			: float;
private var xPos 		: float;
private var yPos 		: float;
private var xCurrent 	: float;
private var yCurrent 	: float;

public var rend : Renderer;

function Start () {
	rend = GetComponent.<Renderer>();
}

function Update () {
    h 		= Input.GetAxis("Horizontal");
    v 		= Input.GetAxis("Vertical");
    xPos 	= h * range;
    yPos 	= v * range;

    xCurrent = transform.position.x + xPos;
    yCurrent = transform.position.y + yPos;

   // if(rend.isVisible){
		transform.position = new Vector3(xCurrent, yCurrent, 0);
	//}
}
