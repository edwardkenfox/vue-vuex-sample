<template>
  <div class="gif mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <img :src="gif.images.fixed_height.url">
    </div>
    <div class="mdl-card__actions">
      <span class="filename">{{gif.slug}}</span>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      gif: Object
    }
  }
</script>

<style>
.gif {
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content:space-between;
  margin-bottom: 60px;
}
.gif.mdl-card {
  width: 256px;
  height: 256px;
}
.gif> .mdl-card__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}
.gif> .mdl-card--expand>  {
  display: flex;
  justify-content: center;
}
.filename {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
</style>
