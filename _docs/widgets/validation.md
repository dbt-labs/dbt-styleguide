---
title: Validation
type: widgets
section: validation
---

<form data-toggle="validator">
	<div class="form-grid">
		<div class="form-row">
			<div class="form-label">
				<label class="text-large">Name</label>
			</div>
			<div class="form-response">
				<div class="form-grid">
					<div class="form-row">
						<div class="form-response form-group has-feedback">
							<input required type="text" class="form-control input-lg" placeholder="First name" data-error="Enter your first name" />
							<p class="help-block with-errors"></p>
						</div>
						<div class="form-response form-group has-feedback">
							<input required type="text" class="form-control input-lg" placeholder="Last name" data-error="Enter your last name" />
							<p class="help-block with-errors"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="form-row ">
			<div class="form-label">
				<label class="text-large">Email</label>
			</div>
			<div class="form-response form-group has-feedback">
				<input required type="email" class="form-control input-lg" placeholder="jon@acme.co" data-error="Enter your email address" />
				<p class="help-block with-errors"></p>
			</div>
		</div>
		<div class="form-row ">
			<div class="form-label">
				<label class="text-large">Password</label>
			</div>
			<div class="form-response form-group has-feedback">
				<input required id="password" type="password" class="form-control input-lg" placeholder="••••••••••••••••" data-error="Please enter a valid password" />
				<p class="help-block">Passwords should include at least...</p>
			</div>
		</div>
		<div class="form-row ">
			<div class="form-label">
				<label class="text-large">Confirm</label>
			</div>
			<div class="form-response form-group has-feedback">
				<input required type="password" class="form-control input-lg" placeholder="••••••••••••••••" data-error="Passwords do not match" data-match="#password" />
				<p class="help-block with-errors"></p>
			</div>
		</div>
		<div class="form-row">
			<div class="form-label">
				
			</div>
			<div class="form-response">
				<label class="option">
					<input type="checkbox" required />
					<i class="option-icon"></i>
					I agree to the <a href="#">Terms of Service</a>.
				</label>
			</div>
		</div>
	</div>
	<div class="form-footer text-center">
		<input type="submit" class="btn btn-primary btn-lg" value="Create my Account" />
	</div>
</form>
	

---

###### Static Validation

<form class="margin">
	<div class="form-grid">
		<div class="form-row">
			<div class="form-label">
				<label class="text-large">Name</label>
			</div>
			<div class="form-response">
				<div class="form-grid">
					<div class="form-row">
						<div class="form-response form-group has-error">
							<input required type="text" class="form-control input-lg" placeholder="First name"/>
							<p class="help-block with-errors">Enter your first name</p>
						</div>
						<div class="form-response form-group has-feedback">
							<input required type="text" class="form-control input-lg" placeholder="Last name" data-error="Enter your last name" />
							<p class="help-block with-errors"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form-footer text-center">
		<input type="submit" class="btn btn-primary btn-lg" value="Create my Account" disabled />
	</div>
</form>
