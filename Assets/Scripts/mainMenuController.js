import UnityEngine.SceneManagement;
import UnityEngine.Screen;
#pragma strict

var customSkin : GUISkin;

private var wButton = 200;
private var hButton = 40;
private var xElement =  (width-wButton)/2;
private var yElement = 400;

function OnGUI () {
	GUI.skin = customSkin;

    if (GUI.Button (Rect (xElement, yElement, wButton, hButton), "Play")) {
        SceneManager.LoadScene('Game');
    }

    if(GUI.Button(new Rect(xElement, yElement + hButton + 20, wButton, hButton), "Tutorial")) {
        SceneManager.LoadScene('Tutorial');
    }

    if(GUI.Button(new Rect(xElement, yElement + hButton + 80, wButton, hButton), "Credits")) {
        SceneManager.LoadScene('Credits');
    }
}