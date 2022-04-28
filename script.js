
function onactive( id, tab_id){                    // FAQ section button color changes and other functionalities.
    var alltab = document.querySelectorAll('.faq-payment-button input');
    for(var i=0;i<alltab.length;i++){
        alltab[i].classList.remove('faq-button-active')
    }
    var faqtab=document.querySelectorAll('.faq-section');
    for(var j=0; j<faqtab.length;j++){
        faqtab[j].style.display ='none';
    }
    document.getElementById(tab_id).style.display='block';
    document.getElementById(id).classList.add('faq-button-active');
}

function question(id) {                                // FAQ section question-answer section
    if(document.getElementById(id).classList.contains('active-faq-answer') == true) {
        document.getElementById(id).classList.remove('active-faq-answer');
    } else {

    var emptyerror = document.querySelectorAll('.faq-answer'); 
     for (var i = 0; i < emptyerror.length; i++) {
        emptyerror[i].classList.remove('active-faq-answer');
     }
     document.getElementById(id).classList.add('active-faq-answer');
    }

}

function changeBg(){                                          // Nav section color changes.
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    console.log(scrollValue)
    if(scrollValue >0 ){
    navbar.classList.add('bgColor');
    }
    else{
    navbar.classList.remove('bgColor')
    }
    }
    
    window.addEventListener('scroll',changeBg)

