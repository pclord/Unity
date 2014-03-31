#pragma strict
var speed : float;
var tower : GameObject;
var freebie : GameObject;
var start : float;
function Start () {
	Instantiate(freebie,Vector3(20,0,-1),Quaternion.identity);
	start = transform.position.x;
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space)) {
		rigidbody2D.AddForce(Vector2(0,1) * speed);
	}
	if(transform.position.x < start) {
		Application.LoadLevel("main");
	}
}