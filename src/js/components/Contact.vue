<template>
<div class="contact">
        <div class="vk" >
          <h2><a href="https://vk.com/konyh" target="_blank"> VКонтакте</a></h2> 
        </div>  
        <div class="tg">
        <h2> <a href="https://t.me/+-uvDLcj_AJA2NjI6" target="_blank">Telegramm</a></h2>
        </div>
        <div class="email">
        <h2> <a href="mailto:k.stas.a@rambler.ru">Email</a></h2>
        <p> k.stas.a@rambler.ru</p>
        </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
    margin-top: 50px;
    display: flex;
    @media (min-width: 801px){justify-content: space-between; align-items: flex-start; height: 75vh;}
    @media (max-width: 800px){flex-direction: column;}

    div {
   padding: 50px;
   transition: all 500ms ease;
   border-radius: 10px;
   border: 2px solid silver;
   position: relative;
    @media (min-width: 801px){
       &:not(:last-of-type){margin-right: 20px;} 
       &:hover{transform: scale(1.5); z-index: 1;}
    } 
    @media (max-width: 801px){margin-bottom: 20px;}  
        }
    .vk {
        background-color: rgb(60, 120, 231);
        @media (min-width: 801px){
         transform: rotate(-30deg);
        margin-top: 100px;   
        }
        
   
    }
    .tg {
        background-color: rgb(9, 91, 243);
        @media (min-width: 801px){
          left: -100px;
        top: 200px;  
        }
        
      

    }
    .email {
        background-color: blue;
        text-align: center;
      p{font-size: 1.4em;}
        @media (min-width: 801px){
        left: -200px;
        top: 200px;
        transform: rotate(50deg);    
        }
        
       
    }
}
</style>