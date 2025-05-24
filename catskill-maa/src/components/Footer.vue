<script setup lang="ts">

</script>

<template>
    <footer class="footer py-0   ">
        <div class="container">
            <h2 class="title has-text-centered is-2 mb-2 ">Start your journey today!</h2>

            <div class="columns is-variable is-6 is-multiline has-text-centered-mobile">
                <div class="column is-half-tablet is-one-third-desktop">
                    <h3 class="title is-5">Address</h3>
                    <p class="subtitle is-6">1175 NY-52<br />Loch Sheldrake, NY 12759</p>
                </div>

                <div class="column is-half-tablet is-one-third-desktop">
                    <h3 class="title is-5">Contact</h3>
                    <p class="subtitle is-6">Phone: (845) 423-949</p>
                    <p class="subtitle is-6"></p>
                </div>
            </div>
        </div>
    </footer >
</template>

<style scoped lang="scss">
@use '../../catskill-maa.scss' as *;
    .footer {
        background-color: $white;
        margin-top: 0px;   
        height: 300px;     
    }
    .title {
        color:black;
    }
    .subtitle {
        color: darkblue;
    }
</style>