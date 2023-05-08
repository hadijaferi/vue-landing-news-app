<template>
  <v-main>
    <v-container fluid class="mx-0">
      <v-row>
        <div id="coodiv-header" class="d-flex mx-auto flex-column moon-edition">
          <div class="bg_overlay_header">
            <vue-particles
              color="#ffffff"
              :particleOpacity="0.7"
              :particlesNumber="50"
              shapeType="circle"
              :particleSize="3"
              linesColor="#ffffff"
              :linesWidth="1"
              :lineLinked="false"
              :lineOpacity="0.4"
              :linesDistance="150"
              :moveSpeed="2"
              :hoverEffect="false"
              hoverMode="grab"
              :clickEffect="false"
              clickMode="push"
            ></vue-particles>
            <div class="bg-img-header-new-moon"></div>
            <span class="header-shapes shape-01"></span>
            <span class="header-shapes shape-02"></span>
            <span class="header-shapes shape-03"></span>
          </div>
          <v-container>
            <h3 class="main-header-text-title">
				پرســش و پاســخ
				<span>پرسش و پاسخ‌های متداولی که یک علاقه مند به بورس به آن نیاز دارد</span>
			</h3>
            <v-row align="center" justify="center">
              <v-col action="domains.html" id="domain-search-header" cols="7" >
                <input type="text" placeholder="عبارت مورد نطر را جستجو کنید..." id="domain" name="domains">
                <span class="inline-button-domain-order">
                  <button data-toggle="tooltip" data-placement="left" title="transfer" id="transfer-btn" type="submit" name="transfer" value="Transfer">
                    <v-icon>mdi-refresh</v-icon>
                  </button>
                  <button data-toggle="tooltip" data-placement="left" title="search" id="search-btn" type="submit" name="submit" value="Search">
                    <v-icon>mdi-magnify</v-icon>
                  </button>
                </span>
                <div class="domain-price-header mr-auto">
                  <a>
                  	<img src="../faq/img/domain/com.png" alt="domain">
                  	<span>11 مورد</span>
                  </a>
                  <a>
                  	<img src="../faq/img/domain/net.png" alt="domain">
                  	<span>28 مورد</span>
                  </a>
                  <a>
                  	<img src="../faq/img/domain/org.png" alt="domain">
                  	<span>123 مورد</span>
                  </a>
                  <a class="no-phon-dsply">
                  	<img src="../faq/img/domain/store.png" alt="domain">
                  	<span>14 مورد</span>
                  </a>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    data: () => ({
      bcItems: [],
    }),
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

#coodiv-header {
	width: 100%;
	height: 830px;
	padding: 0 0 20px;
	position: relative;
	max-height: 720px;
}

#coodiv-header.subpages-header {
	max-height: 400px;
}

#coodiv-header.subpages-header-min {
	max-height: 90px;
}

#coodiv-header.subpages-header-min .bg_overlay_header img {
	height: auto;
	width: inherit;
}

#coodiv-header .navbar {
	z-index: 2;
	position: fixed;
	top: 0;
	width: 100%;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.header-top-height {
	min-height: 100px;
}

#coodiv-header .navbar.fixed-header-layout.top-header-fixed {
	position: fixed;
	width: 100%;
	top: 0px;
	padding: 1.2rem 1rem;
	z-index: 99999;
	background: #ffffff;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 7px 17px rgba(0, 0, 0, 0.04);
	opacity: 1;
	left: 0;
	right: 0;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

@media (min-width:768px) {
	#coodiv-header .top-header-fixed .navbar-nav .nav-link {
			color: #4e585d;
	}

	#coodiv-header .top-header-fixed .navbar-nav .active .nav-link,
	#coodiv-header .top-header-fixed .navbar-nav .nav-link:hover {
			color: #282e31;
	}

	#coodiv-header .top-header-fixed .navbar-nav .nav-link:before {
			background: #81959e;
	}

	#coodiv-header .top-header-fixed .navbar-nav .nav-link:after {
			background: #81959e;
	}
}

#coodiv-header .top-header-fixed .header-user-info-coodiv li span {
	color: #a5b7bf;
}

#coodiv-header .navbar.top-header-fixed-btom0 {
	top: -120px;
}

#coodiv-header .navbar-brand img {
	max-height: 25px;
}

.header-user-info-coodiv {
	margin-bottom: -3px;
}

.header-user-info-coodiv li {
	list-style: none;
	text-align: center;
}

.header-user-info-coodiv li #header-login-dropdown {
	background: #FFEB3B;
	padding: 5px 30px;
	border-radius: 20px;
	font-size: 13px;
	font-weight: 600;
	color: #363542;
	position: relative;
}

@-moz-document url-prefix() {
	.header-user-info-coodiv li a {
			font-weight: 500;
	}
}

.header-user-info-coodiv li a:hover {
	background: #f5e23c;
	text-decoration: none;
}

.header-user-info-coodiv li span {
	display: block;
	font-size: 13px;
	font-weight: 500;
	color: #fff;
	margin-top: 7px;
}

.bg_overlay_header {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 0;
	bottom: 0;
	right: 0;
	pointer-events: none;
	overflow: hidden;
}

.bg_overlay_header img {
	min-width: 100%;
}

.bg_overlay_header:after {
	content: "";
	position: absolute;
	background: url(../faq/img/header/bottom-header-bar.svg) no-repeat right bottom !important;
	background-size: auto;
	bottom: 0px;
	width: 112%;
	background-size: 100% !important;
	height: 70px;
	left: -15px;
}

#coodiv-header.subpages-header-min .bg_overlay_header:after {
	display: none;
}

@media (max-width:1000px) {
	.bg_overlay_header img {
		height: 100%;
	}
}

#coodiv-header.subpages-header .bg_overlay_header img {
	height: auto;
}

@media (max-width:700px) {
	#coodiv-header.subpages-header .bg_overlay_header img {
			height: 100%;
	}
}

.bg_overlay_header .bg_overlay_header-bg-grand {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: transparent;
	background: linear-gradient(0deg, #fff 0%, #eef1f8 100%);
	z-index: -1;
	opacity: 0.5;
}

.nav-header-chage {
	position: absolute !important;
	display: block;
	top: 50%;
	transform: translateY(-50%);
	width: 8em;
	margin: 0 3em 0 0;
	right: 0;
}

.nav-header-chage .flickity-slider {
	transform: inherit !important;
	position: relative;
}

.nav-header-chage .flickity-viewport {
	height: 100% !important;
}

.nav__item {
	line-height: 1;
	position: relative !important;
	display: block;
	margin: 0;
	padding: 0;
	letter-spacing: 0;
	color: currentColor;
	border: 0;
	background: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	cursor: pointer;
	margin-left: auto;
	left: auto !important;
}

.nav__item:focus {
	outline: none;
}

.nav--shamso .nav__item {
	width: 2.25em;
	height: 2.25em;
}

.nav--shamso .nav__item::before,
.nav--shamso .nav__item::after {
	content: '';
	position: absolute;
	border-radius: 50%;
}

.nav--shamso .nav__item::before {
	top: 25%;
	left: 25%;
	width: 50%;
	height: 50%;
	background: rgba(0, 0, 0, 0.13);
	-webkit-transition: -webkit-transform 0.5s;
	transition: transform 0.5s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.nav--shamso .nav__item:not(.is-selected):focus::before,
.nav--shamso .nav__item:not(.is-selected):hover::before {
	-webkit-transform: scale3d(1.35, 1.35, 1);
	transform: scale3d(1.35, 1.35, 1);
}

.nav--shamso .is-selected::before {
	-webkit-transform: scale3d(0.35, 0.35, 1);
	transform: scale3d(0.35, 0.35, 1);
}

.nav--shamso .nav__item::after {
	top: 10%;
	left: 10%;
	width: 78%;
	height: 78%;
	opacity: 0;
	box-shadow: inset 0 0 0 3px #5e798b;
	-webkit-transform: scale3d(0.35, 0.35, 1);
	transform: scale3d(0.35, 0.35, 1);
	-webkit-transition: -webkit-transform 0.5s, box-shadow 0.5s, opacity 0.5s;
	transition: transform 0.5s, box-shadow 0.5s, opacity 0.5s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.nav--shamso .is-selected::after {
	opacity: 1;
	box-shadow: inset 0 0 0 3px #c1dff9;
	-webkit-transform: scale3d(1, 1, 1);
	transform: scale3d(1, 1, 1);
}

.nav--shamso .nav__item-title {
	font-weight: bold;
	line-height: 1.5;
	display: block;
	margin: 0 2.5rem 0 0;
	white-space: nowrap;
	pointer-events: none;
	opacity: 0;
	color: #c1dff9;
	-webkit-transform: scale3d(0.1, 0.1, 1);
	transform: scale3d(0.1, 0.1, 1);
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
	transition: opacity 0.5s, transform 0.5s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	margin-left: auto;
	float: right;
}

.nav--shamso .is-selected .nav__item-title {
	opacity: 1;
	-webkit-transform: scale3d(1, 1, 1);
	transform: scale3d(1, 1, 1);
	-webkit-transition-delay: 0.1s;
	transition-delay: 0.1s;
}

.carousel-cell {
	width: 100%;
	outline: none;
	box-shadow: none;
}

.main-header-text-title {
	margin-top: 170px;
	font-family: $f-bl;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 40px;
	margin-bottom: 30px;
	color: #2f3538;
	position: relative;
}

.main-header-text-title span {
	display: block;
	font-size: 14px;
	text-transform: capitalize;
	font-weight: 500;
	font-family: $f;
	margin-top: 15px;
	color: #aebfc7;
}

.main-header-text-title small {
	display: block;
	text-transform: lowercase;
	font-size: 17px;
	margin-top: 1px;
	font-weight: 400;
	letter-spacing: 0;
	font-family: 'Quicksand', sans-serif;
	color: #9ba8af;
}

.main-header-text-title .sub-page-breadcrumb {
	text-transform: initial;
	font-size: 15px;
	margin-top: 20px;
	font-weight: 400;
	font-family: 'Quicksand', sans-serif;
	color: #62747d;
	letter-spacing: 0.6px;
}

.breadcrumb-hosting-pages {
	background: #fff;
	border-radius: 6px;
	margin-top: 15px;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.07);
}

.breadcrumb-hosting-pages a {
	text-align: center;
	border-right: 1px solid #f2f4f5;
	padding: 30px 10px;
	text-decoration: none !important;
	position: relative;
}

.breadcrumb-hosting-pages a:last-child {
	border: 0;
	border-radius: 0 6px 6px 0;
}

.breadcrumb-hosting-pages a:first-child {
	border-radius: 6px 0 0 6px;
}

.breadcrumb-hosting-pages a img {
	width: 50px;
	margin: auto;
}

.breadcrumb-hosting-pages a .sub-breadcrumb-host-title {
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 12px;
	letter-spacing: 1px;
	color: #2f3538;
	position: relative;
	text-decoration: none;
	margin-top: 10px;
	display: block;
}

.breadcrumb-hosting-pages a.active:before {
	content: '';
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 12px 10px 0 10px;
	border-color: #fafcfc transparent transparent transparent;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	bottom: -9px;
}

.breadcrumb-hosting-pages a.active {
	background: #fafcfc;
}

.breadcrumb-hosting-pages a .off-tag {
	position: absolute;
	top: -10px;
	background: #F44336;
	color: #fff;
	font-size: 13px;
	font-weight: bold;
	padding: 2px 15px;
	border-radius: 30px;
	left: 0;
	right: 0;
	margin: auto;
	width: 90px;
}

#domain-search-header {
	padding-left: 0;
	position: relative;
}

#domain-search-header input {
	width: 100%;
	border: 0;
	height: 60px;
	border-radius: 30px;
	outline: none;
	padding-right: 30px;
	line-height: 61px;
	box-shadow: 12px 12px 30px 0 rgba(77, 77, 119, .10);
	font-weight: 500;
	color: #5a7072;
	background: #fff;
}

#domain-search-header input::-webkit-input-placeholder {
	font-weight: 500;
	color: #aaa;
	font-size: 14px;
}

#domain-search-header input::-moz-placeholder {
	font-weight: 500;
	color: #aaa;
	font-size: 14px;
}

#domain-search-header input::-ms-input-placeholder {
	font-weight: 500;
	color: #aaa;
	font-size: 14px;
}

#domain-search-header input::-moz-placeholder {
	font-weight: 500;
	color: #aaa;
	font-size: 14px;
}

#domain-search-header .inline-button-domain-order {
	position: absolute;
	top: 22px;
	left: 15px;
}

#domain-search-header .inline-button-domain-order i {
  color: #fff;
}

#domain-search-header .inline-button-domain-order #search-btn {
	background-image: linear-gradient(to right, lighten($c1, 5%), $c1);
	border: 0;
	transition: background-size .2s ease-in-out, .2s box-shadow ease-in-out, .2s filter, .3s opacity;
	color: #fff;
	height: 40px;
	width: 40px;
	font-size: 14px;
	border-radius: 50px;
	outline: none !important;
	line-height: 40px;
	cursor: pointer;
	box-shadow: 0px 4px 25px 0 lighten($c1, 3%);
	margin-left: 2px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

#domain-search-header .inline-button-domain-order #search-btn:hover {
	background-size: 175% 100%;
	color: #fff;
	outline: none;
	transition: background-size .2s ease-in-out, .2s box-shadow ease-in-out, .2s filter, .3s opacity;
}

#domain-search-header .inline-button-domain-order #transfer-btn {
	background-image: linear-gradient(to right, #fdb05c, #fd8d5f);
	border: 0;
	transition: background-size .2s ease-in-out, .2s box-shadow ease-in-out, .2s filter, .3s opacity;
	color: #fff;
	height: 40px;
	width: 40px;
	font-size: 14px;
	border-radius: 50px;
	outline: none !important;
	line-height: 40px;
	cursor: pointer;
	box-shadow: 0px 4px 31px 0 rgba(138, 44, 0, 0.54);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

#domain-search-header .inline-button-domain-order #transfer-btn:hover {
	background-size: 175% 100%;
	color: #fff;
	outline: none;
	transition: background-size .2s ease-in-out, .2s box-shadow ease-in-out, .2s filter, .3s opacity;
}

.domain-search-header-pricetext {
	display: block;
	font-size: 13px;
	font-weight: 400;
	letter-spacing: 0;
	margin-top: 8px;
	text-align: right;
	padding-right: 30px;
	color: #a0b0b7;
}

.domain-search-header-pricetext b {
	color: #747d82;
}

.domain-name-classes {
	width: 140px;
	background: #fff;
	box-shadow: 5px 7px 12px 0 rgba(77, 77, 119, 0.05);
	padding: 12px 45px 12px 12px;
	border-radius: 15px;
	margin-top: 40px;
	position: relative;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.domain-name-classes:hover {
	box-shadow: 5px 7px 12px 0 rgba(77, 77, 119, 0.15);
}

.domain-name-classes .domain-img {
	height: 34px;
	position: relative;
	vertical-align: middle;
}

.domain-name-classes .domain-img img {
	width: 55px;
	vertical-align: middle;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	max-height: 36px;
}

.domain-name-classes .price {
	display: block;
	font-size: 13px;
	letter-spacing: 0;
	font-weight: 600;
	color: #747d82;
	padding-left: 8px;
}

.domain-name-classes .features-domains {
	text-align: center;
	position: absolute;
	right: 0;
	width: 50px;
	top: 19px;
}

.domain-name-classes .features-domains a {
	display: block;
	margin-bottom: 10px;
}

.domain-name-classes .features-domains img {
	width: 13px;
	cursor: pointer;
	opacity: 0.4;
	margin: auto;
	display: block;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.domain-name-classes .features-domains img:hover {
	opacity: 0.7;
}

.owl-domain-prices-previw {
	height: 159px;
	overflow: hidden;
	margin-top: 20px;
	padding-bottom: 40px;
}

.owl-domain-prices-previw .owl-item {
	min-height: 1px;
	float: left;
	-webkit-backface-visibility: hidden;
	-webkit-touch-callout: none;
}

.owl-dots.disabled {
	display: none;
}

.owl-domain-prices-previw .owl-nav {
	position: absolute;
	bottom: 0px;
}

.owl-domain-prices-previw.owl-theme .owl-nav .owl-prev {
	background: url(../faq/img/svgs/Arrow-1.svg) no-repeat !important;
	background-size: contain !important;
	width: 28px;
	height: 17px;
	margin-left: 10px;
	opacity: 0.2;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.owl-domain-prices-previw.owl-theme .owl-nav .owl-prev:hover {
	opacity: 0.4;
}

.owl-domain-prices-previw.owl-theme .owl-nav .owl-next {
	background: url(../faq/img/svgs/Arrow.svg) no-repeat !important;
	background-size: contain !important;
	width: 28px;
	height: 17px;
	opacity: 0.2;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.owl-domain-prices-previw.owl-theme .owl-nav .owl-next:hover {
	opacity: 0.4;
}

.hosting-header-slider-cell-img {
	width: 310px;
}

.circle-sub-title-header-slider {
	font-size: 13px;
	position: relative;
	z-index: 1;
	vertical-align: top;
	display: table;
	background: #7167d8;
	color: #fff;
	padding: 5px 15px;
	margin-bottom: 10px;
	border-radius: 20px;
	font-weight: 400;
	font-style: inherit;
	text-transform: capitalize;
}

.text-sub-title-header-slider {
	display: block;
	text-transform: capitalize;
	font-size: 15px;
	margin-top: 1px;
	font-weight: 300;
	letter-spacing: 0;
	color: #9ba8af;
	font-family: 'Poppins', sans-serif;
	line-height: 31px;
}

.btn-sub-title-header-slider {
	background-image: linear-gradient(to right, #fdb05c, #fd8d5f);
	border: 0;
	transition: background-size .2s ease-in-out, .2s box-shadow ease-in-out, .2s filter, .3s opacity;
	color: #fff;
	font-size: 14px;
	border-radius: 50px;
	display: inline-table;
	margin-top: 12px;
	padding: 8px 30px;
	letter-spacing: 0.5px;
	outline: none !important;
	cursor: pointer;
	box-shadow: 3px 4px 31px 0 rgba(253, 165, 93, 0.54);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-left: 10px;
}

.btn-sub-title-header-slider:hover {
	background-size: 175% 100%;
	color: #fff;
	outline: none;
	text-decoration: none;
	transition: background-size .2s ease-in-out, .2s box-shadow ease-in-out, .2s filter, .3s opacity;
}

.hosting-header-slider-cell-img-02 {
	width: 450px;
}

.coodiv-dropdown-header {
	background: #fff;
	box-shadow: 5px 7px 12px 0 rgba(77, 77, 119, 0.05);
	border-radius: 15px;
	margin-top: 25px;
}

.coodiv-dropdown-header:after {
	content: '';
	background: url(../faq/img/header/navs/dropdown.png) no-repeat !important;
	position: absolute;
	width: 47px;
	height: 10px;
	top: -10px;
	left: 9px;
}

.coodiv-dropdown-header .dropdown-item {
	padding: .15rem 3.5rem .15rem .9rem;
	font-weight: 700;
	color: #4e5f67;
	font-size: 13px;
	line-height: 24px;
	position: relative;
}

@-moz-document url-prefix() {
	.coodiv-dropdown-header .dropdown-item {
			font-weight: 500;
	}
}

.coodiv-dropdown-header .dropdown-item .nav-new-tag {
	position: absolute;
	right: 15px;
	background: #ffeb3b;
	padding: 2px 6px;
	line-height: 1;
	border-radius: 6px;
	top: 50%;
	transform: translateY(-50%);
}

.coodiv-dropdown-header .dropdown-item .nav-soon-tag {
	position: absolute;
	right: 15px;
	background: #e589cd;
	color: #fff;
	padding: 2px 6px;
	line-height: 1;
	border-radius: 6px;
	top: 50%;
	transform: translateY(-50%);
}

.dropdown-item:active {
	color: #16181b;
	text-decoration: none;
	background-color: #f8f9fa;
}

#coodiv-navbar-header .dropdown-menu {
	display: block;
	opacity: 0;
	visibility: hidden;
	-webkit-transform: translateY(-16px);
	transform: translateY(-16px);
	transition: transform .32s cubic-bezier(0, 0, 0, 1), opacity 80ms;
	transition: transform .32s cubic-bezier(0, 0, 0, 1), opacity 80ms, -webkit-transform .32s cubic-bezier(0, 0, 0, 1);
}

#coodiv-navbar-header .show>.dropdown-menu {
	opacity: 1;
	visibility: visible;
	-webkit-transform: translateY(0);
	transform: translateY(0);
}

#coodiv-navbar-header .dropdown-menu.user-login-dropdown {
	min-width: 320px;
	right: 0;
	left: auto;
	padding: 0;
}

.coodiv-dropdown-header.user-login-dropdown:after {
	right: 27px;
	left: auto;
}

.user-login-dropdown-form {
	position: relative;
}

.user-login-dropdown-form .form-group {
	margin-bottom: 0;
	position: relative;
}

.user-login-dropdown-form .form-group i {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 20px;
	color: #dcdee0;
}

.user-login-dropdown-form .form-group.username input {
	border: 0;
	border-radius: 15px 15px 0 0;
	border-bottom: 1px solid #e7e9ec;
}

.user-login-dropdown-form .form-group.password input {
	border: 0;
	border-radius: 0 0 15px 15px;
	border-top: 1px solid #e7e9ec;
}

.user-login-dropdown-form .form-group input {
	padding: 25px 15px;
	font-size: 13px;
	letter-spacing: 1px;
}

.user-login-dropdown-form-button {
	background-image: linear-gradient(to right, #2196F3, #35cbde);
	border: 0;
	transition: background-size .2s ease-in-out, .2s box-shadow ease-in-out, .2s filter, .3s opacity;
	color: #fff;
	height: 40px;
	width: 40px;
	font-size: 14px;
	border-radius: 50px;
	outline: none !important;
	line-height: 40px;
	cursor: pointer;
	box-shadow: 3px 4px 31px 0 rgba(35, 156, 241, 0.51);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: -22px;
}

#coodiv-header .navbar.fixed-header-layout.top-header-fixed .coodiv-dropdown-header:after {
	display: none;
}

.demo-section {
	padding: 100px 0;
	background: linear-gradient(0deg, #fff 0%, #f3f5f9 100%);
	background: #fff;
}

.box-features-sevices-home {
	background: #fff;
	box-shadow: 0 10px 100px 0 rgba(77, 77, 119, 0.08);
	border-radius: 10px;
	padding: 35px 25px 25px;
	width: 100%;
	display: block;
	margin-top: 5px;
	position: relative;
	margin-bottom: 30px;
}

.box-features-sevices-home .box-features-sevices-ovelow {
	position: absolute;
	left: 0;
	right: 0;
	border-radius: 5px;
	background: linear-gradient(45deg, #8b80f7, #5d47f6);
	top: 50%;
	transform: translateY(-50%);
	overflow: hidden;
	height: 0%;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.box-features-sevices-home:hover .box-features-sevices-ovelow,
.box-features-sevices-home.active .box-features-sevices-ovelow {
	height: 100%;
}

.box-features-sevices-home .box-features-sevices-ovelow:after {
	content: '';
	position: absolute;
	width: 300px;
	height: 300px;
	background: #fff;
	border-radius: 100%;
	top: -150px;
	right: -130px;
	opacity: 0.1;
}

.box-features-sevices-home:hover .icon-box-features-home,
.box-features-sevices-home.active .icon-box-features-home {
	background: rgba(255, 255, 255, 0.1803921568627451) !important;
}

.icon-box-features-home {
	height: 60px;
	width: 60px;
	display: block;
	text-align: center;
	line-height: 60px;
	border-radius: 5px;
	position: relative;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.icon-box-features-home:after {
	content: '';
	background: url(../faq/img/bg/icon-bg.png) no-repeat !important;
	position: absolute;
	width: 85px;
	height: 85px;
	z-index: 0;
	top: -10px;
	left: -9px;
	opacity: 0.1;
}

.icon-box-features-home i:before {
	font-size: 30px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.box-features-sevices-home:hover .icon-box-features-home i:before,
.box-features-sevices-home.active .icon-box-features-home i:before {
	color: #fff !important;
}

.icon-box-features-home.first-color {
	background: #ffeeee;
}

.icon-box-features-home.second-color {
	background: #e5f9ed;
}

.icon-box-features-home.third-color {
	background: #e6f1f9;
}

.icon-box-features-home.fourth-color {
	background: #f7e6f9;
}

.icon-box-features-home.first-color i:before {
	color: #c7aaa4;
}

.icon-box-features-home.second-color i:before {
	color: #a6bbaf;
}

.icon-box-features-home.third-color i:before {
	color: #c6d1d8;
}

.icon-box-features-home.fourth-color i:before {
	color: #c7aaa4;
}

.box-features-sevices-home .box-title {
	text-align: left;
	margin-top: 25px;
	font-size: 16px;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	color: #2f3538;
	position: relative;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.box-features-sevices-home:hover .box-title,
.box-features-sevices-home.active .box-title {
	color: #fff;
}

.box-features-sevices-home .box-text {
	display: block;
	font-size: 13px;
	text-transform: capitalize;
	font-weight: 400;
	letter-spacing: 0;
	margin-bottom: 10px;
	color: #565f63;
	margin-top: 15px;
	line-height: 22px;
	position: relative;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.box-features-sevices-home:hover .box-text,
.box-features-sevices-home.active .box-text {
	color: #e2e6e8;
}

.box-features-sevices-home .box-btn {
	display: block;
	margin-top: 30px;
	padding: 9px;
	text-align: center;
	border-radius: 5px;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 13px;
	text-decoration: none;
	letter-spacing: 1px;
	background: #a558e1;
	background-image: linear-gradient(to right, #5c5cfd, #d65ffd);
	box-shadow: 3px 4px 31px 0 rgba(111, 92, 253, 0.39);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	position: relative;
}

.box-features-sevices-home .box-btn:hover {
	color: #fff;
	box-shadow: 3px 4px 31px 0 rgba(111, 92, 253, 0.8);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.home-our-servces-title {
	text-align: left;
	position: relative;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 25px;
	letter-spacing: 1px;
	margin-bottom: 30px;
	color: #2f3538;
	padding-bottom: 25px;
}

.home-our-servces-title:after {
	content: '';
	position: absolute;
	height: 3px;
	width: 50px;
	background: #e7e9ea;
	bottom: 0px;
	left: 0;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.home-our-servces-title:hover::after {
	width: 100px;
}

.home-our-servces-text {
	display: block;
	font-size: 17px;
	font-weight: 400;
	color: #3d4548;
	line-height: 30px;
	position: relative;
}

.body_overlay_ono {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	overflow: hidden;
	pointer-events: none;
}

.body_overlay_ono:after {
	display: block;
	top: -5rem;
	right: -53rem;
	border-radius: 25rem;
	transform: rotate(-44deg);
	background-color: #F6F9FE;
	background: #F6F9FE;
	content: "";
	position: absolute;
	width: 100%;
	height: 34.375rem;
}

.icon-hom-page-service-holder {
	width: 128px;
	height: 115px;
	background: url(../faq/img/bg/home-icon.png) no-repeat !important;
	text-align: center;
	padding: 30px;
	margin: auto;
	margin-top: 65px;
	position: relative;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
}

.icon-hom-page-service-holder:after {
	width: 128px;
	height: 115px;
	background: url(../faq/img/bg/home-icon.png) no-repeat !important;
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	opacity: 0;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	pointer-events: none;
}

.icon-hom-page-service-holder:hover::after {
	opacity: 0.6;
	transition: all 0.2s ease-in-out;
	-webkit-animation: bigono 0.4s linear;
	-moz-animation: bigono 0.4s linear;
	animation: bigono 0.4s linear;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	-webkit-font-smoothing: antialiased;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

@-webkit-keyframes bigono {
	0% {
			opacity: 2;
			transform: scale(1);
	}

	50% {
			opacity: 0.6;
			transform: scale(1.1);
	}

	100% {
			opacity: 2;
			transform: scale(1);
	}
}

@-moz-keyframes bigono {
	0% {
			opacity: 2;
			transform: scale(1);
	}

	50% {
			opacity: 0.6;
			transform: scale(1.1);
	}

	100% {
			opacity: 2;
			transform: scale(1);
	}
}

@keyframes bigono {
	0% {
			opacity: 2;
			transform: scale(1);
	}

	50% {
			opacity: 0.6;
			transform: scale(1.1);
	}

	100% {
			opacity: 2;
			transform: scale(1);
	}
}

.icon-hom-page-service-holder img {
	height: 100%;
}

.icon-hom-page-service-title {
	color: #33334d;
	font-size: 16px;
	text-transform: capitalize;
	text-align: center;
	margin-top: 20px;
}

.icon-hom-page-service-text {
	display: block;
	font-size: 13px;
	line-height: 24px;
	margin: auto;
	margin-top: 15px;
	color: #819dab;
	text-align: center;
	font-family: 'Poppins', sans-serif;
	padding: 0px 30px;
}

.hom-page-service-more {
	background: #a358e0;
	background: -webkit-linear-gradient(left top, #616ad4, #a558e1);
	background: -o-linear-gradient(bottom right, #616ad4, #a558e1);
	background: -moz-linear-gradient(bottom right, #616ad4, #a558e1);
	background: linear-gradient(to bottom right, #6badff, #add2ff);
	border-radius: 25px;
	position: relative;
	padding: 30px 30px 60px;
	overflow: hidden;
}

.hom-page-service-more:after {
	content: '';
	background: url(../faq/img/bg/shape.png) no-repeat;
	right: 30px;
	bottom: 0;
	z-index: 0;
	pointer-events: none;
	width: 323px;
	position: absolute;
	height: 293px;
}

.hom-page-service-more:before {
	content: '';
	height: 450px;
	width: 450px;
	background: rgba(51, 51, 51, 0.4);
	position: absolute;
	border-radius: 100%;
	left: -120px;
	z-index: 0;
	pointer-events: none;
	opacity: 0.1;
	top: -50px;
}

.hom-page-service-more-payment {
	position: absolute;
	bottom: 20px;
}

.hom-page-service-more-payment a {
	margin: 0 5px;
}

.hom-page-service-more-payment a img {
	height: 15px;
	opacity: 1;
}

.hom-page-service-more-title {
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 20px;
	letter-spacing: 1px;
	color: #ffffff;
	margin-top: 5px;
}

.hom-page-service-more-title span {
	font-weight: 500;
	display: block;
	font-size: 14px;
	letter-spacing: 0;
	text-transform: none;
	margin-top: 5px;
}

.hom-page-service-more-banner {
	position: absolute;
	right: 50px;
	z-index: 2;
	top: 50%;
	transform: translateY(-50%);
}

.hom-page-service-more-form {
	margin-top: 35px;
	display: block;
	position: relative;
}

.hom-page-service-more-form input[type=email] {
	width: 82%;
	height: 50px;
	padding: 5px 25px;
	border: 0;
	border-radius: 25px;
	box-shadow: none;
	outline: none;
	font-size: 14px;
	letter-spacing: 0.5px;
	z-index: 1;
	position: relative;
}

.hom-page-service-more-form input[type=submit] {
	position: absolute;
	right: 24%;
	z-index: 1;
	top: 3px;
	bottom: 3px;
	font-size: 14px;
	height: 44px;
	border: 0;
	border-radius: 25px;
	color: #fff;
	padding: 0 18px;
	font-weight: 500;
	letter-spacing: 0.5px;
	outline: none;
	box-shadow: none;
	background: #a358e0;
	background: -webkit-linear-gradient(left top, #616ad4, #a558e1);
	background: -o-linear-gradient(bottom right, #616ad4, #a558e1);
	background: -moz-linear-gradient(bottom right, #616ad4, #a558e1);
	background: linear-gradient(to bottom right, #5c6bd3, #a358e0);
	cursor: pointer;
	opacity: 0.7;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.hom-page-service-more-form input[type=submit]:hover {
	outline: none;
	box-shadow: none;
	opacity: 1;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.hom-page-service-more-form input[type=submit].error-send-mc {
	background: #F44336;
}

.hom-page-service-more-form input[type=submit].success-send-mc {
	background: #4CAF50;
}

#monthly-yearly-chenge {
	padding: 0 0 50px;
	min-width: 200px;
}

#monthly-yearly-chenge a {
	font-weight: bold;
	color: #b4c3ca;
	text-decoration: none;
	position: relative;
	font-size: 14px;
	text-transform: uppercase;
	cursor: pointer;
}

#monthly-yearly-chenge a.active {
	color: #364248;
}

#monthly-yearly-chenge a:first-child {
	padding-right: 40px;
}

#monthly-yearly-chenge a:last-child {
	padding-left: 40px;
}

#monthly-yearly-chenge a:first-child::after {
	content: '';
	position: absolute;
	height: 21px;
	width: 50px;
	background: #dae4e6;
	top: 50%;
	transform: translateY(-50%);
	right: -25px;
	border-radius: 40px;
}

#monthly-yearly-chenge a:last-child::after {
	content: '';
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: #50e3c2;
	width: 18px;
	height: 18px;
	left: -28px;
	border-radius: 40px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

#monthly-yearly-chenge a:last-child.active::after {
	left: 0;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.first-pricing-table {
	text-align: center;
	padding: 35px 30px;
	background: #fff;
	box-shadow: 0 10px 100px 0 rgba(77, 77, 119, 0.16);
	border-radius: 10px;
	position: relative;
	overflow: hidden;
}

.first-pricing-table.best-plan:after {
	content: '';
	background: url(../faq/img/bg/charit.png) no-repeat !important;
	position: absolute;
	width: 127px;
	height: 140px;
	bottom: 30px;
	right: -40px;
	z-index: 0;
}

.first-pricing-table-icon {
	font-size: 40px;
	color: #00BCD4;
}

.first-pricing-table-title {
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 20px;
	letter-spacing: 1px;
	color: #07a9bd;
	margin-top: 5px;
}

.first-pricing-table-title span {
	display: block;
	font-size: 12px;
	line-height: 21px;
	margin: auto;
	color: #838d92;
	font-weight: 400;
	letter-spacing: 0;
	text-transform: none;
	margin-top: 10px;
}

.first-pricing-table-price {
	font-size: 30px;
	display: block;
	margin: 20px 0;
	font-style: inherit !important;
}

.first-pricing-table-price i {
	font-style: inherit !important;
}

.first-pricing-table-price small {
	opacity: 0.5;
	font-size: 14px;
}

.first-pricing-table-most {
	position: absolute;
	transform: rotate(45deg);
	background: #ff4797;
	color: #fff;
	padding: 5px;
	width: 200px;
	top: 25px;
	right: -60px;
	text-align: center;
	font-size: 13px;
}

.first-pricing-table-body {
	padding-left: 0;
}

.first-pricing-table-body li {
	list-style: none;
	background: #f9fafa;
	margin-bottom: 7px;
	font-size: 14px;
	padding: 10px;
	font-weight: 500;
	border-radius: 30px;
	color: #4c5b63;
	position: relative;
	z-index: 1;
}

.first-pricing-table-body li.not-chacked {
	text-decoration: line-through;
	position: relative;
}

.first-pricing-table-body li.not-chacked:after {
	position: absolute;
	font-family: "Font Awesome 5 Free";
	font-weight: 900;
	content: "\f057";
	left: 9px;
	font-size: 22px;
	top: 4px;
	color: #e24d4d;
}

.first-pricing-table-order {
	display: block;
	margin: 45px -30px -35px;
	background: #50e3c2;
	padding: 14px;
	color: #fff;
	font-weight: 500;
	text-transform: uppercase;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 2px;
	font-size: 14px;
	position: relative;
	z-index: 1;
	text-decoration: none !important;
	border-radius: 0 0 6px 0;
}

.first-pricing-table-order:hover {
	color: #fff;
	background: #48d1b2;
}

.first-pricing-table-container [class^="col-md-"],
.first-pricing-table-container [class*=" col-md-"] {
	padding: 0;
}

.first-pricing-table.best-plan .first-pricing-table-order {
	margin: 45px -30px -60px;
}

.first-pricing-table-container [class^="col-md-"]:first-child .first-pricing-table .first-pricing-table-order {
	background: #78b1f7;
	border-radius: 0 0 0 6px;
}

.first-pricing-table-container [class^="col-md-"]:first-child .first-pricing-table .first-pricing-table-order:hover {
	background: #6799d8;
}

.first-pricing-table.best-plan {
	padding: 60px 30px;
	margin-top: -15px;
	position: relative;
	z-index: 1;
}

.first-pricing-table-container [class^="col-md-"]:first-child .first-pricing-table {
	border-radius: 10px 0 0 10px;
}

.first-pricing-table-container [class^="col-md-"]:first-child .first-pricing-table .first-pricing-table-icon {
	color: #ffc107;
}

.first-pricing-table-container [class^="col-md-"]:first-child .first-pricing-table .first-pricing-table-title {
	color: #ffc107;
}

.first-pricing-table-container [class^="col-md-"]:last-child .first-pricing-table .first-pricing-table-icon {
	color: #3F51B5;
}

.first-pricing-table-container [class^="col-md-"]:last-child .first-pricing-table .first-pricing-table-title {
	color: #3F51B5;
}

.first-pricing-table-container [class^="col-md-"]:last-child .first-pricing-table {
	border-radius: 0 10px 10px 0;
}

.first-pricing-table.best-plan .first-pricing-table-order {
	background: #ff4797;
}

.first-pricing-table.best-plan .first-pricing-table-order:hover {
	background: #f1438f;
}

.first-pricing-table-price.monthly .yearly {
	display: none;
}

.first-pricing-table-price.yearly .monthly {
	display: none;
}

#monthly-yearly-chenge.style-two {
	padding: 4px;
	background: #f3f2f8;
	margin-bottom: 30px;
	border-radius: 4px;
	position: relative;
}

#monthly-yearly-chenge.style-two a {
	width: 160px;
	display: inline-block;
	text-align: center;
	padding: 13px 0 !important;
	z-index: 1;
	position: static;
	text-transform: capitalize;
}

#monthly-yearly-chenge.style-two a:last-child::after {
	display: none;
}

#monthly-yearly-chenge.style-two a:first-child::after {
	display: none;
}

#monthly-yearly-chenge.style-two a.active {
	color: #37386e;
}

#monthly-yearly-chenge.style-two a .change-box-text {
	position: relative;
	z-index: 1;
}

#monthly-yearly-chenge.style-two a:first-child .change-box {
	content: '';
	position: absolute;
	background: #fff;
	border-radius: 4px;
	bottom: 3px;
	top: 3px;
	z-index: 0;
	transform: translateY(0%);
	width: 160px;
	right: 3px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

#monthly-yearly-chenge.style-two a.active:first-child .change-box {
	left: 3px;
	right: auto;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.second-pricing-table {
	text-align: center;
	padding: 30px 30px;
	background: #fff;
	box-shadow: 0 10px 100px 0 rgba(77, 77, 119, 0.16);
	border-radius: 5px;
	position: relative;
	overflow: hidden;
}

.second-pricing-table-title {
	text-align: left;
	margin-bottom: 20px;
	font-size: 20px;
}

.second-pricing-table-title span {
	display: block;
	font-size: 15px;
	color: #58676f;
	font-weight: 100;
	letter-spacing: 0.5px;
}

.second-pricing-table-price {
	text-align: left;
	font-size: 30px;
	display: block;
	margin: 20px 0;
	font-style: inherit !important;
}

.second-pricing-table-price i {
	font-style: inherit !important;
}

.second-pricing-table-price small {
	opacity: 0.5;
	font-size: 14px;
}

.second-pricing-table-price.monthly .yearly {
	display: none;
}

.second-pricing-table-price.yearly .monthly {
	display: none;
}

.second-pricing-table-body {
	padding-left: 0;
	text-align: left;
}

.second-pricing-table-body li {
	list-style: none;
	font-size: 14px;
	padding: 6px;
	font-weight: 500;
	border-radius: 30px;
	color: #4c5b63;
	position: relative;
	z-index: 1;
}

.second-pricing-table-body li.not-chacked {
	text-decoration: line-through;
	position: relative;
}

.second-pricing-table-body li.not-chacked:after {
	position: absolute;
	font-family: "Font Awesome 5 Free";
	font-weight: 900;
	content: "\f00d";
	right: 9px;
	font-size: 15px;
	top: 8px;
	color: #F44336;
}

.second-pricing-table-button {
	background: #2fd5c9;
	border: 2px solid #2fd5c9;
	margin-top: 5px;
	display: inline-block;
	float: left;
	color: #fff;
	font-weight: 500;
	font-size: 14px;
	padding: 9px;
	width: 100%;
	border-radius: 5px;
	text-decoration: none !important;
}

.second-pricing-table-button:hover {
	background: #fff;
	border: 2px solid #2fd5c9;
	color: #2fd5c9;
}

.second-pricing-table.active {
	background: #a358e0;
	background: -webkit-linear-gradient(left top, #616ad4, #a558e1);
	background: -o-linear-gradient(bottom right, #616ad4, #a558e1);
	background: -moz-linear-gradient(bottom right, #616ad4, #a558e1);
	background: linear-gradient(to bottom right, #5c6bd3, #a358e0);
}

.second-pricing-table.active .second-pricing-table-title {
	color: #fff;
}

.second-pricing-table.active .second-pricing-table-title span {
	color: #e1e6e8;
}

.second-pricing-table.active .second-pricing-table-price {
	color: #fff;
}

.second-pricing-table.active .second-pricing-table-body li {
	color: #d4dce0;
}

.second-pricing-table.active .second-pricing-table-body li.not-chacked:after {
	color: #dccdcd;
}

.second-pricing-table.active .second-pricing-table-button {
	background: transparent;
	border: 2px solid #fff;
}

.second-pricing-table.active .second-pricing-table-button:hover {
	background: #492f94;
	border: 2px solid #7e61d9;
	color: #fff;
}

.second-pricing-table:before {
	content: '';
	position: absolute;
	width: 400px;
	height: 400px;
	background: rgba(240, 98, 154, 0.05);
	bottom: -120px;
	right: -130px;
	border-radius: 100%;
	z-index: 0;
	pointer-events: none;
}

.second-pricing-table:after {
	content: '';
	position: absolute;
	width: 400px;
	height: 400px;
	background: rgba(33, 150, 243, 0.02);
	top: -120px;
	right: -71px;
	border-radius: 100%;
	z-index: 0;
	pointer-events: none;
}

#monthly-yearly-chenge.custom-change a:first-child::after {
	right: -20px;
}

.our-pertners {
	background: #fff;
	text-align: center;
	margin-top: -100px;
}

.our-pertners img {
	display: block;
	width: 100%;
	max-width: 160px;
	opacity: 0.6;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.our-pertners img:hover {
	opacity: 1;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.section-wth-amwaj {
	padding: 180px 0 100px;
	position: relative;
	min-height: 500px;
	background: #f2f7fb;
}

.bg_overlay_section-amwaj {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 0;
	bottom: 0;
	right: 0;
	pointer-events: none;
	max-height: 200px;
	overflow: hidden;
}

.bg_overlay_section-amwaj img {
	height: 100%;
	min-width: 100%;
}

.suuport-box-home-container {
	text-align: center;
	margin: 15px 0;
}

.suuport-box-home {
	background: #bbbfcb;
	padding: 20px;
	border-radius: 8px;
	text-align: center;
	width: 80px;
	height: 80px;
	line-height: 80px;
	margin: auto;
}

.suuport-box-icon {
	font-size: 22px;
}

.suuport-box-title {
	font-family: 'Poppins', sans-serif;
	font-size: 15px;
	margin-top: 0;
}

.sbx-color01 .suuport-box-home {
	background: #fbe5ea;
	color: #ff1a47;
}

.sbx-color01 .suuport-box-title {
	color: #ff1a47;
}

.sbx-color02 .suuport-box-home {
	background: #dcf0f7;
	color: #4cb2dd;
}

.sbx-color02 .suuport-box-title {
	color: #4cb2dd;
}

.sbx-color03 .suuport-box-home {
	background: #fff7d3;
	color: #ddb52a;
}

.sbx-color03 .suuport-box-title {
	color: #ddb52a;
}

.sbx-color04 .suuport-box-home {
	background: #e4ffee;
	color: #7dc096;
}

.sbx-color04 .suuport-box-title {
	color: #7dc096;
}

.side-text-right-container {}

.side-text-right-title {
	position: relative;
	color: #2e2f38;
	font-weight: bold;
	margin: 0;
	padding: 0;
	font-size: 27px;
	font-family: 'Poppins', sans-serif;
	margin-bottom: 20px;
}

.side-text-right-text {
	color: #72818e;
	font-size: 17px;
	font-weight: 300;
	line-height: 29px;
}

.side-text-right-text b {
	font-weight: bold;
}

.side-text-right-text a {
	color: inherit !important;
	border-bottom: 1px dotted #000 !important;
	text-decoration: none !important;
}

.side-text-right-text a:hover {
	color: #23252b !important;
}

.side-text-right-button {
	color: #727888;
	background-color: #FFF;
	padding: 10px 20px;
	display: inline-block;
	font-weight: 500;
	margin-top: 10px;
	box-shadow: 0 10px 100px 0 rgba(77, 77, 119, 0.16);
	letter-spacing: .05px;
	font-size: 15px;
	text-decoration: none;
	border-radius: 6px;
}

.side-text-right-button:hover {
	color: #ffffff;
	background-color: #6e56e0;
	text-decoration: none;
}

.display-on-hover-box-container {
	position: relative;
	width: 430px;
	height: 430px;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	will-change: transform;
	-webkit-animation-duration: .3s;
	-moz-animation-duration: .3s;
	-o-animation-duration: .3s;
	animation-duration: .3s;
	-webkit-animation-fill-mode: both;
	-moz-animation-fill-mode: both;
	-o-animation-fill-mode: both;
	animation-fill-mode: both;
	-webkit-animation-iteration-count: 1;
	-moz-animation-iteration-count: 1;
	-o-animation-iteration-count: 1;
	animation-iteration-count: 1;
}

.display-on-hover-box-container:after {
	content: '';
	width: 266px;
	height: 248px;
	background: url(../faq/img/bg/box-hover.png) no-repeat;
	position: absolute;
	border-radius: 50%;
	left: 0;
	right: 0;
	margin: auto;
	top: 50%;
	transform: translateY(-50%);
}

.display-on-hover-box-items {
	opacity: 0.3;
	text-align: center;
	z-index: 2;
	line-height: 72px;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 140px;
	height: 150px;
	margin-top: -36px;
	margin-left: -70px;
	cursor: pointer;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	will-change: opacity, transform;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.display-on-hover-box-items img {
	width: 35px;
}

.display-on-hover-box-container .display-on-hover-box-items:nth-child(1) {
	-webkit-transform: rotate(-90deg) translate3d(170px, 0, 0) rotate(90deg);
	-moz-transform: rotate(-90deg) translate3d(170px, 0, 0) rotate(90deg);
	transform: rotate(-90deg) translate3d(170px, 0, 0) rotate(90deg);
}

.display-on-hover-box-container .display-on-hover-box-items:nth-child(2) {
	-webkit-transform: rotate(-45deg) translate3d(170px, 0, 0) rotate(45deg);
	-moz-transform: rotate(-45deg) translate3d(170px, 0, 0) rotate(45deg);
	transform: rotate(-45deg) translate3d(170px, 0, 0) rotate(45deg);
}

.display-on-hover-box-container .display-on-hover-box-items:nth-child(3) {
	-webkit-transform: rotate(0deg) translate3d(170px, 0, 0) rotate(0deg);
	-moz-transform: rotate(0deg) translate3d(170px, 0, 0) rotate(0deg);
	transform: rotate(0deg) translate3d(170px, 0, 0) rotate(0deg);
}

.display-on-hover-box-container .display-on-hover-box-items:nth-child(4) {
	-webkit-transform: rotate(45deg) translate3d(170px, 0, 0) rotate(-45deg);
	-moz-transform: rotate(45deg) translate3d(170px, 0, 0) rotate(-45deg);
	transform: rotate(45deg) translate3d(170px, 0, 0) rotate(-45deg);
}

.display-on-hover-box-container .display-on-hover-box-items:nth-child(5) {
	-webkit-transform: rotate(90deg) translate3d(170px, 0, 0) rotate(-90deg);
	-moz-transform: rotate(90deg) translate3d(170px, 0, 0) rotate(-90deg);
	transform: rotate(90deg) translate3d(170px, 0, 0) rotate(-90deg);
}

.display-on-hover-box-container .display-on-hover-box-items:nth-child(6) {
	-webkit-transform: rotate(135deg) translate3d(170px, 0, 0) rotate(-135deg);
	-moz-transform: rotate(135deg) translate3d(170px, 0, 0) rotate(-135deg);
	transform: rotate(135deg) translate3d(170px, 0, 0) rotate(-135deg);
}

.display-on-hover-box-container .display-on-hover-box-items:nth-child(7) {
	-webkit-transform: rotate(180deg) translate3d(170px, 0, 0) rotate(-180deg);
	-moz-transform: rotate(180deg) translate3d(170px, 0, 0) rotate(-180deg);
	transform: rotate(180deg) translate3d(170px, 0, 0) rotate(-180deg);
}

.display-on-hover-box-container .display-on-hover-box-items:nth-child(8) {
	-webkit-transform: rotate(225deg) translate3d(170px, 0, 0) rotate(-225deg);
	-moz-transform: rotate(225deg) translate3d(170px, 0, 0) rotate(-225deg);
	transform: rotate(225deg) translate3d(170px, 0, 0) rotate(-225deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot:nth-child(1) {
	-webkit-transform: rotate(-90deg) translate3d(155px, 0, 0) rotate(90deg);
	-moz-transform: rotate(-90deg) translate3d(155px, 0, 0) rotate(90deg);
	transform: rotate(-90deg) translate3d(155px, 0, 0) rotate(90deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot:nth-child(2) {
	-webkit-transform: rotate(-45deg) translate3d(155px, 0, 0) rotate(45deg);
	-moz-transform: rotate(-45deg) translate3d(155px, 0, 0) rotate(45deg);
	transform: rotate(-45deg) translate3d(155px, 0, 0) rotate(45deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot:nth-child(3) {
	-webkit-transform: rotate(0deg) translate3d(155px, 0, 0) rotate(0deg);
	-moz-transform: rotate(0deg) translate3d(155px, 0, 0) rotate(0deg);
	transform: rotate(0deg) translate3d(155px, 0, 0) rotate(0deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot:nth-child(4) {
	-webkit-transform: rotate(45deg) translate3d(155px, 0, 0) rotate(-45deg);
	-moz-transform: rotate(45deg) translate3d(155px, 0, 0) rotate(-45deg);
	transform: rotate(45deg) translate3d(155px, 0, 0) rotate(-45deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot:nth-child(5) {
	-webkit-transform: rotate(90deg) translate3d(155px, 0, 0) rotate(-90deg);
	-moz-transform: rotate(90deg) translate3d(155px, 0, 0) rotate(-90deg);
	transform: rotate(90deg) translate3d(155px, 0, 0) rotate(-90deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot:nth-child(6) {
	-webkit-transform: rotate(135deg) translate3d(155px, 0, 0) rotate(-135deg);
	-moz-transform: rotate(135deg) translate3d(155px, 0, 0) rotate(-135deg);
	transform: rotate(135deg) translate3d(155px, 0, 0) rotate(-135deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot:nth-child(7) {
	-webkit-transform: rotate(180deg) translate3d(155px, 0, 0) rotate(-180deg);
	-moz-transform: rotate(180deg) translate3d(155px, 0, 0) rotate(-180deg);
	transform: rotate(180deg) translate3d(155px, 0, 0) rotate(-180deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot:nth-child(8) {
	-webkit-transform: rotate(225deg) translate3d(155px, 0, 0) rotate(-225deg);
	-moz-transform: rotate(225deg) translate3d(155px, 0, 0) rotate(-225deg);
	transform: rotate(225deg) translate3d(155px, 0, 0) rotate(-225deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot.active:nth-child(1) {
	-webkit-transform: rotate(-90deg) translate3d(175px, 0, 0) rotate(90deg);
	-moz-transform: rotate(-90deg) translate3d(175px, 0, 0) rotate(90deg);
	transform: rotate(-90deg) translate3d(175px, 0, 0) rotate(90deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot.active:nth-child(2) {
	-webkit-transform: rotate(-45deg) translate3d(175px, 0, 0) rotate(45deg);
	-moz-transform: rotate(-45deg) translate3d(175px, 0, 0) rotate(45deg);
	transform: rotate(-45deg) translate3d(175px, 0, 0) rotate(45deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot.active:nth-child(3) {
	-webkit-transform: rotate(0deg) translate3d(175px, 0, 0) rotate(0deg);
	-moz-transform: rotate(0deg) translate3d(175px, 0, 0) rotate(0deg);
	transform: rotate(0deg) translate3d(175px, 0, 0) rotate(0deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot.active:nth-child(4) {
	-webkit-transform: rotate(45deg) translate3d(175px, 0, 0) rotate(-45deg);
	-moz-transform: rotate(45deg) translate3d(175px, 0, 0) rotate(-45deg);
	transform: rotate(45deg) translate3d(175px, 0, 0) rotate(-45deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot.active:nth-child(5) {
	-webkit-transform: rotate(90deg) translate3d(175px, 0, 0) rotate(-90deg);
	-moz-transform: rotate(90deg) translate3d(175px, 0, 0) rotate(-90deg);
	transform: rotate(90deg) translate3d(175px, 0, 0) rotate(-90deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot.active:nth-child(6) {
	-webkit-transform: rotate(135deg) translate3d(175px, 0, 0) rotate(-135deg);
	-moz-transform: rotate(135deg) translate3d(175px, 0, 0) rotate(-135deg);
	transform: rotate(135deg) translate3d(175px, 0, 0) rotate(-135deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot.active:nth-child(7) {
	-webkit-transform: rotate(180deg) translate3d(175px, 0, 0) rotate(-180deg);
	-moz-transform: rotate(180deg) translate3d(175px, 0, 0) rotate(-180deg);
	transform: rotate(180deg) translate3d(175px, 0, 0) rotate(-180deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot.active:nth-child(8) {
	-webkit-transform: rotate(225deg) translate3d(175px, 0, 0) rotate(-225deg);
	-moz-transform: rotate(225deg) translate3d(175px, 0, 0) rotate(-225deg);
	transform: rotate(225deg) translate3d(175px, 0, 0) rotate(-225deg);
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot {
	opacity: 0.2
}

.display-on-hover-box-container .display-on-hover-box-items.itsnot.active {
	opacity: 1
}

.display-on-hover-box-content {
	width: 266px;
	height: 248px;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	text-align: center;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1;
}

.display-on-hover-box-content .not-hover-icon {
	color: #fff;
	line-height: 230px;
	display: block;
}

.display-on-hover-box-content .not-hover-icon:before {
	font-size: 80px;
}

.home-ads-section {
	background: #a358e0;
	background: -webkit-linear-gradient(left top, #616ad4, #a558e1);
	background: -o-linear-gradient(bottom right, #616ad4, #a558e1);
	background: -moz-linear-gradient(bottom right, #616ad4, #a558e1);
	background: linear-gradient(to bottom right, #5c6bd3, #a358e0);
}

.home-ads-section h1 {
	margin: 0;
	padding: 25px 0;
	text-align: center;
	color: #fff;
	font-size: 19px;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
}

.tab-content-hover {
	display: none;
}

.display-on-hover-box-cotent-items {
	top: 50%;
	transform: translateY(-50%);
	position: relative;
	color: #fff;
	padding: 0 25px;
}

.display-on-hover-box-cotent-items .tab-content-hover:first-child {
	display: block;
}

.display-on-hover-box-cotent-items h5 {
	font-weight: bold;
	font-size: 16px;
}

.display-on-hover-box-cotent-items p {
	color: #ffffff;
	font-size: 13px;
	font-weight: 300;
	line-height: 20px;
}

.perlex-efect-section {
	min-height: 500px;
}

.perlex-efect-section .perlex-hidden-iverlow {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: #0f1315;
	opacity: 0.5;
}

.play-button-in-section {
	top: 50%;
	transform: translateY(-50%);
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	display: inline-block;
	width: 140px;
	height: 140px;
	text-align: center;
	line-height: 140px;
	border-radius: 50%;
	font-size: 17px;
}

.play-button-in-section i {
	background: #fff;
	border-radius: 50%;
	font-size: 17px;
	color: #7b63d9;
	width: 60px;
	height: 60px;
	line-height: 60px;
}

.play-button-in-section .waves {
	animation: 2s ease-in-out 0s normal none infinite running waves;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 100%;
	height: 100%;
	opacity: 0;
	position: absolute;
	width: 100%;
	left: 0;
}

.play-button-in-section .waves.wave-2 {
	width: 86%;
	height: 86%;
	left: 7%;
	top: 7%;
}

.play-button-in-section .waves.wave-3 {
	width: 70%;
	height: 70%;
	left: 15%;
	top: 15%;
}

.play-button-in-section .waves.wave-4 {
	width: 86%;
	height: 86%;
	left: 7%;
	top: 7%;
}

@-webkit-keyframes waves {
	0% {
			-webkit-transform: scale(0.2, 0.2);
			transform: scale(0.2, 0.2);
			opacity: 0;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	}

	50% {
			opacity: 0.9;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
	}

	100% {
			-webkit-transform: scale(0.9, 0.9);
			transform: scale(0.9, 0.9);
			opacity: 0;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	}
}

@keyframes waves {
	0% {
			-webkit-transform: scale(0.2, 0.2);
			transform: scale(0.2, 0.2);
			opacity: 0;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	}

	50% {
			opacity: 0.9;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
	}

	100% {
			-webkit-transform: scale(0.9, 0.9);
			transform: scale(0.9, 0.9);
			opacity: 0;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	}
}

#videomodal {
	z-index: 999999;
}

#videomodal .modal-dialog {
	max-width: 800px;
	margin: 120px auto;
}

#videomodal .modal-body {
	position: relative;
	padding: 0px;
}

#videomodal .close {
	position: absolute;
	right: -30px;
	top: 0;
	z-index: 999;
	font-size: 2rem;
	font-weight: normal;
	color: #fff;
	opacity: 1;
	outline: 0;
	box-shadow: none;
}

.map-server-places-section {
	overflow: hidden;
	padding-bottom: 100px;
	padding-top: 80px;
}

.map-gene-server-place {
	text-align: center;
	position: relative;
}

.map-gene-server-place img {
	max-width: 1024px;
	width: 100%;
	text-align: center;
	opacity: 0.6;
}

.server-places-spans span {
	position: absolute;
}

.server-places-spans span:after {
	content: '';
	animation: 2s ease-in-out 0s normal none infinite running waves;
	position: absolute;
	width: 40px;
	height: 40px;
	left: 0;
	right: 0px;
	margin: auto;
	top: -38px;
	border-radius: 50%;
	background: #c2cbd0;
	z-index: 0;
}

.server-places-spans b {
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
	background: #a358e0;
	background: -webkit-linear-gradient(left top, #616ad4, #a558e1);
	background: -o-linear-gradient(bottom right, #616ad4, #a558e1);
	background: -moz-linear-gradient(bottom right, #616ad4, #a558e1);
	background: linear-gradient(to bottom right, #5c6bd3, #a358e0);
	color: #fff;
	font-size: 13px;
	padding: 4px 10px;
	border-radius: 20px;
}

.server-places-spans b:after {
	content: '';
	position: absolute;
	width: 15px;
	height: 15px;
	left: 0;
	right: 0;
	margin: auto;
	top: -25px;
	border-radius: 10px;
	background: #a358e0;
	background: -webkit-linear-gradient(left top, #616ad4, #a558e1);
	background: -o-linear-gradient(bottom right, #616ad4, #a558e1);
	background: -moz-linear-gradient(bottom right, #616ad4, #a558e1);
	background: linear-gradient(to bottom right, #5c6bd3, #a358e0);
	cursor: pointer;
	z-index: 1;
}

.server-places-spans b:before {
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 5px 6px 5px;
	border-color: transparent transparent #6a67d5 transparent;
	left: 0;
	right: 0;
	margin: auto;
	top: -6px;
}

.server-places-spans small {
	position: absolute;
	top: -55px;
	left: 0;
	right: 0;
	color: #fff;
	width: max-content;
	margin: auto;
	font-size: 12px;
	padding: 2px 7px;
	border-radius: 20px;
	background: #333;
}

.server-places-spans small.good {
	background: #55d647;
}

.server-places-spans small.avrage {
	background: #FF9800;
}

.server-places-spans small.avrage {
	background: #FF9800;
}

.server-places-spans small.bad {
	background: #FF5722;
}

.map-comment-area {
	margin-top: -20px;
	position: relative;
}

.map-comment-area-title {
	margin: 0;
	padding: 20px;
	text-align: center;
	font-size: 26px;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
}

.maps-comments-area-overflow {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 250px;
	background: rgb(34, 193, 195);
	background: linear-gradient(0deg, #333 0%, #fff 100%);
	opacity: 0.1;
	pointer-events: none;
}

.map-comment-area-text {
	color: #5a6480;
	font-size: 18px;
	font-weight: 300;
	line-height: 29px;
	text-align: center;
}

.footer-section-banner {
	padding: 70px 0;
	background: #2d2d44;
	color: #fff;
}

.free-trial-footer-banner-title {
	margin: 0;
	font-size: 20px;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
	margin-bottom: 8px;
	text-transform: capitalize;
}

.free-trial-footer-banner-text {
	color: #c4c7de;
	font-size: 16px;
	font-weight: 300;
	line-height: 27px;
}

.free-trial-footer-links {
	text-align: center;
}

.free-trial-footer-links a {
	text-decoration: none;
	text-transform: uppercase;
	font-weight: 500;
	padding: 12px 30px;
	font-size: 13px;
	border-radius: 30px;
	margin: 5px 5px;
	display: -webkit-inline-box;
}

.free-trial-footer-links a.sign-btn {
	background: #8065ff;
	color: #fff;
}

.free-trial-footer-links a.sign-btn:hover {
	background: #6e55e4;
	color: #fff;
}

.free-trial-footer-links a.log-btn {
	background: #fff;
	color: #8065ff;
}

.free-trial-footer-links a.log-btn:hover {
	background: #e2e6e8;
	color: #8065ff;
}

.footer-section {
	padding: 100px 0 30px;
	background: #33334f;
	color: #fff;
}

.quiq-links-footer-title {
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
	font-size: 17px;
	margin-bottom: 20px;
}

.quiq-links-footer-ul li {
	list-style: none;
	position: relative;
	padding: 4px 0;
}

.quiq-links-footer-ul li:after {
	position: absolute;
	content: '';
	width: 4px;
	height: 4px;
	background: #7f64ff;
	left: -19px;
	top: 0;
	bottom: 0;
	margin: auto;
	border-radius: 1px;
}

.quiq-links-footer-ul li a {
	color: #969cc1;
	font-weight: 500;
	line-height: 25px;
	font-size: 14px;
	text-transform: capitalize;
	text-decoration: none;
}

.quiq-links-footer-ul li a:hover {
	color: #b3b7d4;
	text-decoration: none;
}

.secure-img-footer-area span {
	display: block;
	font-size: 12px;
	margin-top: 10px;
	color: #9eaeb5;
}

.footer-contact-method {
	margin-top: 25px;
}

.footer-contact-method a {
	background: #fff;
	padding: 8px 20px 12px;
	display: block;
	border-radius: 5px;
	position: relative;
	text-decoration: none !important;
	overflow: hidden;
	margin-top: 15px;
}

.footer-contact-method a span {
	font-weight: 600;
	letter-spacing: 0.5px;
	font-size: 13px;
	margin-bottom: 20px;
	color: #607D8B;
	text-transform: uppercase;
}

.footer-contact-method a b {
	font-weight: 600;
	letter-spacing: 0.5px;
	font-size: 14px;
	color: #006495;
	display: block;
}

@-moz-document url-prefix() {
	.footer-contact-method a span {
			font-weight: 500;
	}

	.footer-contact-method a b {
			font-weight: 500;
	}
}

.footer-contact-method a i {
	position: absolute;
	font-size: 50px;
	bottom: -5px;
	color: #33334f;
	right: -5px;
	opacity: 0.2;
}

.footer-area-under [class^="col-md-"] {
	padding-left: 0;
	padding-right: 10px;
}

.footer-area-under .footer-logo-blue {
	width: 110px;
}

.footer-social-icons {
	margin-top: 30px;
}

.footer-social-icons a {
	background: #22253e;
	width: 24px;
	height: 24px;
	display: inline-block;
	text-align: center;
	line-height: 24px;
	color: #fff;
	font-size: 12px;
	border-radius: 20px;
	margin-right: 8px;
	opacity: 0.8;
}

.footer-social-icons a:hover {
	opacity: 1;
}

.under-footer-ullist {
	margin-bottom: 0;
	margin-top: 15px
}

.under-footer-ullist li {
	list-style: none;
	padding: 2px 0;
}

.under-footer-ullist li a {
	color: #969cc1;
	font-weight: 500;
	line-height: 25px;
	font-size: 13px;
	text-decoration: none;
	text-transform: uppercase;
}

.under-footer-ullist li a:hover {
	color: #b4b8d6;
	text-decoration: none;
}

.final-footer-area-text {
	color: #969cc1;
	font-size: 13px;
	font-weight: 300;
	line-height: 25px;
}

.footer-lang-changer .menu-btn-changer {
	color: #969cc1;
	font-weight: 500;
	font-size: 13px;
	text-decoration: none;
	text-transform: capitalize;
	margin-left: 15px;
}

.footer-lang-changer .menu-btn-changer:hover {
	color: #b4b8d6;
	text-decoration: none;
}

.footer-lang-changer .menu-btn-changer i {
	font-size: 16px;
	margin-right: 5px;
}

.footer-lang-changer .menu-btn-changer img {
	width: 16px;
	margin-top: -3px;
	margin-right: 5px;
}

.lang-changer-drop-up {
	float: left;
}

.dropupmenulagchanger.dropdown-menu {
	top: -15px !important;
}

.dropupmenulagchanger.dropdown-menu a {
	color: #6a709b;
	font-weight: 500;
	font-size: 13px;
	text-decoration: none;
	text-transform: capitalize;
}

.dropupmenulagchanger.dropdown-menu:after {
	content: '';
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 7px 6px 0 6px;
	border-color: #ffffff transparent transparent transparent;
	position: absolute;
	left: 26px;
	bottom: -7px;
}

.scene {
	background: #6054e6;
	background: -moz-radial-gradient(center, ellipse cover, rgba(104, 91, 249, 1) 0%, rgba(84, 73, 200, 1) 100%);
	background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(104, 91, 249, 1)), color-stop(100%, rgba(84, 73, 200, 1)));
	background: -webkit-radial-gradient(center, ellipse cover, rgba(104, 91, 249, 1) 0%, rgba(84, 73, 200, 1) 100%);
	background: -o-radial-gradient(center, ellipse cover, rgba(104, 91, 249, 1) 0%, rgba(84, 73, 200, 1) 100%);
	background: -ms-radial-gradient(center, ellipse cover, rgba(104, 91, 249, 1) 0%, rgba(84, 73, 200, 1) 100%);
	background: radial-gradient(ellipse at center, #5b6bd3 0%, #a558e1 100%);
}

.scene path:first-child {
	fill: url(#header-first-animated-gradient) #5b6bd3;
}

.frist-svg-gradient-start {
	stop-color: #5b6bd3;
}

.frist-svg-gradient-end {
	stop-color: #a558e1;
}

.scene path:nth-child(2) {
	fill: #f7f8ff;
}

.main-header-coodiv-s {
	position: relative
}

.coodiv-dropdown-megamnu {
	background: #fff;
	box-shadow: 5px 7px 12px 0 rgba(77, 77, 119, 0.05);
	border-radius: 15px;
	margin-top: 22px;
	width: 100%;
	min-height: 260px;
	border: 0;
	background: #fff url(../faq/img/header/slider/header-bg-01.png) no-repeat left center !important;
}

.dropdown.megamenu {
	position: static;
}

.dropdown.megamenu a .megamenu-toggle {
	background: url(../faq/img/header/navs/dropdown.png) no-repeat !important;
	position: absolute;
	width: 47px;
	height: 10px;
	bottom: -26px;
	left: 0;
	right: 0;
	margin: auto;
	opacity: 0;
	visibility: hidden;
	-webkit-transform: translateY(-16px);
	transform: translateY(-16px);
	transition: transform .32s cubic-bezier(0, 0, 0, 1), opacity 80ms;
	transition: transform .32s cubic-bezier(0, 0, 0, 1), opacity 80ms, -webkit-transform .32s cubic-bezier(0, 0, 0, 1);
}

.dropdown.megamenu.show a .megamenu-toggle {
	opacity: 1;
	visibility: visible;
	-webkit-transform: translateY(0);
	transform: translateY(0);
}

#coodiv-header .navbar.fixed-header-layout.top-header-fixed .dropdown.megamenu a .megamenu-toggle {
	display: none;
}

#coodiv-header .navbar.fixed-header-layout.top-header-fixed .coodiv-dropdown-megamnu {
	border: 1px solid rgba(0, 0, 0, .15);
}

.mega-menu-hosting-container {
	padding: 30px 45px 30px 0;
}

.mega-menu-hosting-title {
	position: relative;
	color: #2e2f38;
	font-weight: bold;
	margin: 0;
	padding: 0;
	font-size: 25px;
	font-family: 'Poppins', sans-serif;
	margin-bottom: 20px;
	letter-spacing: 0.5px;
	text-transform: capitalize;
}

.mega-menu-hosting-content {
	position: relative;
	border-right: 1px solid #f0f0f0;
	padding-bottom: 25px;
	margin-top: 20px;
}

.mega-menu-hosting-content h5 {
	font-size: 13px;
	border-bottom: 1px solid #f0f0f0;
	padding-bottom: 7px;
	text-transform: uppercase;
	font-weight: 700;
	color: #551fd7;
}

.mega-menu-hosting-content h5 i {
	margin-right: 5px;
}

.mega-menu-hosting-content p {
	color: #9aa6ca;
	font-size: 14px;
}

.mega-menu-hosting-content a {
	position: absolute;
	right: 25px;
	font-size: 25px;
	color: #5b6ad3;
	bottom: 0;
}

.row .mega-menu-hosting-content:last-child {
	border: 0;
}

.menu-btn-span-bar,
.menu-btn-span-bar:hover,
.menu-btn-span-bar:focus {
	background: 0;
	border: 0;
	outline: none;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
}

.menu-btn-span-bar span {
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.menu-btn-span-bar span:nth-child(1) {
	height: 2px;
	display: block;
	width: 20px;
	background: #2f3538;
	border-radius: 4px;
}

.menu-btn-span-bar span:nth-child(2) {
	height: 2px;
	display: block;
	width: 20px;
	background: #2f3538;
	border-radius: 4px;
	margin-top: 5px;
}

.menu-btn-span-bar span:nth-child(3) {
	height: 2px;
	display: block;
	width: 13px;
	background: #2f3538;
	border-radius: 4px;
	margin-top: 5px;
	float: right;
}

.menu-btn-span-bar.is-open span:nth-child(1) {
	-ms-transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

.menu-btn-span-bar.is-open span:nth-child(2) {
	display: none;
}

.menu-btn-span-bar.is-open span:nth-child(3) {
	margin-top: -2px;
	width: 20px;
	-ms-transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
}

.account-place-header-nav {
	margin-bottom: 0;
	padding: 0;
}

.account-place-header-nav li {
	list-style: none;
}

.account-place-header-nav .dropdown-toggle::after {
	display: none;
}

.owl-carousel,
.owl-carousel .owl-item {
	-webkit-tap-highlight-color: transparent;
	position: relative
}

.owl-carousel {
	display: none;
	width: 100%;
	z-index: 1
}

.owl-carousel .owl-stage {
	position: relative;
	-ms-touch-action: pan-Y;
	-moz-backface-visibility: hidden
}

.owl-carousel .owl-stage:after {
	content: ".";
	display: block;
	clear: both;
	visibility: hidden;
	line-height: 0;
	height: 0
}

.owl-carousel .owl-stage-outer {
	position: relative;
	overflow: hidden;
	-webkit-transform: translate3d(0, 0, 0)
}

.owl-carousel .owl-item,
.owl-carousel .owl-wrapper {
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	-ms-backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);
	-moz-transform: translate3d(0, 0, 0);
	-ms-transform: translate3d(0, 0, 0)
}

.owl-carousel .owl-item {
	min-height: 1px;
	float: left;
	-webkit-backface-visibility: hidden;
	-webkit-touch-callout: none
}

.owl-carousel .owl-item img {
	display: block;
	width: 100%
}

.owl-carousel .owl-dots.disabled,
.owl-carousel .owl-nav.disabled {
	display: none
}

.no-js .owl-carousel,
.owl-carousel.owl-loaded {
	display: block
}

.owl-carousel .owl-dot,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-nav .owl-prev {
	cursor: pointer;
	cursor: hand;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.owl-carousel.owl-loading {
	opacity: 0;
	display: block
}

.owl-carousel.owl-hidden {
	opacity: 0
}

.owl-carousel.owl-refresh .owl-item {
	visibility: hidden
}

.owl-carousel.owl-drag .owl-item {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.owl-carousel.owl-grab {
	cursor: move;
	cursor: grab
}

.owl-carousel.owl-rtl {
	direction: rtl
}

.owl-carousel.owl-rtl .owl-item {
	float: right
}

.owl-carousel .animated {
	animation-duration: 1s;
	animation-fill-mode: both
}

.owl-carousel .owl-animated-in {
	z-index: 0
}

.owl-carousel .owl-animated-out {
	z-index: 1
}

.owl-carousel .fadeOut {
	animation-name: fadeOut
}

@keyframes fadeOut {
	0% {
			opacity: 1
	}

	100% {
			opacity: 0
	}
}

.owl-height {
	transition: height .5s ease-in-out
}

.owl-carousel .owl-item .owl-lazy {
	opacity: 0;
	transition: opacity .4s ease
}

.owl-carousel .owl-item img.owl-lazy {
	transform-style: preserve-3d
}

.owl-carousel .owl-video-wrapper {
	position: relative;
	height: 100%;
	background: #000
}

.owl-carousel .owl-video-play-icon {
	position: absolute;
	height: 80px;
	width: 80px;
	left: 50%;
	top: 50%;
	margin-left: -40px;
	margin-top: -40px;
	cursor: pointer;
	z-index: 1;
	-webkit-backface-visibility: hidden;
	transition: transform .1s ease
}

.owl-carousel .owl-video-play-icon:hover {
	-ms-transform: scale(1.3, 1.3);
	transform: scale(1.3, 1.3)
}

.owl-carousel .owl-video-playing .owl-video-play-icon,
.owl-carousel .owl-video-playing .owl-video-tn {
	display: none
}

.owl-carousel .owl-video-tn {
	opacity: 0;
	height: 100%;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
	transition: opacity .4s ease
}

.owl-carousel .owl-video-frame {
	position: relative;
	z-index: 1;
	height: 100%;
	width: 100%
}

.owl-theme .owl-dots,
.owl-theme .owl-nav {
	text-align: center;
	-webkit-tap-highlight-color: transparent
}

.owl-theme .owl-nav {
	margin-top: 10px
}

.owl-theme .owl-nav [class*=owl-] {
	color: #FFF;
	font-size: 14px;
	margin: 5px;
	padding: 4px 7px;
	background: #D6D6D6;
	display: inline-block;
	cursor: pointer;
	border-radius: 3px
}

.owl-theme .owl-nav [class*=owl-]:hover {
	background: #869791;
	color: #FFF;
	text-decoration: none
}

.owl-theme .owl-nav .disabled {
	opacity: .5;
	cursor: default
}

.owl-theme .owl-nav.disabled+.owl-dots {
	margin-top: 10px
}

.owl-theme .owl-dots .owl-dot {
	display: inline-block;
	zoom: 1
}

.owl-theme .owl-dots .owl-dot span {
	width: 10px;
	height: 10px;
	margin: 5px 7px;
	background: #D6D6D6;
	display: block;
	-webkit-backface-visibility: visible;
	transition: opacity .2s ease;
	border-radius: 30px
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
	background: #869791
}

.flickity-enabled {
	position: relative;
}

.flickity-enabled:focus {
	outline: none;
}

.flickity-viewport {
	overflow: hidden;
	position: relative;
	height: 100%;
}

.flickity-slider {
	position: absolute;
	width: 100%;
	height: 100%;
}

.flickity-enabled.is-draggable {
	-webkit-tap-highlight-color: transparent;
	tap-highlight-color: transparent;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
	cursor: move;
	cursor: -webkit-grab;
	cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
	cursor: -webkit-grabbing;
	cursor: grabbing;
}

.flickity-button {
	position: absolute;
	background: hsla(0, 0%, 100%, 0.75);
	border: none;
	color: #333;
}

.flickity-button:hover {
	background: white;
	cursor: pointer;
}

.flickity-button:focus {
	outline: none;
	box-shadow: 0 0 0 5px #19F;
}

.flickity-button:active {
	opacity: 0.6;
}

.flickity-button:disabled {
	opacity: 0.3;
	cursor: auto;
	pointer-events: none;
}

.flickity-button-icon {
	fill: #333;
}

.flickity-prev-next-button {
	top: 50%;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	transform: translateY(-50%);
}

.flickity-prev-next-button.previous {
	left: 10px;
}

.flickity-prev-next-button.next {
	right: 10px;
}

.flickity-rtl .flickity-prev-next-button.previous {
	left: auto;
	right: 10px;
}

.flickity-rtl .flickity-prev-next-button.next {
	right: auto;
	left: 10px;
}

.flickity-prev-next-button .flickity-button-icon {
	position: absolute;
	left: 20%;
	top: 20%;
	width: 60%;
	height: 60%;
}

.flickity-page-dots {
	position: absolute;
	width: 100%;
	bottom: -25px;
	padding: 0;
	margin: 0;
	list-style: none;
	text-align: center;
	line-height: 1;
}

.flickity-rtl .flickity-page-dots {
	direction: rtl;
}

.flickity-page-dots .dot {
	display: inline-block;
	width: 10px;
	height: 10px;
	margin: 0 8px;
	background: #333;
	border-radius: 50%;
	opacity: 0.25;
	cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
	opacity: 1;
}

.our-services-coresol-box {
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 7px 17px rgba(0, 0, 0, 0.08);
	padding: 30px 20px;
	text-align: center;
	border-radius: 8px;
	margin: 15px 15px;
	position: relative;
	overflow: hidden;
	width: 290px;
}

.our-services-coresol-box:after {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	border-radius: 5px;
	background: linear-gradient(45deg, #8b80f7, #5d47f6);
	top: 50%;
	transform: translateY(-50%);
	overflow: hidden;
	height: 0%;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	z-index: 0;
	pointer-events: none;
}

.is-selected .our-services-coresol-box:after {
	height: 100%;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.is-selected .our-services-coresol-box:before {
	content: '';
	position: absolute;
	width: 300px;
	height: 300px;
	background: #fff;
	border-radius: 100%;
	top: -110px;
	right: -89px;
	opacity: 0.06;
	z-index: 1;
}

.our-services-coresol-box i:before {
	font-size: 60px;
	color: #4447e0;
	margin-left: 0;
}

.our-services-coresol-box h5 {
	position: relative;
	color: #2e2f38;
	font-weight: 600;
	margin: 0;
	padding: 0;
	font-size: 15px;
	font-family: 'Poppins', sans-serif;
	margin-bottom: 15px;
}

.our-services-coresol-box p {
	color: #727888;
	font-size: 15px;
	font-weight: 300;
	line-height: 24px;
	padding: 0;
}

.our-services-coresol-box a {
	position: relative;
	width: 45px;
	height: 45px;
	display: block;
	margin: auto;
	margin-top: 30px;
	border: 2px solid #4447e0;
	border-radius: 50px;
}

.our-services-coresol-box a:hover {
	background: #4447e0;
}

.our-services-coresol-box a:before {
	content: '';
	-ms-transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	background: #4447e0;
	height: 2px;
	border-radius: 10px;
	width: 12px;
	position: absolute;
	top: -8px;
	left: 16px;
	bottom: 0;
	margin: auto;
}

.our-services-coresol-box i,
.our-services-coresol-box h5,
.our-services-coresol-box p,
.our-services-coresol-box a {
	position: relative;
	z-index: 1;
}

.is-selected .our-services-coresol-box i:before {
	color: #ffffff;
}

.is-selected .our-services-coresol-box h5 {
	color: #ffffff;
}

.is-selected .our-services-coresol-box p {
	color: #d1dbe0;
}

.is-selected .our-services-coresol-box a {
	background-image: linear-gradient(to right, #f183a9, #ec769f);
	transition: background-size .2s ease-in-out, .2s box-shadow ease-in-out, .2s filter, .3s opacity;
	outline: none !important;
	border: 0;
	width: 42px;
	height: 41px;
}

.is-selected .our-services-coresol-box a:after,
.is-selected .our-services-coresol-box a:before {
	background: #fff;
}

.our-services-coresol-box a:after {
	content: '';
	-ms-transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
	background: #4447e0;
	height: 2px;
	border-radius: 10px;
	width: 12px;
	position: absolute;
	bottom: 15px;
	left: 16px;
	margin: auto;
}

.our-services-coresol-box a:hover::after,
.our-services-coresol-box a:hover::before {
	background: #fff;
}

.our-services-carousel .carousel-cell {
	width: auto;
}

.our-services-carousel .flickity-prev-next-button {
	bottom: -30px;
	top: auto;
	width: 28px;
	height: 17px;
	opacity: 0.3;
	border-radius: 0;
	outline: none !important;
	box-shadow: none !important;
}

.our-services-carousel .flickity-prev-next-button:hover {
	opacity: 0.6;
}

.our-services-carousel .flickity-prev-next-button svg {
	display: none;
}

.our-services-carousel .flickity-prev-next-button.next {
	right: auto;
	left: 40px;
	background: url(../faq/img/svgs/Arrow.svg) no-repeat !important;
	background-size: contain !important;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.our-services-carousel .flickity-prev-next-button.previous {
	background: url(../faq/img/svgs/Arrow-1.svg) no-repeat !important;
	background-size: contain !important;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.our-services-carousel-container {
	position: absolute;
	right: 0;
	padding-right: 0;
}

.about-us-img-section img {
	width: 100%;
}

.how-it-work-section:after {
	content: '';
	background: url(../faq/img/bg/paper-plan.jpg) no-repeat !important;
	position: absolute;
	background-size: 100% !important;
	width: 100%;
	height: 381px;
	left: 0;
	top: 60%;
	transform: translateY(-50%);
	z-index: 0;
	pointer-events: none;
}

.how-it-works-box {
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.05);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.05);
	padding: 60px 20px;
	text-align: center;
	border-radius: 6px;
	background: #fff;
	margin: 20px auto;
	max-width: 280px;
	position: relative;
	z-index: 1;
}

.how-it-works-box i:before {
	font-size: 45px;
}

.how-it-works-box h5 {
	position: relative;
	color: #494a56;
	font-weight: bold;
	margin: 0;
	padding: 0;
	font-size: 17px;
	font-family: 'Poppins', sans-serif;
	margin-bottom: 10px;
	margin-top: 15px;
}

.how-it-works-box p {
	color: #5b6171;
	font-size: 15px;
	font-weight: 400;
	line-height: 28px;
	letter-spacing: 0.1px;
}

.how-it-work-section-row [class^="col-md-"]:nth-child(1) .how-it-works-box i:before {
	color: #fe5152;
}

.how-it-work-section-row [class^="col-md-"]:nth-child(2) .how-it-works-box i:before {
	color: #0c469a;
}

.how-it-work-section-row [class^="col-md-"]:nth-child(3) .how-it-works-box i:before {
	color: #f39d9e;
}

.how-it-work-section-row [class^="col-md-"]:nth-child(2) {
	margin-top: 30px
}

.how-it-work-section-row [class^="col-md-"]:nth-child(3) {
	margin-top: 60px
}

.carousel-main-customers-text .carousel-cell {
	width: 100%;
}

.carousel-main-customers-container {
	min-height: 450px;
	position: relative;
}

.carousel-nav-customers-text {
	position: absolute;
	left: 0;
	height: 100%;
	width: 100%;
	top: 0;
}

.carousel-nav-customers-text .flickity-viewport {
	height: 100% !important
}

.carousel-nav-customers-text .carousel-cell {
	max-width: 140px;
	position: absolute;
	text-align: center;
}

.carousel-nav-customers-text .flickity-slider {
	transform: inherit !important;
	top: 0;
}

.carousel-nav-customers-text .carousel-cell .carousel-customrs-holder {
	display: -webkit-inline-box;
	margin: 20px;
	cursor: pointer;
	position: relative;
	width: auto;
}

.carousel-nav-customers-text .carousel-cell.is-selected .carousel-customrs-holder {
	cursor: auto;
}

.carousel-nav-customers-text .carousel-cell .carousel-customrs-holder img {
	width: 70px;
	border-radius: 50%;
	border: 5px solid #fff;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.14);
	-webkit-transition: all 0.15s ease-in-out;
	-moz-transition: all 0.15s ease-in-out;
	-o-transition: all 0.15s ease-in-out;
	-ms-transition: all 0.15s ease-in-out;
	transition: all 0.15s ease-in-out;
}

.carousel-nav-customers-text .carousel-cell.is-selected .carousel-customrs-holder img {
	width: 80px;
}

.carousel-nav-customers-text .carousel-cell .carousel-customrs-holder:after {
	content: '';
	position: absolute;
	left: 5px;
	right: 5px;
	top: 5px;
	bottom: 5px;
	background: #8060da;
	border-radius: 50%;
	opacity: 0;
	-webkit-transition: all 0.15s ease-in-out;
	-moz-transition: all 0.15s ease-in-out;
	-o-transition: all 0.15s ease-in-out;
	-ms-transition: all 0.15s ease-in-out;
	transition: all 0.15s ease-in-out;
}

.carousel-nav-customers-text .carousel-cell.is-selected .carousel-customrs-holder:after {
	opacity: 0.15;
}

@media (min-width:769px) {
	.carousel-nav-customers-text .carousel-cell:nth-child(1) {
			top: 4%;
			left: 22% !important
	}

	.carousel-nav-customers-text .carousel-cell:nth-child(2) {
			top: 50%;
			transform: translateY(-50%);
			left: 5% !important
	}

	.carousel-nav-customers-text .carousel-cell:nth-child(3) {
			bottom: 0;
			left: 12% !important
	}

	.carousel-nav-customers-text .carousel-cell:nth-child(4) {
			top: 0;
			right: 22% !important;
			left: auto !important
	}

	.carousel-nav-customers-text .carousel-cell:nth-child(5) {
			top: 50%;
			transform: translateY(-50%);
			right: 5% !important;
			left: auto !important
	}

	.carousel-nav-customers-text .carousel-cell:nth-child(6) {
			bottom: 0;
			right: 18% !important;
			left: auto !important
	}
}

.carousel-nav-customers-text .carousel-cell .carousel-customrs-holder .customrs-icons {
	position: absolute;
	color: #fff;
	width: 25px;
	height: 25px;
	font-size: 12px;
	line-height: 25px;
	border-radius: 20px;
	opacity: 0;
	visibility: hidden;
	-webkit-transform: translateY(-16px);
	transform: translateY(-16px);
}

.carousel-nav-customers-text .carousel-cell.is-selected .carousel-customrs-holder .customrs-icons {
	opacity: 1;
	visibility: visible;
	-webkit-transform: translateY(0);
	transform: translateY(0);
}

.carousel-nav-customers-text .carousel-cell .carousel-customrs-holder .customrs-icons.fb {
	bottom: -4px;
	left: -2px;
	background: #4464b1;
}

.carousel-nav-customers-text .carousel-cell .carousel-customrs-holder .customrs-icons.tw {
	bottom: -12px;
	left: 0;
	right: 0;
	margin: auto;
	background: #4e9edd;
}

.carousel-nav-customers-text .carousel-cell .carousel-customrs-holder .customrs-icons.wb {
	bottom: -4px;
	right: -2px;
	background: #7bc144;
}

.main-customers-text-about-us {
	text-align: center;
	max-width: 600px;
	margin: auto;
	position: relative;
	padding-top: 60px;
}

.main-customers-text-about-us:after {
	content: "\f10d";
	position: absolute;
	top: -6px;
	font-size: 36px;
	left: 0;
	right: 0;
	color: #7565f7;
	margin: auto;
	font-family: "Font Awesome 5 Free";
	font-weight: 900;
}

.main-customers-text-about-us h5 {
	position: relative;
	color: #4a4477;
	font-weight: bold;
	margin: 0;
	padding: 0;
	font-size: 22px;
	margin-bottom: 10px;
	letter-spacing: 1px;
}

.main-customers-text-about-us p {
	color: #737988;
	font-size: 15px;
	font-weight: 400;
	line-height: 23px;
	padding: 8px 30px;
}

.main-customers-text-about-us span {
	font-weight: 100;
	font-size: 13px;
}

.main-customers-text-about-us span b {
	font-weight: 800;
	font-style: italic;
	display: block;
	font-family: 'Poppins', sans-serif;
	font-size: 13px;
	color: #576a73;
	margin-bottom: -5px;
}

.web-hosting-options {
	padding-left: 10px;
}

.web-hosting-options li {
	list-style: none;
	padding: 8px 0;
	color: #363b40;
	font-weight: 500;
	letter-spacing: -0.1px;
	font-size: 14px;
	font-family: 'Poppins', sans-serif;
}

.web-hosting-options li i {
	margin-right: 5px;
	color: #1e88e5;
	font-size: 16px;
}

.hosting-plan-row [class^="col-md-"] {
	padding: 0;
}

.third-pricing-table {
	box-shadow: 0 5px 15px 0 rgba(110, 110, 110, .1);
	border-radius: 4px;
}

.third-pricing-table .plan-header {
	padding: 30px 5px;
	text-align: center;
	display: block;
}

.third-pricing-table .headline {
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 14px;
	display: block;
}

.third-pricing-table .plan-price {
	display: block;
	color: #1e88e5;
	font-size: 33px;
	font-weight: 500;
	line-height: 40px;
	margin: 15px 0 0;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	text-align: center;
}

.third-pricing-table .activated-method {
	display: block;
	color: #8a9399;
	font-size: 14px;
	line-height: 11px;
	font-weight: 100;
}

.third-pricing-table .plan-price span {
	font-size: 15px;
}

.third-pricing-table .package-body {
	padding: 30px 15px;
	text-align: center;
	border-top: 1px solid #f1f2f3;
}

.third-pricing-table .package-body ul {
	padding-left: 0;
}

.third-pricing-table .package-body ul li {
	list-style: none;
	margin: 0 0 12px 0;
	color: #747a84;
	font-size: 13px;
	font-family: 'Poppins', sans-serif;
}

.third-pricing-table .package-body ul li strong {
	color: #373b42;
}

.third-pricing-table .package-footer a {
	display: block;
	text-align: center;
	padding: 20px 0;
	background: #a358e0;
	background: -webkit-linear-gradient(left top, #616ad4, #a558e1);
	background: -o-linear-gradient(bottom right, #616ad4, #a558e1);
	background: -moz-linear-gradient(bottom right, #616ad4, #a558e1);
	background: linear-gradient(to bottom right, #5c6bd3, #a358e0);
	border-radius: 0 0 6px 6px;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 13px;
}

.third-pricing-table .package-footer a:hover {
	color: #fff;
	text-decoration: none;
	box-shadow: 3px 4px 31px 0 rgba(149, 94, 253, 0.45);
}

.third-pricing-table.side-right {
	margin-top: 15px;
	border-radius: 0 8px 8x 0;
}

.third-pricing-table.side-right .package-footer a {
	border-radius: 0 0 8px 0;
}

.third-pricing-table.side-left {
	margin-top: 15px;
	border-radius: 8px 0 0 8px;
}

.third-pricing-table.side-left .package-footer a {
	border-radius: 0 0 0 8px;
	margin-right: -1px;
	background: #fff;
}

.third-pricing-table.blur-plan {
	position: relative;
}

.third-pricing-table.blur-plan .headline,
.third-pricing-table.blur-plan .plan-price,
.third-pricing-table.blur-plan .activated-method,
.third-pricing-table.blur-plan .package-body ul li,
.third-pricing-table.blur-plan .package-footer a,
.third-pricing-table.blur-plan .package-body ul li strong {
	color: transparent;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	pointer-events: none;
	opacity: 0.7;
}

.third-pricing-table.blur-plan:after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: transparent;
}

.third-pricing-table .plan-commins-soon {
	position: absolute;
	left: 0;
	right: 0;
	display: block;
	text-align: center;
	color: #1e88e5;
	font-size: 15px;
	line-height: 40px;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	top: 39%;
	transform: translateY(-50%);
}

.hosting-plan-row {
	padding-left: 0;
}

.box-features-one {
	text-align: center;
	padding: 15px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	border-radius: 6px;
}

.box-features-one:hover {
	background: #f7f8f9;
}

.box-features-one i {
	display: block;
}

.box-features-one i:before {
	font-size: 40px;
	color: #5769cc;
}

.box-features-one h5 {
	color: #2e2f38;
	font-weight: 400;
	font-size: 15px;
	letter-spacing: 0.5px;
	max-width: 150px;
	margin: auto;
	margin-bottom: 20px;
	margin-top: 6px;
}

.with-top-border {
	border-top: 1px solid #edeff2;
}

.questions-box {}

.questions-box .questions-title {
	color: #965bde;
	font-weight: 600;
	margin: 0;
	padding: 0;
	font-size: 15px;
	font-family: 'Poppins', sans-serif;
	margin-bottom: 15px;
	position: relative;
	box-shadow: none;
	outline: none;
}

.questions-box .questions-title.collapsed {
	color: #363b40;
}

.questions-box .questions-title:after {
	content: '';
	position: absolute;
	height: 12px;
	width: 2px;
	background: #965bde;
	border-radius: 10px;
	top: 0;
	bottom: 0;
	margin: auto;
	left: -24px;
	opacity: 0;
	transform: rotate(90deg);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.questions-box .questions-title.collapsed:after {
	opacity: 1;
	transform: rotate(0deg);
	background: #363b40;
}

.questions-box .questions-title:before {
	content: '';
	position: absolute;
	height: 2px;
	width: 13px;
	background: #835fdb;
	border-radius: 10px;
	top: 0;
	bottom: 0;
	margin: auto;
	left: -29px;
}

.questions-box .questions-title.collapsed:before {
	background: #2e2f38;
}

.questions-box .questions-reponse {
	color: #505665;
	font-size: 16px;
	font-weight: 300;
	line-height: 25px;
	margin-bottom: 0;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.questions-box .questions-reponse.show {
	margin-bottom: 40px;
}

.banner-servers-box {
	overflow: hidden;
	padding: 25px 24px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	border-radius: 6px 6px 0 0;
	position: relative;
	background-image: linear-gradient(90deg, #606ad4 0%, #5e4494 100%);
	color: #fff;
	height: 100px;
}

.banner-servers-box:before {
	content: '';
	position: absolute;
	background: url(../faq/img/counter/counter-bg.png) no-repeat !important;
	height: 100px;
	width: 100%;
	top: 0;
	z-index: 0;
	opacity: 0.5;
}

.counter-placeholder {
	width: 64px;
	height: 43px;
	background: url(../faq/img/counter/counter.png) no-repeat !important;
	position: relative;
	float: left;
	margin-right: 25px;
}

.counter-placeholder:after {
	content: '';
	background: url(../faq/img/counter/arrow.png) no-repeat !important;
	width: 15px;
	height: 15px;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	bottom: 5px;
	-webkit-animation-name: spaceboots;
	-webkit-animation-duration: 0.8s;
	-webkit-transform-origin: 50% 50%;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}

@-webkit-keyframes spaceboots {
	0% {
			-webkit-transform: rotate(0deg);
	}

	10% {
			-webkit-transform: rotate(-5deg);
	}

	20% {
			-webkit-transform: rotate(5deg);
	}

	30% {
			-webkit-transform: rotate(0deg);
	}

	40% {
			-webkit-transform: rotate(1deg);
	}

	50% {
			-webkit-transform: rotate(-1deg);
	}

	60% {
			-webkit-transform: rotate(-5deg);
	}

	70% {
			-webkit-transform: rotate(5deg);
	}

	80% {
			-webkit-transform: rotate(1deg);
	}

	90% {
			-webkit-transform: rotate(0deg);
	}

	100% {
			-webkit-transform: rotate(-10deg);
	}
}

.banner-text-left h5 {
	font-size: 17px;
	font-weight: 100;
	text-transform: capitalize;
	margin-bottom: 0;
	margin-top: 5px;
	font-family: 'Poppins', sans-serif;
	letter-spacing: -0.4px;
}

.banner-text-left h5 strong {
	font-weight: 600;
	margin-left: 8px;
}

.banner-text-left p {
	color: #ececef;
	font-size: 15px;
	font-weight: 300;
	line-height: 25px;
	margin-bottom: 0;
}

.benchmarks-link {
	margin: 0;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
	text-transform: capitalize;
	position: absolute;
	top: 0;
	background: rgba(19, 19, 21, 0.13);
	width: 220px;
	right: 0;
	text-align: center;
	bottom: 0;
	line-height: 100px;
	font-size: 17px;
	color: #fff;
	text-decoration: none !important;
}

.benchmarks-link:after {
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 0 100px 80px;
	border-color: transparent transparent rgba(19, 19, 21, 0.13) transparent;
	content: '';
	top: 0;
	position: absolute;
	left: -80px;
}

.benchmarks-link:hover {
	color: #fff;
	width: 240px;
}

.server-tabls-head {
	margin: auto;
	background: #2d2d44;
	padding: 20px;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	font-size: 13px;
	text-transform: uppercase;
}

.server-tabls-row {
	position: relative;
	background-color: #ffffff;
	box-shadow: 0 1px 15px rgba(15, 24, 51, 0.11);
	border: none;
	transition: all ease-in-out .15s;
	padding: 25px 20px;
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	color: #616366;
	margin: 10px 0;
	border-radius: 8px;
	overflow: hidden;
}

.server-tabls-row .span-info-servers {
	border: 1px solid #3a89e8;
	border-radius: 4px;
	padding: 1px 10px;
	font-size: 12px;
	font-weight: 500;
	margin-left: 11px;
}

.server-tabls-row .server-order-button {
	background-color: #ffeb3b;
	color: #353e42;
	padding: 8px 30px;
	border-radius: 8px;
	font-size: 12px;
	font-weight: 500;
	letter-spacing: 1px;
	display: block;
	text-align: center;
	-ms-word-wrap: break-word;
	word-wrap: break-word;
	margin: -7px 0;
}

.server-tabls-row .server-order-button:hover {
	background-color: #efdd3b;
	color: #353e42;
	text-decoration: none;
}

.server-tabls-row.best-one:before {
	font-weight: 900;
	font-family: "Font Awesome 5 Free";
	content: "\f005";
	position: absolute;
	left: -19px;
	font-size: 35px;
	top: 0;
	bottom: 0;
	margin: auto;
	height: 50px;
	color: #ffeb3b;
}

.server-tabls-body {
	margin-bottom: 30px;
	margin-top: -15px;
}

.button-row {
	padding: 25px 0
}

.jango-color-btn {
	background: #fc68a6;
	border: #fc68a6;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
	text-transform: capitalize;
	color: #fff;
	padding: 15px 40px;
	font-size: 13px;
}

.jango-color-btn:hover {
	background: #da558d;
	color: #fff;
}

.features-box-style-two {
	position: relative;
	padding: 0 15px 0 70px;
	text-align: left;
	margin-bottom: 35px;
}

.features-box-style-two i {
	position: absolute;
	left: 0;
	top: 0px;
	line-height: 45px;
}

.features-box-style-two i:before {
	color: #248be6;
	font-size: 40px;
}

.features-box-style-two h5 {
	color: #363b40;
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
	font-size: 15px;
}

.features-box-style-two p {
	color: #6a7279;
	font-weight: 400;
	font-size: 14px;
}

.custom-slider-plan-form {
	border-right: 1px solid #f2f4f5;
	text-decoration: none !important;
	position: relative;
	text-align: center;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.07);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.07);
	border-radius: 6px;
	padding: 0 0 45px;
	margin-bottom: 50px;
	background: #fff;
}

@media (min-width:890px) {

	.custom-slider-plan-form:before,
	.custom-slider-plan-form:after {
			content: 'comming soon';
			background-size: 100%;
			position: absolute;
			width: 380px;
			height: 468px;
			top: 0;
			z-index: -1;
			line-height: 260px;
			margin: 0;
			color: #1e88e5;
			font-weight: bold;
			opacity: 0.8;
	}
}

.custom-slider-plan-form:before {
	background: url(../faq/img/plans/b_package-l.png) no-repeat;
	left: -320px;
}

.custom-slider-plan-form:after {
	background: url(../faq/img/plans/b_package-r.png) no-repeat;
	right: -320px;
}

.custom-slider-plan-form .custom-slider-plan-form-top-header {
	display: block;
	padding: 10px;
	margin-bottom: 30px;
	border-radius: 8px 8px 0 0;
	background: #1fa3ff;
	background: -moz-linear-gradient(left, #1fa3ff 0%, #12d7fa 27%, #a0fdcd 100%);
	background: -webkit-linear-gradient(left, #1fa3ff 0%, #12d7fa 27%, #a0fdcd 100%);
	background: linear-gradient(to right, #1fa3ff 0%, #12d7fa 27%, #a0fdcd 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1fa3ff', endColorstr='#a0fdcd', GradientType=1);
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 14px;
	color: #fff;
	letter-spacing: 0.5px;
}

.custom-slider-plan-form .stokage {
	display: block;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	font-weight: 400;
	font-size: 20px;
}

.custom-slider-plan-form .stokage b {
	margin-right: 5px;
}

.custom-slider-plan-form .price {
	display: block;
	color: #1e88e5;
	font-size: 20px;
	font-weight: 500;
	line-height: 40px;
	margin: 12px 0 0;
}

.custom-slider-plan-form .price b {
	font-size: 60px;
}

.custom-slider-plan-form .free-trial {
	display: block;
	color: #8a9399;
	font-size: 14px;
	line-height: 15px;
}

.custom-slider-plan-form .price-slider-input {
	margin: 40px 0;
	position: relative;
}

.custom-slider-plan-form .price-slider-input:after {
	content: '';
	position: absolute;
	height: 1px;
	width: 100%;
	background: #dde3e6;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: -1;
}

.custom-slider-plan-form .price-slider-input input[type=range] {
	-webkit-appearance: none;
	width: 75%;
}

.custom-slider-plan-form .price-slider-input input[type=range]:focus {
	outline: none;
}

.custom-slider-plan-form .price-slider-input input[type=range]::-webkit-slider-runnable-track {
	width: 100%;
	height: 30px;
	animate: 0.2s;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.12);
	background: #fff;
	border-radius: 50px;
}

.custom-slider-plan-form .price-slider-input input[type=range]::-webkit-slider-thumb {
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.12);
	height: 33px;
	width: 33px;
	border-radius: 50px;
	background: #8b80f7;
	background: linear-gradient(45deg, #8b80f7, #5d47f6);
	cursor: pointer;
	-webkit-appearance: none;
	margin-top: -2px;
}

.custom-slider-plan-form .price-slider-input input[type=range]::-moz-range-track {
	width: 100%;
	height: 30px;
	animate: 0.2s;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.12);
	background: #fff;
	border-radius: 50px;
}

.custom-slider-plan-form .price-slider-input input[type=range]::-moz-range-thumb {
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.12);
	height: 33px;
	width: 33px;
	border-radius: 50px;
	background: #8b80f7;
	background: linear-gradient(45deg, #8b80f7, #5d47f6);
	cursor: pointer;
	-webkit-appearance: none;
	margin-top: -2px;
}

.custom-slider-plan-form .price-slider-input input[type=range]::-ms-track {
	width: 100%;
	height: 30px;
	animate: 0.2s;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.12);
	background: #fff;
	border-radius: 50px;
}

.custom-slider-plan-form .price-slider-input input[type=range]::-ms-thumb {
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.12);
	height: 33px;
	width: 33px;
	border-radius: 50px;
	background: #8b80f7;
	background: linear-gradient(45deg, #8b80f7, #5d47f6);
	cursor: pointer;
	-webkit-appearance: none;
	margin-top: -2px;
}

.custom-slider-plan-form .price-slider-input input[type=range]:focus::-ms-fill-lower {
	background: #3071a9;
}

.custom-slider-plan-form .price-slider-input input[type=range]:focus::-ms-fill-upper {
	background: #367ebd;
}

.custom-slider-plan-form-body {
	padding-left: 0;
}

.custom-slider-plan-form-body li {
	list-style: none;
	margin: 0 0 12px 0;
	color: #747a84;
	font-size: 13px;
	font-family: 'Poppins', sans-serif;
}

.custom-slider-plan-form-body li strong {
	color: #373b42;
}

.custom-slider-plan-form-order-button {
	box-shadow: none;
	outline: none;
	position: absolute;
	bottom: -18px;
	left: 0;
	right: 0;
	margin: auto;
	width: 220px;
	background: #14d0fb;
	font-weight: 600;
	color: #fff;
	font-size: 14px;
	border-radius: 35px;
	padding: 9px 0;
}

.custom-slider-plan-form-order-button:hover {
	box-shadow: none;
	outline: none;
	color: #fff;
	background: #15bee4;
}

.host-pack-features {
	position: relative;
	padding-left: 80px;
	margin-bottom: 35px;
}

.host-pack-features i {
	width: 75px;
	height: 75px;
	display: block;
	text-align: center;
	background: url(../faq/img/bg/bulb/bulb-blue.png) no-repeat;
	background-size: 100%;
	color: #2bd8cb;
	font-size: 20px;
	font-weight: bold;
	line-height: 66px;
	position: absolute;
	padding-left: 9px;
	left: 0;
	margin-left: 0;
	top: -10px;
}

.host-pack-features h5 {
	display: block;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 14px;
	text-transform: uppercase;
	margin-bottom: 5px;
	padding-top: 5px;
}

.host-pack-features p {
	display: block;
	color: #8a9399;
	font-size: 13px;
	line-height: 15px;
}

.box-features-tree-container {
	padding: 25px 0;
	border: 1px solid #f0f5f7;
	border-radius: 10px;
}

.box-features-tree {
	padding: 20px 15px 20px 70px;
	position: relative;
	border-right: 1px solid #f0f5f7;
}

.box-features-tree i {
	position: absolute;
	left: 17px;
	font-size: 37px;
	top: 30px;
}

.box-features-tree-container .box-features-tree:nth-child(1) i {
	color: #6fbc9a;
}

.box-features-tree-container .box-features-tree:nth-child(2) i {
	color: #048adf;
}

.box-features-tree-container .box-features-tree:nth-child(3) i {
	color: #ffcd0d;
}

.box-features-tree-container .box-features-tree:nth-child(3) {
	border-right: 0;
}

.box-features-tree h5 {
	display: block;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 14px;
	text-transform: uppercase;
	margin-bottom: 5px;
	padding-top: 5px;
}

.box-features-tree p {
	display: block;
	color: #8a9399;
	font-size: 13px;
	line-height: 15px;
}

.table-dedicated-hosting-container {
	margin: 40px 0;
	background: #fff;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.07);
	padding: 20px;
	border: 0;
}

.table-dedicated-hosting-header {
	width: 100%;
}

.table-dedicated-hosting-header th {
	border-top: 0;
	padding: 35px 20px 0;
	vertical-align: top !important;
	border-bottom: 0 !important;
}

.table-dedicated-hosting-body td,
.table-dedicated-hosting-body th {
	vertical-align: middle !important;
	padding: 30px 15px;
	border-top: 1px solid #ebeff3;
}

.table-dedicated-hosting-body th b {
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 14px;
	display: block;
}

.table-striped tbody.table-dedicated-hosting-body tr:nth-of-type(odd) {
	background-color: rgba(0, 0, 0, 0.03);
}

.table-dedicated-hosting-header .plan-name-dedicated {
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 14px;
	display: block;
	text-align: center;
}

.table-dedicated-hosting-header .price-dedicated.second-pricing-table-price {
	margin: 0;
	text-align: center;
}

.table-dedicated-hosting-header .price-dedicated.second-pricing-table-price i {
	color: #1e88e5;
	font-size: 33px;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	text-align: center;
}

.table-dedicated-hosting-header .price-dedicated.second-pricing-table-price i span {
	font-size: 15px;
}

.plan-dedicated-config {
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 14px;
	display: block;
	text-align: center
}

.plan-dedicated-config i {
	font-size: 20px;
	color: #65b949;
}

.plan-dedicated-order-button {
	padding: 9px 0;
	background: #7ace5e;
	color: #fff;
	border-radius: 60px;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 12px;
	letter-spacing: 0.5px;
	width: 140px;
	display: block;
	text-align: center;
	margin: auto;
	text-decoration: none;
}

.plan-dedicated-order-button:hover {
	background: #6db953;
	color: #fff;
	text-decoration: none;
}

.domain-name-box {
	background: #fff;
	box-shadow: 0px 8px 19px 4px rgba(77, 77, 119, 0.12);
	padding: 12px 45px 12px 70px;
	border-radius: 15px;
	height: 84px;
	position: relative;
	margin: 0 20px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.domain-name-box .domain-img {
	height: 60px;
	position: relative;
	vertical-align: middle;
}

.domain-name-box .domain-img img {
	width: 65px;
	vertical-align: middle;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	max-height: 60px;
}

.domain-name-box .price {
	font-weight: bold;
	font-size: 13px;
	position: absolute;
	transform: rotate(-90deg);
	background: rgba(0, 188, 212, 0.2);
	letter-spacing: 1px;
	color: #83949c;
	width: 84px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	top: 25px;
	left: -24px;
	border-radius: 4px 4px 0 0;
}

.domain-name-box .features-domains {
	text-align: center;
	position: absolute;
	right: 0;
	width: 50px;
	top: 23px;
}

.domain-name-box .features-domains a img {
	width: 13px;
	cursor: pointer;
	opacity: 0.4;
	margin: auto;
	display: block;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	margin-bottom: 8px;
	transition: all 0.2s ease-in-out;
}

.domain-name-box .features-domains a:hover img {
	opacity: 0.7;
}

.table.pricing_table_domain {
	background: #fff;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.07);
	border-radius: 15px;
}

.table.pricing_table_domain thead th {
	vertical-align: bottom;
	border-bottom: 1px solid #dee2e6;
	padding: 23px 15px;
	border-top: 0;
	font-size: 14px;
}

.table.pricing_table_domain td a {
	display: block;
	text-align: center;
	padding: 10px 20px;
	background: #a358e0;
	background: -webkit-linear-gradient(left top, #616ad4, #a558e1);
	background: -o-linear-gradient(bottom right, #616ad4, #a558e1);
	background: -moz-linear-gradient(bottom right, #616ad4, #a558e1);
	background: linear-gradient(to bottom right, #5c6bd3, #a358e0);
	border-radius: 6px;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 11px;
}

.table.pricing_table_domain td,
.table.pricing_table_domain th {
	border-top: 1px solid #dee2e6;
	font-size: 14px;
	font-family: 'Poppins', sans-serif;
	vertical-align: middle;
}

.megssage-error {
	display: block;
	font-weight: 700;
	font-family: 'Poppins', sans-serif;
	font-size: 25px;
	margin-top: 25px;
	color: #3b414c;
	margin-bottom: 40px;
	letter-spacing: 1.5px;
}

.megssage-error small {
	display: block;
	font-weight: 100;
	font-size: 15px;
	letter-spacing: 0;
	color: #7c96a2;
	margin-top: 15px;
}

.btn-order-default-nuhost {
	padding: 13px 45px;
	color: #fff;
	font-weight: bold;
	font-size: 13px;
	background: #f06292;
	background-image: linear-gradient(to right, #f06292, #f062c8);
	border-radius: 20px;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 1px;
}

.btn-order-default-nuhost:hover {
	background-size: 175% 100%;
	color: #fff;
	outline: none;
	transition: background-size .2s ease-in-out, .2s box-shadow ease-in-out, .2s filter, .3s opacity;
	text-decoration: none;
}

.contact-page-form-send {
	background: #fff;
	border-radius: 10px;
	margin-top: 40px;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.07);
	padding: 50px 20px;
}

.contact-page-form-send h5 {
	font-family: 'Poppins', sans-serif;
	text-transform: capitalize;
	font-weight: bold;
	font-size: 20px;
	letter-spacing: 1px;
	margin-bottom: 30px;
	color: #2f3538;
	position: relative;
	padding-left: 15px;
	display: block;
}

.contact-page-form-send h5 span {
	display: block;
	font-size: 14px;
	font-weight: 300;
	margin-top: 5px;
	color: #5a5967;
	letter-spacing: 0;
}

.contact-page-form-send .field.input-field {
	position: relative;
	margin-top: 10px;
}

.contact-page-form-send .field.input-field input[type="email"],
.contact-page-form-send .field.input-field input[type="text"] {
	height: 45px;
	width: 100%;
	padding: 0 20px 0;
	font-weight: 100;
	font-size: 13px;
	outline: none;
	border-radius: 6px;
	border: 1px solid #eff0f1;
	margin-bottom: 10px;
}

.contact-page-form-send .field.input-field .input-group-prepend {
	position: absolute;
	left: 15px;
	top: 12px;
	font-size: 13px;
	font-weight: bold;
	opacity: 0.4;
	pointer-events: none;
}

.form-contain-home textarea {
	width: 100%;
	padding: 0 20px 0;
	font-weight: 100;
	font-size: 13px;
	outline: none;
	border-radius: 6px;
	border: 1px solid #eff0f1;
	min-height: 120px;
	outline: none;
	padding-top: 13px;
	margin-bottom: 20px;
}

#form-messages.error {
	padding: 13px 20px;
	background: #fddddb;
	color: #c5746f;
	font-size: 16px;
	border-radius: 3px;
	border-left: 3px solid #F44336;
	width: 100%;
	margin: 0 15px 30px;
}

#form-messages.success {
	padding: 13px 20px;
	background: #defddb;
	color: #6fc57e;
	font-size: 16px;
	border-radius: 3px;
	border-left: 3px solid #53f436;
	margin: 0 15px 30px;
}

.form-contain-home .btn-holder-contect button {
	width: 130px;
	height: 40px;
	border: 0;
	background: #00d463;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 3px;
	line-height: 40px;
	cursor: pointer;
	outline: none;
	border-radius: 50px;
	font-size: 13px;
	margin: 0 15px;
}

.contact-page-form-send .field.input-field i {
	position: absolute;
	top: 17px;
	right: 20px;
	color: #00BCD4;
	opacity: 0.6;
	font-size: 13px;
}

.contact-us-social-icons a {
	color: #fdfdfd;
	margin: 0 3px;
	width: 35px;
	height: 35px;
	display: inline-block;
	text-align: center;
	line-height: 35px;
	background: #161623;
	border-radius: 38px;
	font-size: 12px;
}

.contact-us-social-icons a.fb {
	background: #3c579a;
}

.contact-us-social-icons a.tw {
	background: #00acee;
}

.contact-us-social-icons a.yb {
	background: #dd4c39;
}

.immediate-help-center-title {
	font-weight: 700;
	font-size: 18px;
	margin-top: 40px;
	position: relative;
	line-height: 30px;
	margin-bottom: 20px;
}

.immediate-help-center-title:after {
	content: '';
	position: absolute;
	height: 3px;
	width: 20px;
	bottom: -10px;
	background: #d2dade;
	left: 0;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.immediate-help-center-title:hover::after {
	width: 50px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.immediate-help-center-text {
	font-size: 14.5px;
	line-height: 28px;
	color: #717679;
	margin-bottom: 20px;
}

.immediate-help-center-link {
	display: block;
	color: #03A9F4 !important;
	font-weight: bold;
	margin-top: 16px;
	font-size: 14px;
}

.our-help-center-tabs-nav a {
	text-decoration: none !important;
}

.support-contact-us-box {
	display: block;
	background: #5f52ac;
	background-image: linear-gradient(90deg, #606ad4 0%, #5e4494 100%);
	border-radius: 10px;
	margin-top: 40px;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.08);
	padding: 50px 20px;
	text-align: center;
	text-decoration: none !important;
	position: relative;
	overflow: hidden;
	opacity: 0.7;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.active .support-contact-us-box {
	opacity: 1;
}

.support-contact-us-box:hover {
	margin-top: 35px;
	opacity: 1;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.15);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.15);
	text-decoration: none !important;
}

.support-contact-us-box:before {
	content: '';
	position: absolute;
	background: url(../faq/img/counter/counter-bg-box.png) no-repeat !important;
	height: 100%;
	width: 100%;
	top: 0;
	z-index: 0;
	opacity: 0.3;
	left: 0;
}

.support-contact-us-box i:before {
	font-size: 60px;
	color: #a5abf7;
}

.support-contact-us-box h5 {
	margin: 0;
	text-align: center;
	font-size: 20px;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
	margin-top: 0px;
	color: #fff;
	text-transform: capitalize;
}

.support-contact-us-box p {
	color: #fff;
	font-size: 13px;
	font-weight: 300;
	line-height: 24px;
	text-align: center;
	margin-top: 6px;
	letter-spacing: 0.3px;
}

.active .support-contact-us-box i:before {
	color: #fff;
}

.help-center-box-popular {
	font-size: 13px;
	color: #a8aeb1;
	font-weight: bold;
}

.help-center-box-item {
	background: #fff;
	padding: 25px;
	border: 1px solid #e6e9ea;
	border-radius: 8px;
	margin-top: 20px;
	display: -ms-flexbox;
	display: flex;
	position: relative;
	overflow: hidden;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.help-center-box-item:hover {
	background: #f1fbfb;
}

.help-center-box-icon {
	height: 60px;
	width: 60px;
	padding: 0 15px;
	border-radius: 6px;
	float: left;
	text-align: center;
	line-height: 60px;
	background: #ffeb3b;
	font-size: 30px;
	color: #38444a;
	margin-right: 30px;
	position: relative;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.help-center-box-text span:first-child {
	text-align: left;
	font-size: 15px;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
	margin-top: 8px;
	display: block;
	color: #394246;
	text-transform: capitalize;
}

.help-center-box-text span:last-child {
	color: #586c75;
	font-size: 16px;
	font-weight: 300;
	line-height: 24px;
	text-align: left;
	margin-top: 0px;
	display: block;
}

.help-center-box-link {
	background: #6068d1;
	color: #fff !important;
	width: 40px;
	height: 40px;
	text-align: center;
	line-height: 40px;
	font-size: 15px;
	border-radius: 60px;
	top: 50%;
	transform: translateY(-50%);
	position: absolute;
	right: -60px;
}

.help-center-box-item:hover .help-center-box-link {
	right: 40px;
}

.no-cat-error {
	margin-bottom: 20px;
	font-weight: 700;
	font-size: 22px;
	margin-top: 45px;
}

.no-cat-error span {
	font-size: 14.5px;
	line-height: 25px;
	color: #a8aeb1;
	display: block;
	font-weight: 100;
	margin-top: 19px;
}

@media screen and (min-width:768px) {

	.top-header-nav-home .container,
	.the_breadcrumb_conatiner_page {
			padding-left: 0;
			padding-right: 0;
	}
}

.the_breadcrumb {
	padding: .75rem 1rem;
	margin-bottom: 3rem;
	list-style: none;
	background-color: #e9ecef;
	border-radius: .25rem;
	position: relative;
	margin-top: 10px;
	padding-left: 15px;
	color: #868e96;
	font-size: 13px;
	font-weight: 400;
}

.the_breadcrumb i {
	margin-right: 10px;
}

.the_breadcrumb a {
	color: #748086;
	font-weight: 400;
}

.help-center-title {
	margin-bottom: 12px;
	font-weight: 700;
	font-size: 22px;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
}

.help-center-title span {
	font-weight: bold;
	color: #fc5c7d;
	font-size: 16px;
	display: block;
	margin-bottom: 5px;
}

.help-center-text {
	color: #4f5165;
	font-size: 16px;
	font-weight: 300;
	line-height: 25px;
}

.privacy-content h4 {
	margin-bottom: 12px;
	font-weight: 600;
	font-size: 16px;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
	color: #495961;
}

.privacy-content p {
	color: #4f5165;
	font-size: 15px;
	font-weight: 300;
	line-height: 25px;
}

.nuhost-filter-container {
	position: relative;
	margin-bottom: 5px;
}

.nuhost-filter-container .fa-search {
	position: absolute;
	top: 17px;
	font-size: 18px;
	color: #a7afb3;
	left: 16px;
	z-index: 2;
}

#nuhost-filter-input {
	width: 100%;
	border: 0;
	height: 53px;
	padding-left: 50px;
	font-weight: bold;
	outline: none;
	font-size: 18px;
	background: #fff;
	box-shadow: 0 10px 100px 0 rgba(77, 77, 119, 0.08);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	border-radius: 10px;
	position: relative;
	z-index: 1;
}

.nuhost-filter-list-container {
	padding: 25px 18px;
	background: #fff;
	box-shadow: 0 10px 100px 0 rgba(77, 77, 119, 0.16);
	border-radius: 10px;
	position: relative;
	min-height: 402px;
}

#nuhost-filter-list {
	padding-left: 0;
}

#nuhost-filter-list li {
	list-style: none;
}

#nuhost-filter-list li a {
	width: 100%;
	display: block;
	padding: 13px 20px;
	border-radius: 10px;
	font-weight: bold;
	font-size: 15px;
	color: #5a6367;
	text-transform: capitalize;
	cursor: pointer;
}

#nuhost-filter-list li a:hover {
	background: #f0f3f5;
	text-decoration: none;
}

#nuhost-filter-list li a i {
	float: right;
	font-size: 22px;
}

.nuhost-filter-min-height {
	min-height: 402px;
	overflow-y: auto;
}

.filter-content-box {
	display: none;
	position: absolute;
	background: #fff;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	padding: 28px;
	border-radius: 10px;
}

.filter-content-close {
	color: #8b969c;
	border-radius: 36px;
	font-size: 13px;
	font-weight: bold;
	font-family: 'Heebo', sans-serif;
	text-transform: uppercase;
	letter-spacing: 1px;
	overflow: hidden;
	text-decoration: none !important;
	cursor: pointer;
	position: absolute;
	right: 30px;
	height: 19px;
	width: 19px;
	line-height: 39px;
	opacity: 0.6;
	text-align: center;
	z-index: 1;
}

.filter-content-close:hover {
	opacity: 1;
}

.filter-content-close .first-stright {
	width: 100%;
	height: 2px;
	background: #c0c6ca;
	position: absolute;
	border-radius: 10px;
	-ms-transform: translateY(-50%) rotate(-45deg);
	-webkit-transform: translateY(-50%) rotate(-45deg);
	top: 50%;
	transform: translateY(-50%) rotate(45deg);
	right: 0;
}

.filter-content-close .second-stright {
	width: 100%;
	height: 2px;
	background: #c0c6ca;
	position: absolute;
	border-radius: 10px;
	-ms-transform: translateY(-50%) rotate(-45deg);
	-webkit-transform: translateY(-50%) rotate(-45deg);
	transform: translateY(-50%) rotate(-45deg);
	top: 50%;
	left: 0;
}

.filter-content-box h5 {
	width: 100%;
	display: block;
	border-radius: 10px;
	font-weight: bold;
	font-size: 15px;
	color: #5a6367;
	text-transform: capitalize;
	cursor: pointer;
	padding-top: 1px;
	margin-bottom: 30px;
}

.filter-content-box p {
	font-size: 15px;
	line-height: 27px;
	margin-bottom: 15px;
	color: #93a0a7
}

.question-area-answer-body {
	margin-top: -10px;
}

.question-area-answer-body ul {
	counter-reset: my-qastions-counter;
}

.question-area-answer-body li {
	list-style: none;
	padding-bottom: 20px;
	border-bottom: 1px solid #ebeeef;
	position: relative;
	margin-top: 30px;
}

.question-area-answer-body li:last-child {
	border-bottom: 0;
}

.question-area-answer-body li:after {
	content: counter(my-qastions-counter);
	counter-increment: my-qastions-counter;
	position: absolute;
	left: -40px;
	top: -3px;
	height: 30px;
	width: 30px;
	background: #a1adb3;
	text-align: center;
	line-height: 30px;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	border-radius: 6px;
}

.question-area-answer-body li span {
	font-weight: bold;
	color: #05253a;
	font-size: 18px;
	margin-bottom: 9px;
	display: block;
}

.question-area-answer-body li p {
	font-size: 14px;
	line-height: 22px;
	color: #a8aeb1;
}

.min-height-auto {
	min-height: auto !important;
}

.auth-wrapper {
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	overflow: hidden;
	min-width: 100%;
	min-height: 100vh;
	background-color: #9683F8;
	background: -webkit-linear-gradient(left top, #9683FA, #ae9ffb);
	background: -o-linear-gradient(bottom right, #9683FA, #ae9ffb);
	background: -moz-linear-gradient(bottom right, #9683FA, #ae9ffb);
	background: linear-gradient(to bottom right, #9683FA, #ae9ffb);
}

.auth-wrapper .card {
	box-shadow: none;
	background: transparent;
	border: none;
	margin-bottom: 30px;
	-webkit-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}

.auth-wrapper .auth-content {
	position: relative;
	width: 390px;
	padding: 15px;
	z-index: 5;
}

.auth-wrapper .auth-bg .r {
	position: absolute;
	width: 300px;
	height: 300px;
	border-radius: 50%;
}

.auth-wrapper .auth-bg .r:nth-child(odd) {
	-webkit-animation: floating 7s infinite;
	animation: floating 7s infinite;
}

.auth-wrapper .auth-bg .r:nth-child(even) {
	-webkit-animation: floating 9s infinite;
	animation: floating 9s infinite;
}

.auth-wrapper .auth-bg .r.s:nth-child(2) {
	top: 150px;
	right: -150px;
	background: #04a9f5;
}

.auth-wrapper .auth-bg .r.s:nth-child(3) {
	left: -150px;
	bottom: 150px;
	background: #1de9b6;
}

.auth-wrapper .auth-bg .r:last-child {
	left: -100px;
	bottom: -100px;
	background: linear-gradient(-135deg, #899FD4 0%, #A389D4 100%);
}

@-webkit-keyframes floating {
	from {
			-webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
			transform: rotate(0deg) translate(-10px) rotate(0deg);
	}

	to {
			-webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
			transform: rotate(360deg) translate(-10px) rotate(-360deg);
	}
}

@keyframes floating {
	from {
			-webkit-transform: rotate(0deg) translate(-10px) rotate(0deg);
			transform: rotate(0deg) translate(-10px) rotate(0deg);
	}

	to {
			-webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
			transform: rotate(360deg) translate(-10px) rotate(-360deg);
	}
}

.auth-content .form-control {
	background: #ad9ff9;
	border: 0;
	color: #fff;
	font-size: 13px;
}

.auth-wrapper .auth-icon {
	font-size: 30px;
	margin-top: 40px;
}

.auth-wrapper .auth-icon:before {
	background: linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%);
	background-clip: text;
	text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.shadow-2 {
	-webkit-box-shadow: 0 10px 18px 0 rgba(62, 57, 107, 0.2);
	box-shadow: 0 10px 18px 0 rgba(62, 57, 107, 0.2);
}

.btn-primary:hover {
	color: #fff;
	background-color: #038fcf;
	border-color: #0386c3;
}

.btn-primary {
	color: #fff;
	background-color: #04a9f5;
	border-color: #04a9f5;
}

p.text-white-muted {
	font-size: 13px;
	color: #eeedf3;
}

.auth-wrapper a,
.auth-wrapper p>a {
	color: #fff;
	font-weight: 600;
}

.checkbox-custom {
	padding: 10px 0;
	min-height: auto;
	position: relative;
	margin-right: 5px;
}

.checkbox-custom input[type=checkbox] {
	margin: 0;
	display: none;
	width: 22px;
}

.checkbox-custom input[type=checkbox]+.cr {
	padding-left: 0;
}

.checkbox-custom .cr {
	cursor: pointer;
}

.checkbox-custom.checkbox-fill input[type=checkbox]:checked+.cr:before {
	opacity: 1;
	background: transparent;
	color: #1dd5d2;
	border-color: transparent;
}

.checkbox-custom.checkbox-fill input[type=checkbox]+.cr:before {
	opacity: 0;
	content: "\e840";
	font-size: 27px;
	background: transparent;
}

.checkbox-custom input[type=checkbox]:checked+.cr:before {
	background: #1dd5d2;
	border-color: #1dd5d2;
	color: #ffffff;
}

.checkbox-custom input[type=checkbox]+.cr:before {
	content: "\f0c8";
	width: 22px;
	height: 22px;
	display: inline-block;
	margin-right: 10px;
	border: 2px solid #e9eaec;
	border-radius: 3px;
	font-size: 15px;
	font-family: "Font Awesome 5 Free";
	font-weight: 900;
	line-height: 19px;
	vertical-align: bottom;
	text-align: center;
	background: #ffffff;
	color: transparent;
	cursor: pointer;
	-webkit-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.checkbox-custom input[type=checkbox]+.cr:after {
	content: "";
	width: 22.5px;
	height: 22.5px;
	display: inline-block;
	margin-right: 10px;
	border: 2px solid #e9eaec;
	border-radius: 2px;
	vertical-align: bottom;
	text-align: center;
	background: transparent;
	cursor: pointer;
	-webkit-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	position: absolute;
	top: 8.5px;
	left: 3px;
}

.auth-login-title {
	margin: 0;
	font-size: 26px;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
	margin-bottom: 15px;
	text-transform: capitalize;
	color: #fff;
}

.auth-login-title span {
	color: #e9e8ef;
	font-size: 14px;
	font-weight: 300;
	line-height: 23px;
	display: block;
	margin-top: 10px;
	letter-spacing: 0;
}

.auth-content-logo-header {
	display: block;
	text-align: center;
	margin-bottom: 60px;
}

.auth-content-logo-header img {
	width: 110px;
	opacity: 0.8;
}

.btn-login-auth {
	background-color: #57D38C;
	border-color: #57D38C;
	font-weight: bold;
	font-size: 14px;
	padding: 5px 30px;
	color: #fff;
}

.btn-login-auth:hover {
	background-color: #54c786;
	border-color: #54c786;
	color: #fff;
}

.demo-color-changer {
	display: inline-block;
	position: fixed;
	top: 100px;
	right: 8px;
	z-index: 9999;
}

.demo-color-changer .setting-button {
	background-color: rgba(89, 68, 168, 0.85);
	border-radius: 30px;
	margin-bottom: 8px;
	cursor: pointer;
	width: 38px;
	height: 38px;
	display: block;
	text-align: center;
	line-height: 38px;
	box-shadow: 5px 7px 12px 0 rgba(77, 77, 119, 0.1);
	color: #fff !important;
}

.demo-color-changer .setting-button:hover {
	background-color: rgba(89, 68, 168, 0.95);
}

.demo-color-changer-list {
	padding-left: 0;
	width: 38px;
	background: #fff;
	border-radius: 30px;
	box-shadow: 0px 7px 11px 1px rgba(77, 77, 119, 0.1);
	padding: 12px 4px;
	text-align: center;
	position: relative;
	opacity: 0;
	visibility: hidden;
	-webkit-transform: translateY(-16px);
	transform: translateY(-16px);
	transition: transform .32s cubic-bezier(0, 0, 0, 1), opacity 80ms;
	transition: transform .32s cubic-bezier(0, 0, 0, 1), opacity 80ms, -webkit-transform .32s cubic-bezier(0, 0, 0, 1);
}

.demo-color-changer-list.active {
	opacity: 1;
	visibility: visible;
	-webkit-transform: translateY(0);
	transform: translateY(0);
}

.demo-color-changer-list:after {
	content: '';
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 6px 4px 6px;
	border-color: transparent transparent #fff transparent;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	top: -2px;
}

.demo-color-changer-list li {
	list-style: none;
}

.demo-color-changer-list li a.bg-color {
	display: block;
	width: 22px;
	height: 22px;
	border-radius: 30px;
	margin: 0 auto 10px;
	cursor: pointer;
	border: 2px solid transparent;
	background: #2f3c42;
	opacity: 0.9;
	color: #fff;
	font-size: 14px;
	line-height: 13px;
}

.demo-color-changer-list li a.bg-color:hover {
	opacity: 1;
}

.demo-color-changer-list li a.bg-color.active {
	border: 2px solid #3F51B5;
}

.demo-color-changer-list li a.bg-color.color-1 {
	background: #5360ca;
	background: -moz-linear-gradient(top, #5360ca 0%, #a458e1 85%);
	background: -webkit-linear-gradient(top, #5360ca 0%, #a458e1 85%);
	background: linear-gradient(to bottom right, #5360ca 0%, #a458e1 85%);
	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#5360ca', endColorStr='#a458e1', GradientType=0);
	-ms-filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#5360ca', endColorStr='#a458e1', GradientType=0)";
}

.demo-color-changer-list li a.bg-color.color-2 {
	background: #05a761;
	background: -moz-linear-gradient(top, #05a761 0%, #2bcf88 85%);
	background: -webkit-linear-gradient(top, #05a761 0%, #2bcf88 85%);
	background: linear-gradient(to bottom right, #05a761, #2bcf88 85%);
	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#05a761', endColorStr='#2bcf88', GradientType=0);
	-ms-filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#05a761', endColorStr='#2bcf88', GradientType=0)";
}

.demo-color-changer-list li a.bg-color.color-3 {
	background: #03A9F4;
	background: -moz-linear-gradient(top, #03A9F4 0%, #00BCD4 85%);
	background: -webkit-linear-gradient(top, #03A9F4 0%, #00BCD4 85%);
	background: linear-gradient(to bottom right, #03A9F4 0%, #00BCD4 85%);
	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#03A9F4', endColorStr='#00BCD4', GradientType=0);
	-ms-filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#03A9F4', endColorStr='#00BCD4', GradientType=0)";
}

.demo-color-changer-list li a.bg-color.color-4 {
	background: #00BCD4;
	background: -moz-linear-gradient(top, #00BCD4 0%, #8BC34A 85%);
	background: -webkit-linear-gradient(top, #00BCD4 0%, #8BC34A 85%);
	background: linear-gradient(to bottom right, #00BCD4 0%, #8BC34A 85%);
	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#00BCD4', endColorStr='#8BC34A', GradientType=0);
	-ms-filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#00BCD4', endColorStr='#8BC34A', GradientType=0)";
}

body.first-color-styles #coodiv-header {
	background: #5360ca;
	background: -moz-linear-gradient(top, #5360ca 0%, #a458e1 85%);
	background: -webkit-linear-gradient(top, #5360ca 0%, #a458e1 85%);
	background: linear-gradient(to bottom right, #5360ca 0%, #a458e1 85%);
	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#5360ca', endColorStr='#a458e1', GradientType=0);
	-ms-filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#5360ca', endColorStr='#a458e1', GradientType=0)";
}

body.second-color-styles #coodiv-header {
	background: #05a761;
	background: -moz-linear-gradient(top, #05a761 0%, #2bcf88 85%);
	background: -webkit-linear-gradient(top, #05a761 0%, #2bcf88 85%);
	background: linear-gradient(to bottom right, #05a761, #2bcf88 85%);
	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#05a761', endColorStr='#2bcf88', GradientType=0);
	-ms-filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#05a761', endColorStr='#2bcf88', GradientType=0)";
}

body.third-color-styles #coodiv-header {
	background: #03A9F4;
	background: -moz-linear-gradient(top, #03A9F4 0%, #00BCD4 85%);
	background: -webkit-linear-gradient(top, #03A9F4 0%, #00BCD4 85%);
	background: linear-gradient(to bottom right, #03A9F4 0%, #00BCD4 85%);
	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#03A9F4', endColorStr='#00BCD4', GradientType=0);
	-ms-filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#03A9F4', endColorStr='#00BCD4', GradientType=0)";
}

body.fourth-color-styles #coodiv-header {
	background: #00BCD4;
	background: -moz-linear-gradient(top, #00BCD4 0%, #8BC34A 85%);
	background: -webkit-linear-gradient(top, #00BCD4 0%, #8BC34A 85%);
	background: linear-gradient(to bottom right, #00BCD4 0%, #8BC34A 85%);
	filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#00BCD4', endColorStr='#8BC34A', GradientType=0);
	-ms-filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#00BCD4', endColorStr='#8BC34A', GradientType=0)";
}

@media (min-width:800px) and (max-width:1027px) {
	.display-on-hover-box-container {
			width: 240px;
	}
}

@media (min-width:1027px) and (max-width:1117px) {
	.display-on-hover-box-container {
			width: 330px;
	}
}

@media (min-width:768px) and (max-width:1200px) {
	.hom-page-service-more-banner {
			display: none;
	}

	.hom-page-service-more-form input[type=email] {
			width: 100%;
	}

	.hom-page-service-more-form input[type=submit] {
			right: 3px;
	}

	.icon-hom-page-service-text {
			padding: 0 15px;
	}
}

@media (min-width:768px) {
	.navbar-toggle.offcanvas-toggle {
			display: none;
	}

	#mobile-form-contact-height {
			display: none;
	}

	.server-spects-for-mobile {
			display: none;
	}
}

@media (min-width:768px) and (max-width:870px) {

	.display-on-hover-box-container,
	.secure-img-footer-area {
			display: none;
	}

	.side-text-right-container {
			width: 100%;
			max-width: 100%;
			flex: 0 0 100%;
	}
}

@media (max-width:767px) {
	.second-pricing-table {
			margin-bottom: 40px;
	}

	.display-on-hover-box-container,
	.hom-page-service-more-banner,
	.nav--shamso .nav__item,
	.hosting-header-slider-cell-img {
			display: none;
	}

	.hom-page-service-more-form input[type=email] {
			width: 100%;
	}

	.hom-page-service-more-form input[type=submit] {
			right: 3px;
	}

	.hom-page-service-more {
			margin: 0 10px;
	}

	.header-user-info-coodiv {
			padding-left: 8px;
	}

	.header-user-info-coodiv li span {
			color: #2f3538;
	}

	.navbar-offcanvas {
			display: block !important;
			background: #151621;
			padding-top: 15px;
	}

	#coodiv-header #offcanvas-menu-home .nav-link {
			padding: .7rem .9rem;
			border-bottom: 1px solid rgba(29, 31, 45, 0.62);
			font-weight: 700;
			color: #edf1f3;
			font-size: 13px;
			line-height: 24px;
			position: relative;
	}

	#coodiv-navbar-header .navbar-offcanvas .dropdown-menu {
			display: none;
			position: relative;
			width: 100%;
			border: inherit;
			box-shadow: none;
			-webkit-transition: height 0.15s ease-in;
			transition: height 0.15s ease-in;
			margin-top: 0;
	}

	#coodiv-navbar-header .navbar-offcanvas .dropdown-menu.show {
			display: block;
	}

	.coodiv-dropdown-header:after {
			top: -9px;
	}

	#coodiv-navbar-header .coodiv-dropdown-megamnu {
			background: #fff !important;
	}

	.mega-menu-hosting-container {
			padding: 30px 40px;
	}

	.mega-menu-hosting-title {
			font-size: 20px;
	}

	.dropdown.megamenu.show a .megamenu-toggle {
			display: none;
	}

	.dropdown.megamenu {
			position: relative;
	}

	#coodiv-header .navbar .coodiv-dropdown-header:after {
			display: block !important;
	}

	.mega-menu-hosting-content {
			border-right: 0;
			border-bottom: 1px solid #f0f0f0;
			margin-top: 30px;
	}

	.map-gene-server-place img {
			opacity: 1;
			margin-bottom: 45px;
	}

	.server-places-spans b {
			background: transparent;
			color: transparent;
			width: 0;
			overflow: hidden;
			font-size: 0;
	}

	.server-places-spans b:before {
			display: none;
	}

	.server-places-spans span:after {
			left: -10px;
	}

	.server-places-spans small {
			left: -15px;
	}

	.free-trial-footer-links {
			margin-top: 40px;
	}

	.quiq-links-footer-ul {
			width: 50%;
			float: left;
			margin-bottom: 60px;
	}

	.footer-area-under [class^="col-md-"] {
			padding: 0 15px;
			margin: 16px 0 0;
	}

	.under-footer-ullist {
			margin-top: 20px;
			float: left;
			width: 50%;
	}

	.final-footer-area-text {
			text-align: center;
			width: 100%;
	}

	.footer-lang-changer {
			margin: auto;
			margin-top: 10px;
	}
}

@media (max-width:767px) {
	.table-dedicated-hosting-header #monthly-yearly-chenge {
			display: none;
	}

	.offcanvas-stop-scrolling {
			height: 100%;
			overflow: hidden
	}

	.navbar-default .navbar-offcanvas {
			background-color: #f8f8f8
	}

	.navbar-inverse .navbar-offcanvas {
			background-color: #222
	}

	.navbar-offcanvas {
			position: fixed;
			width: 100%;
			max-width: 250px;
			height: 100%;
			left: -250px;
			top: 0;
			padding-left: 15px;
			padding-right: 15px;
			z-index: 999;
			overflow: scroll;
			-webkit-overflow-scrolling: touch;
			-webkit-transition: all 0.15s ease-in;
			transition: all 0.15s ease-in
	}

	.navbar-offcanvas.in {
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.3)
	}

	.navbar-offcanvas.navbar-offcanvas-fade {
			opacity: 0
	}

	.navbar-offcanvas.navbar-offcanvas-fade.in {
			opacity: 1
	}

	.navbar-offcanvas.offcanvas-transform.in {
			-webkit-transform: translateX(250px);
			transform: translateX(250px)
	}

	.navbar-offcanvas.offcanvas-position.in {
			left: 0
	}

	.navbar-offcanvas.navbar-offcanvas-right {
			left: auto;
			right: -250px
	}

	.navbar-offcanvas.navbar-offcanvas-right.offcanvas-transform.in {
			-webkit-transform: translateX(-250px);
			transform: translateX(-250px)
	}

	.navbar-offcanvas.navbar-offcanvas-right.offcanvas-position.in {
			left: auto;
			right: 0
	}

	.navbar-offcanvas .dropdown.active .caret {
			border-top: 0;
			border-bottom: 4px solid
	}

	.navbar-offcanvas .dropdown-menu {
			position: relative;
			width: 100%;
			border: inherit;
			box-shadow: none;
			-webkit-transition: height 0.15s ease-in;
			transition: height 0.15s ease-in
	}

	.navbar-offcanvas .dropdown-menu.shown {
			display: block;
			margin-bottom: 10px
	}
}

.offcanvas-toggle .icon-bar {
	background: #000;
	-webkit-transition: all .25s ease-in-out;
	transition: all .25s ease-in-out
}

.offcanvas-toggle.is-open .icon-bar:nth-child(1) {
	-webkit-transform: rotate(45deg) translate(5px, 4px);
	transform: rotate(45deg) translate(5px, 4px)
}

.offcanvas-toggle.is-open .icon-bar:nth-child(2) {
	opacity: 0
}

.offcanvas-toggle.is-open .icon-bar:nth-child(3) {
	-webkit-transform: rotate(-45deg) translate(4px, -4px);
	transform: rotate(-45deg) translate(4px, -4px)
}

@media (max-width:767px) {
	.first-pricing-table-order {
			border-radius: 0 0 6px 0 !important;
	}

	.no-phone-display {
			display: none;
	}

	.question-area-page.mr-tp-120 {
			margin-top: 40px !important;
	}

	#monthly-yearly-chenge.style-two a:first-child .change-box {
			width: 140px;
	}

	#monthly-yearly-chenge.style-two a {
			width: 140px;
	}

	.our-services-carousel-container {
			position: relative;
			margin-top: 20px;
	}

	.side-text-right-container {
			padding: 0 35px;
	}

	.padding-0-100 {
			padding: 0 !important;
	}

	.about-us-img-section {
			margin-bottom: 40px;
	}

	.how-it-work-section:after {
			display: none;
	}

	.how-it-works-box {
			margin: 0px auto;
	}

	.carousel-nav-customers-text {
			display: none;
	}

	.breadcrumb-hosting-pages {
			display: none;
	}

	.custom-slider-plan-form {
			margin: 0 30px 40px;
	}

	#frequently-questions {
			margin: 0 40px;
	}

	.main-header-text-title {
			font-size: 28px;
	}

	.mob-display-none {
			display: none;
	}

	.contact-page-form-send {
			margin: 40px 5px 0;
	}

	.help-center-box-item {
			padding: 25px 15px;
	}

	.box-features-tree {
			border-right: 0;
	}

	.box-features-tree-container {
			padding: 10px 10px;
			margin: 5px;
	}

	.features-box-style-two {
			margin-bottom: 35px;
	}

	.hosting-plan-row {
			padding: 0 30px;
			margin: 0;
			margin-bottom: 30px;
	}

	.third-pricing-table.blur-plan {
			display: none;
	}

	.third-pricing-table {
			margin-bottom: 25px;
	}

	.side-text-right-title {
			font-size: 28px;
	}

	.side-text-right-text {
			font-size: 15px;
	}

	.benchmarks-link {
			display: none;
	}

	.server-tabls-head {
			display: none;
	}

	.server-tabls-row .server-order-button {
			margin-top: 20px;
	}

	.server-tabls-row .col-md-2 {
			margin-bottom: 10px;
	}

	.server-spects-for-mobile {
			font-size: 13px;
			margin-right: 15px;
			opacity: 0.6;
			min-width: 85px;
			display: -webkit-inline-box;
	}

	.first-pricing-table {
			margin: 0 15px 60px;
	}
}

@media (min-width:768px) and (max-width:870px) {
	.features-box-style-two {
			padding: 0 0px 0 60px;
	}

	.about-us-img-section {
			display: none;
	}

	.our-services-carousel-container {
			position: relative;
			margin-top: 50px;
			max-width: 100%;
			flex: 0 0 100%;
	}

	.hosting-plan-row {
			padding-left: 15px;
			max-width: 100%;
			flex: 0 0 100%;
			margin-bottom: 60px;
	}

	.server-tabls-row .col-md-2 {
			padding: 0 2px;
	}
}

@media (min-width:768px) and (max-width:992px) {
	.hosting-plan-row {
			padding-left: 15px;
			max-width: 100%;
			flex: 0 0 100%;
			margin-bottom: 60px;
	}

	.side-text-right-container.side-text-plan-hosting {
			max-width: 100%;
			flex: 0 0 100%;
	}
}

@media (max-width:425px) {
	.our-services-coresol-box {
			width: 230px;
	}
}


/* additional and updates styles */

.moon-edition .bg_overlay_header img {
	position: absolute;
	bottom: 0;
}

#coodiv-header.moon-edition {
	background: #48486b;
	background: -webkit-linear-gradient(left top, #79799c, #131327);
	background: -o-linear-gradient(bottom right, #79799c, #131327);
	background: -moz-linear-gradient(bottom right, #79799c, #131327);
	background: linear-gradient(to bottom right, #00bbb9, #0d1a1a);
}

#coodiv-header.moon-edition .main-header-text-title {
	text-align: center;
	color: #fff;
}

#coodiv-header.moon-edition .domain-search-header-pricetext {
	color: #feffff;
}

#coodiv-header.moon-edition .domain-search-header-pricetext b {
	color: #dee7ea;
}

.header-shapes.shape-01 {
	background: url(../faq/img/header/shapes/shape_01.png) no-repeat right bottom !important;
	position: absolute;
	width: 118px;
	height: 117px;
	left: 0;
	right: 0;
	margin: auto;
	top: 75%;
	transform: translateY(-50%);
}

.header-shapes.shape-02 {
	background: url(../faq/img/header/shapes/shape_02.png) no-repeat right bottom !important;
	position: absolute;
	width: 49px;
	height: 66px;
	left: -950px;
	right: 0;
	margin: auto;
	top: 29%;
	transform: translateY(-50%);
}

.header-shapes.shape-03 {
	background: url(../faq/img/header/shapes/shape_03.png) no-repeat right bottom !important;
	position: absolute;
	width: 115px;
	height: 89px;
	left: 0;
	right: -950px;
	margin: auto;
	top: 60%;
	transform: translateY(-50%);
	z-index: -1;
}

.futures-version-2-box {
	box-shadow: 0 10px 100px 0 rgba(77, 77, 119, 0.1);
	background: #fff;
	padding: 20px 30px;
	border-radius: 8px;
	border: 1px solid #eaeef1;
	margin-top: -20px;
	position: relative;
}

.futures-version-2-box:before {
	content: '';
	position: absolute;
	border-radius: 8px;
	bottom: 0;
	left: 0;
	right: 0;
	height: 0%;
	background: #f0f3f5;
	background: rgba(240, 243, 245, 0.5);
	z-index: 0;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.futures-version-2-box:hover::before {
	height: 100%;
}

.futures-version-2-box i {
	font-size: 40px;
	color: #333;
	margin-bottom: 4px;
	display: block;
	position: relative;
}

.futures-version-2 div:nth-child(1) .futures-version-2-box i {
	color: #83ecff;
}

.futures-version-2 div:nth-child(2) .futures-version-2-box i {
	color: #ff87a3;
}

.futures-version-2 div:nth-child(3) .futures-version-2-box i {
	color: #8BC34A;
}


.futures-version-2-box h5 {
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 17px;
	letter-spacing: -0.2px;
	position: relative;
}

.futures-version-2-box p {
	font-weight: 300;
	font-size: 13px;
	font-family: 'Poppins', sans-serif;
	line-height: 23px;
	position: relative;
}

.futures-version-2-box .free-badge {
	position: absolute;
	top: 15px;
	right: 15px;
	background: #ffeb3b;
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	text-transform: uppercase;
	padding: 5px 25px;
	font-size: 13px;
	transform: rotate(90deg);
	border-radius: 3px 0 0 6px;
}

.futures-version-2-box .free-badge b {
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 9px 0 0 6px;
	border-color: transparent transparent transparent #ecda34;
	position: absolute;
	top: -7px;
	left: 2px;
	transform: rotate(-90deg);
}

.futures-version-2-box .free-badge:after {
	content: '';
	width: 0;
	height: 0;
	position: absolute;
	border-style: solid;
	border-width: 0 14.5px 10.5px 0;
	border-color: transparent #ffeb3b transparent transparent;
	transform: rotate(-90deg);
	top: 3px;
	right: -12px;
}

.futures-version-2-box .free-badge:before {
	content: '';
	width: 0;
	height: 0;
	position: absolute;
	border-style: solid;
	border-width: 10.5px 14.5px 0 0;
	border-color: #ffeb3b transparent transparent transparent;
	transform: rotate(-90deg);
	bottom: 3px;
	right: -12px;
}

.futures-version-2-box .more-btn {
	background: #2fd5c9;
	border: 2px solid #2fd5c9;
	margin-top: 5px;
	display: inline-block;
	color: #fff;
	padding: 6px 15px;
	border-radius: 6px;
	font-size: 13px;
	letter-spacing: 0.5px;
	position: relative;
}

.futures-version-2-box .more-btn:hover {
	background: #2cc5ba;
	border: 2px solid #2cc5ba;
	color: #fff;
	text-decoration: none;
}

.video-section-text-place {
	background: #2196F3;
	color: #fff;
	padding: 65px 65px;
	border-radius: 8px;
	box-shadow: 0 0 23px 0 rgba(0, 0, 0, .09);
	position: relative;
	overflow: hidden;
}

.video-section-text-place h5 {
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.5px;
	font-weight: bold;
	font-size: 25px;
	margin-bottom: 20px;
	max-width: 75%;
}

.video-section-text-place .post-category {
	background: #ffeb3b;
	color: #333;
	padding: 4px 50px 4px 20px;
	font-weight: bold;
	font-size: 13px;
	position: absolute;
	top: 58px;
	right: 0px;
	border-radius: 4px 0 0 4px;
}

.video-section-text-place .post-date {
	position: absolute;
	top: 89px;
	right: 27px;
	font-size: 12px;
	font-weight: 100;
	letter-spacing: 0.5px;
}

.video-section-text-place p {
	font-family: 'Poppins', sans-serif;
	font-weight: 100;
	font-size: 13px;
	margin-top: 30px;
}

.video-section-text-place a {
	background: #45bdf3;
	color: #fff;
	padding: 8px 28px;
	font-size: 13px;
	display: table;
	text-decoration: none;
	border-radius: 3px;
	margin-top: 40px;
}

.video-section-text-place a:hover {
	background: #38a5d6;
	color: #fff;
	text-decoration: none;
}

.video-section-text-place .over-ole-grandient-orl {
	position: absolute;
	width: 80%;
	height: 80%;
	background: rgba(255, 255, 255, .12156862745098039);
	z-index: 0;
	pointer-events: none;
	border-radius: 100% 0 0 0;
	opacity: .6;
	bottom: 0;
	right: 0;
	-webkit-transition: all 0.4s cubic-bezier(0, 0.82, 1, 1.23);
	-moz-transition: all 0.4s cubic-bezier(0, 0.82, 1, 1.23);
	-o-transition: all 0.4s cubic-bezier(0, 0.82, 1, 1.23);
	-ms-transition: all 0.4s cubic-bezier(0, 0.82, 1, 1.23);
	transition: all 0.4s cubic-bezier(0, 0.82, 1, 1.23);
}


.video-section-text-place:hover .over-ole-grandient-orl {
	width: 85%;
	height: 85%;
}

.second-pricing-table.style-2.active:before {
	width: 400px;
	height: 400px;
	border-radius: 0;
	bottom: 0;
	right: 1px;
	z-index: 0;
	pointer-events: none;
	background: url(../faq/img/bg/plans.svg) no-repeat right bottom !important;
}

.second-pricing-table.style-2.active {
	background: #48486b;
	background: -webkit-linear-gradient(left top, #79799c, #131327);
	background: -o-linear-gradient(bottom right, #79799c, #131327);
	background: -moz-linear-gradient(bottom right, #79799c, #131327);
	background: linear-gradient(to bottom right, #79799c, #131327);
}

.second-pricing-table-button {
	position: relative;
}

.second-pricing-table.style-2.active .second-pricing-table-button:hover {
	background: #2fd5c9;
	border: 2px solid #2fd5c9;
	color: #fff;
}

.play-button-in-section.style-2 i {
	color: #329ef4;
}

.gray-bg {
	background: #f2f7fb;
}

.home-blog-te {
	margin-bottom: 30px;
	background: #fff;
	border-radius: 6px;
	border: 1px solid rgba(235, 238, 241, 0.57);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.home-blog-te .post-thumbn {
	position: relative;
	height: 200px;
	display: block;
	width: 100%;
	background-size: cover !important;
	border-radius: 6px 6px 0 0;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.home-blog-te .post-bodyn {
	padding: 20px;
}

.home-blog-te .post-bodyn h5 {
	font-family: 'Heebo', sans-serif;
	font-size: 21px;
	margin-bottom: 15px;
	color: #414a4e;
	font-weight: bold;
	line-height: 28px;
}

.home-blog-te .post-bodyn h5 a {
	color: #414a4e;
}

.home-blog-te .post-bodyn p {
	font-size: 13px;
	color: #95a8b1;
	font-family: 'Poppins', sans-serif;
	font-weight: 100;
	letter-spacing: 0.5px;
}

.home-blog-te .post-bodyn p i {
	margin-right: 5px;
}

.blog-items-home {
	margin-top: 100px;
}

.home-blog-te:hover {
	transform: scale(1.01);
	box-shadow: 0 5px 2px 0 rgba(0, 0, 0, 0.01);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.home-blog-te .post-bodyn h5 a:hover {
	color: #2196F3;
	text-decoration: none;
}

.moon-edition .menu-btn-span-bar span {
	background: #fff;
}

@media (max-width: 767px) {
	.moon-edition .header-user-info-coodiv li span {
			color: #fff;
	}

	.row.domain-search-row {
			margin: 0;
	}

	.row.domain-search-row #domain-search-header {
			padding-right: 0;
	}

	.futures-version-2 div .futures-version-2-box {
			margin-top: 0;
			margin-bottom: 30px;
	}

	.futures-version-2 div:first-child .futures-version-2-box {
			margin-top: -20px;
	}

	.banner-text-left p {
			display: none;
	}
}

.moon-edition .main-header-text-title .sub-page-breadcrumb {
	color: #ffffff;
}

.moon-edition.subpages-header-min .bg_overlay_header img {
	position: absolute;
	bottom: -100px;
}

#coodiv-header.moon-edition .navbar-brand img.b-logo {
	display: none;
}

#coodiv-header.moon-edition .top-header-fixed .navbar-brand img.w-logo {
	display: none;
}

#coodiv-header.moon-edition .top-header-fixed .navbar-brand img.b-logo {
	display: block;
}

#coodiv-header.moon-edition.subpages-header .col-md-5 .main-header-text-title {
	text-align: left;
	color: #fff;
}

.moon-edition .top-header-fixed .menu-btn-span-bar span {
	background: #2f3538;
}

.plan-ssl-special {
	border-right: 1px solid #f0f0f0;
	padding: 60px 10px 50px;
	text-align: center;
}

.row .plan-ssl-special:last-child {
	border-right: 0;
}

.plan-ssl-special .res-titl {
	color: #2d2f37;
	font-size: 26px;
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	width: 100%;
	margin: 0;
	padding-bottom: 16px;
	font-family: 'Poppins', sans-serif;
}

.plan-ssl-special .res-titl span {
	color: #2d2f37;
	font-size: 14px;
	font-weight: 300;
	text-transform: uppercase;
	width: 100%;
	display: block;
	margin-top: 0px;
	letter-spacing: 1px;
}

.plan-ssl-special .res-price {
	font-size: 46px;
	font-weight: 300;
	color: #0f68b8;
	text-align: center;
	width: 100%;
	display: block;
}

.plan-ssl-special .res-price i {
	font-size: 16px;
	margin-right: 5px;
	vertical-align: super;
}

.plan-ssl-special .res-sub-text {
	font-size: 13px;
	display: block;
	margin-top: -10px;
	padding-bottom: 30px;
	text-transform: uppercase;
	color: #8da1ab;
}

.plan-ssl-special .res-sub-text img {
	display: block;
	margin: auto;
	margin-top: 5px;
	width: 100px;
}

.plan-ssl-special .body-ress-v2 p {
	list-style: none;
	font-family: 'Poppins', sans-serif;
	font-size: 13px;
	color: #54565b;
	font-weight: 400;
	margin: 0;
	padding: 9px 0;
	text-align: center;
}

.ress-install-btn {
	display: block;
	border: 2px solid #0f68b8;
	margin: 30px 30px 0;
	color: #0f68b8;
	font-size: 13px;
	padding: 10px;
	text-decoration: none;
	border-radius: 6px;
}

.ress-install-btn:hover {
	background: #0f68b8;
	color: #fff;
	text-decoration: none;
}

.ress-buy-btn {
	display: block;
	border: 2px solid #5470f3;
	margin: 30px 30px 0;
	background: #5470f3;
	color: #fff;
	font-size: 13px;
	padding: 10px;
	text-decoration: none;
	border-radius: 6px;
}

.ress-buy-btn:hover {
	border: 2px solid #455ccc;
	background: #455ccc;
	color: #fff;
	text-decoration: none;
}

.side-text-right-image img {
	width: 100%;
	max-width: 300px;
	margin: auto;
}

.box-features-new {
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 7px 17px rgba(0, 0, 0, 0.08);
	border: 1px solid #ecf2f5;
	margin-top: 70px;
	border-radius: 6px;
}

.box-features-new .box-features-item {
	text-align: center;
	padding: 80px 50px;
	border-right: 1px solid #edeff1;
	background: #fff;
}

.box-features-new.version-two .box-features-item {
	padding: 50px 30px;
}

.box-features-new .box-features-item .box-header {
	position: relative;
}

.box-features-new .box-features-item .box-header:after {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	z-index: 0;
	border-radius: 100%;
	pointer-events: none;
	background: #83ecff;
	left: -30px;
	right: 0;
	margin: auto;
	top: -15px;
}

.box-features-new .box-features-item:nth-child(2) .box-header:after {
	background: #41f8e2;
}

.box-features-new .box-features-item:nth-child(3) .box-header:after {
	background: #ff87a3;
}

.box-features-new .box-features-item:nth-child(4) .box-header:after {
	background: #ffeb3b;
}

.box-features-new .box-features-item:last-child {
	border-right: 0;
}

.box-features-new .box-features-item img {
	width: 40px;
	height: 40px;
	position: relative;
	z-index: 1;
}

.box-features-new .box-features-item h5 {
	color: #2d2f37;
	font-size: 16px;
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	padding-bottom: 16px;
	font-family: 'Poppins', sans-serif;
	max-width: 180px;
	margin: auto;
	margin-top: 18px;
}

.box-features-new .box-features-item p {
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
	color: #54565b;
	font-weight: 400;
	margin: 0;
	padding: 9px 0;
	text-align: center;
	line-height: 27px;
}

.box-features-new .box-features-item a {
	display: block;
	border: 2px solid #0f68b8;
	color: #0f68b8;
	font-size: 13px;
	padding: 10px;
	text-decoration: none;
	border-radius: 6px;
	margin-top: 30px;
}

.box-features-new .box-features-item a:hover {
	background: #0f68b8;
	color: #fff;
}

@media (max-width:769px) {
	.plan-ssl-special {
		border-right: 0;
		border-bottom: 1px solid #d9e1e4;
	}

	.box-features-new {
		margin-right: 5px;
		margin-left: 5px;
	}

	.box-features-new .box-features-item {
		border-right: 0;
		border-bottom: 1px solid #dfe8ec;
	}
}

@media (max-width:868px) {
	.side-text-right-image img {
		display: none;
	}
}

.voice-plan-container {
	margin-bottom: 65px;
}

.voice-plan-box {
	box-shadow: 0 10px 100px 0 rgba(77, 77, 119, 0.1);
	background: #fff;
	padding: 20px 30px;
	border-radius: 8px;
	border: 1px solid #eaeef1;
	margin-top: -20px;
	position: relative;
}

.voice-plan-box i {
	font-size: 40px;
	color: #333;
	margin-bottom: 20px;
	display: block;
	position: relative;
}

.voice-plan-container div:nth-child(1) .voice-plan-box i {
	color: #83ecff;
}

.voice-plan-container div:nth-child(2) .voice-plan-box i {
	color: #ff87a3;
}

.voice-plan-container div:nth-child(3) .voice-plan-box i {
	color: #8BC34A;
}

.voice-plan-box h5 {
	color: #2d2f37;
	font-size: 17px;
	font-weight: 700;
	text-transform: uppercase;
	margin: 0;
	padding-bottom: 16px;
	font-family: 'Poppins', sans-serif;
	width: 60%;
}

.voice-plan-box h5 span {
	color: #2d2f37;
	font-size: 12px;
	font-weight: 300;
	text-transform: uppercase;
	width: 100%;
	display: block;
	margin-top: 4px;
	letter-spacing: 1px;
}

.voice-plan-box p {
	list-style: none;
	font-family: 'Poppins', sans-serif;
	font-size: 13px;
	color: #54565b;
	font-weight: 400;
	margin: 0;
	padding: 4px 0;
}

.voice-plan-box .more-btn {
	background: #fff;
	border: 2px solid #2fd5c9;
	margin-top: 25px;
	color: #2fd5c9;
	padding: 12px 15px;
	border-radius: 6px;
	font-size: 13px;
	letter-spacing: 0.5px;
	position: relative;
	display: block;
	cursor: pointer;
	text-align: center;
}

.voice-plan-box .more-btn:hover {
	background: #2fd5c9;
	border: 2px solid #2fd5c9;
	color: #fff;
	text-decoration: none;
}

.voice-plan-price {
	position: absolute;
	font-size: 30px;
	font-weight: 300;
	color: #00BCD4;
	text-align: center;
	top: 20px;
	right: 15px;
	background: rgba(239, 245, 244, 0.43);
	padding: 15px;
	border-radius: 5px;
	padding-bottom: 0;
}

.voice-plan-price label {
	font-size: 14px;
}

.voice-plan-price b {
	font-size: 13px;
	display: block;
	margin: 0px -15px 0;
	background: #00BCD4;
	color: #fff;
	font-weight: bold;
	letter-spacing: 1px;
	padding: 3px 0;
}

@media (max-width:769px) {
	.voice-plan-box {
			margin-top: 0;
			margin-bottom: 30px;
	}
}

.games-server-plan {
	background: #1c1c25;
	border-radius: 16px;
	padding: 50px 15px;
	margin: 0 5px;
}

.games-server-plan img {
	margin: auto;
	display: block;
	width: 140px;
}

.games-server-plan h5 {
	color: #fff;
	font-size: 21px;
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	width: 100%;
	margin: 0;
	padding-bottom: 16px;
	font-family: 'Poppins', sans-serif;
	margin-top: -30px;
}

.games-server-plan h5 span {
	color: #fff;
	font-size: 14px;
	font-weight: 300;
	text-transform: uppercase;
	width: 100%;
	display: block;
	margin-top: 0px;
	letter-spacing: 1px;
}

.games-server-plan h5 span b {
	border-bottom: 1px solid #ffeb3b;
}

.games-server-plan ul {
	text-align: center;
	padding: 0;
	margin-top: 15px;
}

.games-server-plan ul li {
	list-style: none;
	font-family: 'Poppins', sans-serif;
	font-size: 13px;
	color: #fff;
	font-weight: 400;
	margin: 0;
	padding: 5px 0;
	text-align: center;
}

.games-server-plan ul li b {
	border-bottom: 1px solid #ffeb3b;
}

.games-server-plan .order-botton {
	display: inline-block;
	background: #FFEB3B;
	padding: 5px 30px;
	border-radius: 20px;
	font-size: 13px;
	font-weight: 600;
	color: #363542;
	position: relative;
	cursor: pointer;
}

.games-server-plan .order-botton:hover {
	background: #e0ce31;
	color: #363542;
	text-decoration: none;
}

.games-server-plan-footer {
	margin: 35px 20px 0;
}

.games-server-plan-footer span {
	color: #fff;
	font-size: 18px;
}

.games-server-plan-footer span b {
	font-size: 11px;
}

@media (max-width:769px) {
	.plan-ssl-special {
			border-right: 0;
			border-bottom: 1px solid #d9e1e4;
	}

	.games-server-plan {
			padding: 50px 10px;
			margin-bottom: 30px;
	}
}

.time-line-status {
	margin: 60px 0;
	min-height: 100px;
	border-left: 1px solid #dce2e4;
	position: relative;
}

.tt-time-status {
	position: relative;
	padding-left: 30px;
	padding-bottom: 50px;
	margin-bottom: 100px;
}

.tt-time-status:after {
	content: '';
	position: absolute;
	top: 6px;
	left: -8px;
	background: #fec573;
	width: 14px;
	height: 14px;
	border-radius: 25px;
}

.tt-time-status .title-status {
	background: #00BCD4;
	color: #fff;
	font-weight: bold;
	padding: 6px 22px;
	font-size: 13px;
	border-radius: 20px;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.tt-time-status .title-status-h5 {
	font-size: 19px;
	margin-top: 1px;
}

.tt-time-status .title-status-h5 span {
	font-size: 13px;
	margin-left: 18px;
	color: #c0c7cc;
	float: right;
	background: #f0f2f3;
	padding: 7px 15px;
	border-radius: 4px;
}

.tt-time-status .title-status-p {
	margin-top: 30px;
	font-size: 14px;
	line-height: 27px;
	color: #949ca0;
	margin-bottom: 50px;
}

.status-div-optionel {
	width: 100%;
	margin: 10px 10px 10px 27px;
	background: #f1f4f5;
	padding: 13px;
	border-radius: 5px;
	font-size: 14px;
	color: #879094;
}

.status-div-optionel p {
	margin: 0;
}

.status-div-optionel p>b {
	color: #585f63;
	margin-right: 11px;
}

.status-div-optionel span {
	float: right;
	font-weight: bold;
}

.status-div-optionel.chck span {
	color: #8BC34A;
}

.status-div-optionel.non-chck span {
	color: #ea7575;
}

.status-div-optionel.non span {
	color: #cdd9de;
}

.status-div-optionel span>i {
	font-size: 16px;
	margin-left: 4px;
}

.coodiv-dropdown-megamnu.default-megamenu {
	background: #fff !important;
	padding: 15px 25px;
}

.coodiv-dropdown-megamnu .megamenu-items-header a {
	padding: 30px 25px 20px;
	display: block;
	border-radius: 6px;
	box-shadow: 0 10px 100px 0 rgba(77, 77, 119, 0.08);
	text-align: center;
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 13px;
	letter-spacing: -0.2px;
	position: relative;
	color: #324148;
	text-transform: unset;
	text-decoration: none;
	max-width: 240px;
	margin-top: 10px;
}

.coodiv-dropdown-megamnu .megamenu-items-header a h5 {
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 17px;
	letter-spacing: -0.2px;
	position: relative;
	margin-top: 12px;
}

.coodiv-dropdown-megamnu .megamenu-items-header a p {
	font-weight: 300;
	font-size: 13px;
	font-family: 'Poppins', sans-serif;
	line-height: 23px;
	position: relative;
}

.coodiv-dropdown-megamnu .megamenu-items-header a i {
	background: #ff3946;
	height: 70px;
	width: 70px;
	display: block;
	margin: auto;
	border-radius: 60px;
	line-height: 70px;
	text-align: center;
	font-size: 30px;
	color: #fff;
	position: relative;
}

.coodiv-dropdown-megamnu .megamenu-items-header a i:before {
	font-size: 30px;
	margin: auto !important;
}

.coodiv-dropdown-megamnu .megamenu-items-header a i:after {
	content: '';
	position: absolute;
	width: 60px;
	height: 60px;
	left: 0;
	right: 0;
	top: 5px;
	opacity: 0.7;
	margin: auto;
	border-radius: 60px;
	background: #ff3946;
	z-index: -1;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.coodiv-dropdown-megamnu .megamenu-items-header a:hover i:after {
	animation: scaleIn 1s ease-out;
}

@keyframes scaleIn {
	0% {
			transform: scale(1, 1);
			opacity: 0.7;
	}

	40% {
			transform: scale(1.5, 1.5);
			opacity: 0.3;
	}

	100% {
			transform: scale(1, 1);
			opacity: 0;
	}
}

.coodiv-dropdown-megamnu .megamenu-items-header div:nth-child(2) a i,
.coodiv-dropdown-megamnu .megamenu-items-header div:nth-child(2) a i:after {
	background: #9757f6;
}

.coodiv-dropdown-megamnu .megamenu-items-header div:nth-child(3) a i,
.coodiv-dropdown-megamnu .megamenu-items-header div:nth-child(3) a i:after {
	background: #08e7ba;
}

.coodiv-dropdown-megamnu .megamenu-items-header div:nth-child(4) a i,
.coodiv-dropdown-megamnu .megamenu-items-header div:nth-child(4) a i:after {
	background: #ff930d;
}

@media (max-width:769px) {
	.coodiv-dropdown-megamnu .megamenu-items-header.d-flex {
			display: block !important;
	}

	.coodiv-dropdown-megamnu .megamenu-items-header .p-2 {
			width: 100%;
			display: block;
	}

	.coodiv-dropdown-megamnu.default-megamenu {
			padding: 5px 5px;
	}
}

.cpanel-resslers-plan {
	margin-top: 30px;
}

.cpanel-resslers-plan .cpanel-resslers-plan-header {
	background: #4ab3d2;
	text-align: center;
	padding: 25px 0;
}

.cpanel-resslers-plan .cpanel-resslers-plan-header.t {
	background: #f1592a;
}

.cpanel-resslers-plan .cpanel-resslers-plan-header i {
	font-size: 80px;
	color: #fff;
	line-height: 30px;
}

.cpanel-resslers-plan .cpanel-resslers-plan-header h5 {
	color: #fff;
	font-size: 13px;
	margin-top: -15px;
	margin-bottom: 10px;
	opacity: 0.8;
}

.cpanel-resslers-plan .cpanel-resslers-plan-header span {
	font-size: 30px;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
}

.cpanel-resslers-plan .cpanel-resslers-plan-header span i {
	font-size: 13px;
}

.cpanel-resslers-plan .cpanel-resslers-plan-body {
	padding: 25px 0;
	background: #f6f8f9;
}

.cpanel-resslers-plan .cpanel-resslers-plan-body p {
	margin-bottom: 10px;
	font-size: 14px;
	font-weight: 500;
	border-radius: 30px;
	color: #4c5b63;
	text-align: center;
}

.cpanel-resslers-plan .cpanel-resslers-plan-footer {
	background: #f6f8f9;
	text-align: center;
	padding-bottom: 25px;
}

.cpanel-resslers-plan .cpanel-resslers-plan-footer a {
	background: #4ab3d2;
	padding: 9px 15px;
	color: #fff;
	font-weight: 500;
	text-transform: uppercase;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 1px;
	font-size: 13px;
	position: relative;
	text-decoration: none !important;
	border-radius: 8px;
}

.cpanel-resslers-plan .cpanel-resslers-plan-footer.t a {
	background: #f1592a;
}

.cpanel-resslers-plan .cpanel-resslers-plan-footer a:hover {
	background: #43a9c7;
	color: #fff;
	text-decoration: none !important;
}

.cpanel-resslers-plan .cpanel-resslers-plan-footer.t a:hover {
	background: #e45528;
}

.coodiv-dropdown-megamnu.no-img-bg {
	background: #fff !important;
}

.dropdown-menu.coodiv-dropdown-header.web-menu {
	min-width: 22rem;
}

@media (max-width: 767px) {
	.dropdown-menu.coodiv-dropdown-header.web-menu {
			min-width: 100%;
	}
}

.web-hosting-menu-header {
	padding: 0;
}

.web-hosting-menu-header li {
	padding: 10px 20px 11px 75px;
	list-style: none;
	position: relative;
	border-bottom: 1px solid #f3f7f9;
}

.web-hosting-menu-header li:last-child {
	border-bottom: 0;
}

.web-hosting-menu-header li a {
	display: block;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 14px;
	text-transform: capitalize;
	margin-bottom: 5px;
	color: #333;
	text-decoration: none !important;
}

.web-hosting-menu-header li a span {
	display: block;
	font-size: 12px;
	color: #8fa2ab;
	font-weight: 500;
}

.web-hosting-menu-header li i {
	color: #6747c7;
	background: #f8f8f8;
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 50px;
	border-radius: 60px;
	font-size: 17px;
	margin-right: 10px;
	position: absolute;
	left: 12px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.web-hosting-menu-header li:hover i {
	color: #f8f8f8;
	background: #6747c7;
}

.form-group.custom-slider-plan-form-contry {
	margin: -35px auto 30px;
	position: relative;
	width: 75%;
}

.form-group.custom-slider-plan-form-contry:before {
	font-family: "Font Awesome 5 Free";
	font-weight: 900;
	content: "\f57e";
	position: absolute;
	left: 10px;
	top: 3px;
	color: #7665f7;
}

.form-group.custom-slider-plan-form-contry .form-control {
	-webkit-appearance: none;
	border-radius: 45px;
	-webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.08);
	box-shadow: 0 3px 27px rgba(0, 0, 0, 0.12);
	border: 0;
	padding: 0 20px 0 35px;
	height: 32px;
	font-weight: bold;
	font-size: 13px;
}

.form-group.custom-slider-plan-form-contry.server-special {
	margin: -20px auto 30px;
}

.form-group.custom-slider-plan-form-contry.server-special:before {
	content: "\f17a";
	font-family: "Font Awesome 5 Brands";
	font-weight: 100;
}

.domain-price-header {
	display: inline-block;
	position: relative;
	z-index: 2;
	color: #fff;
	margin-top: 20px;
}

.domain-price-header a {
	float: left;
	border-right: 1px solid rgba(255, 255, 255, 0.09);
	padding: 2px 14px 0;
}

.domain-price-header a:last-child {
	border-right: 0;
}

.domain-price-header a img {
	width: 50px;
}

.domain-price-header a span {
	font-size: 13px;
}

#coodiv-navbar-header .navbar-nav .nav-link .nav-new-tag {
	background: #FFEB3B;
	padding: 0px 8px;
	border-radius: 20px;
	font-size: 10px;
	font-weight: 600;
	color: #363542;
	position: absolute;
	line-height: 15px;
	top: 0;
	right: -3px;
}

@media (max-width: 767px) {
	#coodiv-navbar-header .navbar-nav .nav-link .nav-new-tag {
			top: 16px;
			right: 6px;
	}

	.tt-time-status .title-status-h5 {
			margin-top: 15px;
	}

	.tt-time-status .title-status-h5 span {
			display: block;
			float: none;
			margin-left: 0;
			margin-top: 11px;
			width: fit-content;
	}

	.status-div-optionel {
			margin-left: 0;
	}

	.status-div-optionel span {
			float: none;
			display: block;
			margin-top: 10px;
			text-align: right;
	}
}

.video-bg-nuhost-header {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	overflow: hidden;
	pointer-events: none;
}

#video_cover {
	position: absolute;
	width: 100%;
	height: 100%;
	background: url(../faq/media/fallback.jpg) no-repeat;
	background-size: cover;
	background-position: center;
	opacity: 0.8;
}

.video-bg-nuhost-header video {
	position: absolute;
	top: 0;
	bottom: 0;
	opacity: 0.8;
	left: 0;
	right: 0;
	width: 100%;
}

.video-bg-nuhost-header-bg {
	background: #4e1a2d;
	background: -webkit-linear-gradient(left top, #4e1a2d, #430717);
	background: -o-linear-gradient(bottom right, #4e1a2d, #430717);
	background: -moz-linear-gradient(bottom right, #4e1a2d, #430717);
	background: linear-gradient(to bottom right, #4e1a2d, #430717);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	position: absolute;
	opacity: 0.5;
}

table#prices tbody tr.feature td span.yes,
table#prices tbody tr.feature td span.no {
	display: inline-block;
	width: 18px;
	height: 18px;
	background-repeat: no-repeat;
}

table#prices tbody tr.feature td span.no {
	background-image: url(../faq/img/cross-grey.png);
}

table#prices tbody tr.feature td span.yes {
	background-image: url(../faq/img/v-blue.png);
}

table#prices thead tr th.checklist>p {
	font-size: 13px;
	color: #bfc7ca;
	font-weight: 300;
	text-align: center;
}

table#prices thead tr th.checklist>p .soft-type {
	font-size: 15px;
	text-transform: uppercase;
	color: #333;
	font-weight: bold;
	font-family: 'Poppins', sans-serif;
	display: block;
}

table#prices thead tr th.checklist>p .price {
	text-transform: uppercase;
	color: #673AB7;
	font-weight: bold;
	font-size: 50px;
}

table#prices thead tr th.checklist>p .currency {
	font-size: 13px;
}

table#prices thead tr th.checklist .call-to-action>a {
	display: block;
	text-align: center;
	font-size: 10px;
	color: #b8c7ce;
}

table#prices thead tr th.checklist .call-to-action a.btn-empty {
	display: block;
	background: transparent;
	border: 2px solid #673ab7;
	color: #673ab7;
	padding: 9px 0;
	text-align: center;
	margin-top: 4px;
	border-radius: 2px;
	font-size: 13px;
	text-decoration: none;
}

table#prices thead tr th.checklist .call-to-action a.btn-empty:hover {
	background: #673ab7 !important;
	color: #fff;
	text-decoration: none;
}

table#prices thead th.checklist {
	width: 18.75%;
	background: white;
	font-weight: normal;
	border: 1px solid #ecf1f3;
	padding: 20px;
	border-bottom: 0;
}

table#prices thead tr.price-dsc th.checklist.left {
	border: 1px solid #ecf1f3;
	padding: 20px;
	border-bottom: 0;
}

table#prices tbody tr.feature td {
	color: #666F77;
	font-size: 16px;
	line-height: 22px;
	padding: 18px 0;
	border-right: 1px solid #ecf1f3;
	border-left: 1px solid #ecf1f3;
	border-bottom: 1px solid #ecf1f3;
	text-align: center;
}

table#prices tbody tr.feature td span {
	font-size: 11px;
	font-weight: 500;
}

table#prices tbody tr.feature td span.name {
	font-size: 12px;
	color: #232c30;
	font-weight: bold;
	text-align: left;
}

table#prices thead tr.price-dsc th.features.banner {
	padding: 0;
	background-image: linear-gradient(90deg, #606ad4 0%, #5e4494 100%);
}

table#prices thead tr.price-dsc th.features.banner .banner-servers-box {
	box-shadow: none;
	height: auto;
}

.custom-slider-plan-form.without-blur-plans:before,
.custom-slider-plan-form.without-blur-plans:after {
	display: none;
}

.see-level {
	background: #FFEB3B;
	font-family: 'Poppins', sans-serif;
	font-size: 11px;
	padding: 5px;
	display: block;
	border-radius: 23px;
	margin: 10px;
}

.audio-level {
	font-family: 'Poppins', sans-serif;
	font-size: 11px;
	padding: 5px;
	display: block;
	border-radius: 23px;
	margin: 10px;
}

.audio-level.one {
	background: #FF9800;
}

.audio-level.two {
	background: #FFC107;
}

.audio-level.tree {
	background: #8BC34A;
}

@media (min-width:768px) and (max-width:991px) {
	.navbar-brand {
			margin-right: 0.5rem;
	}

	.main-header-coodiv-s.container {
    max-width: 768px;
	}

	#coodiv-navbar-header .navbar-nav .nav-link {
    font-size: 12px;
    padding-right: .5rem;
    padding-left: .5rem;
	}
}

.bg-img-header-new-moon {
	background-image: url(../faq/img/header/h_bg_02.svg);
	background-repeat: no-repeat;
	position: absolute;
	left: 0;
	right: 0;
	background-size: cover;
	bottom: -115px;
	top: 0;
}


</style>
