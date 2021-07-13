let family = 1
let centre = 1
let countrycode = "+213"
let members = 3
let phone = "456123894"
let email = "allel@gmail.com"
let category = 1

/////////////// Make sure inspect element work and copy past /////////////////
/*
$('<iframe />', {
    name: 'frame2',
    id: 'frame2',
    src: ''
}).appendTo('body');



document.oncontextmenu = $("iframe#frame2").get(0).contentWindow.document.oncontextmenu
document.onkeypress = $("iframe#frame2").get(0).contentWindow.document.onkeypress
document.onmousedown   = $("iframe#frame2").get(0).contentWindow.document.onmousedown   
document.onkeydown = $("iframe#frame2").get(0).contentWindow.document.onkeydown 

$("input").each(function(index, input){

input.onpaste =  $("iframe#frame2").get(0).contentWindow.document.onpaste  
input.oncut =  $("iframe#frame2").get(0).contentWindow.document.oncut  
input.oncopy =  $("iframe#frame2").get(0).contentWindow.document.oncopy  
input.ondrag =  $("iframe#frame2").get(0).contentWindow.document.ondrag  
input.ondrop =  $("iframe#frame2").get(0).contentWindow.document.ondrop  
input.onselectstart =  $("iframe#frame2").get(0).contentWindow.document.onselectstart   
})
*/

/* 

//in case autocomplete needed
$("input").each(function(index, input){

 console.log(input.autocomplete = true)
})

*/

///////////////

let iframe = $("frame")

if(family)
{
iframe.$("input").filter('[value=Family]').prop('check', true).change();
iframe.$("select#member").get(0).selectedIndex = members - 2
}else{
iframe.$("input").filter('[value=Individual]').prop('checked', true).change();
}


$("select#centre").on('change',function() {
    
	let wto = setTimeout(function() {
     $("select#category").get(0).selectedIndex = category
	 $("select#category" ).change()  
     clearTimeout(wto)
  }, 200);
  
})



$("select#centre" ).get(0).selectedIndex = centre
$("select#centre" ).change()


$("#phone").val(phone)

$("#phone_code").val(countrycode)

$("input#email").val(email)


// page 2

$("button").filter("[name=agree]").click()

 $("input#app_date").focus()
 $("input#app_date").focus()

function reverseString(str) {
    return str.split("-").reverse().join("-");
}
reverseString(formatDate(new Date()))

setTimeout(function() {
   //give empty day to reserve 
	let reserve_day = $("td.activeClass").first().text() 
	let start_date = $("input#app_date").val().split("-")
	start_date.pop()

	start_date.push(reserve_day)
	let reserver_date = start_date.join("-")

	$("input#app_date").val(reserver_date)
	$("input#app_date").change()
  }, 400);


 

