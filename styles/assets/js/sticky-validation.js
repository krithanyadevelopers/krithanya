function add_sticky()
{var hidid=$("#hidid").val();var name=$("#name").val();var email=$("#email").val();var phone=$("#phone").val();var message=$("#message").val();toastr.clear();if(name=='')
{toastr.error("Please Enter Your Full Name");$('#name').css('border-color','red');$('#name').focus();return false;}
else
{toastr.clear();$('#name').css('border-color','#b9b6b6');}
if(email=='')
{toastr.error("Please Enter Email");$('#email').css('border-color','red');$('#email').focus();return false;}
else
{var letters=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;if(!email.match(letters))
{toastr.clear();toastr.error('Please Enter a valid Email');$('#email').css('border-color','red');$('#email').focus();return false;}
else
{toastr.clear();$('#email').css('border-color','#b9b6b6');}
email.trim();+$('#email').val(email);}
if(phone=='')
{toastr.error("Please Enter Mobile Number");$('#phone').css('border-color','red');$('#phone').focus();return false;}
else if(!phone.match(/^[6-9]{1}[0-9]+/))
{toastr.error("First Number doesn't allow between 0-5.");$('#phone').css('border-color','red');$('#phone').focus();return false;}
else
{var phoneno=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;if(!phone.match(phoneno))
{toastr.clear();toastr.error('Please Enter a 10 Digit Number');$('#phone').css('border-color','red');$('#phone').focus();return false;}
else
{toastr.clear();$('#phone').css('border-color','#b9b6b6');}
phone.trim();+$('#phone').val(phone);}
if(message=='')
{toastr.error("Please Enter message");$('#message').css('border-color','red');$('#message').focus();return false;}
else
{toastr.clear();$('#message').css('border-color','#b9b6b6');}
var form=$('#stickForm')[0];var data=new FormData(form);toastr.info('Please wait....');if(name!=""&&email!="")
{$('#stickForm').attr("disabled",true);$('#bsubmit').html("<div style='width:100px;height: 10px;font-size:15px'>Processing...</div>");$.ajax({type:"POST",url:"rightside-sticky.php",dataType:'html',data:data,enctype:'multipart/form-data',processData:false,contentType:false,cache:false,success:function(result)
{if(result==0)
{toastr.clear();toastr.success('Successfully Submited.');$('#stickForm').find('input:text').val('');window.location.href="thankyou.php";}
else if(result==2)
{toastr.clear();toastr.error('All Fields Required');}
$('#bsubmit').html("SUBMIT");$('#stickForm').attr("disabled",false);}});}}