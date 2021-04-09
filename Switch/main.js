
var pos;
var msg;
var msg2;
pos = 10;

switch(pos/* VAR*/){
    /*cases  */
    case 1:/*value */
        msg="chanpion"
        break; // break stop the switch
    case 2:
        msg = "second chanpion"
        break;
    case 3:
        msg = "third chanpion"
        break; 
    default:
        msg = "not go the podio <br> No won the medal"

}

switch(pos){
    case 1:
    case 2:
    case 3:
        msg2 = "went the podio";
        break
    default:
        msg2 = ".";
}

document.write(msg);
document.write('<br>');
document.write(msg2);