#pragma strict
var height : float;
function Start () {
	height = Mathf.RoundToInt(Random.Range(15.0,30.0));
	transform.localScale = Vector2(1,height);
}

function Update () {

}