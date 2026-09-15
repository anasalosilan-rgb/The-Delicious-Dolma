<template>
  <div v-if="isOpen" class="store-notice-banner" role="alert">
    <div class="banner-container">
      <div class="banner-content">
        <span class="banner-icon">⏳</span>
        <span>{{ message }}</span>
      </div>
      <button v-if="showButton" class="banner-action-btn" @click="$emit('notify')">
        نبهني عند الفتح
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: true
  },
  message: {
    type: String,
    default: 'المتجر متوقف عن استقبال الطلبات حالياً. سنعاود العمل قريباً!'
  },
  showButton: {
    type: Boolean,
    default: true
  }
});

defineEmits(['notify']);
</script>

<style scoped>
.store-notice-banner {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff3cd;
  color: #856404;
  border-bottom: 1px solid #ffeeba;
  padding: 12px 20px;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  direction: rtl;
}

.banner-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
}

.banner-icon {
  font-size: 18px;
}

.banner-action-btn {
  background-color: #856404;
  color: #ffffff;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
</style>
