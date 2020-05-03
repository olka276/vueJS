<template>
    <div>
        <div class="toast toast-primary" v-show="!inProgress">Wcisnij Start aby rozpocząć odliczanie</div>
        <h2>{{counter}}</h2>
        <button class="btn btn-primary btn-counter " :disabled="inProgress" @click="start">Start</button>
    </div>
</template>
<script>
export default {
    
            props: ["initValue"],
            
            data() {
                return {
                    counter: this.initValue,
                    inProgress: false,
                };
            },
            watch: {
                initValue: function(newValue) {
                    this.counter = newValue
                }
            },
            methods: {
                start: function(){
                    this.inProgress = true
                    this.countdown();
                    this.$emit("progress", this.inProgress)
                },
                countdown: function(){
                    this.counter--
                    if(this.counter>0) {
                        setTimeout(this.countdown, 1000)
                    }
                    else {
                        setTimeout(() => {
                            this.counter = this.initValue
                            this.inProgress = false 
                            this.$emit("progress", this.inProgress)
                        }, 1000);
                        
                    }
                }
            },

        
}
</script>
<style scoped>
.btn-counter {
    height: 100px;
}
</style>