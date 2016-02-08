import UnityEngine.SceneManagement;
import UnityEngine.Screen;

#pragma strict

//Public Variables
var loseQuote : String = "Você perdeu!!";

function OnGUI () {
	GUI.BeginGroup (Rect(width / 2 - 100, height / 2 - 100, 200, 100));
	GUI.Box (Rect(0,0,200,100), loseQuote);

	if(GUI.Button(Rect(60,60,80,30), "Menu")) {
		SceneManager.LoadScene('MainMenu');
	}

	GUI.EndGroup();
}