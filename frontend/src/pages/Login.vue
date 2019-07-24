<script>
export default {
  name: 'Login',
  metaInfo: {
    title: 'Login'
  }
}
</script>

<template>
	<div class="page-content" id="login-view">
		<div class="content-wrapper">
			<div class="content d-flex justify-content-center align-items-center">
				<div class="login-form">
					<div class="card mb-0">
						<div class="card-body">
							<div class="text-center mb-3">
                <img src="../assets/images/isuzu-logo.png" alt="isuzu logo" height="25">
								<h5 class="mb-0">Login to your account</h5>
								<span class="d-block text-muted">Your credentials</span>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="text" class="form-control" placeholder="Username">
								<div class="form-control-feedback">
									<i class="icon-user text-muted"></i>
								</div>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="password" class="form-control" placeholder="Password">
								<div class="form-control-feedback">
									<i class="icon-lock2 text-muted"></i>
								</div>
							</div>

							<div class="form-group d-flex align-items-center">
								<a href="login_password_recover.html" class="ml-auto">Forgot password?</a>
							</div>

							<div class="form-group mb-0">
								<button 
                  @click="$router.push('/home')"
                  class="btn btn-danger btn-block"
                >
                  Sign in 
                  <i class="icon-circle-right2 ml-2"></i>
                </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#login-view {
  background-color: #37474F;
}
</style>
