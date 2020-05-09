<html lang="ko"><head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, inital-scale=1">
	<title>2020년 5월 샘플링_1</title>
	<link rel="stylesheet" type="text/css" href="_css/common.css">

	<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" charset="utf-8" src="/_plugin/spin/spin.min.js"></script><style type="text/css">
		/* skipNav */
#skipNav a{display:block;overflow:hidden;height:0;line-height:24px;text-align:center;background:#000;color:#fff;}
#skipNav a:focus{height:auto;}

/* reset css */
html,body{height:100%;margin:0;padding:0;}
body{font:14px/1.5 dotum, arial, sans-serif;background:#eaf0e0;color:#666;-webkit-text-size-adjust:none;word-break:keep-all;}
dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,select,textarea,p,blockquote,tbody,tfoot,thead,th,td{margin:0;padding:0;}
input,textarea,select,button{font:14px/1.5 dotum, arial, sans-serif;color:#666;vertical-align:middle;word-break:normal;}
h1,h2,h3,h4,h5,h6{font-weight:normal;font-size:100%;}
table{table-layout:fixed;width:100%;border-spacing:0;border-collapse:collapse;}
ol,ul,li{list-style:none;}
hr, legend, caption, .skip{position:absolute;overflow:hidden;line-height:0.01%;font-size:0.01%;width:0;height:0;}
img,fieldset{border:0 none;vertical-align:middle;max-width:100%;}
label,button{cursor:pointer;}
em,address{font-style:normal;}
a{color:inherit;text-decoration:none;}

/* Input */
input[type="text"],
input[type="password"],
input[type="email"],
input[type="tel"],
input[type="number"],
input[type="date"]{height:21px;padding:0 5px;border:1px solid #acacac;line-height:19px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:0;}
input[type="radio"],
input[type="checkbox"]{width:20px;height:20px;}
input[type="file"]{border:1px solid #acacac;background:#fff;}
textarea{overflow:auto;overflow-x:hidden;padding:10px;border:1px solid #acacac;background:#fff;resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
select{min-width:40px;max-width:100%;height:21px;border:1px solid #acacac;}

/* Button */
button{overflow:visible;margin:0;padding:0;border:0;background:none;white-space:nowrap;cursor:pointer;}
button::-moz-focus-inner{padding:0;border:0;}
button span{display:block;position:relative;}

/* Contents */
#coupon_page{text-align:center;}
#coupon_page .sample{}
#coupon_page .sample img{width:100%;}
#coupon_page .brand{padding:15px 10px 13px;font-size:0;}
#coupon_page .brand:before{content:'';display:inline-block;vertical-align:middle;width:0;height:100%;}
#coupon_page .contents{margin:-1px auto 0;padding:0 2.1% 25px 2.25%;}
#coupon_page .head_txt{margin:0 0 15px;}
#coupon_page .box{padding:15px 15px 10px;background:#fff;}
#coupon_page .box .img{margin:0 0 15px;}
#coupon_page .box .top{padding:0 20px 4px;}
#coupon_page .box .bottom{padding:5px 20px 0;border-top:1px solid #c2c2c2;}
#coupon_page .box table{table-layout:auto;}
#coupon_page .box td{padding:2px 0;text-align:left;vertical-align:top;}
#coupon_page .box td.th{white-space:nowrap;width:1px;padding-right:5px;color:#1b5b24;}
#coupon_page .foot{margin:20px 0 0;}
#coupon_page .foot .txt1{margin:0 0 12px;font-size:0;}
#coupon_page .foot .bbtn{}
#coupon_page .foot .txt2{margin:13px 0 0;}
#coupon_page .box_code{margin:20px 0 0;padding:20px 0 15px;background:#fff;}
#coupon_page .foot .store {margin-bottom:10px;padding:0 0 10px 0;}
#coupon_page .foot .store span {font-weight:bold;color:#000;font-size:18px;}
/*
#coupon_page .foot .store {margin-bottom:10px;border-bottom:1px dashed #242424;border-top:1px dashed #242424;padding:10px 0;}
#coupon_page .foot .store span {font-weight:bold;color:#000}
*/

/* mask */
#mask {clear:both;display:none; position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:100;}
#mask .mask_bg {clear:both;position:absolute; top:0; left:0; width:100%; height:100%; min-height:100%;height: auto !important; background:#000; opacity:.5; filter:alpha(opacity=60);}

#mask_loading {clear:both;display:none; position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:1000;}
#mask_loading .mask_loading_bg {clear:both;position:absolute; top:0; left:0; width:100%; height:100%; min-height:100%;height: auto !important; background:#000; opacity:.5; filter:alpha(opacity=60);}
.mask_loading_bar {clear:both;display:none; position: fixed; top: 50%; left: 50%; width:150px;height:150px;  margin:0 auto; height:auto !important;z-index:2000;}
	</style>
	<script type="text/javascript">
		// element return
function getElement(id) { 
	  if(document.all) return document.all(id); 
	  if(document.getElementById) return document.getElementById(id); 
}


// mask �덉씠��
function mask_set() {
	var html = "<div id=\"mask\"><div class=\"mask_bg\"></div></div>"
	$('body').append(html);	
}

function mask_open() {
	if($("#mask").length == 0) {
		mask_set();
	} 

	var layer = $('#mask');
	var bg = layer.prev().hasClass('mask_bg');

	if(bg){
		$('#mask').show();
	}else{
		layer.show();
	}
	layer.show();

	$("body").addClass("html_noscroll");	
}

function mask_close() {
	$('#mask').fadeOut();
	$("body").removeClass("html_noscroll");
}

// 濡쒕뵫 �덉씠�� div �앹꽦
function mask_loadiing_set() {
	var html = "<div id=\"mask_loading\"><div class=\"mask_loading_bg\"></div><div id=\"mask_loading_bar\" class=\"mask_loading_bar\"></div></div>"
	$('body').append(html);	
}

// 濡쒕뵫 �덉씠�� �닿린
function mask_loadiing_open() {
	if($("#mask").length != 0) {
		var target = getElement('mask');
		var spinner = new Spinner(opts).spin(target);
		$("body").addClass("html_noscroll");
		return;
	} 

	if($("#mask_loading").length == 0) {
		mask_loadiing_set();
	} 

	var layer = $('.mask_loading_bar');
	var bg = layer.prev().hasClass('mask_loading_bg');

	if(bg){
		$('#mask_loading').show();
	}else{
		layer.show();
	}
	layer.show();

	var target = getElement('mask_loading');
	var spinner = new Spinner(opts).spin(target);

	$("body").addClass("html_noscroll");
}

// 濡쒕뵫 �덉씠�� �リ린
function mask_loadiing_close() {
	$('#mask_loading').fadeOut();
	mask_close();
	$("body").removeClass("html_noscroll");
}

// dialog set
function dialogSet() {
	if($("#myModal").length == 0) {
		var modal_default = '<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" data-refresh=\"true\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" style=\"width:800px;\"><div class=\"modal-content\"></div></div></div>';
		$('body').append(modal_default);	
	};
};

// �섏씠吏� �대룞
function goto_page( v_page ){
	var fm = document.form_page;

	if(!v_page || v_page == 'undefined') v_page = 1;
	if(fm.act_url) fm.action=fm.act_url.value;
	if(fm.act_target) fm.target=fm.act_target.value;
	if(fm.act_method) fm.method=fm.act_method.value;
	fm.lst_page.value = v_page;
	fm.submit();
}

/* �뚯씪 �ㅼ슫 */
function file_download(fpath , fname) {
	set_iframehtml("_download");
	var url = '/download.asp?file_path=' + fpath + '&file_name=' + fname;
	_download.location.href=url;
	//window.open(url , '','')
}

/* �덉씠�� 以묒븰 open  */
function layer_center(id){
	$("html").css("height","100%");
	$("body").css("height","100%");
	var elm = $('#'.concat(id));
	 elm.css({position:'fixed',left:(document.body.clientWidth/2-parseInt(elm.css('width'))/2),top:( document.body.clientHeight/2- parseInt(elm.css('height'))/2)});
	 if(!layer_center.isRezister) {    
		 layer_center.isRezister = true;
		 $(window).resize(function(){ layer_center(id);});
	}
	$(function(){
	  elm.css("visibility","visible");		
	});
}

/* 釉뚮씪�곗� 踰꾩졏 */
function whichBrs() {
    var agt=navigator.userAgent.toLowerCase();
    if (agt.indexOf("opera") != -1) return 'Opera';
    if (agt.indexOf("staroffice") != -1) return 'Star Office';
    if (agt.indexOf("webtv") != -1) return 'WebTV';
    if (agt.indexOf("beonex") != -1) return 'Beonex';
    if (agt.indexOf("chimera") != -1) return 'Chimera';
    if (agt.indexOf("netpositive") != -1) return 'NetPositive';
    if (agt.indexOf("phoenix") != -1) return 'Phoenix';
    if (agt.indexOf("firefox") != -1) return 'Firefox';
    if (agt.indexOf("safari") != -1) return 'Safari';
    if (agt.indexOf("skipstone") != -1) return 'SkipStone';
    if (agt.indexOf("msie") != -1) return 'IE';
    if (agt.indexOf("netscape") != -1) return 'Netscape';
    if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
    if (agt.indexOf('\/') != -1) {
    if (agt.substr(0,agt.indexOf('\/')) != 'mozilla') {
    return navigator.userAgent.substr(0,agt.indexOf('\/'));}
    else return 'Netscape';} else if (agt.indexOf(' ') != -1)
    return navigator.userAgent.substr(0,agt.indexOf(' '));
    else return navigator.userAgent;
}

// funnscreen popup open
function popup_open_fullscreen(wname , url) {
	if(whichBrs() == 'IE') {
		var option = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,fullscreen=yes'
	} else {
		var s_width = screen.availWidth;
		var s_height = screen.availHeight;

		var option = 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes'
					+ ',width=' +screen.availWidth + ',height=' + screen.availHeight;
	}

	var objwin = window.open(url, wname, option) ;
	objwin.focus();
}

// �꾩씠�꾨젅�� 泥댄겕 �� �녿뒗 寃쎌슦 �앹꽦泥섎━
function set_iframehtml(fname) {
	if($("#" + fname).length < 1) {
		var html = "<iframe name=\"" + fname + "\" id=\"" + fname + "\" src=\"about:blank\" width=\"0\" height=\"0\" style=\"display:none\"></iframe>"
		$("body").append(html);
	}
}

// IE �щ� 由ы꽩
function isBrowserIE() {
	var Browser = {
		version : navigator.userAgent.toLowerCase()
	}

	Browser = {
		ie : Browser.version.indexOf('msie') != -1 || Browser.version.indexOf('trident') != -1 ,
		opera : !!window.opera,
		safari : Browser.version.indexOf('safari') != -1,
		safari3 : Browser.version.indexOf('applewebkit/5') != -1,
		mac : Browser.version.indexOf('mac') != -1,
		chrome : Browser.version.indexOf('chrome') != -1,
		firefox : Browser.version.indexOf('firefox') != -1
	}

	if (Browser.ie) {
		return true;
	} else {
		return false;
	}
}

/** Returns the version of Windows Internet Explorer or a -1 **/
function checkIEVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {

        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

        if (re.exec(ua) != null) {
            rv = parseFloat( RegExp.$1 );
        }
    }
    return rv;
}

// * 6. flash print
//	wmode : transparent(�щ챸)
function MakeFlashString(source,width,height,wmode) {	
	var str = ""
	str = "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' ";
	str +="codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,22,0' ";
	str +="width="+width+" height="+height+"> ";
	str +="<param name=wmode value="+wmode+" /> ";
	str +="<param name=movie value="+source+" /> ";
	str +="<param name=menu value=false> ";
	str +="<param name=quality value=high/> ";
	str +="<embed src="+source+" quality=high wmode="+wmode+" type='application/x-shockwave-flash' ";
	str +="pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash' width="+width+" height="+height+"> ";
	str +="</embed> ";
	str +="</object>";
	document.write( str );
}

function FlashObject(swf, width, height, bgcolor, id, flashvars)
{
    var strFlashTag = new String();
    
    if (navigator.appName.indexOf("Microsoft") != -1)
    {
        strFlashTag += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
        strFlashTag += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=version=8,0,0,0" ';
        strFlashTag += 'id="' + id + '" width="' + width + '" height="' + height + '">';
        strFlashTag += '<param name="movie" value="' + swf + '"/>';
        
        if(flashvars != null) {strFlashTag += '<param name="flashvars" value="' + flashvars + '"/>'};
        strFlashTag += '<param name="quality" value="best"/>';
        strFlashTag += '<param name="bgcolor" value="' + bgcolor + '"/>';
        strFlashTag += '<param name="menu" value="false"/>';
        strFlashTag += '<param name="salign" value="LT"/>';
        strFlashTag += '<param name="scale" value="noscale"/>';
        strFlashTag += '<param name="wmode" value="transparent"/>';
        strFlashTag += '<param name="allowScriptAccess" value="always"/>';
        strFlashTag += '</object>';
    }
    else
    {
        strFlashTag += '<embed src="' + swf + '" ';
        strFlashTag += 'quality="best" ';
        strFlashTag += 'bgcolor="' + bgcolor + '" ';
        strFlashTag += 'width="' + width + '" ';
        strFlashTag += 'height="' + height + '" ';
        strFlashTag += 'menu="false" ';
        strFlashTag += 'scale="noscale" ';
         strFlashTag += 'id="' + id + '1" ';
        strFlashTag += 'salign="LT" ';
       //  strFlashTag += 'wmode="transparent" ';
        strFlashTag += 'allowScriptAccess="always" ';
        if(flashvars != null) {strFlashTag += 'flashvars="' + flashvars + '" '};
        strFlashTag += 'type="application/x-shockwave-flash" ';
        strFlashTag += 'pluginspage="http://www.macromedia.com/go/getflashplayer">';
        strFlashTag += '</embed>';
    }

 document.write(strFlashTag);
}
	</script>
	<script type="text/javascript">
	function f_coupon_recive() {
		if (confirm('쿠폰을 수령하셨습니까?')) {
			alert('수령이 완료되었습니다.');
			$("#btn_app").attr("src" , "http://www.lok-promotion.com/user/_images/btn_after.png");
			$("#btn_app").attr("onclick" , "");
		}
	}
	</script>
</head>

<!-- 브랜드 배경색 -->
<body style="background:#ffffff;">

<div id="coupon_page">
	<!-- 상단이미지 -->
	<div class="sample"><img alt="" src="http://www.lok-promotion.com/upload_files/project/sample_event3_01(0).png"></div>
	<div class="contents">
		<div class="box">
			<div class="top">
　
　
　

			</div>
			<div class="bottom">
				　
　
　
			</div>
		</div>
		<div class="foot">


			<div class="store">
				<span>• 수령매장 : 현대 중동</span>
			</div>

			<p class="txt1"><img width="298" alt="주의! 매장 직원용 확인 버튼입니다." src="http://www.lok-promotion.com/user/_images/txt_conf.png"></p>

			<div class="bbtn">

				<!-- 사용 전 버튼 -->
				<a href="javascript:;"><img width="292" alt="샘플 수령 확인" src="http://www.lok-promotion.com/user/_images/btn_before.png" id="btn_app" onclick="f_coupon_recive();"></a>

			</div>
			<p class="txt2"><img width="358" alt="위 버튼은 매장 직원이 누르는 버튼입니다. 수령 완료가 된 쿠폰은 이용하실 수 없으며 사용 전에는 해당버튼을 절대 누르지 마세요." src="http://www.lok-promotion.com/user/_images/txt_notice.png"></p>
		</div>
		<div class="box_code">
			<!-- 바코드 이미지 -->
			<img width="212" alt="" src="http://www.lok-promotion.com/upload_files/project/barcord(1)(3).png"> <!--//-->
		</div>
	</div>
</div>


           Not Now                </div>            </div>        </div></body></html>
