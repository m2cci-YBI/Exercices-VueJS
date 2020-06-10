new Vue({
    el:'#monApli',
    data:{
        valeurC: 0,
        valeurF :32
    },
    methods:{
        toCelsius:function(){
        	console.log("tocel");
             this.valeurC=(5/9)*( this.valeurF - 32);
        },
        toFahrenheit:function(){
        	console.log("toF");
            this.valeurF=(9/5)*this.valeurC + 32 ;

        }
    }
});

