#pragma strict

public var text: GUIText;

function OnGUI () 
{
    guiText.text = "Score : "+Maincode.score;
}