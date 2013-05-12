// TeXworksScript
// Title: insertTemplate
// Description: Insertion of predefined templates in TeX
// Author: Martin Worm-Leonhard
// Version: 0.1
// Date: 2013-05-12
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Shift+T

function insertTemplate(TemplateToInsert)
{
	TW.target.insertText(TemplateToInsert);
}

insertTemplate("Hej");

function readTemplateFile() 
{
	var Templates = TW.readFile("templates.txt");
	return Templates.result;
}

insertTemplate(readTemplateFile().toString());
