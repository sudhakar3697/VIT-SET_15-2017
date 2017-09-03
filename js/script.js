$(document).ready(function(){
        $('.slider').slider();
		$('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'right',
      closeOnClick: true,
      draggable: true,
    }
  );

		$('.collapsible').collapsible();
		 $('.modal').modal();	
		  $('.materialboxed').materialbox();
    });
	
 function showHome(){
        document.getElementById("home").style.display="block";
        document.getElementById("callForPapers").style.display="none";
        document.getElementById("paperSubmission").style.display="none";
        document.getElementById("reg").style.display="none";
        document.getElementById("committee").style.display="none";
        document.getElementById("accommodation").style.display="none";
        document.getElementById("contactUs").style.display="none";
	document.getElementById("brochure").style.display="none";
    }
    function showCallForPapers(){ 
        document.getElementById("home").style.display="none";
        document.getElementById("callForPapers").style.display="block";
        document.getElementById("paperSubmission").style.display="none";
        document.getElementById("reg").style.display="none";
        document.getElementById("committee").style.display="none";
        document.getElementById("accommodation").style.display="none";
        document.getElementById("contactUs").style.display="none";
	document.getElementById("brochure").style.display="none";
    }
    function showPaperSubmission(){
        document.getElementById("home").style.display="none";
        document.getElementById("callForPapers").style.display="none";
        document.getElementById("paperSubmission").style.display="block";
        document.getElementById("reg").style.display="none";
        document.getElementById("committee").style.display="none";
        document.getElementById("accommodation").style.display="none";
        document.getElementById("contactUs").style.display="none";
	document.getElementById("brochure").style.display="none";
    }
    function showRegistration(){
         
        document.getElementById("home").style.display="none";
        document.getElementById("callForPapers").style.display="none";
        document.getElementById("paperSubmission").style.display="none";
        document.getElementById("reg").style.display="block";
        document.getElementById("committee").style.display="none";
        document.getElementById("accommodation").style.display="none";
        document.getElementById("contactUs").style.display="none";
	document.getElementById("brochure").style.display="none";
    }
    function showCommittee(){  
        document.getElementById("home").style.display="none";
        document.getElementById("callForPapers").style.display="none";
        document.getElementById("paperSubmission").style.display="none";
        document.getElementById("reg").style.display="none";
        document.getElementById("committee").style.display="block";
        document.getElementById("accommodation").style.display="none";
        document.getElementById("contactUs").style.display="none";
	document.getElementById("brochure").style.display="none";
    }
    function showAccommodation(){
        document.getElementById("home").style.display="none";
        document.getElementById("callForPapers").style.display="none";
        document.getElementById("paperSubmission").style.display="none";
        document.getElementById("reg").style.display="none";
        document.getElementById("committee").style.display="none";
        document.getElementById("accommodation").style.display="block";
	document.getElementById("brochure").style.display="none";
        document.getElementById("contactUs").style.display="none";
    }
    function showcontactUs(){
        document.getElementById("home").style.display="none";
        document.getElementById("callForPapers").style.display="none";
        document.getElementById("paperSubmission").style.display="none";
        document.getElementById("reg").style.display="none";
        document.getElementById("committee").style.display="none";
        document.getElementById("accommodation").style.display="none";
	document.getElementById("brochure").style.display="none";
        document.getElementById("contactUs").style.display="block";
    }
	function showbro(){
	document.getElementById("home").style.display="none";
        document.getElementById("callForPapers").style.display="none";
        document.getElementById("paperSubmission").style.display="none";
        document.getElementById("reg").style.display="none";
        document.getElementById("committee").style.display="none";
        document.getElementById("accommodation").style.display="none";
	document.getElementById("brochure").style.display="block";
        document.getElementById("contactUs").style.display="none";
	}	
