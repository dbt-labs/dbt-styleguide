---
title: Arrows
type: styles
section: icons
requirements: "arrows"
order: 99
---

###### Arrows

These are inline symbols intended to decorate other elements. These symbols inherit the font-size and font-weight of their parent element, and are used exclusively with just CSS and :before :after pseudo-elements.

###### Basic Arrows

<span class="arrow-up"></span>
<span class="arrow-right"></span>
<span class="arrow-down"></span>
<span class="arrow-left"></span>
<span class="arrow-close"></span>
<span class="arrow-vertical"></span>
<span class="arrow-horizontal"></span>
<span class="arrow-check"></span>
<span class="arrow-moveup"></span>
<span class="arrow-moveright"></span>
<span class="arrow-movedown"></span>
<span class="arrow-moveleft"></span>

###### Inherited Font Weight (bold)

<div class="text-bold">
	<span class="arrow-up"></span>
	<span class="arrow-right"></span>
	<span class="arrow-down"></span>
	<span class="arrow-left"></span>
	<span class="arrow-close"></span>
	<span class="arrow-vertical"></span>
	<span class="arrow-horizontal"></span>
	<span class="arrow-check"></span>
	<span class="arrow-moveup"></span>
	<span class="arrow-moveright"></span>
	<span class="arrow-movedown"></span>
	<span class="arrow-moveleft"></span>
</div>

###### Large Variants

<span class="arrow-up arrow-large"></span>
<span class="arrow-right arrow-large"></span>
<span class="arrow-down arrow-large"></span>
<span class="arrow-left arrow-large"></span>
<span class="arrow-close arrow-large"></span>

###### Solid Arrows

<span class="arrow-north"></span>
<span class="arrow-east"></span>
<span class="arrow-south"></span>
<span class="arrow-west"></span>

###### Weights and Positions

<a href="#" class="btn btn-lg btn-default arrow-left arrow-before">Regular</a>
<a href="#" class="btn btn-lg btn-default arrow-right text-bold">Bold</a>

<a href="#" class="btn btn-lg btn-primary arrow-left arrow-before">Regular</a>
<a href="#" class="btn btn-lg btn-primary arrow-right text-bold">Bold</a>

###### Arrow Weights

<div class="btn-group">
	<button type="button" class="btn btn-default arrow-left arrow-large"></button>
	<button type="button" class="btn btn-default arrow-down">3 of 5</button>
	<button type="button" class="btn btn-default arrow-right arrow-large"></button>
</div>

###### SCSS Mixin

	.element {
		@include arrow(check,before);
	}

<span class="btn btn-default arrow-mixin">Check</span>

