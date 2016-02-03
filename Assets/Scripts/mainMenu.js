import UnityEngine.SceneManagement;
#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
    GUI.Box (Rect (10,10,100,90), "Menu");

    if (GUI.Button (Rect (20,40,80,20), "Play")) {
        SceneManager.LoadScene('game');
    }

    if(GUI.Button(new Rect(20,70,80,20), "Tutorial")) {
        SceneManager.LoadScene('tutorial');
    }
}