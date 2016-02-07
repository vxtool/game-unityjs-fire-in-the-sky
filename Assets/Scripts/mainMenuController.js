import UnityEngine.SceneManagement;
import UnityEngine.Screen;
#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	var wButton = 200;
	var hButton = 60;
	var xElement =  (width-wButton)/2;
	var yElement = 400;

    if (GUI.Button (Rect (xElement, yElement, wButton, hButton), "Play")) {
        SceneManager.LoadScene('game');
    }

    if(GUI.Button(new Rect(xElement, yElement + hButton + 10, wButton, hButton), "Tutorial")) {
        SceneManager.LoadScene('tutorial');
    }
}