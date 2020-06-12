<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>Oops</h1>

      <blockquote>I might have renamed this note, or this note is not ready yet</blockquote>

      <a
        type="button"
        href="/"
        @click.prevent="hasHistory()  ? $router.go(-1)  : $router.push('/')"
      >Go back</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hasHistory() {
      return window.history.length > 2;
    }
  }
};
</script>