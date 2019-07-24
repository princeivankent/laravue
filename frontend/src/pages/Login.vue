<script>
export default {
  name: 'Login',
  metaInfo: {
    title: 'Login'
  },
  data () {
    return {
      form: {
        employee_number: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/loginAction', this.form)
    }
  }
}
</script>

<template>
	<div class="page-content" id="login-view">
		<div class="content-wrapper">
			<div class="content d-flex justify-content-center align-items-center">
				<div class="login-form">
          <div 
            v-if="$store.state.user.authenticationError"
            class="alert alert-danger alert-styled-left alert-dismissible"
          >
            <button class="close" data-dismiss="alert"><span>&times;</span></button>
            <span class="font-weight-semibold">Oops! </span> Your credentials are incorrect.
          </div>
					<div class="card mb-0">
						<div class="card-body">
							<div class="text-center mb-3">
                <img src="../assets/images/isuzu-logo.png" alt="isuzu logo" height="25">
								<h5 class="mb-0">Login to your account</h5>
								<span class="d-block text-muted">Your credentials</span>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="text" class="form-control" placeholder="Employee Number" v-model="form.employee_number">
								<div class="form-control-feedback">
									<i class="icon-user text-muted"></i>
								</div>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="password" class="form-control" placeholder="Password" v-model="form.password">
								<div class="form-control-feedback">
									<i class="icon-lock2 text-muted"></i>
								</div>
							</div>

							<div class="form-group d-flex align-items-center">
								<a href="" class="ml-auto">Forgot password?</a>
							</div>

							<div v-if="$store.state.user.isAuthenticating" class="form-group mb-0">
								<button 
                  class="btn btn-danger btn-block"
                  disabled
                >
                  <i class="fa fa-sync fa-spin"></i>
                </button>
							</div>

              <div v-else class="form-group mb-0">
								<button 
                  @click="login()"
                  class="btn btn-danger btn-block"
                >
                  Sign in
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
