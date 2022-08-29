<template>
  <section id="landing">
    <h1>TCD Gaming</h1>
    <h3>The place that provides you with the best games</h3>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#landing {
  background-image: url(https://i.postimg.cc/13H3V9RV/Home.jpg);
  background-size: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
#landing h1,
#landing h3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  font-family: sans-serif;
  text-shadow: 1px 4px 8px black;
}
</style>
