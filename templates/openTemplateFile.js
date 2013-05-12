// TeXworksScript
// Title: openTemplateFile
// Description: Edit of predefined templates in TeX
// Author: Martin Worm-Leonhard
// Version: 0.1
// Date: 2013-05-12
// Script-Type: standalone
// Context: TeXDocument
// Shortcut:



var retVal = TW.app.openFileFromScript(TW.script.fileName.replace("openTemplateFile.js","templates.txt"), TW, -1,true); 
if (retVal.status == 0) // SystemAccess_OK
{
	var openedDocument = retVal["result"] ;
TW.information(null,"Tw Message",openedDocument.fileName); // shows the opened document's base filename
TW.information(null,"Tw Message",openedDocument.text); // shows the contents of the "opened" document.
}
