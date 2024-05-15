<template>
    <div class="myRoad">
        <h2>Мой путь не простой...</h2>
        <p>Из мясного производства в IT сферу</p>
        <dl>
            <dt>2024 год<span class="openYear" @click="myRoadInfo[0] = !myRoadInfo[0]">{{ myRoadInfo[0] ? 'Скрыть' : 'Показать'}}</span></dt>
            <transition name="fade">
            <div v-if="myRoadInfo[0]">
            <dd  v-for="el in yearFour" :key="year"><span class="a">{{ el.year }}</span>: <span class="b">{{ el.event }}</span></dd>
            </div>
            </transition>

            <dt>2023 год<span class="openYear" @click="myRoadInfo[1] = !myRoadInfo[1]">{{ myRoadInfo[1] ? 'Скрыть' : 'Показать' }}</span></dt>
            <transition name="fade">
            <div v-if="myRoadInfo[1]">
                <dd  v-for="el in yearThree" :key="year"><span class="a">{{ el.year }}</span>: <span class="b">{{ el.event }}</span></dd>
            </div>
            </transition>
           
            <dt>Жизнь ранее<span class="openYear" @click="myRoadInfo[2] = !myRoadInfo[2]">{{ myRoadInfo[2] ? 'Скрыть' : 'Показать' }}</span></dt>
            <transition name="slide-fade">
            <div class="yearAbove"  v-if="myRoadInfo[2]">
                <div class="slide" :style="'left:' + left + 'px'" >
                    <dd class="blockYearAbove"  v-for="el in yearAbove" :key="year"><center><span class="a">{{ el.year }}</span></center><span class="b">{{ el.event }}</span></dd>
                </div>

                <div class="arrows" v-if="screenWidth >= 769">
                    <img src="img/arrow.svg" v-if="this.left != 0" @click="moveBlock('prev')" alt="">
                    <img src="img/arrow.svg" v-if="this.left >= -1722" @click="moveBlock('next')" class="next" alt="">
                </div>
            </div>
            </transition>
        </dl>
    </div>
</template>

<script>
export default {
    data () {
        return {
            screenWidth: screen.width,
            left: 0,
            myRoadInfo: [false, false , false],
            yearFour: [
                {'year': 'Май 2024', 'event': 'Создание первого проекта. Сайт на котором вы сейчас'},
                {'year': 'Март 2024', 'event': 'Окончание обучения "Профессии Front-end разработчик'},
                {'year': 'Январь 2024', 'event': 'Старт обучения "Профессии Front-end разработчик'}
            ],
            yearThree: [
            {'year': 'Июнь 2023', 'event': 'Окончание обучения "Профессии Java разработчик'},
            {'year': 'Апрель 2023', 'event': 'Старт обучения "Профессии Java разработчик'},
            {'year': 'Начало 2023', 'event': 'Осознание что в 40 и более лет, я не хочу работать в мясной сфере производства и нужно, что то менять. По совету друга познакомился с сайтом itProger.com'}
            ],
            yearAbove: [
            {'year': 'Ноябрь 2018', 'event': 'На свет появился мой сын '},
            {'year': 'Май 2018', 'event': 'Начальник мясного производства ООО "Лента"'},
            {'year': 'Февраль 2018', 'event': 'Заведующий производством ТД "Перекресток"'},
            {'year': 'Август 2016', 'event': 'Технолог ООО СХП "Неприк"'},
            {'year': '2016', 'event': 'Первые шаги в программировании с помощью сайта JavaRush'},
            {'year': 'Июнь 2016', 'event': 'Получение высшего образования по специальности "Технолог мясомолочной промышленности'},
            {'year': 'Июнь 2009', 'event': 'Окончание профессионального кулинарного лицея №10'},
            {'year': '2006', 'event': 'Окончание школы и уход после 9 класса '}
            ]
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
        moveBlock(value) {
            let add = 287;
            if (value == 'next' && this.left >= -1722)
            this.left -= add;
            else if (value == 'prev' && this.left != 0)
            this.left +=add;
        }
    }
}
</script>

<style lang="scss" scoped>

.myRoad {
    margin-top: 20px;
    width: 100%;
    p{
        margin-bottom: 15px;
        text-align: center;
        font-style: italic;
        @media (min-width: 1000px) {font-size: 1.5em;}
    }
    dl {
        dt{
                display: flex;
                justify-content: space-between;
                padding: 5px 0;
                border-bottom: 2px solid silver;
            @media (min-width: 1500px) {font-size: 2.5em;}
            @media(max-width: 1500px) and (min-width: 900px){font-size: 2em;}
            @media(max-width: 900px){font-size: 1.5em;}
        .openYear { 
            font-size: 0.7em; 
            align-self: flex-end;
            cursor: pointer;
        }  
          
    }
        dd{
            margin-top: 15px;
            background-color: #6E6E6E;
            list-style: none;
            padding: 10px 5px;
            font-size: 1.5em;
            border: 2px solid silver;
            border-radius: 10px;
            @media (max-width: 500px) {font-size: 1em;}
        }
}
.yearAbove {
           overflow: hidden;
           border-radius: 10px;
          @media (max-width: 769px) {
            overflow: scroll;
          }
    .slide {
    display: flex;
    width: 2500px;
    position: relative;
    transition: left 500ms ease;
    :not(:last-of-type){margin-right: 25px;}
    .blockYearAbove {
        width: 250px; 
        }
    }
    .arrows {
    margin-top: 20px;
    margin-left: 15px;
    
    img {
        cursor: pointer;
        transition: transform 500ms ease;
        margin-right: 30px;
        &:hover {
            transform: scale(1.1);
        }
        &.next {
            transform: rotate(180deg);
            &:hover {
                transform: scale(1.1) rotate(180deg);
            }
        }
    }
}
}




}
.slide-fade-enter-active,
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active,
.fade-leave-active
 {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(1200px);
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>