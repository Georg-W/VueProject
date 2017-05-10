<template>
  <Button> {{ title }} </Button>
</template>

<script>
  module.exports = {
    data() {
      return {
        title: 'ButtonTitle',
      };
    },
    props: ['title'],
  };
</script>
