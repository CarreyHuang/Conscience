#pragma strict

public var paused : boolean;

function Start () 
{
	paused = false;
}

function pause_button () 
{
	Time.timeScale = 0;
}

function backToGame_button () 
{
	Time.timeScale = 1;
}

function retry_button ()
{
	Application.LoadLevel("background");
}

function backToMenu_button ()
{
	Application.LoadLevel("UI_background");
}
