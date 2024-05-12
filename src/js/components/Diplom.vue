<template>
     <div>
    <img src="/img/FrontEnd.jpg" alt=""> 
    <ul>
        <h3>Профессия FrontEnd-разработчик</h3>
        <p>Приобретенные навыки:</p>
        <li>HTML-разметка</li>
        <li>CSS3 оформление, анимация, адаптивность</li>
        <li>Препроцессор SASS</li>
        <li>FlexBox, Grid</li>
        <li>Таск-менеджеры: Gulp/Webpack</li>
        <li>Контроль версии Git</li>
        <li>JavaScript</li>
        <li>Библиотека jQuery</li>
        <li>Фреймворки: Bootstrap, React Js, Vue Js(на данном создан этот сайт)</li>
    </ul>   
    </div>
    <div>
    <img src="/img/Java.jpg" alt=""> 
    <ul>
        <h3>Профессия Java-Разработчик</h3>
        <p>Приобретенные навыки:</p>
        <li>Основы Java</li>
        <li>ООП в Java</li>
        <li>Знание языка SQL и работа с СУБД SQLite, MySQL</li>
        <li>Контроль версии Git</li>
        <li>Навыки тестирования программ</li>
        <li>Разработка проектов на JavaFX</li>
        <li>Spring Boot</li>
        <li>Android разработка</li>
        <li>Язык Kotlin</li>
    </ul>   
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
    background-color: #6E6E6E;
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border: 2px solid silver;
    border-radius: 10px;
    @media (max-width: 700px) {
        flex-direction: column;
    }
  img {
    border-radius: 10px;
    @media (min-width: 701px){width: 60%;}
    @media (max-width: 700px) {width: 100%; }
}
ul {
    list-style-image:url("/dist/img/arrow-right-solid.svg");
    list-style-position: inside;
    margin: 10px;
    h3{font-size: 1.5em;}
    p{font-style: italic;}
    li:not(:last-of-type){
        margin-bottom: 10px;
    }
}  
}

</style>