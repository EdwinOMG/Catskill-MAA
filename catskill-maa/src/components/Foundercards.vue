<script setup lang="ts">

</script>

<template>
 <!-- Donald Belsito Section -->
<div class="container">
<div class="founder-block">
  <div class="media is-align-items-center">
    <figure class="media-left image is-128x128">
      <img src="/donaldbelsito.jpg" alt="Donald Belsito" />
    </figure>
    <div class="media-content">
      <h1 class="title nametitle has-text-black">Donald Belsito</h1>
      <h2 class="subtitle roletitle has-text-black is-4">Grandmaster and Head Instructor</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eos provident dolor nihil, nam necessitatibus reiciendis ipsam eligendi voluptatum accusamus quam perferendis officia ut iusto accusantium nulla corporis? Nulla, esse.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum iure itaque quia magnam sint atque, qui repudiandae dolorem illum porro. Debitis nostrum nobis saepe perspiciatis ipsa consequuntur eveniet laboriosam?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque exercitationem quo autem recusandae hic vero eius maxime molestias, iste iusto aperiam minima in dignissimos consequuntur, eligendi necessitatibus, deserunt cumque!
      </p>
    </div>
  </div>
</div>

<!-- Walter Belsito Section -->
<div class="founder-block mt-5">
  <div class="media is-align-items-center">
    <div class="media-content has-text-right">
      <h1 class="title nametitle has-text-black">Walter Belsito</h1>
      <h2 class="subtitle roletitle has-text-black is-4">Founder and Grandmaster</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eos provident dolor nihil, nam necessitatibus reiciendis ipsam eligendi voluptatum accusamus quam perferendis officia ut iusto accusantium nulla corporis? Nulla, esse.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum iure itaque quia magnam sint atque, qui repudiandae dolorem illum porro. Debitis nostrum nobis saepe perspiciatis ipsa consequuntur eveniet laboriosam?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque exercitationem quo autem recusandae hic vero eius maxime molestias, iste iusto aperiam minima in dignissimos consequuntur, eligendi necessitatibus, deserunt cumque!
      </p>
    </div>
    <figure class="media-right image is-128x128 ml-4">
      <img src="/walterbelsito.png" alt="Walter Belsito" />
    </figure>
  </div>
</div>
</div>
</template>

<style scoped lang="scss">
@use '../../catskill-maa.scss' as *;
.nametitle {
    padding-bottom: 12px;
}
.container {
    padding-top: 110px;
}
.founder-block {
  margin-bottom: 2rem;
}

.media {
  align-items: center;
}

.media-left,
.media-right {
  flex: none;
}

.media-content {
  flex: 1;
  text-align: left;
}

.media-content.has-text-right {
  text-align: right;
}

.image.is-128x128 {
  width: 128px;
  height: 128px;
  overflow: hidden;
  border-radius: 8px;
}
</style>