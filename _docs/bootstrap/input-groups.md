---
title: Input Groups
type: bootstrap
section: forms
---

<h6>Inputs with text</h6>

<div class="input-group margin-small-bottom">
	<span class="input-group-addon">@</span>
	<input class="form-control" placeholder="username" />
</div>
<div class="input-group margin-small-bottom">
	<input class="form-control" placeholder="username" />
	<span class="input-group-addon">@example.com</span>
</div>
<div class="input-group margin-small-bottom">
	<span class="input-group-addon">$</span>
	<input class="form-control" placeholder="200" />
	<span class="input-group-addon">.00</span>
</div>

<h6>Inputs with buttons</h6>

<div class="input-group margin-small-bottom">
  <input class="form-control" placeholder="Quantity" />
  <span class="input-group-btn">
    <a href="#" class="btn btn-primary">Submit</a>
  </span>
</div>

<div class="input-group input-group-lg">
  <input class="form-control input-lg" placeholder="Quantity" />
  <span class="input-group-btn">
    <a href="#" class="btn btn-primary btn-lg">Submit</a>
  </span>
</div>

<h6>Various sizes</h6>

<div class="input-group input-group-lg margin-small-bottom">
  <span class="input-group-addon" id="sizing-addon1">@</span>
  <input type="text" class="form-control input-lg" placeholder="Username" aria-describedby="sizing-addon1">
</div>

<div class="input-group margin-small-bottom">
  <span class="input-group-addon" id="sizing-addon2">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
</div>

<div class="input-group input-group-sm margin-small-bottom">
  <span class="input-group-addon" id="sizing-addon3">@</span>
  <input type="text" class="form-control input-sm" placeholder="Username" aria-describedby="sizing-addon3">
</div>

<h6>Inputs and options</h6>

<div class="input-group margin-small-bottom">
  <label class="input-group-addon option">
  	<input type="checkbox" >
  	<i class="option-icon solo"></i>
  </label>
  <input type="text" class="form-control" placeholder="placeholder...">
</div>
<div class="input-group margin-small-bottom">
  <label class="input-group-addon option">
    <input type="checkbox" checked >
    <i class="option-icon solo"></i>
  </label>
  <input type="text" class="form-control" placeholder="placeholder...">
</div>
<div class="input-group margin-small-bottom">
  <label class="input-group-addon option">
    <input type="checkbox" checked disabled>
    <i class="option-icon solo"></i>
  </label>
  <input type="text" class="form-control" placeholder="placeholder...">
</div>
<div class="input-group margin-small-bottom">
  <label class="input-group-addon option">
    <input type="checkbox" disabled >
    <i class="option-icon solo"></i>
  </label>
  <input type="text" class="form-control" placeholder="placeholder...">
</div>