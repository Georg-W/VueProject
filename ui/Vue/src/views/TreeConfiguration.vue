
<template>
  <div class="treeConfiguration">
    <h1>{{ msg }}</h1>
    <CustomButton title="Go to checkout" start=false></CustomButton>
  </div>
</template>

<script>
  import CustomButton from '../components/CustomButton';

  export default {
    name: 'treeConfiguration',
    data() {
      return {
        msg: 'TODO configure your tree!',
      };
    },
    components: {
      CustomButton,
    },
  };
</script>

