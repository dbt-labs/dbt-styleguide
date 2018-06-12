---
title: Cards
type: components
section: blocks
class: bg-silver-light
---

<h6>Basic Card</h6>

<div class="card">
	<div class="card-header">
		<h4>Card Title</h4>
	</div>
	<div class="card-body card-flush-top">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
	</div>
</div>


<h6>Card Toolbar</h6>

<div class="card">
	<div class="card-header">
		<h4>Card Title</h4>
	</div>
	<div class="card-body card-flush-top">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
	</div>
	<div class="card-footer card-toolbar">
		<div class="card-control">
			<a href="#" class="btn btn-primary card-action">Save</a>
		</div>
		<div class="card-control dropdown">
			<a href="#" class="btn btn-default" data-toggle="dropdown">More <span class="caret"></span></a>
			<ul class="dropdown-menu">
				<li><a href="#">Action 1</a></li>
				<li><a href="#">Action 2</a></li>
				<li><a href="#">Action 3</a></li>
			</ul>
		</div>
	</div>
</div>

<h6>Card Form</h6>

<form class="card">
	<div class="card-body card-form">
		<div class="card-formrow">
			<div class="card-control condensed">
				<label class="form-control">Name</label>
			</div>
			<div class="card-control">
				<input type="email" class="form-control" placeholder="Joshua Smith" />
			</div>
		</div>
		<div class="card-formrow">
			<div class="card-control condensed">
				<label class="form-control">Company</label>
			</div>
			<div class="card-control">
				<input type="email" class="form-control" placeholder="Acme Co." />
			</div>
		</div>
		<div class="card-formrow">
			<div class="card-control condensed">
				<label class="form-control">Email</label>
			</div>
			<div class="card-control">
				<input type="email" class="form-control" placeholder="me@example.com" />
			</div>
		</div>
	</div>
	<div class="card-footer card-toolbar">
		<div class="card-control">
			<input type="submit" class="btn btn-primary card-action" value="Sign Up" />
		</div>
	</div>
</form>
