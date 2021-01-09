/* --- Go to Previous Line --- */
/*

Purpose: Selects the previous line in the Letterer Buddy dialog window

Usage:
- Install this script 
- Assign this script to a keyboard shortcut (Edit > Keyboard Shortcuts... > Product Area : Scripts)
- Start up Letterer Buddy, and load a .txt file
- Press the keyboard shortcut that you assigned to this script 
- The previous line in the listbox will be selected 

Notes: 
- If this script doesn't work, try restarting InDesign

*/

var window = Window.find("palette","Letterer Buddy");
if(window && window.visible){
    var list = window.findElement("scriptList");
    if (list !== null && list.selection < list.items.length) {
        list.selection = list.selection - 1;
    }
}