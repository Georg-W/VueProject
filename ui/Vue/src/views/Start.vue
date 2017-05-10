
<template>
  <div class="start">
    <h1>{{ msg }}</h1>
    <Button title="Buy a tree"></Button>
  </div>
</template>

<script>
  import Button from '../components/Button';

  export default {
    name: 'start',
    data() {
      return {
        msg: 'start',
      };
    },
    components: {
      Button,
    },
  };
</script>

