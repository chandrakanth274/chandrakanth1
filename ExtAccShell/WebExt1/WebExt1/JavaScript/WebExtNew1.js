// *** Start of auto-generated code *** (please don't modify this section)
///<reference path="C:\Users\chandrakanth.nettem\AppData\Local\Temp\EA_IntelliTemp\ruz3pzpz.js" />
_elem=qtpElemObject;
_util=qtpUtilObject;
// *** End of auto-generated code ***

//////////////////////////////////////////////////////////////////////////////
// Retrieves the run time values for the control's identification properties
// (defined in the test objects XML file).
//
// Parameters: property - The name of the property to retrieve.
// Returns:    Integer, String, Boolean, or Array.
//             The value of the requested property. 
//             No value is returned if an error occurs or the specified
//             property is not supported by this method.
///////////////////////////////////////////////////////////////////////////////
function get_property_value(property)
{
      // TODO: Implement this function to return the 
      // properties’ run-time values from the control.
      // For example: 
      // if (property == "logical_name") {
      //   return "_elem.<enter HTML property name here>"; // Use a property that makes 
                                                      // sense for the test object name.
      //  }
      
      
      // Provide a value for:
      // - logical_name property (used to name the test object instance) 
      // - all new identification properties that you added to the test object class
      // - properties inherited from the base class, whose value you want to override

      // For properties whose implementation you can inherit from the base class, 
      // return nothing. 

      // Use only lowercase letters in the property names, as QuickTest converts property names 
      // to lowercase before calling this function to retrieve property values.
	  if (property == "property1")
	  {
          // Implement this section of the function       
          // to return the property’s run-time value from the control.
          // return <property value>;
	  }




}
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
function Select() {

	// TODO: Implement this function to perform the required operation on the control.
    //Call the _util.Report method to inform QuickTest whether or not the step passed. For example:
    var bookTitle = window.$(_elem.rows[0].cells[1]).children("A")[0];
    ClickOnLink(bookTitle)
	//_util.Report(micDone, "<Enter Operation name here>", toSafeArray(new Array()), "<Enter Operation name here> performed");
	//TODO return a value.
}


