#pragma strict

function Update () 
{
	if(Time.timeScale > 0)
	{
 		transform.position.z = 0;
   		transform.Translate(Vector3(0,-5,0) * Time.deltaTime);
	}
}