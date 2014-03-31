#pragma strict
var gravitydir : int;
var created = false;
var added = false;
var tower : GameObject;
var control : GameObject;
var gravitymagnitude : int;
var distance : float;
function Start () {
	var randomizer = Random.Range(0.0,2.0);
	if(randomizer <= 1) {
		gravitydir = -2 * gravitymagnitude;
	}
	else {
		gravitydir = 2 * gravitymagnitude;
	}
	rigidbody2D.velocity = Vector2(0,gravitydir);
}

function Update () {
	transform.position.x -= control.GetComponent(VarControl).speed;
	if((transform.position.x < 0) && (created == false)){
		Instantiate(tower,Vector3(50 - distance,0,-1),Quaternion.identity);
		created = true;
		distance += 0.02;
	}
	if((transform.position.x < -6) && (added == false)){
		control.GetComponent(VarControl).points += 1;
		added = true;
	}
}