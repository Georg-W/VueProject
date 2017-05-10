<template>
  <Button>
    <router-link to="/buyTree">{{ title }}</router-link>
  </Button>
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
