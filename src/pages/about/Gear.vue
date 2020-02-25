<template>
	<Layout :sidebar="true" :top="false" :bottom="true">
		<h1>Gear List</h1>
		<p>For anyone interested, here is my current gear list.</p>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
                <h2>Hardware</h2>
                <ul>
                    <li><strong>Dell XPS 15" </strong>My primary work station</li>
                    <li><strong>Apple Macbook Pro 15" <sup>'12</sup></strong> My old mac, now mostly used for testing</li>
                    <li><strong>Apple Macbook Pro 15" <sup>'18</sup> </strong> My new mac that crapped the bed</li>
                    <li><strong>Huawei P20 Pro </strong>Primary phone / camera</li>
                    <li><strong>Huawei Mate Tablet </strong>Testing / reading</li>
                    <li><strong>Apple iPad (2nd Gen) - </strong>Testing</li>
                    <li><strong>Apple iPhone SE </strong>Testing</li>
                </ul>
            </div>
            <div>
                <h2>Mobile Office</h2>
                <ul>
                    <li><strong>LifePower Power Backup </strong>Solar powered backup power on the go</li>
                    <li><strong>HyperJuice </strong>USB C powered backup system for the new MBP</li>
                    <li><strong>Logitec Web Cam </strong>Skype and Slack meetings occasionally</li>
                    <li><strong>External DVD Writer </strong>Used to burn physical backups mostly</li>
                    <li><strong>Western Digital 4tb USB Drive </strong> External backups for my files, media and Photos</li>
                </ul>
            </div>
            <div>
                <h2>Photo / Film</h2>
                <ul>
                    <li><strong>Sony A200 DSLR </strong>Mostly nature shooting</li>
                    <li><strong>GoPro 7 Hero </strong>Filming action shots outdoors and the occasional live band</li>
                    <li><strong>300mm Telephoto Zoom Lens </strong>To get closer to my subject</li>
                    <li><strong>Macro Lens </strong>To get up close and personal</li>
                    <li><strong>External Mic </strong>Better audio for screencasts and live music</li>
                </ul>
            </div>
        </div>
		<template slot="secondary-nav">
			<NavAbout />
		</template>
	</Layout>
</template>

<script>
import NavAbout from "~/components/NavAbout.vue";

export default {
	components: {
		NavAbout
	},
	metaInfo: {
		title: "",
		bodyAttrs: {
			class: "gear"
		}
	}
};
</script>
<style src="../../css/pages/gear.css" />