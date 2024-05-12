<template>
    <nav class="nav">
      <span class="logo"><router-link to="/"><i>my</i><b>Blog-Portfolio</b></router-link></span>
       <ul class="navLink" v-if="screenWidth > 490">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/project">Проекты</router-link></li>
        <li><router-link to="/diploms">Дипломы</router-link></li>
        <li><router-link to="/contact">контакты</router-link></li>
       </ul>
       <i v-else :class="menuIcon" @click="showMenu()" class="menuIcon"></i>

       <ul class="navLinks-mobile" v-if="screenWidth <= 490 && mobileMenu">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/project">Проекты</router-link></li>
        <li><router-link to="/diploms">Дипломы</router-link></li>
        <li><router-link to="/contact">контакты</router-link></li>
       </ul>
    </nav>
</template>
<script>

export default{
    data () {
    return {
      screenWidth: screen.width,
      mobileMenu: false,
      menuIcon: "fa-solid fa-bars"
    }
  },
  mounted () {
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.screenWidth = screen.width;
      })
    },
    showMenu() {
        this.mobileMenu = !this.mobileMenu;
        this.menuIcon = this.menuIcon.includes("bars") ? "fa-solid fa-xmark" : "fa-solid fa-bars"

    }
  }

}

</script>
<style lang="scss" scoped>
.nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    @media (max-width: 730px) and (min-width: 491px){
        flex-direction: column;
    }
    .logo{
        font-size: 2em;
        @media (max-width: 730px){
        margin-bottom: 10px;
    }
    }
}
.navLink{
    list-style: none;
    text-transform: uppercase;
   
    >li {
        display: inline-block;
        @media (max-width: 490px){
        display: block;
        margin-bottom: 10px;
    }
        &:not(:last-of-type){margin-right: 27px;}
    }
}
.navLinks-mobile {
text-transform: uppercase;
  list-style: none;
  text-align: center;
  width: 100%;
  li {
    margin-top: 15px;
  }
}
.menuIcon {
  color: #BCFD4C;
}
</style>