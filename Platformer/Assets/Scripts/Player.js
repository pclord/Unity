#pragma strict
var speed : float;
var jumpheight : float;
function Start () {

}

function Update () {
	transform.position += Vector3(Input.GetAxis("Horizontal") / speed,0,Input.GetAxis("Vertical") / speed);
	if(Input.GetKeyDown(KeyCode.Space)) {
		if(transform.position.y < 10) {
			transform.position.y += jumpheight;
		}
	}
	transform.ro
}