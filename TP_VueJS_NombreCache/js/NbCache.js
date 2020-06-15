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
        this.intialiserValeurInc();  /*initialiser la valeur inconnue au demarrage de la page*/ 
        
    },
    methods:{
        

        intialiserValeurInc:function(){  /*creation aleatoire de la valeur inconnue */ 
        this.valeurInc=Math.round(Math.random() * 10); 
        console.log(this.valeurInc);
        },
        
        rejouer:function(){       /*Re-intialiser tous les parametres*/   
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

        abandonner:function(){    /*Abondon de la partie*/ 
            this.abandon=true;
            this.coupRate=false;
            

        },
        verifierValeur:function(){ /*Comparaison de la valeur soumie avec la valeur inconne*/ 
            return (this.valeurSoumise-this.valeurInc);
       },

       jouer:function(){
        
        //Verification de la validite de la valeur
        if(this.$refs.maValeur.value=="" || !(this.$refs.maValeur.value>=0 && this.$refs.maValeur.value<=10))
          alert("Merci de rentrer un nombre entre 0 et 10")
        else{
              //Recuperation de la valeur
              this.valeurSoumise=this.$refs.maValeur.value;
              //Verification que les tentatives ne sont pas encore epuisées
              if(this.NbrTentativeRest){    
                  //cas de valeur corretcte
                  if(!this.verifierValeur()){
                     this.reussite=true;
                     this.coupRate=false;
                     // cas de valeur superieure
                  }else if(this.verifierValeur()>0){
                     this.coupRate=true;
                     this.CompNbr="grand";
                  }else{ // cas de valeur inferieure
                      this.coupRate=true;
                      this.CompNbr="petit";
                  }
              }else{//cas de nombre tentative epuisée
                 this.echec=true;
                 this.coupRate=false;
                this.reussite=false;
              }
              //Diminuer le comppteur de 1 pas apres chaque tentative
              this.NbrTentativeRest--; 
              /*resolution du bug de la derniere tentative , sinon apres 
              3 mauvais coups , l'utilisateur aura droit à une 4 eme tentative*/
              if(this.NbrTentativeRest==0 && this.verifierValeur()){
              this.echec=true;
              this.coupRate=false;
              this.reussite=false;        
              }
        } 

      
         
      }//jouuer
        
}
        
 
});