<template lang="pug">
.container
    .title
        .wheather-main 
            .wheather-degrees
                span 
                    b 19°
            .wheather-city 
                span.city-title Новосибирск
                br
                span 21:09 - Четверг, 23 Июня 22
            .wheather-icon 
                img(src="/img/icons-wheather/cloudy.svg")
                br
                span Облачно
    .info
        .info-main 
           .other-city 
                ul
                    b  Другие города 
                    li.list-title Минск
                    li.list-title Киев
                    li.list-title Москва
                hr
           .current-city 
                ul
                    b  Подробная информация 
                    li
                        span.list-title Облачность
                        span 86%
                    li
                        span.list-title Ветер
                        span 8km/h
                    li
                        span.list-title Влажность
                        span 62%
                    li
                        span.list-title Вероятность осадков
                        span 22%
</template>

<script>
export default {

}
</script>

<style>
    .container{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    .title{
        display: flex;
        width: 60%;
        height: 100%;
        align-items: flex-end;
    }
    .wheather-main{
        display: flex;
        align-items: flex-end;
    }
    .wheather-degrees span{
        font-size: 96px;
    }
    .wheather-city{
        margin: 0 30px;
    }
    .city-title{
        font-size: 54px;
    }
    .info{
        width: 40%;
        height: 100vh;
        margin: -50px -50px 0 0;
        background: rgba(0, 0, 0, 0.2);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(16px);
        padding: 30px;
        box-sizing: border-box;
    }
    hr{
        margin-bottom: 30px;
    }
    ul{
        padding-left: 0;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .info-main li{
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin: 30px 0;
        color: #b3b3b3;
    }
    .list-title{
        color: #b3b3b3;
    }
</style>