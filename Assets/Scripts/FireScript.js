#pragma strict

//public variables 
var laser 		: GameObject;
var fireFreq 	: float;
var laserType 	: int;

//private variables
private var lastShot : float;
private var laserTimer : float;

function Update () {
	if (Input.GetButtonDown ("Fire1") && (Time.time > lastShot + fireFreq) ) {
		Fire();
	}
	laserTimer -=1 * Time.deltaTime;
	if (laserTimer < 0) {
		laserType = 0;
	}
}

function Fire() {
	lastShot = Time.time; 
	if (laserType == 0) {
		Instantiate (laser, transform.position, transform.rotation);
	} else if (laserType == 1) {
		yield WaitForSeconds (0.1);
		Instantiate (laser, transform.position, Quaternion.Euler(Vector3(0, -20, 0)));
		yield WaitForSeconds (0.1);
		Instantiate (laser, transform.position, transform.rotation);
		yield WaitForSeconds (0.1);
		Instantiate (laser, transform.position, Quaternion.Euler(Vector3(0, 20, 0)));
	}
	else if (laserType == 2) {
		yield WaitForSeconds (0.1);
		Instantiate (laser, transform.position, Quaternion.Euler(Vector3(0, -40, 0)));
		yield WaitForSeconds (0.1);
		Instantiate (laser, transform.position, Quaternion.Euler(Vector3(0, -20, 0)));
		yield WaitForSeconds (0.1);
		Instantiate (laser, transform.position, transform.rotation);
		yield WaitForSeconds (0.1);
		Instantiate (laser, transform.position, Quaternion.Euler(Vector3(0, 20, 0)));
		yield WaitForSeconds (0.1);
		Instantiate (laser, transform.position, Quaternion.Euler(Vector3(0, 40, 0)));
	}
}

function PowerUpLaser () {
	laserType += 1 ;
	laserTimer = 3;
	laserType = Mathf.Clamp (laserType, 0, 2);
}