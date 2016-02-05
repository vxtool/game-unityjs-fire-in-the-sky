#pragma strict

public var range : float;

//var rend : Renderer;

function Start () {
	//rend = gameObject.GetComponent.<Renderer>();
}

function Update () {
    var h : float = Input.GetAxis("Horizontal");
    var v : float = Input.GetAxis("Vertical");
    var xPos : float = h * range;
    var yPos : float = v * range;
    var xCurrent : float = transform.position.x + xPos;
    var yCurrent : float = transform.position.y + yPos;

    //if (rend.isVisible) {
    	transform.position = new Vector3(xCurrent, yCurrent, 0);
    //}
}