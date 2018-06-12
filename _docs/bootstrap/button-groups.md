---
title: Button Groups
type: bootstrap
section: forms
---

<h6>Standard Groups</h6>

<div class="btn-group" >
	<button type="button" class="btn btn-default">Left</button>
	<button type="button" class="btn btn-default">Middle</button>
	<button type="button" class="btn btn-default">Right</button>
</div>

<h6>Toolbars</h6>

<div class="btn-toolbar" >
	<div class="btn-group" >
		<button type="button" class="btn btn-default">1</button>
		<button type="button" class="btn btn-default">2</button>
		<button type="button" class="btn btn-default">3</button>
	</div>
	<div class="btn-group" >
		<button type="button" class="btn btn-default">4</button>
		<button type="button" class="btn btn-default">5</button>
	</div>
	<div class="btn-group" >
		<button type="button" class="btn btn-default">6</button>
	</div>
</div>

<h6>Alternate Sizes</h6>

<div class="btn-toolbar" >
	<div class="btn-group" >
		<button type="button" class="btn btn-default btn-lg">Large</button>
		<button type="button" class="btn btn-default btn-lg">Buttons</button>
	</div>
	<div class="btn-group" >
		<button type="button" class="btn btn-default">Normal</button>
		<button type="button" class="btn btn-default">Buttons</button>
	</div>
	<div class="btn-group btn-group-sm" >
		<button type="button" class="btn btn-default btn-sm">Small</button>
		<button type="button" class="btn btn-default btn-sm">Buttons</button>
	</div>
</div>

<h6>Complex Groups</h6>

<div class="btn-group" >
	<button type="button" class="btn btn-default">1</button>
	<button type="button" class="btn btn-default">2</button>
	<div class="btn-group dropdown" >
		<button type="button" class="btn btn-default arrow-down" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Dropdown
		</button>
		<ul class="dropdown-menu">
			<li><a href="#">Dropdown link</a></li>
			<li><a href="#">Dropdown link</a></li>
		</ul>
	</div>
</div>