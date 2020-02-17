<template>
	<div class="overflow-x-auto overflow-x-hidden md:h-screen md:overflow-hidden app">
		<header class="relative z-50 flex flex-row items-center justify-between dark:bg-black sm:flex-col">
			<Logo />
			<NavPrimary />
			<NavMobile />
			<NavTertiary />
		</header>
		<aside class="relative z-40 flex items-center dark:bg-gray-900 sm:justify-center" v-if="sidebar">
			<slot name="secondary-nav" />
		</aside>
		<main class="relative z-30 w-full overflow-x-hidden overflow-y-auto md:h-screen">
			<div v-if="top">
				<slot name="top-shelf" />
			</div>
			<div class="px-5 pt-4 lg:max-w-screen-lg md:px-10 md:pt-6">
				<slot />
			</div>
			<div v-if="bottom">
				<slot name="bottom-shelf" />
			</div>
		</main>
	</div>
</template>

<script>
import NavPrimary from "~/components/NavPrimary.vue";
import NavMobile from "~/components/NavMobile.vue";
import NavTertiary from "~/components/NavTertiary.vue";
import Logo from "~/components/Logo.vue";

export default {
  	props: [
		'sidebar',
		'top',
		'bottom'
	],
	components: {
		NavPrimary,
		NavMobile,
		NavTertiary,
		NavMobile,
		Logo
	}
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
header {
	background: #1C2F39;
}
aside {
	background: #f3f7f9;
}
main {
	background: #fff;
}
main a:not(.image):not(.link) {
    text-decoration: none;
    font-weight: 700;
    background-color: rgba(255,200,0,.25);
    padding: 0 5px;
}
.home main svg path,
.about main svg path {
    fill: #1C2F39;
}
:root [data-theme=dark].home main svg path,
:root [data-theme=dark].about main svg path {
	fill: #ffc800;
}

:root [data-theme=dark] header {
	background: rgba(0, 0, 0, 0.95);
	border-right: 1px solid #000;
}
:root [data-theme=dark] aside {
	@apply bg-gray-900;
}
:root [data-theme=dark] main h1 {
	@apply text-white;
	text-shadow: 1px 1px 0 rgba(0,0,0,1);
}
:root [data-theme=dark] main h2 {
	@apply text-gray-100;
}
:root [data-theme=dark] main h3 {
	@apply text-white;
}
:root [data-theme=dark] main h4 {
	@apply text-white;
}
:root [data-theme=dark] main h5 {
	@apply text-white;
}
:root [data-theme=dark] main p,
:root [data-theme=dark] main li {
	color: #888;
}
:root [data-theme=dark] main h1 + p {
	color: #eee;
}
:root [data-theme=dark] main a:not(.image):not(.link) {
	@apply text-black bg-accent;
}
:root [data-theme=dark] .secondary a {
	@apply text-gray-500;
}
:root [data-theme=dark] .secondary .active span {
	@apply text-white;
	text-shadow: 1px 1px 0 #000;
    font-weight: bold;
}
:root [data-theme=dark] .secondary .active:before {
	@apply bg-accent;
}
:root [data-theme=dark] .form-input,
:root [data-theme=dark] .form-select,
:root [data-theme=dark] textarea,
:root [data-theme=dark] .form-textarea {
	@apply bg-gray-900 border-black;
}
:root [data-theme=dark] .form-input:focus,
:root [data-theme=dark]  .form-textarea:focus {
    color: #000;
}
:root [data-theme=dark] label {
	@apply text-white
}
:root [data-theme=dark] label span {
	@apply text-gray-300
}
:root [data-theme=dark] form button[type="submit"] {
	@apply bg-accent text-black;
}
:root [data-theme=dark] .form-input:focus,
:root [data-theme=dark] .form-textarea:focus {
	@apply border-accent bg-white;
}
:root [data-theme=dark] .card-image {
	filter: saturate(0);
	opacity: .5;
	transition: all .3s ease-out;
	border-bottom: 0;
}
:root [data-theme=dark].work .card-image:hover {
	filter: saturate(1);
	opacity: 1;
}
:root [data-theme=dark] main {
	filter:drop-shadow(0 0 14px black);
	background-color: rgb(19, 19, 19);;
}
:root [data-theme=dark] {
    background-image: url(/topography.svg);
    background-repeat: no-repeat;
    background-size: cover;
}
:root [data-theme=dark] header {
    background-color: rgba(0, 0, 0, 0.95);
}
:root [data-theme=dark] aside {
    background-color: rgba(9, 9, 9, 0.95);
}
:root [data-theme=dark] .secondary img {
    filter: invert(1);
}
:root [data-theme=dark] .mobile-links {
	background: #fff;
}
:root [data-theme=dark] .app .mobile-links a {
	color: #111;
	border-color: #ddd;
}
:root [data-theme=dark] main a:not(.image):not(.link) {
    text-transform: uppercase;
    font-size: 12px;
    padding: 5px 8px;
	border-radius: 2px;
	background: #000;
	color: #fff;
	border-bottom: 2px solid #ffc800;
}
:root [data-theme=dark] .secondary a:not(.active):hover:after {
	color: #fff;
}

.app .mobile-links .active {
	color: #000;
	font-weight: bold;
}
nav svg {
    width: 16px;
}
nav svg path,
nav svg circle {
    stroke: rgba(255,255,255,0.7);
}
header nav a {
	@apply transition-opacity duration-100 ease-out;
	color: rgba(255,255,255,0.7);
}
.primary a {
	@apply mx-auto;
}
nav > a.active {
	color: #fff;
}
.secondary > a.active,
.secondary > a:hover{
	color: #1C2F39;
}
nav a.active svg path,
nav a.active svg circle {
    stroke: #ffc800;
}
main h1,
main h2,
main h3,
main h4,
main h5 {
	color: #1C2F39;
}
main h1 {
	@apply font-bold text-3xl mb-2 leading-snug;
}
main h2 {
	@apply font-bold text-2xl mb-2;
}
main h3 {
	@apply font-bold text-xl mb-2;
}
main h1 + p {
	@apply text-lg mb-5;
}
main p {
	@apply mb-5;
}
main ul,
main ol {
	@apply mb-5 ml-5
}
main li {
	@apply mb-3;
	list-style: circle;
}
/* main pre {
	white-space: pre-wrap;
} */
.secondary a.active span {
    color: #000;
}

.secondary a {
    color: #000000a1;
}
a:focus,
.form-textarea:focus,
.form-radio:focus,
button:focus,
.form-input:focus {
    outline: none;
    box-shadow: 0 0 0 3px #f6ad5529;
    border-color: #ffc800;
	border-style: solid;
}
button:focus {
    box-shadow: 0 0 0 3px #ffc800;
}
.contact form {
	margin-bottom: 3rem;
}
.contact form input,
.contact form textarea {
	background: #fafafa;
	border: 1px dashed #ddd;
}
.contact-method-buttons button {
	margin-left: 5px;
}
.contact-method-buttons button:focus {
	border-radius: 50%;
	border-style: solid;
    box-shadow: 0 0 0 3px #ffc800;
}
@media ( min-width: 1024px ) {
	header {
		height: 100vh;
	}
	main h1 {
		@apply text-5xl mb-2;
	}
	main h2 {
		@apply text-4xl mb-2;
	}
	main h3 {
		@apply text-3xl mb-2;
	}
	main h1 + p {
		@apply text-2xl mb-5;
	}
	main p {
		@apply text-xl mb-5;
	}
}

.logo svg,
header nav a {
    transition: all .3s ease-out;
}
.logo:focus,
nav a:focus {
 outline: none transparent;
 box-shadow: 0 0;
}
nav a:focus svg path,
nav a:focus svg circle {
    stroke: #fff         ;
}
nav a:focus svg {
    transform: scale(1.2);
}
.logo:focus svg {
    transform: scale(.8);
}

.secondary {
	@apply flex flex-col items-start;
}
.secondary a.active:before {
	left: 0;
}
.secondary a:after {
	display: none;
}

.grid .card-image,
.grid .browser-content{
	max-height: 200px;
	overflow: hidden;
	border-bottom: 1px solid #eee;
}

@media (min-width: 640px ) {
	.primary a:not(:last-of-type) {
		@apply mb-5;
	}
}

.secondary .active {
	position: relative;
	width: auto;
	opacity: 1;
	z-index: 9;
}
.secondary .active:before {
	content: "";
	height: 3px;
	background: #ffc800af;
	width: 80%;
	display: block;
	position: absolute;
	left: 2px;
	bottom: 3px;
	z-index: -1;
	transform: skewX(-30deg);
}
	
@media (min-width: 768px ) {
	.flex > header {
		width: 80px;
	}
	.secondary a span {
		position: relative;
		z-index: 1;
	}
	header nav a {
		position: relative;
		z-index: 99;
	}
	header nav a::after {
		position: absolute;
		font-size: 14px;
		font-weight: 700;
		top: -6px;
		left: 48px;
		padding: 8px;
		white-space: pre;
		z-index: -1;
		color: #000;
		background-color: #ffc800;
		z-index: 99999;
		border-radius: 0 4px 4px 0;
		border-left: 3px solid;
		transition: all .3s ease-out;
		opacity: 0;
        content: attr(tooltip);
	  }
      header nav a:hover::after {
        opacity: 1;
      }

	/*  Sub Navigation  */
	.secondary a {
		@apply font-medium leading-loose;
	}
	.secondary a:after {
		display: inline-block;
		content: "→";
		transition: color 0.3s ease-out;
		color: transparent;
	}
	aside a:hover:after {
		color: #000;
	}
}

@media (min-width: 1024px ) {
	.tertiary {
		bottom: 30px;
		position: relative;
	}
	.flex > aside {
		width: 250px;
	}
	.about main > div > div {
		padding-bottom: 30px;
	}
}

@media ( max-width: 640px ) {
	.logo {
		margin-left: -3px;
	}
	.logo svg {
		width: 30px;
		height: 30px; 
	}
	header {
		padding: 10px;
		align-items: center;
    	justify-content: flex-start;
	}
	.mobile {
		margin: 0;
		width: 100%;
		margin-right: 65px;
	}
	.tertiary {
		position: absolute;
		right: 0;
		width: 65px;
	}
	.tertiary .connect {
		display: none;
	}
	.mobile > a {
		color: rgba(255,255,255,0.7);
		line-height: 2;
	}
	.mobile > a.active {
		color: #ffc800;
	}
	.mobile > a:not(:last-of-type) {
		margin-left: .8rem;
	}
	.secondary {
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		overflow-x: auto;
	}
	.secondary a {
		margin: 0 .5rem 0 .7rem;
		padding: .5rem 0;
		white-space: pre;
	}
	.secondary a:last-of-type {
		margin-right: 1rem;
	}
	.secondary a.active:before {
		height: 3px;
		left: 0;
		width: 100%;
		bottom: 11px;
		transform: skewX(-30deg);
	}
	.secondary a:after {
		display: none;
	}
}
@media ( min-width: 640px ) and ( max-width: 768px ) {
	div.app {
		display: grid;
		grid-template-columns: 80px 1fr;
		grid-template-rows: 50px 1fr;
		grid-template-areas:
		"header aside aside"
		"header main main";
	}
	.app header {
		grid-area: header;
		grid-column: 80px;
		grid-row: 80px;
		height: 100vh;
	}
	.app aside {
		grid-area: aside;
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.app .secondary {
		flex-direction: row;
		justify-content: flex-start;
		padding: 0!important;
	}
	.app .secondary a {
		height: 50px;
		line-height: 50px;
		margin-left: 1.2rem;
	}
	.app .secondary .active {
		height: 48px;
		line-height: 48px;
		/* margin-left: 1.5rem; */
	}
	.app main {
		grid-area: main;
	}
}
@media ( min-width: 768px ) {
	.app {
		display: grid;
		grid-template-columns: 80px 200px 1fr;
	}

}

.cards {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	margin-top: 1.5rem;
}
.cards .item {
  margin-bottom: 1rem;
}
.cards .card-image {
    height: 200px;
	overflow: hidden;
	margin-bottom: 1rem;
	display: block;
}
.cards  a.image {
	padding: 0;
	display: block;
}
@media ( max-width: 480px ) {
  .cards .browser-content {
    height: 200px;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .cards  h2,
  .cards  h2 + p {
      margin-bottom: 1rem;
  }
  	.mobile > a:last-of-type {
		margin-left: auto;
		margin: 0 .7rem 0 .3rem;
		display: flex;
    	align-items: center;	
	}
	.mobile a.tablet {
		display: none;
	}
}
@media ( min-width: 481px ) {
	.mobile > a:last-of-type {
		display: none;
	}
}
@media ( min-width: 768px ) {
	.cards {
		grid-gap: 40px;
  		margin-top: 2rem;
	}
	.app .tertiary a svg circle,
	.app .tertiary a svg path {
		stroke: #fff;
	}
}

@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)  {
	.primary a {
		padding: 5px;
	}
	header nav a svg {
		width: 22px;
	}
	.secondary a:after {
		display: none;
	}
	header nav a::after {
		left: 55px;
	}
}
</style>