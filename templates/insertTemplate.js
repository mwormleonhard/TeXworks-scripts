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
	TW.target.insertText(templateToInsert); //Superfluous? Insert directly? 
}

function readTemplateFile() 
{
	var Templates = TW.readFile("templates.txt");
	return Templates.result.toString();     //TODO: error handling and format clearing. Is it a string already?
}

var entireTemplateFile = readTemplateFile();
var header = /###(?!END).*###/g; //Matches template header but not end marker 
var templateHeaders = entireTemplateFile.match(header);
var templateList = templateHeaders.join(";").replace(/#/g, "").split(";");

//insertTemplate(templateHeaders);
//insertTemplate(entireTemplateFile);

var selectedTemplate = TW.getItem(null, 
"Template / Snippet Selector"
 , "Select template to insert"
 , templateList
 , 0  // Default selection - zero based index
 , false // true here means can edit
 ); 
 
 function extractTemplate(templateName) //TODO: Strip comment lines here or when reading file
 {
	 var chunks = entireTemplateFile.split("###END_TEMPLATE###"); //Split into chunks
	 for (var i = 0; i < chunks.length; i++) 
	 {
		 if (chunks[i].match(templateName))  //Find chunk name
		 return chunks[i].split(/###/)[2];  // Strip header and return chunk body
	 }
}
 
 insertTemplate(extractTemplate(selectedTemplate));
