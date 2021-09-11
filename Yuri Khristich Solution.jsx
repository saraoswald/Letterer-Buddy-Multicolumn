#targetengine session

var dialog = new Window("palette", undefined, undefined);
dialog.preferredSize.width = 300;
dialog.preferredSize.height = 50;
dialog.text = "Please, select next frame";
dialog.onClose = function () { doc.removeEventListener('afterSelectionChanged', selectionChanged) }

dialog.add("statictext", undefined, "Last copied text:");

var msg = dialog.add("edittext");
msg.text = "";
msg.characters = 40

var doc = app.activeDocument;
var master_frame = app.selection[0]; // <-- the Text Script frame

if (master_frame instanceof TextFrame || master_frame instanceof Story) {
    dialog.show();
    app.selection = null;
    doc.addEventListener('afterSelectionChanged', selectionChanged);
} else {
    alert("Please, select a frame with text before run the script!");
    exit();
}

function selectionChanged() {

    var sel = doc.selection[0];

    if (sel instanceof InsertionPoint) sel = sel.parent.textContainers[0];

    if (sel instanceof TextFrame || sel instanceof Story) {

        if (sel.contents == '' && master_frame.contents != '') {

            app.select(master_frame.paragraphs[0], SelectionOptions.REPLACE_WITH);
            msg.text = master_frame.paragraphs[0].contents;
            app.cut();
            app.selection = null;
            sel.texts.everyItem().select();
            app.paste();
            app.selection = null;

            // remove '\r' at the end
            app.findGrepPreferences.findWhat = "\r$";
            app.changeGrepPreferences.changeTo = "";
            sel.changeGrep();

        }

        if (master_frame.contents == '') alert("No text to paste anymore!")
    }
}