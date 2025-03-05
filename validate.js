function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  let regex = /^\d{10}$/;
  return regex.test(sid);
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  let num = Number(candi);
  if (!isNaN(num) && num >= 1 && num <= 10 && Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}