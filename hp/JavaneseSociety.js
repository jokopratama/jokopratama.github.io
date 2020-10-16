@import url('https://fonts.googleapis.com/css?family=Roboto:100,400');

$blue-dark:        #1E384C;
$blue:             #2C7FBE;
$blue-light:       #32BAFA;
$green:            #02C39A;

$stage-bg:           $blue-dark;

*, *::after, *::before {
    box-sizing: border-box;
}
html, body {
    height: 100%;
    min-height: 100%;
}
body {
    margin: 0;  
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to bottom right, #c8c897, #6590A2);
}
[v-cloak] { display:none; }
a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    user-select: none;
}

::-webkit-scrollbar { 
    display: none; 
}

.stage {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    background: $stage-bg;
    transition: background-color .3s; 

    @media (min-width: 500px) {
        border-radius: 5px;
        max-height: 550px;
        max-width: 350px;
    }

    &.menu-open {
        .microphone {
            transform: translate3d(-1em,0,0);
            opacity: 0;
        }
        .voices-menu__button {
            z-index: 40;
            transform: translate3d(0,0,0);
            opacity: 1;
        }
        .menu {
            z-index: 25;
        }
        .time {
            transform: translate3d(0,-200%,0);
            transition: .5s opacity, .5s transform;
            opacity: 0;
        }
        button {
            transform: translate3d(0,200%,0);
            transition-delay: 0s;
            opacity: 0;
        }
        .percent {
            transition: .4s opacity, .4s transform;
            transform: translate3d(0,50%,0);
            opacity: 0;
        }

        .menu__item {
            opacity: 1;
            transform: translate3d(0,0,0);
            
            &:nth-child(1) {
                transition-delay: .2s;
            }
            &:nth-child(2) {
                transition-delay: .3s;
            }
            &:nth-child(3) {
                transition-delay: .4s;
            }
            &:nth-child(4) {
                transition-delay: .5s;
            }
        }
    }

    &.voices-open {
        .voices-menu {
            z-index: 35;
        }
        .voices-menu__bg {
            transform: scale(6);
        }
        
        .voices-menu__close {
            opacity: 1;
            transform: translate3d(0,0,0) rotate(0);
        }

        .voices-list-wrapper {
            opacity: 1;
        }
        .voices-list__item {
            opacity: 1;
            transform: translate(0,0);
            transition: opacity .15s, transform .2s;
        }
        
        @for $i from 1 through 10 {
            .voices-list__item:nth-child(#{$i}) {
                transition-delay: 75ms * $i;
            }
        }
    }
}

.microphone {
    z-index: 30;
    position: absolute;
    top: -.5em;
    left: -.8em;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    color: rgba(#fff, .5);
    transition: opacity .3s, transform .3s, color .2s;

    &:hover {
        color: rgba(#fff, .8);
    }
    
    svg {
        z-index: 2;
        position: relative;
        font-size: 2em;
        width: 1em;
        height: 1em;
    }
    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        opacity: 0;
    }
    &:after {
        z-index: 1;
        background: rgba(#fff, .1);
        transition: opacity .3s;
    }

    &:before {
        z-index: 2;
        border: 3px solid rgba(#fff, .1);
        opacity: 0;
    }

    &.is-listening {
        color: rgba(#D82E2E, 1);
        &:before {
            animation: pulseAway 1s infinite;
        }
        &:after {
            opacity: 1;
            animation: pulse 1.5s linear infinite;
        }
    }

    .voice-tooltip {
        position: absolute;
        top: 110%;
        left: 25px;
        padding: .4em .6em;
        color: rgba(#fff, .8);
        
        font-size: .8em;
        font-weight: 300;
        text-transform: uppercase;
        white-space: nowrap;

        background: rgba(#fff, .1);
        border-radius: 3px;

        &:before {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 5px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 5px 5px 5px;
            border-color: transparent transparent rgba(#fff, .1) transparent;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: all .15s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.voices-menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    @media (min-width: 500px) {
        border-radius: 5px;
        overflow: hidden;
    }
    
    &__bg {
        position: absolute;
        top: -15em;
        left: -15em;
        transform-origin: 50% 50%;
        width: 20em;
        height: 20em;
        color: #222;
        transform: scale(0.2);
        transition: transform .3s;
    }

    &__button {
        position: absolute;
        top: 0;
        left: 0;
        padding: .8em .6em;
        color: rgba(#fff, .5);
        opacity: 0;
        cursor: pointer;
        transform: translate3d(1em,0,0);
        transition: opacity .3s, transform .3s, color .2s;

        &:hover {
            color: rgba(#fff, .8);
        }

        > * {
            vertical-align: middle;
            font-weight: 300;
            letter-spacing: 1px;
        }
        svg {
            width: 1.8em;
            height: 1.8em;
        }
    }

    &__close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px 10px;
        font-size: 2em;
        font-weight: 300;
        color: rgba(#fff, .5);
        opacity: 0;
        cursor: pointer;
        transform: translate3d(1em,0,0) rotate(45deg);
        transition: opacity .3s, transform .3s, color .2s;

        svg {
            width: 1em;
            height: 1em;
        }

        &:hover {
            color: rgba(#fff, .8);
        }
    }
}
.voices-list-wrapper {
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    opacity: 0;
}
.voices-list {
    margin: 0;
    padding: 0;

    &__item {
        display: block;
        opacity: 0;
        transform: translate(0,1em);

        &.is-selected {
            .voices-list__icon {
                opacity: 1;
                transform: translate3d(0,0,0) rotate(0);
            }
        }
    }

    &__icon {
        position: relative;
        margin-right: 20px;
        color: $green;
        opacity: 0;
        transform: translate3d(-1em,0,0) rotate(-30deg);
        transition: opacity .2s, transform .2s;

        svg {
            width: 1.2em;
            height: 1.2em;
        }
    }

    &__link {
        display: flex;
        padding: .5em 1.1em;
        font-size: 1.3em;
        font-weight: 300;
        color: rgba(#fff, .8);
        text-decoration: none;

        &:hover {
            background: rgba(#fff, .05);
        }

        span {
            display: inline-block;
            vertical-align: middle;
        }
    }

    &__content {
        line-height: 1;
        span {
            font-size: .5em;
        }
    }

    &__default {
        color: $green;
    }
}

.menu {
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__button {
        z-index: 30;
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
        padding: 1.5em 1em;
        cursor: pointer;

        &:hover {
            .menu__dot,
            .menu__dot:before,
            .menu__dot:after {
                background: rgba(#fff, .8);
            }
        }
    }
    &__dot {
        position: relative;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        background: rgba(#fff, .5);
        transition: background .2s;
        
        &:before,
        &:after {
            position: absolute;
            content: '';
            border-radius: 50%;
            width: 6px;
            height: 6px;
            background: rgba(#fff, .5);
            transition: background .2s;
        }
        &:before {
            top: 10px;
        }
        &:after {
            bottom: 10px;
        }
    }

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    &__item {
        overflow: hidden;
        opacity: 0;
        transform: translate3d(0,100%,0);
        transition: .4s transform, .4s opacity;

        a {
            font-size: 1.8em;
            font-weight: 300;
            display: block;
            color: rgba(#fff, .5);
            text-transform: uppercase;
            text-decoration: none;
            padding: .5em 1.5em;

            span {
                display: inline-block;
                vertical-align: middle;
                transition: transform .3s;
            }

            &:hover,
            &:focus {
                svg {
                    transform: scale(1.2);
                }

                .water-glass__water {
                    fill: $blue-light;
                    transform: scale(1,.8);
                }
                .coffee-cup__coffee {
                    fill: #BF9E87;
                    transform: scale(1,.8);
                }
                .beer-glass__beer {
                    fill: #E18E02;
                    transform: scale(1,.8);
                }
                .clock__short {
                    fill: #02C39A;
                    transform-origin: 0% 50%;
                    transform: rotate(20deg);
                    transition: transform 1s, color .2s;
                }
                .clock__long {
                    fill: #02C39A;
                    transition: transform 1s, color .2s;
                    transform-origin: 50% 95%;
                    transform: rotate(360deg);
                }
            }
        }

        svg {
            display: inline-block;
            vertical-align: middle;
            width: 1em;
            height: 1em;
            margin-right: 1em;
            transition: transform .3s;

            path {
                fill: #fff;
                transition: all .3s;
                transform-origin: 100% 100%;
            }
        }

    }
}

.browser-support {
    color: #fff;
    font-size: .8rem;
    text-align: center;
    padding: .5rem;
}

.content {
    z-index: 20;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.time {
    overflow: hidden;
    padding: 1em;    
    font-size: 1.1em;
    text-align: center;
    transition: .5s .2s opacity, .5s transform .2s;
}

.timer__item {
  transition: all 1s;
  margin-right: 10px;
  color: rgba(#fff, .8);

  &:first-child,
  &:nth-child(3) {
      color: rgba(#fff,.2);
  }
}
.timer-enter, .timer-leave-to {
  opacity: 0;
  transform: translate3d(0,-100%,0);
}
.timer-leave-to {
    transition-duration: .5s;
}
.timer-leave-active {
    transform: translate3d(0,0,0);
}

.percent {
    z-index: 2;
    position: relative;
    font-size: 7em;
    font-weight: 100;
    color: rgba(#fff, 0.7);
    transition: .4s .2s opacity, .4s .2s transform;

    > div {
        display: inline-block;
    }
    > span {
        margin-left: -.4em;
        font-size: .5em;
    }
}
.percent-left-enter-active, .percent-left-leave-active {
  transition: transform .1s ease;
}
.percent-left-enter, .percent-left-leave-to {
  transform: scale(1.05);
}

button {
    z-index: 20;
    position: absolute;
    display: block;
    width: 70%;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 1.5em;
    padding: .6em;

    color: rgba(#fff, 0.8);
    font-size: 1.1em;
    font-weight: 300;
    letter-spacing: 1px;    
    text-transform: uppercase;

    background: transparent;
    border: 1px solid rgba(#fff, 0.8);
    border-radius: 2em;
    outline: none;
    transition: .2s background, .4s .3s transform, .4s .3s opacity;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: currentColor;
    }
}
.waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    transition: .4s transform ease;
    transform-origin: bottom center;

    @media (min-width: 500px) {
        border-radius: 5px;
    }
}
.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: wave 1s linear infinite;

    &--front {
        z-index: 2;
        color: $blue-light;
    }

    &--back {
        z-index: 1;
        color: $blue;
        animation-direction: reverse;
    }
}

.water {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: currentColor;

    svg {
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        bottom: 99.9%;
    }
}
.water:first-of-type {
    transform: translate(-100%,0);
}

svg {
    fill: currentColor;
}

@keyframes wave{
    0% {
        transform: translate3d(0,0,0);
    }
    50% {
        transform: translate3d(50%,.5em,0);
    }
    100% {
        transform: translate3d(100%,0,0);
    }
}

@keyframes pulse{
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes pulseAway {
    0% {
        opacity: 0;
        transform: scale(.5);
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: scale(1.4);
    }
}
