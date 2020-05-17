new Vue({
    el: "#vue-app",
    data: {
        health: 100,
        ended0: false,
        ended1: false,
        ended2: false,
        ended3: false,
    },
    methods: {
        punch() {
            this.health -= 10;
            if (this.health <= 70 && this.health > 50) {
                this.ended0 = true;
            }
            else if (this.health <= 50 && this.health > 20) {
                this.ended0 = false;
                this.ended1 = true;
            }
            else if (this.health <= 20 && this.health > 0) {
                this.ended0 = false;
                this.ended1 = false;
                this.ended2 = true;
            }
            else if (this.health == 0) {
                this.ended3 = true;
            }


        },

        Restart() {
            this.health = 100;
            this.ended0 = false;
            this.ended1 = false;
            this.ended2 = false;
            this.ended3 = false;
        }

    }
})