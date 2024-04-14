let inputDay = document.getElementById("inputDay");
let inputMonth = document.getElementById("inputMonth");
let inputYear = document.getElementById("inputYear");

let dayError = document.getElementById("dayError");
let monthError = document.getElementById("monthError");
let yearError = document.getElementById("yearError");

let btn = document.getElementById("btn");

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");


let errors = false ;



let currentDate = new Date();    // the cuurent data 


btn.onclick = ()=>{

	dayError.textContent = "";
	monthError.textContent = "";
	yearError.textContent = "";
	day.textContent = "--";
	month.textContent = "--";
	year.textContent = "--";



	if (inputDay.value == ""){
	dayError.textContent = "required";
	errors = true ;
	}
	else if(+(inputDay.value) > 30){
	dayError.textContent = "must be a valid day";
	errors = true ;
	}

	if(inputMonth.value == "" ){
	monthError.textContent = "required";
	errors = true ;
	}
	else if(+(inputMonth.value) > 12){
	monthError.textContent = "must be a valid month";
	errors = true ;
	}
	if(inputYear.value == "" ){
	yearError.textContent = "required";
	errors = true ;
	}

	else if (parseInt(inputYear.value , 10) >  currentDate.getFullYear()   || parseInt(inputYear.value , 10) < 1950 ) {
	    // Code block to execute if the condition is true
	    yearError.textContent = "must be a valid year";
	    errors = true ;
	}

	if(!errors){
		let dateOfBirth = new Date(`${inputYear.value}-${inputMonth.value}-${inputDay.value}`);  // the date you entered in inputs


		let ageinmills = Math.abs(currentDate - dateOfBirth);  // your age but in mill seconds

		let ageinseconds = ageinmills / 1000;   // your age in seconds as second contain 1000 millsecond

		let ageinminutes = ageinseconds / 60 ;  

		let ageinhours = ageinminutes / 60;    

		let ageindays = ageinhours / 24 ;      


		let years = Math.floor(ageindays / 365);  // the months you have in your age without the months and days  above it 
		let restdaysofYears = ageindays - (years * 365) ; // differnce between your age in days and the only years you have 
		let months = Math.floor(restdaysofYears / 30);
		let restdaysofmonths = Math.round(restdaysofYears - (months * 30));


		day.textContent = restdaysofmonths;
		month.textContent = months;
		year.textContent = years;
	}


}








