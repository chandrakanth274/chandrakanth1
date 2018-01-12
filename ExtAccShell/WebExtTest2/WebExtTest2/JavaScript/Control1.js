// *** Start of auto-generated code *** (please don't modify this section)
///<reference path="C:\Users\chandrakanth.nettem\AppData\Local\Temp\EA_IntelliTemp\4jbvaxym.js" />
_elem=qtpElemObject;
_util=qtpUtilObject;
// *** End of auto-generated code ***

////////////////////////////////////////////////////////////////////////////////
// Selects specified Tab on a widget
//
// Parameters: Item (Index or Title of the Tab, 
//                   while passing Index prefix # before index value)
// Returns:   Boolean
///////////////////////////////////////////////////////////////////////////////////
function Select() {
    var details = null;
    var success = false;
    if (!Item || typeof (Item) != "string") {
        details = "Cannot select invalid item: " + Item;
        _util.Report(micFail, "Select", toSafeArray(new Array()), details);
        throw Error(details);
    }
    var tabToSelect = -1;
    // Retrieve tab elements.
    var tabs = window.$(_elem).find(".ui-tabs-nav > li");
    if (Item.charAt(0) == '#') {
        // The tab item is specified by index.
        var index = parseInt(Item.substring(1)) - 1;
        if (index < tabs.length && index >= 0)
            tabToSelect = index;
    }
    else {
        // The tab item is specified by name.
        for (var i = 0; i < tabs.length; i++) {
            if (Item == tabs[i].innerText) {
                tabToSelect = i;
                break;
            }
        }
    }
    if (tabToSelect >= 0) {
        // Call the Select method of jQueryUI Tab.
        window.$(_elem).tabs().tabs('select', tabToSelect);
        details = "Selected " + Item;
        _util.Report(micDone, "Select", toSafeArray(new Array(Item)), details);
    }
    else {
        details = "Item " + Item + " does not exist.";
        _util.Report(micFail, "Select", toSafeArray(new Array(Item)), details);
        throw Error(details);
    }
    return true;
}


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
    if (property == "selected") {
        return window.$(_elem).find(".ui-tabs-nav > li[class*='ui-tabs-selected']")[0].innerText;
    }
    if (property == "items count") {
        return window.$(_elem).find(".ui-tabs-nav > li").length;
    }
    if (property == "all items") {
        var tabLabels = new Array();
        var tabs = window.$(_elem).find(".ui-tabs-nav > li");
        for (var i = 0; i < tabs.length; i++)
            tabLabels.push(tabs[i].innerText);
        return tabLabels.join(";");
    }
    if (property == "logical name") {
        return _elem.id;
    }



}
////////////////////////////////////////////////////////////////////////////
function GetItems(){

	// TODO: Implement this function to perform the required operation on the control.
	//Call the _util.Report method to inform QuickTest whether or not the step passed. For example:
    var tabLabels = new Array();
    var tabs = window.$(_elem).find(".ui-tabs-nav > li");
    for (var i = 0; i < tabs.length; i++)
        tabLabels.push(tabs[i].innerText);
    return tabLabels.join(";");
	//_util.Report(micDone, "<Enter Operation name here>", toSafeArray(new Array()), "<Enter Operation name here> performed");
	//TODO return a value.
}


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
function GetSelectedItem(){

	// TODO: Implement this function to perform the required operation on the control.
	//Call the _util.Report method to inform QuickTest whether or not the step passed. For example:
    return window.$(_elem).find(".ui-tabs-nav > li[class*='ui-tabs-selected']")[0].innerText;
	//_util.Report(micDone, "<Enter Operation name here>", toSafeArray(new Array()), "<Enter Operation name here> performed");
	//TODO return a value.
}


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
function GetItemCount(){

	// TODO: Implement this function to perform the required operation on the control.
	//Call the _util.Report method to inform QuickTest whether or not the step passed. For example:
    return window.$(_elem).find(".ui-tabs-nav > li").length;
	//_util.Report(micDone, "<Enter Operation name here>", toSafeArray(new Array()), "<Enter Operation name here> performed");
	//TODO return a value.
}


////////////////////////////////////////////////////////////////////////////////
// This function registers to listen for events that are specific to this
// control to support recording.
// It registers for clicks on all tabs.
//
// Parameters: none.
// Returns:   Boolean. (In this implementation always true.)
///////////////////////////////////////////////////////////////////////////////////
function AddEventHandler() {
    // Retrieve all of the tabs in the tab strip.
    var tabs = window.$(_elem).find(".ui-tabs-nav > li");
    for (var i = 0; i < tabs.length; i++) {
        var tab = window.$(tabs[i]);
        _util.RegisterForEvent(tab.find("a")[0], "onclick", "onTabClick", tabs[i]);
    }
    return true;
}
//////////////////////////////////////////////////////////////////////////////////
// This is the event handler function called during a recording session when a
// user clicks a tab.
// It retrieves the name of the tab that was clicked and records a step that
// selects the tab.
//
// Name:        onTabClick
// Parameters:  selectedItem - The parameter passed to the RegisterForEvent function,
//              in this case the tab that the user clicked.
//              eventObj - The event object for the onclick event.
// Returns:     Boolean. true if the operation was recorded, otherwise false.
///////////////////////////////////////////////////////////////////////////////////
function onTabClick(selectedItem, eventObj) {
    var tabLabel = trim(window.$(selectedItem).text());
    if (!tabLabel)
        return false;
    var arr = new Array();
    arr.push(tabLabel);
    _util.Record("Select", toSafeArray(arr), 0);
    return true;
}