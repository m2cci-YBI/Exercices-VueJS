new Vue({
    el:'#monApli',
    data:{
        valeurInc: 0,
        valeurSoumise :0,
        NbrTentativeRest :3,
        CompNbr: "petit",
        
        coupRate :false,
        reussite:false,
        abandon:false,
        echec:false
    },
    
    mounted:function(){
        this.intialiserValeurInc();  /*intialiser la valeur inconue au demarage de la page*/ 
        
    },
    methods:{
        

        intialiserValeurInc:function(){
        this.valeurInc=Math.round(Math.random() * 10); 
        console.log(this.valeurInc);
        },
        
        rejouer:function(){       /*Re-intialiser tous les paramaitre*/   
        this.valeurInc=0;
        this.valeurSoumise=0;
        this.NbrTentativeRest=3;
        this.CompNbr="petit";
        
        this.coupRate =false;
        this.reussite=false;
        this.abandon=false;
        this.echec=false;
        this.intialiserValeurInc();
        },

        abandonner:function(){
            this.abandon=true;
            this.coupRate=false;
            

        },
        verifierValeur:function(){
            return (this.valeurSoumise-this.valeurInc);
       },

       jouer:function(){

         
  
        if(this.NbrTentativeRest){    

           if(!this.verifierValeur()){
            this.reussite=true;
            this.coupRate=false;
            ;
           }else if(this.verifierValeur()>0){
            this.coupRate=true;
            this.CompNbr="grand";
           }else{
            this.coupRate=true;
            this.CompNbr="petit";
          }
       }else{
        this.echec=true;
        this.coupRate=false;
        this.reussite=false;
        }

       this.NbrTentativeRest--; 
       //resolution bug
       if(this.NbrTentativeRest==0 && this.verifierValeur()){
       	this.echec=true;
        this.coupRate=false;
        this.reussite=false;
        
       }


        } 

      
         
      }
        

        
 
});