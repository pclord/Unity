#pragma strict
var height : float;
var min : float;
var max : float;
var istower = true;
function Start () {
	height = Mathf.RoundToInt(Random.Range(min,max));
	transform.localScale = Vector2(1,height);
}

function Update () {
	if(transform.position.x < -20) {
		Destroy(gameObject);
	}
}
