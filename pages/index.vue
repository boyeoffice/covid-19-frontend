<template>
  <div class="row w-100 justify-content-center">
    <div class="col-md-8 col-12 col-lg-offset-3">
      <div class="form mt-4">
        <h1 class="text-center">Covid-19 Estimator.</h1>
        <h6 class="text-center">Fill the Below Form To Estimate Covid-19 Case in a certain area</h6>
        <form class="mt-3" @submit.prevent="send">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" placeholder="Name" name="" required>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="age">Average Age</label>
                <input type="text" class="form-control" placeholder="Average Age" data-avg-age required="">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="usd">Average Daily Income in USD</label>
                <input type="text" class="form-control" placeholder="Average Daily Income in USD" data-avg-income-in-us="" required>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="income">Average Daily Income Population</label>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Average Daily Income Population"
                  data-avg-daily-income-population=""
                  required 
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="population">Population</label>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Population"
                  data-population=""
                  required 
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <select data-period-type="" class="form-control" required>
                  <option>Day</option>
                  <option>Weeks</option>
                  <option>Months</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="cases">Reported Cases</label>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Reported Cases"
                  data-reported-cases=""
                  required 
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="time">Time to elapse</label>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Time to elapse"
                  data-time-to-elapse=""
                  required 
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="hospital">Total Hospital Beds</label>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Total Hospital Beds"
                  data-time-to-elapse=""
                  required 
                >
              </div>
            </div>
            <div class="col-12">
              <button 
                class="btn btn-sm btn-primary btn-block"
                data-total-hospital-beds=""
                role="button"
              >
                Perfrom Analysis
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mehods: {
      send() {}
    }
  }
</script>

