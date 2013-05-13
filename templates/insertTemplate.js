// TeXworksScript
// Title: insertTemplate
// Description: Insertion of predefined templates in TeX
// Author: Martin Worm-Leonhard
// Version: 0.1
// Date: 2013-05-12
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Shift+T

function insertTemplate(templateToInsert)
{
	TW.target.insertText(templateToInsert);
}

function readTemplateFile() 
{
	var Templates = TW.readFile("templates.txt");
	return Templates.result.toString();
}

var entireTemplateFile = readTemplateFile();
var header = /#\s.*\n/g;
var templateHeaders = entireTemplateFile.match(header);
var templateList = templateHeaders; //.split("\n");

insertTemplate(templateHeaders);
insertTemplate(entireTemplateFile);

var selectedTemplate = TW.getItem(null, 
"Template / Snippet Selector"
 , "Select template to inesert"
 , templateList
 , 0  // Default selection - zero based index
 , false // true here means can edit
 ); 
 insertTemplate(selectedTemplate);
