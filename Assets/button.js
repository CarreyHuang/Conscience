#pragma strict

var button : int;
var object : Transform;

function Start () {
    if (button == 1) {
        object = GameObject.Find("line1").transform;
    }
    if (button == 2) {
        object = GameObject.Find("line2").transform;
    }
    if (button == 3) {
        object = GameObject.Find("line3").transform;
    }
    if (button == 4) {
        object = GameObject.Find("line4").transform;
    }
}


function Update () {
    if (Input.GetKeyDown ("d")) 
    {
	    if ( button == 1 ) {
            if(transform.position.y <= object.position.y){
                Maincode.score += 100;
                Destroy(gameObject);
                return;
            }
        }
	}//line1

    if (Input.GetKeyDown ("f")) 
    {
	    if ( button == 2 ) {
            if(transform.position.y <= object.position.y){
                Maincode.score += 100;
                Destroy(gameObject);
                return;
            }
        }
	}//line2
	
	if (Input.GetKeyDown ("j")) 
    {
	    if ( button == 3 ) {
            if(transform.position.y <= object.position.y){
                Maincode.score += 100;
                Destroy(gameObject);
                return;
            }
        }
	}//line3
	
	if (Input.GetKeyDown ("k")) 
    {
	    if ( button == 4 ) {
            if(transform.position.y <= object.position.y){
                Maincode.score += 100;
                Destroy(gameObject);
                return;
             }
        }
	}//line4
}