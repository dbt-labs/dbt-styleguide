---
title: Colors
type: styles
section: color
order: 100
class: bg-silver-light
---

<h6>Hues</h6>

<div class="swatches clear text-small">
	<div class="swatch card text-blue">
		<div class="swatch-color"></div>
		<div class="swatch-variations">
			<span class="bg-blue-darkest"></span>
			<span class="bg-blue-darker"></span>
			<span class="bg-blue-dark"></span>
			<span class="bg-blue"></span>
			<span class="bg-blue-light"></span>
			<span class="bg-blue-lighter"></span>
			<span class="bg-blue-lightest"></span>
			<span class="bg-blue-highlight"></span>
		</div>
		<div class="swatch-label">blue</div>
	</div>
	<div class="swatch card text-green">
		<div class="swatch-color"></div>
		<div class="swatch-variations">
			<span class="bg-green-darkest"></span>
			<span class="bg-green-darker"></span>
			<span class="bg-green-dark"></span>
			<span class="bg-green"></span>
			<span class="bg-green-light"></span>
			<span class="bg-green-lighter"></span>
			<span class="bg-green-lightest"></span>
			<span class="bg-green-highlight"></span>
		</div>
		<div class="swatch-label">green</div>
	</div>
	<div class="swatch card text-yellow">
		<div class="swatch-color"></div>
		<div class="swatch-variations">
			<span class="bg-yellow-darkest"></span>
			<span class="bg-yellow-darker"></span>
			<span class="bg-yellow-dark"></span>
			<span class="bg-yellow"></span>
			<span class="bg-yellow-light"></span>
			<span class="bg-yellow-lighter"></span>
			<span class="bg-yellow-lightest"></span>
			<span class="bg-yellow-highlight"></span>
		</div>
		<div class="swatch-label">yellow</div>
	</div>
	<div class="swatch card text-orange">
		<div class="swatch-color"></div>
		<div class="swatch-variations">
			<span class="bg-orange-darkest"></span>
			<span class="bg-orange-darker"></span>
			<span class="bg-orange-dark"></span>
			<span class="bg-orange"></span>
			<span class="bg-orange-light"></span>
			<span class="bg-orange-lighter"></span>
			<span class="bg-orange-lightest"></span>
			<span class="bg-orange-highlight"></span>
		</div>
		<div class="swatch-label">orange/red</div>
	</div>
	<div class="swatch card text-purple">
		<div class="swatch-color"></div>
		<div class="swatch-variations">
			<span class="bg-purple-darkest"></span>
			<span class="bg-purple-darker"></span>
			<span class="bg-purple-dark"></span>
			<span class="bg-purple"></span>
			<span class="bg-purple-light"></span>
			<span class="bg-purple-lighter"></span>
			<span class="bg-purple-lightest"></span>
			<span class="bg-purple-highlight"></span>
		</div>
		<div class="swatch-label">purple</div>
	</div>
</div>

<h6>Neutrals</h6>

<div class="swatches clear text-small">
	<div class="swatch card text-navy">
		<div class="swatch-color"></div>
		<div class="swatch-variations">
			<span class="bg-navy-darkest"></span>
			<span class="bg-navy-darker"></span>
			<span class="bg-navy-dark"></span>
			<span class="bg-navy"></span>
			<span class="bg-navy-light"></span>
			<span class="bg-navy-lighter"></span>
			<span class="bg-navy-lightest"></span>
			<span class="bg-navy-highlight"></span>
		</div>
		<div class="swatch-label">navy</div>
	</div>
	<div class="swatch card text-gray">
		<div class="swatch-color"></div>
		<div class="swatch-variations">
			<span class="bg-gray-darkest"></span>
			<span class="bg-gray-darker"></span>
			<span class="bg-gray-dark"></span>
			<span class="bg-gray"></span>
			<span class="bg-gray-light"></span>
			<span class="bg-gray-lighter"></span>
			<span class="bg-gray-lightest"></span>
			<span class="bg-gray-highlight"></span>
		</div>
		<div class="swatch-label">gray</div>
	</div>
	<div class="swatch card text-silver">
		<div class="swatch-color"></div>
		<div class="swatch-variations">
			<span class="bg-silver-darkest"></span>
			<span class="bg-silver-darker"></span>
			<span class="bg-silver-dark"></span>
			<span class="bg-silver"></span>
			<span class="bg-silver-light"></span>
		</div>
		<div class="swatch-label text-silver-darkest">silver</div>
	</div>
</div>


<style>
	.swatches { margin: 0 -10px; }
	.swatch { float: left; width: calc(16.666% - 20px); min-width: 80px; margin: 10px; overflow: hidden; }
	.swatch-color { background-color: currentColor; }
	.swatch-color:before { content: ''; display: block; padding-bottom: 100%; }
	.swatch-label { padding: 6px 15px 8px; font-weight: bold; }
	.swatch-variations { display: table; table-layout: fixed; width: 101%; height: 16px; }
	.swatch-variations span { display: table-cell; }
</style>