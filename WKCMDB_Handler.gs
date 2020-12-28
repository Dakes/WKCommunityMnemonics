//  1. Enter sheet name where data is to be written below
var SHEET_NAME = "wkcmdb_1";

//  2. Run > setup
//
//  3. Publish > Deploy as web app
//    - enter Project Version name and click 'Save New Version'
//    - set security level and enable service (most likely execute as 'me' and access 'anyone, even anonymously)
//
//  4. Copy the 'Current web app URL' and post this in your form/script action
//
//  5. Insert column names on your destination sheet matching the parameter names of the data you are passing in (exactly matching case)

var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service

// If you don't want to expose either GET or POST methods you can comment out the appropriate function
function doGet(e)
{
    return handleResponse(e);
}

function doPost(e)
{
    return handleResponse(e);
}

function handleResponse(e)
{
    // shortly after my original solution Google announced the LockService[1]
    // this prevents concurrent access overwritting data
    // [1] http://googleappsdeveloper.blogspot.co.uk/2011/10/concurrency-and-google-apps-script.html
    // we want a public lock, one that locks for all invocations
    var lock = LockService.getPublicLock();
    lock.waitLock(30000);  // wait 30 seconds before conceding defeat.

    try
    {
        // next set where we write the data - you could write to multiple/alternate destinations
        var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
        var sheet = doc.getSheetByName(SHEET_NAME);
        /*e = {"parameter": {"header_row": 1, "Item": "v実験", "Meaning_Mnem": "a", "Reading_Mnem": "b",
        "Meaning_Score": "0", "Reading_Score": "0", "Meaning_User": "a", "Reading_User": "b", "Index": "2"}};*/

        // we'll assume header is in row 1 but you can override with header_row in GET/POST data
        var headRow = e.parameter.header_row || 1;
        var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        var nextRow = (e.parameter.Index !== undefined || parseInt(e.parameter.Index) <= sheet.getLastRow()) ? parseInt(e.parameter.Index) : sheet.getLastRow() + 1;
        var row = [];
        var rowInfo = "";
        var curRow = 1;
        var d = new Date();
        var itemName = e.parameter[headers[0]];

        while (itemName.indexOf("<") > -1) itemName = itemName.slice(0, itemName.indexOf("<")) + itemName.slice(itemName.indexOf(">") + 1);
        e.parameter[headers[0]] = itemName;

        if (nextRow < sheet.getLastRow() + 1 && sheet.getRange(nextRow, 1, 1, 1).getValue() !== e.parameter[headers[0]] || sheet.getRange(nextRow, 1, 1, 1).getValue() == "")
        {
            var values = sheet.getDataRange().getValues();
            nextRow = -1;
            while (curRow < values.length)
            {
                if (values[curRow][0] == e.parameter[headers[0]])
                {
                    curRow++;
                    nextRow = curRow;
                    break;
                }
                curRow++;
            }
        }
        if (nextRow < 0) nextRow = curRow + 1;
        if (nextRow !== parseInt(e.parameter.Index)) rowInfo = "redfr:" + e.parameter.Index;
        // loop through the header columns
        for (i in headers)
        {
            if (headers[i] !== "Index" && headers[i] !== "Info" && headers[i] !== "Last_Updated") row.push(e.parameter[headers[i]]);
            else if (headers[i] == "Info") row.push(rowInfo);
            else if (headers[i] == "Last_Updated") row.push(d.toString());
        }

        // more efficient to set values as [][] array than individually
        if (e.parameter[headers[0]] !== undefined && /^(k[\u4e00-\u9faf]|v[\u4e00-\u9faf\u3005-\u31ff～]+)$/.test(itemName) && row[0].indexOf("undefined") < 0)
            sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
        // return json success results
        return ContentService
            .createTextOutput(JSON.stringify({"result": "success", "row": nextRow}))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (e)
    {
        // if error return this
        return ContentService
            .createTextOutput(JSON.stringify({"result": "error", "error": e}))
            .setMimeType(ContentService.MimeType.JSON);
    } finally
    { //release lock
        lock.releaseLock();
    }
}

function setup()
{
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    SCRIPT_PROP.setProperty("key", doc.getId());
}