#pragma strict
var seperation : float;
var back : GameObject;
var created = false;
var control : GameObject;
var multiplier : float;
function Start () {
}

function Update () {
	transform.position.x -= 0.05;
	if((transform.position.x < -1) && (created == false)) {
		Instantiate(back,Vector3(seperation,0,0),Quaternion.identity);
		created = true;
	}
	if(transform.position.x < -20) {
		control.GetComponent(VarControl).speed *= multiplier;
		Destroy(gameObject);
	} 
}