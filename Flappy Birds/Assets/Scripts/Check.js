#pragma strict
var control : GameObject;
var distance : float;
function Start () {
	if(control.GetComponent(VarControl).points > 13) {
		transform.position.x -= control.GetComponent(VarControl).points * distance;
	}
}

function Update () {
}