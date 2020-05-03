<template>
   <div class="container-lg-grid">
        <div id="app">

            <form action="#" class="form-horizontal">
                <div class="form-group">
                    <div class="col-3">
                        <label class="form-label">Wartość startowa</label>
                    </div>
                    <div class="col-3">
                        <select class="form-select" v-model="initValue" :disabled="inProgress">
                            <option v-for="i in 10" :value="i" :key="i">{{i}}</option>
                        </select>
                    </div>
                </div>
            </form>
            <edu-counter :init-value="initValue" @progress="toggleState"></edu-counter>
                       
        </div>
    </div>
</template>

<script>

import Counter from "./components/Counter"

export default {

    data(){
        return {
          initValue: 10,
          inProgress: false,
        }
    },
    methods: {
      toggleState: function(value) {
          this.inProgress = value
      }
    },
    
    components: {
        'edu-counter' : Counter
    }
       
}
</script>