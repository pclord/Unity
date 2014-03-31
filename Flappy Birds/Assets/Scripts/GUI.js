#pragma strict
var control : GameObject;
function Start () {

}

function Update () {
	guiText.text = control.GetComponent(VarControl).points.ToString();
}