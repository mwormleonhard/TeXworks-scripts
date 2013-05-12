// TeXworksScript
// Title: openTemplateFile
// Description: Edit of predefined templates in TeX
// Author: Martin Worm-Leonhard
// Version: 0.1
// Date: 2013-05-12
// Script-Type: standalone
// Context: TeXDocument
// Shortcut:



var retVal = TW.app.openFileFromScript("C:\\Users\\mwl\\AppData\\Local\\MiKTeX\\2.9\\TeXworks\\0.4\\scripts\\templates\\templates.txt", TW, -1,true); // TODO: Hardcoding er af det onde!
if (retVal.status == 0) // SystemAccess_OK
{
	var openedDocumentObject = retVal["result"] ;
TW.information(null,"Tw Message",openedDocument.fileName); // shows the opened document's base filename
TW.information(null,"Tw Message",openedDocument.text); // shows the contents of the "opened" document.
}
