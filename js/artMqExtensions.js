$(function() {
	$('.home-feature-div-l,.home-feature-div-r,.hdr_top_nav').attr('style','')
	$('#skinny-banner-container').attr('style','')
	//For homepage
	$('#hdr-new-container').addClass('responsiveHeader');
	$('#P2A_Sale').addClass('heroBlock');
	$('#2014_40Sale').addClass('heroBlockCenter');
	$('#shop-top').addClass('oneByEight_categories');
	$('#hot-products').addClass('heroBlock');
	$("#home-feature-div-l,#home-feature-div-r").wrapAll("<div id='home-feature-cont' class='fourStacked_feature'></div>");
	$('#home-feature-cont').addClass('fourStacked_feature');
	$('#home-subfeature').addClass('fourStacked_subFeature');
	$('#ftr').addClass('responsiveFooter');
	$('#main').addClass('responsiveContainer');
	$('.my-account-logged-in.hidden.link').css('display','none');
	$('#200under').addClass('holidayBlock');
	//For Homepage

	//landing page shop/art-subjects
	$('#tpl-left-nav-left').addClass('tplleftnav-rDesign');
	$('#tpl-left-nav-right').addClass('tplrightnav-rDesign');
	$('.main-r-grid li.grid-spacer').css('gridspacerrDesign');

//Gallery page
	 $('#hdr-new-container').addClass('responsiveHeader');
         $('#ftr').addClass('responsiveFooter');
         $('#main').addClass('responsiveContainer');

         $('.galmin').addClass('galleryContainerMin');
         $('#promo-container').addClass('promoRdesign');
         $('.banner-text').addClass('promoBannerTxt');
         $('#galleft').addClass('galleftRdesign');
         $('#galright').addClass('galrightRdesign');
         $('.pg-head-cntnr').addClass('pgheadRdesign');
         $('.couponcode').addClass('couponcodeRdesign');
         $('.gal-pagnav-border').addClass('galPagnavRdesign');
         $('.CategHeader').addClass('CategHeaderRdesign');
         $('.brdcrmb').addClass('brdcrmbRdesign');
         $('.gal-nav-container').addClass('gal-nav-container-rDesign');
         $('.leftnav-category-header').addClass('leftnavAccRDesign');
          $('.galwidth').addClass('galwidthRDesign');
		$('#ToolbarforCSS').hide();
	showImageZoom = null;
});