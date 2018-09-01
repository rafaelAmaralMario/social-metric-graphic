<template>
  <div class="footer">
    <div class="container">
      <P>Developed by Rafael Do Amaral Mario. </P>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-template'
}
</script>

<style scoped>

  .footer {
    background-color: #1D6FCA;
    margin-top: 2vh;
    min-height: 6vh;
  }
  .container p {
    flex: 1 auto;
    align-self: flex-end;
  }
</style>
