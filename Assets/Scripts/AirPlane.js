#pragma strict

public var range : float;


function Update () {
    var h : float = Input.GetAxis("Horizontal");
    var v : float = Input.GetAxis("Vertical");
    var xPos : float = h * range;
    var yPos : float = v * range;
    var xCurrent : float = transform.position.x + xPos;
    var yCurrent : float = transform.position.y + yPos;
    transform.position = new Vector3(xCurrent, yCurrent, 0);
}