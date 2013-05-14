// TeXworksScript
// Title: Open template file
// Description: Edit predefined templates for script "Insert template"
// Author: Martin Worm-Leonhard
// Version: 0.1
// Date: 2013-05-14
// Script-Type: standalone
// Context: TeXDocument
// Shortcut:



var retVal = TW.app.openFileFromScript(TW.script.fileName.replace("openTemplateFile.js","templates.txt"), TW, -1,true); 
if (retVal.status != 0) // SystemAccess_OK
	{
		if (retVal.status==1) msg="System: Access failed! \n Does the file exist?";
		if (retVal.status==2) msg="System: Access Denied! \n Do you have write permission?";
		else msg="Unknown error! \n System returned status " + retVal.status;
		TW.critical(null, "Cannot open template file!", msg);
	}
