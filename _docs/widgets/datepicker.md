---
title: Datepicker
type: widgets
section: datepicker
requirements: "jqueryui"
---

<form class="form-grid">
	<div class="form-row">
		<div class="form-label"><label>Automatic</label></div>
		<div class="form-response"><input class="form-control" placeholder="Choose a date..." data-toggle="datepicker" /></div>
	</div>
	<div class="form-row">
		<div class="form-label"><label>Attached</label></div>
		<div class="form-response">
			<div class="input-group">
				<input id="datepicker1" class="form-control" placeholder="Choose a date..." />
				<span class="input-group-btn">
					<a href="#" class="btn btn-default text-light btn-icon" data-toggle="datepicker" data-target="#datepicker1"><span data-icon="calendar"></span></a>
				</span>
			</div>
		</div>
	</div>
	<div class="form-row">
		<div class="form-label"><label>Detatched</label></div>
		<div class="form-response">
			<div class="form-grid">
				<div class="form-row">
					<div class="form-response">
						<input id="datepicker2" class="form-control" placeholder="Choose a date..." />
					</div>
					<div class="form-response form-response-short">
						<a href="#" class="btn btn-default btn-icon" data-toggle="datepicker" data-target="#datepicker2"><span data-icon="calendar"></span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>
