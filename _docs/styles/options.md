---
title: Radios and Checkboxes
type: styles
section: forms
---

<h6>Standard Checkboxes (enabled and disabled)</h6>

<label class="option">
	<input type="checkbox" />
	<i class="option-icon"></i>
	Option one is this and that &mdash; be sure to include why it's great
</label>
<label class="option">
	<input type="checkbox" checked />
	<i class="option-icon"></i>
	Option two is checked
</label>
<label class="option">
	<input type="checkbox" />
	<i class="option-icon"></i>
	Option three
</label>
<label class="option">
	<input type="checkbox" />
	<i class="option-icon"></i>
	Option four
</label>
<label class="option">
	<input type="checkbox" />
	<i class="option-icon"></i>
	Option five
</label>
<label class="option">
	<input type="checkbox" disabled checked />
	<i class="option-icon"></i>
	Option six is disabled but still checked
</label>
<label class="option">
	<input type="checkbox" disabled />
	<i class="option-icon"></i>
	Option seven is just disabled
</label>

<h6>Standard Radio Buttons</h6>

<label class="option">
	<input type="radio" name="radio1" />
	<i class="option-icon"></i>
	Option one is this and that &mdash; be sure to include why it's great
</label>
<label class="option">
	<input type="radio" name="radio1" checked />
	<i class="option-icon"></i>
	Option two is selected by default
</label>
<label class="option">
	<input type="radio" name="radio1" />
	<i class="option-icon"></i>
	Option three
</label>
<label class="option">
	<input type="radio" name="radio1" />
	<i class="option-icon"></i>
	Option four
</label>
<label class="option">
	<input type="radio" name="radio1" />
	<i class="option-icon"></i>
	Option five
</label>
<label class="option">
	<input type="radio" name="radio1" />
	<i class="option-icon"></i>
	Option six
</label>
<label class="option">
	<input type="radio" name="radio1" disabled />
	<i class="option-icon"></i>
	Option seven is disabled
</label>
<br>

<hr>
<h6>Indeterminate States</h6>

<label class="option">
	<input type="checkbox" id="changeme"/>
	<i class="option-icon"></i>
	This option is indeterminate
</label>

<script>document.getElementById('changeme').indeterminate = true;</script>

<hr>
<h6>Disabled Radio Buttons</h6>

<label class="option">
	<input type="radio" name="radio2" disabled />
	<i class="option-icon"></i>
	Option one is this and that &mdash; be sure to include why it's great
</label>
<label class="option">
	<input type="radio" name="radio2" disabled />
	<i class="option-icon"></i>
	Option two is selected by default
</label>
<label class="option">
	<input type="radio" name="radio2" disabled checked />
	<i class="option-icon"></i>
	Option three is disabled
</label>

<hr>
<h6>Error States</h6>

<div class="has-error">
	<label class="option">
		<input type="radio" name="radio3" checked />
		<i class="option-icon"></i>
		Radio 1
	</label>
	<label class="option">
		<input type="radio" name="radio3" />
		<i class="option-icon"></i>
		Radio 2
	</label>
	<label class="option">
	<input type="checkbox" checked />
		<i class="option-icon"></i>
		Check 1
	</label>
	<label class="option">
		<input type="checkbox" />
		<i class="option-icon"></i>
		Check 2
	</label>
</div>