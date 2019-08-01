<template>
  <div>
    <h5>This is an about page</h5>

    Tooltip example
    <button 
      type="button" 
      class="btn btn-secondary" 
      data-toggle="tooltip" 
      data-placement="right" 
      title="Tooltip on right"
    >
      <i class="fa fa-user"></i>
      Tooltip on top
    </button>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $('[data-toggle="tooltip"]').tooltip()
  }
}
</script>
