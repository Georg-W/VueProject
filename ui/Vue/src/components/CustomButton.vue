
<template>
  <div>
    <Button>
      <router-link to="/">{{ title }}</router-link>
    </Button>
    <Button >
      <p>heyy</p>
      <router-link to="/buyTree">{{ title }}</router-link>
    </Button>
  </div>
</template>

<script>
  module.exports = {
    props: {
      title: {},
      start: {
        default: true,
      },
    },
  };
</script>
