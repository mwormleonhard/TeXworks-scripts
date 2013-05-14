// TeXworksScript
// Title: Insert template
// Description: Insert a predefined templates in the document
// Author: Martin Worm-Leonhard
// Version: 0.1
// Date: 2013-05-14
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Shift+T

TW.target.insertText(selectTemplate()); // This is the actual insertion point.

function readTemplateFile() 
{
    var TemplateFile = TW.readFile("templates.txt");
    if (TemplateFile.status!=0) 
    {
        TW.critical(null, "Cannot read template file!", TemplateFile.message);
    }
    else
    return TemplateFile.result.replace(/^\/\/.*$/gm, "");     //Strip comment lines and return the rest 
}


 
 function selectTemplate() 
 {
    var entireTemplateFile = readTemplateFile();
    var header = /###(?!END).*###/g; //Matches template header but not end marker 
    var templateHeaders = entireTemplateFile.match(header);  //Returns array of headers including ###-tags
    var templateList = templateHeaders.join(";").replace(/#/g, "").split(";"); //Strips tags and reforms array
    
    var selectedTemplate = TW.getItem(null, //Use included UI getItem
    "Template / Snippet Selector"
     , "Select template to insert"
     , templateList // Populates the list
     , 0  // Default selection - zero based index
     , false // true here means can edit
     ); 
     
     var chunks = entireTemplateFile.split("###END_TEMPLATE###"); //Split into chunks on end tag. This removes the tag as well.
     for (var i = 0; i < chunks.length; i++) // Iterate over array
     {
         if (chunks[i].match(selectedTemplate)) //Find chunk name
         {
            return chunks[i].split(/###/)[2];  // Strip header and return chunk body (index=2)
         };
	};
};
 

