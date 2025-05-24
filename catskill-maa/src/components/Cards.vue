<script setup lang="ts">

</script>

<template>
    <div class="box mainbox">
    <div class="columns is-desktop">
        <div class="column floating">
            <div class="box hover-underline">
                <img src="/image1.jpg" alt="Image 1"/>
            </div>
        </div>
        <div class="column floating">
            <div class="box down hover-underline">
                <img src="/image2.jpg" alt="Image 2"/>
            </div>
        </div>
        <div class="column floating ">
            <div class="box hover-underline">
                <img src="/image3.jpg" alt="Image 3"/>
            </div>
        </div>
        <div class="column floating rightside">
            <div class="box down hover-underline">
                <img src="/image4.jpg" alt="Image 4"/>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.hover-underline {
  font-size: 2rem;
  color: #ffffff;
  position: relative;
  display: inline-block;
}

.hover-underline::after,
.hover-underline::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #ff0000, #00ffff);
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease-out;
}

.hover-underline::before {
  top: -5px;
  transform-origin: left;
}

.hover-underline:hover::after,
.hover-underline:hover::before {
  transform: scaleX(1);
}

.floating {
            
            border-radius: 50%;
            position: relative;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-20px);
            }

            100% {
                transform: translateY(0);
            }
        }


.columns {
    width: 100%;
}
    .cardimages {
        width: 300px!important;
        justify-content: center;
    }
    
    .box {
        background-color: transparent;
        width: 300px;
    }
    .down {
        margin-top: 200px;
    }

    .mainbox {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    @media screen and (max-width: 720px) {
        .mainbox {
            padding-top: 230px;
        }
        .down {
            margin-top: 0px;
        }
    }
    @media screen and (max-width: 1024px) {
        .mainbox {
            margin-top: 0px;
            
        }
        .down {
            margin-top: 0px;
        }
        
    }
    .rightside {
        padding-right: 0px;
    }
</style>