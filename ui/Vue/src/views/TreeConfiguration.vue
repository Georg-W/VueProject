
<template>
  <div class="treeConfiguration">
    <h1>{{ msg }}</h1>
    <Button title="Go to checkout"></Button>
  </div>
</template>

<script>
  import Button from '../components/Button';

  export default {
    name: 'treeConfiguration',
    data() {
      return {
        msg: 'TODO configure your tree!',
      };
    },
    components: {
      Button,
    },
  };
</script>

