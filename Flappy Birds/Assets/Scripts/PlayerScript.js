#pragma strict
var speed : float;
function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space)) {
		rigidbody2D.AddForce(Vector2(0,1) * speed);
	}
}