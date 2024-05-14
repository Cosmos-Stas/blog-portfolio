<template> 
    <Nav />
<br><br><br><br>
<h2>Пока что лишь один проект:</h2>
<br><br><br><br>
<h2><i>my</i>Blog-Portfolio <a target="_blank" href="https://github.com/Cosmos-Stas/blog-portfolio.git"><i class="fa-brands fa-github"></i></a></h2>
<br><br><br><br>
<p class="Go"><center>Но все впереди...</center></p>



</template>

<script>
import Nav from './components/Nav.vue';


export default {
components: {Nav}
}
</script>

<style lang="scss" scoped>
@keyframes pulse {
    0%   {transform: scale(0.95);
    color: wheat;}
    100% {transform: scale(1.5); color: rgb(250, 194, 91);}
}
.Go {
    animation: pulse infinite ease-in-out 2s alternate;
} 


</style>