<template>
    <footer>
        <ul>
            <li><a href="mailto:k.stas.a@rambler.ru"><i class="fa-solid fa-at"></i> </a></li>
            <li><a href="https://t.me/+-uvDLcj_AJA2NjI6" target="_blank"><i class="fa-brands fa-telegram"></i></a></li>
            <li><a href="https://vk.com/konyh" target="_blank"><i class="fa-brands fa-vk"></i></a></li>
            <li><a target="_blank" href="https://github.com/Cosmos-Stas/blog-portfolio.git"><i class="fa-brands fa-github"></i></a></li>
        </ul>
        <p>Cайт созданн с использованием технологии Vue</p>
        <p>Все права защищены</p>
    </footer>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
footer {
    margin-top: 40px;
    background-color: #242424;
    text-align: center;
    border-top: 2px solid silver;
    @media (max-width: 400px) {font-size: 0.9em;}
    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        li{ margin: 15px 0;
            &:not(:last-of-type){
            @media (min-width: 451px){margin-right:80px;}
            @media (max-width: 450px){ margin-right: 40px;}
            }
            i {
            font-size: 50px;
           
        } 
        }
       
    }
}
</style>