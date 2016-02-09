import UnityEngine.SceneManagement;
import UnityEngine.Screen;

#pragma strict

var customSkin : GUISkin;

private var wButton = 280;
private var hButton = 40;
private var xElement =  (width-wButton)/2;
private var yElement = 500;

function OnGUI () {
  GUI.skin = customSkin;

  if(GUI.Button(Rect(xElement, yElement, wButton, hButton), "Exit to Menu")) {
    SceneManager.LoadScene('MainMenu');
  }

}
