<template>
    <h1>Давайте знакомиться?</h1>  
    <div class="info">
        <img src="/img/myFoto.jpg" alt="Место для фото">

        <div class="rightBlock">
            <div class="infoMe">
                <ul>
                    <li><span class="a">Имя: </span><span class="b">Станислав</span></li>
                    <li><span class="a">Возраст: </span><span class="b">33 года</span></li>
                    <li><span class="a">Текущая сфера деятельности: </span><span class="b">Мясное производство</span></li>
                    <li><span class="a">Мечта: </span><span class="b">Кардинально сменить сферу деятельности</span></li>
                    <li><span class="a">Цель: </span><span class="b">К августу 2024г работать в IT сфере</span></li>
                </ul>  
            </div>  
            <div class="infoSite">
            <h2 >Что за сайт?</h2>
            <p>Это первый и надеюсь не последний мой проект созданный с целью:</p>
            <ul>
                <li>Демонстрация текущего скилла</li>
                <li>Закрепление полученных знаний</li>
                <li>Развитие и улучшение  навыков программирования</li>
            </ul>
            </div>   
        </div>
           
    </div>

</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
    @media (min-width: 1500px) {font-size: 5em;}
    @media(max-width: 1500px) and (min-width: 900px){font-size: 3em;}
    @media(max-width: 900px) and (min-width: 430px){font-size: 2.5em;}
    @media(max-width: 430px) {font-size: 1.8em;}
}

.info{
    display: flex;
    @media (min-width: 901px) {
        align-items: flex-start;
        justify-content: space-between;
    }
    @media (max-width: 900px){
        flex-direction: column;
        
    } 
  img {
    border-radius: 10px;
    border: 2px solid silver;
    @media (min-width: 900px)   {width: 30%;}
    @media (max-width: 900px)   {width: 50%; margin: 0 auto 10px auto;}
}

    .rightBlock{
        @media (min-width: 901px){width: 65%;}
        >div {
            background-color: #6E6E6E;
            border-radius: 10px;
            border: 2px solid silver;
            padding: 10px 5px;
        }
        .infoMe {
            ul{        
                list-style: none;               
                font-size: 2em;
                @media (max-width: 500px) {font-size: 1.5em;}
                li:not(:last-of-type){margin-bottom: 15px;}
            }
        }


.infoSite {
    margin-top: 20px;
    p{
        text-align: center;
        font-style: italic;
        @media (min-width: 1000px) {font-size: 1.5em;}
    }
    ul {
        
        list-style-image:url("/dist/img/arrow-right-solid.svg");
        list-style-position: inside;
        @media (min-width: 500px){font-size: 1.5em;}
        li {
            margin: 10px 0;
        }
    }
}
}

}
</style>