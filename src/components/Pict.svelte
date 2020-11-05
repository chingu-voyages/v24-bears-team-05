<script>
  export let path;
</script>

<style>
  picture {
    display: contents;
  }
</style>

<!--
@component
This reusable lazy picture component creates a fallback with the given image path/name in webp and uses avif otherwise.
Utilizes`display: contents` to bypass picture interruptive styles.

Usage:

```html
<Pict path="/images/home/beans" let:props>
  <img class="your-class" alt="Alt description" {...props} />
</Pict>
```
-->

<picture>
  <source srcset="{path}.avif" type="image/avif" />
  <slot props={{ loading: 'lazy', src: `${path}.webp` }} />
</picture>
