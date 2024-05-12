<template>
    <div class="wrappen">
        <div class="container">
            <router-view></router-view>  
        </div> 
        <Footer /> 
    </div>
   
</template>

<script>
import Footer from './components/Footer.vue'


export default {
components: {Footer}
}
</script>

<style lang="scss">
::selection {
    background: #25AB75;
}

*{
    margin: 0;
    padding: 0;
}
body {
    background-color: #333;
    color: #dce1eb;
    font-size: 1em;
}
.wrappen {overflow: hidden;}
.container {
    min-height: calc(95vh - 116px);
    @media(min-width: 1500px){
        width: 1300px;
        margin: 0 auto;
    }
    @media(max-width: 1500px) and (min-width: 600px){margin: 0 5%;}
    @media(max-width: 600px){margin: 0 2%;}
    h2 {
    text-align: center;
    @media (min-width: 1500px) {font-size: 3em;}
    @media(max-width: 1500px) and (min-width: 900px){font-size: 2.5em;}
    @media(max-width: 900px){font-size: 2em;}
    }
    .a {font-weight: bold;}
    .b {font-style: italic;}
    
}
a {
    text-decoration: none;
    transition: all 500ms ease;
    color: #BCFD4C;
    &:hover {
        color: #eef1e8;
    }
}
</style>