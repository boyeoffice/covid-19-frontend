<template>
  <div class="row">
    <div class="col-md-9 col-md-offset-3">
      <div class="form mt-4">
        <h1 class="text-center">Covid-19 Estimator.</h1>
        <h6 class="text-center">Fill the Below Form To Estimate Covid-19 Case in a certain area</h6>
        <form class="mt-3">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" name="">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Average Age" data-avg-age>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Average Daily Income in USD" data-avg-income-in-us="">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Average Daily Income Population"
                  data-avg-daily-income-population=""
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Population"
                  data-population=""
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <select data-period-type="" class="form-control">
                  <option>Day</option>
                  <option>Weeks</option>
                  <option>Months</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Reported Cases"
                  data-reported-cases=""
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Time to elapse"
                  data-time-to-elapse=""
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Total Hospital Beds"
                  data-time-to-elapse=""
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

