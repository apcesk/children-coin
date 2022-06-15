
function isNull(value) {



}

function isNumber(value) {

  try {
    if (isNaN(Number(value))) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    // throw error;
    return false;
  }
  
}