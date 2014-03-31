#pragma strict
var speed : float;
var points : int;
function Start () {

}

function Update () {

}
function OnGUI () {
	GUI.Label(Rect(-10,5,10,5),points.ToString());
}