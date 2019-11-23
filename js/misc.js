function preventBack(){
if(localStorage.getItem('user') < 1)
{
	window.location.href='login.html';
}
}

function verify(){
if(document.getElementById("email").value== localStorage.getItem('em3') && document.getElementById("password").value == localStorage.getItem('pw3'))
{
	localStorage.setItem('user', 3);
    return true;
}
else if(document.getElementById("email").value== localStorage.getItem('em1') && document.getElementById("password").value == localStorage.getItem('pw1'))
{
	localStorage.setItem('user', 1);
    return true;
}
else if(document.login.email.value == localStorage.getItem('em') && document.login.password.value == localStorage.getItem('pw'))
{
	return true;
}
else
{
   alert("Wrong username or password");
   return false;    
}

}

function mainuser(){
localStorage.setItem('em1', 'adwin@gmail.com');
if(localStorage.getItem('pw1') == null)
{
	localStorage.setItem('pw1', '04162000');
}
localStorage.setItem('pw2', '04162000');
localStorage.setItem('em3', 'kkn@gmail.com');
if(localStorage.getItem('pw3') == null)
{
	localStorage.setItem('pw3', '755304424');
}
localStorage.setItem('pw4', '04162000');
localStorage.setItem('pw5', '04162000');
if(localStorage.getItem('user')==1)
{
	document.acc.email.value = localStorage.getItem('em1');
	document.acc.pwd.value = localStorage.getItem('pw1');
	if(localStorage.getItem('name1') == null)
	{
		document.acc.name.value = "Adwin";
	}
	else
	{
		document.acc.name.value = localStorage.getItem('name1');
	}
	if(localStorage.getItem('pn1') == null)
	{
		document.acc.pnum.value = "0103881384";
	}
	else
	{
		document.acc.pnum.value = localStorage.getItem('pn1');
	}
	if(localStorage.getItem('bd1') == null)
	{
		document.acc.birthday.value = "2000-04-16";
	}
	else
	{
		document.acc.birthday.value = localStorage.getItem('bd1');
	}
	document.acc.gender.value = "Male";
}
else if(localStorage.getItem('user')==2)
{
	localStorage.setItem('name2', 'Nicholas');
	document.acc.name.value = localStorage.getItem('name2');
}
else if(localStorage.getItem('user')==3)
{
	document.acc.email.value = localStorage.getItem('em3');
	document.acc.pwd.value = localStorage.getItem('pw3');
	if(localStorage.getItem('name3') == null)
	{
		document.acc.name.value = "Kkn";
	}
	else
	{
		document.acc.name.value = localStorage.getItem('name3');
	}
	if(localStorage.getItem('pn3') == null)
	{
		document.acc.pnum.value = "0195592393";
	}
	else
	{
		document.acc.pnum.value = localStorage.getItem('pn3');
	}
	if(localStorage.getItem('bd3') == null)
	{
		document.acc.birthday.value = "2017-07-07";
	}
	else
	{
		document.acc.birthday.value = localStorage.getItem('bd3');
	}
	document.acc.gender.value = "Male";
}
else if(localStorage.getItem('user')==4)
{
	localStorage.setItem('name4', 'Nikey');
	document.acc.name.value = localStorage.getItem('name4');
}
else if(localStorage.getItem('user')==5)
{
	localStorage.setItem('name5', 'Tan');
	document.acc.name.value = localStorage.getItem('name5');
}
else if(localStorage.getItem('user')==6)
{
	document.acc.name.value = localStorage.getItem('nm');
	document.acc.pnum.value = localStorage.getItem('pn');
	document.acc.email.value = localStorage.getItem('em');
	document.acc.birthday.value = localStorage.getItem('bd');
	document.acc.gender.value = localStorage.getItem('g');
	document.acc.pwd.value = localStorage.getItem('pw');
}
}


function chkformat(){
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.reg.email.value))
{
   	return true;
}
else
{
    alert("Email invalid format");
    document.reg.email.focus();
    return false;
}
}

function save(){
if(document.reg.email.value=="")
{
	alert("Please enter email");
	document.reg.email.focus();
	return false;
}
else if(document.reg.pwd.value=="")
{
	alert("Please enter password");
	document.reg.pwd.focus();
	return false;
}
else if(document.reg.name.value=="")
{
	alert("Please enter name");
	document.reg.name.focus();
	return false;
}
else if(document.reg.pnum.value=="")
{
	alert("Please enter phone number");
	document.reg.pnum.focus();
	return false;
}
else if(document.reg.birthday.value<1)
{
	alert("Please enter birthday");
	document.reg.birthday.focus();
	return false;
}
else if(document.reg.gender.value==0)
{
	alert("Gender");
	document.reg.gender.focus();
	return false;
}
else if(document.reg.chk1.checked==0)
{
	alert("You must agree to OnString Talent Privacy Policy");
	return false;
}
else
{
	localStorage.setItem('user', 6);
	localStorage.setItem('em', document.reg.email.value);
	localStorage.setItem('pn', document.reg.pnum.value);
	localStorage.setItem('nm', document.reg.name.value);
	localStorage.setItem('bd', document.reg.birthday.value);
	localStorage.setItem('g', document.reg.gender.value);
	localStorage.setItem('pw', document.reg.pwd.value);
	return true;
}
}

function pwtxt(){
    var x = document.reg.pwd;
	if (x.type === "password") 
	{
    x.type = "text";
    } 
    else 
    {
    x.type = "password";
    }
}

function pnumformat(){
if (/^[0-9]+$/.test(document.acc.pnum.value) && document.acc.pnum.value.length == 10 || /^[0-9]+$/.test(document.acc.pnum.value) && document.acc.pnum.value.length == 11)
{
	if(localStorage.getItem('user')==1)
	{
		localStorage.setItem('pn1', document.acc.pnum.value);
		sv();
	}
	else if(localStorage.getItem('user')==3)
	{
		localStorage.setItem('pn3', document.acc.pnum.value);
		sv();
	}
}
else
{
	alert("Phone number invalid format");
	return false;
}
}

function ed(){
	document.acc.edit.setAttribute('onclick','return pnumformat();');
	document.acc.edit.setAttribute('value','Save');
	//document.acc.edit.style.display="block";
	//document.acc.save.style.display="none";
	document.acc.pwd.removeAttribute('readonly');
	document.acc.name.removeAttribute('readonly');
	document.acc.pnum.removeAttribute('readonly');
	document.acc.birthday.removeAttribute('readonly');
	document.acc.gender.removeAttribute('disabled');
}

function sv(){
	if(document.acc.pwd.value=="")
	{
		alert("Please enter password");
		document.acc.pwd.focus();
		return false;
	}
	else if(document.acc.name.value=="")
	{
		alert("Please enter name");
		document.acc.name.focus();
		return false;
	}
	else if(document.acc.pnum.value=="")
	{
		alert("Please enter phone number");
		document.acc.pnum.focus();
		return false;
	}
	else if(document.acc.birthday.value<1)
	{
		alert("Please enter birthday");
		document.acc.birthday.focus();
		return false;
	}
	document.acc.edit.setAttribute('onclick','ed();')
	document.acc.edit.setAttribute('value','Edit')
	//document.acc.edit.style.display="block";
	//document.acc.save.style.display="none";
	document.acc.pwd.setAttribute('readonly', 'true');
	document.acc.name.setAttribute('readonly', 'true');
	document.acc.pnum.setAttribute('readonly', 'true');
	document.acc.birthday.setAttribute('readonly', 'true');
	if(localStorage.getItem('user')==1)
	{
		localStorage.setItem('em1', document.acc.email.value);
		localStorage.setItem('pw1', document.acc.pwd.value);
		localStorage.setItem('name1', document.acc.name.value);
		//localStorage.setItem('pn1', document.acc.pnum.value);
		localStorage.setItem('bd1', document.acc.birthday.value);
	}
	else if(localStorage.getItem('user')==3)
	{
		localStorage.setItem('em3', document.acc.email.value);
		localStorage.setItem('pw3', document.acc.pwd.value);
		localStorage.setItem('name3', document.acc.name.value);
		//localStorage.setItem('pn3', document.acc.pnum.value);
		localStorage.setItem('bd3', document.acc.birthday.value);
	}

	else if(localStorage.getItem('user')==6)
	{
		localStorage.setItem('em', document.acc.email.value);
		localStorage.setItem('pw', document.acc.pwd.value);
		localStorage.setItem('nm', document.acc.name.value);
		localStorage.setItem('pn', document.acc.pnum.value);
		localStorage.setItem('bd', document.acc.birthday.value);
	}
}

function chkfav(){
if(localStorage.getItem('fvtpdt1')==1)
{
	document.getElementById("fav1").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt2')==1)
{
	document.getElementById("fav2").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt3')==1)
{
	document.getElementById("fav3").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt4')==1)
{
	document.getElementById("fav4").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt5')==1)
{
	document.getElementById("fav5").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt6')==1)
{
	document.getElementById("fav6").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt7')==1)
{
	document.getElementById("fav7").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt8')==1)
{
	document.getElementById("fav8").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt9')==1)
{
	document.getElementById("fav9").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt10')==1)
{
	document.getElementById("fav10").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt11')==1)
{
	document.getElementById("fav11").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt12')==1)
{
	document.getElementById("fav12").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt13')==1)
{
	document.getElementById("fav13").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt14')==1)
{
	document.getElementById("fav14").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt15')==1)
{
	document.getElementById("fav15").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt16')==1)
{
	document.getElementById("fav16").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt17')==1)
{
	document.getElementById("fav17").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt18')==1)
{
	document.getElementById("fav18").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt19')==1)
{
	document.getElementById("fav19").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt20')==1)
{
	document.getElementById("fav20").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt21')==1)
{
	document.getElementById("fav21").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt22')==1)
{
	document.getElementById("fav22").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt23')==1)
{
	document.getElementById("fav23").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt24')==1)
{
	document.getElementById("fav24").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt25')==1)
{
	document.getElementById("fav25").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt26')==1)
{
	document.getElementById("fav26").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt27')==1)
{
	document.getElementById("fav27").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt28')==1)
{
	document.getElementById("fav28").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt29')==1)
{
	document.getElementById("fav29").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt30')==1)
{
	document.getElementById("fav30").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt31')==1)
{
	document.getElementById("fav31").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt32')==1)
{
	document.getElementById("fav32").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt33')==1)
{
	document.getElementById("fav33").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt34')==1)
{
	document.getElementById("fav34").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt35')==1)
{
	document.getElementById("fav35").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt36')==1)
{
	document.getElementById("fav36").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt37')==1)
{
	document.getElementById("fav37").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt38')==1)
{
	document.getElementById("fav38").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt39')==1)
{
	document.getElementById("fav39").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt40')==1)
{
	document.getElementById("fav40").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt41')==1)
{
	document.getElementById("fav41").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt42')==1)
{
	document.getElementById("fav42").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt43')==1)
{
	document.getElementById("fav43").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt44')==1)
{
	document.getElementById("fav44").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt45')==1)
{
	document.getElementById("fav45").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt46')==1)
{
	document.getElementById("fav46").style.display = "table-row";
}
}

function showdlt(){
	document.getElementById("dltbtn1").style.display="inline";
	document.getElementById("dltbtn2").style.display="inline";
	document.getElementById("dltbtn3").style.display="inline";
	document.getElementById("dltbtn4").style.display="inline";
	document.getElementById("dltbtn5").style.display="inline";
	document.getElementById("dltbtn6").style.display="inline";
	document.getElementById("dltbtn7").style.display="inline";
	document.getElementById("dltbtn8").style.display="inline";
	document.getElementById("dltbtn9").style.display="inline";
	document.getElementById("dltbtn10").style.display="inline";
	document.getElementById("dltbtn11").style.display="inline";
	document.getElementById("dltbtn12").style.display="inline";
	document.getElementById("dltbtn13").style.display="inline";
	document.getElementById("dltbtn14").style.display="inline";
	document.getElementById("dltbtn15").style.display="inline";
	document.getElementById("dltbtn16").style.display="inline";
	document.getElementById("dltbtn17").style.display="inline";
	document.getElementById("dltbtn18").style.display="inline";
	document.getElementById("dltbtn19").style.display="inline";
	document.getElementById("dltbtn20").style.display="inline";
	document.getElementById("dltbtn21").style.display="inline";
	document.getElementById("dltbtn22").style.display="inline";
	document.getElementById("dltbtn23").style.display="inline";
	document.getElementById("dltbtn24").style.display="inline";
	document.getElementById("dltbtn25").style.display="inline";
	document.getElementById("dltbtn26").style.display="inline";
	document.getElementById("dltbtn27").style.display="inline";
	document.getElementById("dltbtn28").style.display="inline";
	document.getElementById("dltbtn29").style.display="inline";
	document.getElementById("dltbtn30").style.display="inline";
	document.getElementById("dltbtn31").style.display="inline";
	document.getElementById("dltbtn32").style.display="inline";
	document.getElementById("dltbtn33").style.display="inline";
	document.getElementById("dltbtn34").style.display="inline";
	document.getElementById("dltbtn35").style.display="inline";
	document.getElementById("dltbtn36").style.display="inline";
	document.getElementById("dltbtn37").style.display="inline";
	document.getElementById("dltbtn38").style.display="inline";
	document.getElementById("dltbtn39").style.display="inline";
	document.getElementById("dltbtn40").style.display="inline";
	document.getElementById("dltbtn41").style.display="inline";
	document.getElementById("dltbtn42").style.display="inline";
	document.getElementById("dltbtn43").style.display="inline";
	document.getElementById("dltbtn44").style.display="inline";
	document.getElementById("dltbtn45").style.display="inline";
	document.getElementById("dltbtn46").style.display="inline";
}

function dltfav(){
if(localStorage.getItem('dltnum')==1)
{
	document.getElementById("fav1").style.display = "none";
	localStorage.setItem('fvtpdt1', 0);
}
if(localStorage.getItem('dltnum')==2)
{
	document.getElementById("fav2").style.display = "none";
	localStorage.setItem('fvtpdt2', 0);
}
if(localStorage.getItem('dltnum')==3)
{
	document.getElementById("fav3").style.display = "none";
	localStorage.setItem('fvtpdt3', 0);
}
if(localStorage.getItem('dltnum')==4)
{
	document.getElementById("fav4").style.display = "none";
	localStorage.setItem('fvtpdt4', 0);
}
if(localStorage.getItem('dltnum')==5)
{
	document.getElementById("fav5").style.display = "none";
	localStorage.setItem('fvtpdt5', 0);
}
if(localStorage.getItem('dltnum')==6)
{
	document.getElementById("fav6").style.display = "none";
	localStorage.setItem('fvtpdt6', 0);
}
if(localStorage.getItem('dltnum')==7)
{
	document.getElementById("fav7").style.display = "none";
	localStorage.setItem('fvtpdt7', 0);
}
if(localStorage.getItem('dltnum')==8)
{
	document.getElementById("fav8").style.display = "none";
	localStorage.setItem('fvtpdt8', 0);
}
if(localStorage.getItem('dltnum')==9)
{
	document.getElementById("fav9").style.display = "none";
	localStorage.setItem('fvtpdt9', 0);
}
if(localStorage.getItem('dltnum')==10)
{
	document.getElementById("fav10").style.display = "none";
	localStorage.setItem('fvtpdt10', 0);
}
if(localStorage.getItem('dltnum')==11)
{
	document.getElementById("fav11").style.display = "none";
	localStorage.setItem('fvtpdt11', 0);
}
if(localStorage.getItem('dltnum')==12)
{
	document.getElementById("fav12").style.display = "none";
	localStorage.setItem('fvtpdt12', 0);
}
if(localStorage.getItem('dltnum')==13)
{
	document.getElementById("fav13").style.display = "none";
	localStorage.setItem('fvtpdt13', 0);
}
if(localStorage.getItem('dltnum')==14)
{
	document.getElementById("fav14").style.display = "none";
	localStorage.setItem('fvtpdt14', 0);
}
if(localStorage.getItem('dltnum')==15)
{
	document.getElementById("fav15").style.display = "none";
	localStorage.setItem('fvtpdt15', 0);
}
if(localStorage.getItem('dltnum')==16)
{
	document.getElementById("fav16").style.display = "none";
	localStorage.setItem('fvtpdt16', 0);
}
if(localStorage.getItem('dltnum')==17)
{
	document.getElementById("fav17").style.display = "none";
	localStorage.setItem('fvtpdt17', 0);
}
if(localStorage.getItem('dltnum')==18)
{
	document.getElementById("fav18").style.display = "none";
	localStorage.setItem('fvtpdt18', 0);
}
if(localStorage.getItem('dltnum')==19)
{
	document.getElementById("fav19").style.display = "none";
	localStorage.setItem('fvtpdt19', 0);
}
if(localStorage.getItem('dltnum')==20)
{
	document.getElementById("fav20").style.display = "none";
	localStorage.setItem('fvtpdt20', 0);
}
if(localStorage.getItem('dltnum')==21)
{
	document.getElementById("fav21").style.display = "none";
	localStorage.setItem('fvtpdt21', 0);
}
if(localStorage.getItem('dltnum')==22)
{
	document.getElementById("fav22").style.display = "none";
	localStorage.setItem('fvtpdt22', 0);
}
if(localStorage.getItem('dltnum')==23)
{
	document.getElementById("fav23").style.display = "none";
	localStorage.setItem('fvtpdt23', 0);
}
if(localStorage.getItem('dltnum')==24)
{
	document.getElementById("fav24").style.display = "none";
	localStorage.setItem('fvtpdt24', 0);
}
if(localStorage.getItem('dltnum')==25)
{
	document.getElementById("fav25").style.display = "none";
	localStorage.setItem('fvtpdt25', 0);
}
if(localStorage.getItem('dltnum')==26)
{
	document.getElementById("fav26").style.display = "none";
	localStorage.setItem('fvtpdt26', 0);
}
if(localStorage.getItem('dltnum')==27)
{
	document.getElementById("fav27").style.display = "none";
	localStorage.setItem('fvtpdt27', 0);
}
if(localStorage.getItem('dltnum')==28)
{
	document.getElementById("fav28").style.display = "none";
	localStorage.setItem('fvtpdt28', 0);
}
if(localStorage.getItem('dltnum')==29)
{
	document.getElementById("fav29").style.display = "none";
	localStorage.setItem('fvtpdt29', 0);
}
if(localStorage.getItem('dltnum')==30)
{
	document.getElementById("fav30").style.display = "none";
	localStorage.setItem('fvtpdt30', 0);
}
if(localStorage.getItem('dltnum')==31)
{
	document.getElementById("fav31").style.display = "none";
	localStorage.setItem('fvtpdt31', 0);
}
if(localStorage.getItem('dltnum')==32)
{
	document.getElementById("fav32").style.display = "none";
	localStorage.setItem('fvtpdt32', 0);
}
if(localStorage.getItem('dltnum')==33)
{
	document.getElementById("fav33").style.display = "none";
	localStorage.setItem('fvtpdt33', 0);
}
if(localStorage.getItem('dltnum')==34)
{
	document.getElementById("fav34").style.display = "none";
	localStorage.setItem('fvtpdt34', 0);
}
if(localStorage.getItem('dltnum')==35)
{
	document.getElementById("fav35").style.display = "none";
	localStorage.setItem('fvtpdt35', 0);
}
if(localStorage.getItem('dltnum')==36)
{
	document.getElementById("fav36").style.display = "none";
	localStorage.setItem('fvtpdt36', 0);
}
if(localStorage.getItem('dltnum')==37)
{
	document.getElementById("fav37").style.display = "none";
	localStorage.setItem('fvtpdt37', 0);
}
if(localStorage.getItem('dltnum')==38)
{
	document.getElementById("fav38").style.display = "none";
	localStorage.setItem('fvtpdt38', 0);
}
if(localStorage.getItem('dltnum')==39)
{
	document.getElementById("fav39").style.display = "none";
	localStorage.setItem('fvtpdt39', 0);
}
if(localStorage.getItem('dltnum')==40)
{
	document.getElementById("fav40").style.display = "none";
	localStorage.setItem('fvtpdt40', 0);
}
if(localStorage.getItem('dltnum')==41)
{
	document.getElementById("fav41").style.display = "none";
	localStorage.setItem('fvtpdt41', 0);
}
if(localStorage.getItem('dltnum')==42)
{
	document.getElementById("fav42").style.display = "none";
	localStorage.setItem('fvtpdt42', 0);
}
if(localStorage.getItem('dltnum')==43)
{
	document.getElementById("fav43").style.display = "none";
	localStorage.setItem('fvtpdt43', 0);
}
if(localStorage.getItem('dltnum')==44)
{
	document.getElementById("fav44").style.display = "none";
	localStorage.setItem('fvtpdt44', 0);
}
if(localStorage.getItem('dltnum')==45)
{
	document.getElementById("fav45").style.display = "none";
	localStorage.setItem('fvtpdt45', 0);
}
if(localStorage.getItem('dltnum')==46)
{
	document.getElementById("fav46").style.display = "none";
	localStorage.setItem('fvtpdt46', 0);
}
}
