

# Header

## Sub Header













<script setup>
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';

onMounted(() => {
  mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
});
</script>

<style>
.medium-zoom-overlay {
  z-index: 30;
}

.medium-zoom-image {
  z-index: 31;
}
</style>