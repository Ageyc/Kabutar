function checkPassword(email, password) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var emailColumnName = "Email";
  var passwordColumnName = "Password";
  
  try {
    var rowNumber = findDataInColumn(email, emailColumnName, sheet);
    
   
      var passwordFromSheet = sheet.getRange(rowNumber, getColumnIndex(sheet, passwordColumnName)).getValue();

      if (password == passwordFromSheet) {
        Logger.log('true');
        return true;
      } else {
        Logger.log('false');
        return false;
      }
    } else {
      Logger.log('NotFound');
      return false;
    }
  } catch (error) {
    Logger.log('Error: ' + error.message);
    return false;
  }
}

function findDataInColumn(searchValue, columnName, sheet) {
  var columnRange = sheet.getRange(1, getColumnIndex(sheet, columnName), sheet.getLastRow(), 1);
  var columnValues = columnRange.getValues();
  
  for (var i = 0; i < columnValues.length; i++) {
    if (columnValues[i][0] === searchValue) {
      return i + 1;
    }
  }
  
  return -1;
}


  }
  
  throw new Error('Column ' + columnName + ' not found in the sheet');
}
