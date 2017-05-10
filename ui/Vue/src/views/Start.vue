
<template>
  <div class="start">
    <h1>{{ msg }}</h1>
    <CustomButton title="Buy a tree" start=true></CustomButton>
  </div>
</template>

<script>
  import CustomButton from '../components/CustomButton';

  export default {
    name: 'start',
    data() {
      return {
        msg: 'TODO list trees here',
      };
    },
    components: {
      CustomButton,
    },
  };
</script>

