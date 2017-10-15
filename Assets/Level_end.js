#pragma strict

function Start () {
    audio.Play();
    sound();
}

function sound () {
    yield WaitForSeconds (audio.clip.length);
    //if (Maincode.score >= Maincode.highscore) 
    //{
        //Maincode.highscore = Maincode.score;
        //Application.LoadLevel("Song1Highscoore"); 
   // }
   // else
	//{
	//    Application.LoadLevel("Song1Highscoore"); 
	//}
}