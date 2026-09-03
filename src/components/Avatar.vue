<template>
  <div
    class="rg-avatar"
    :style="{
      width: size + 'px',
      height: size + 'px',
      borderRadius: square ? radius + 'px' : '9999px',
      background: showImg ? '#EAF0F6' : (type === 'building' ? '#003765' : bg),
    }"
  >
    <img
      v-if="showImg"
      :src="resolvedSrc"
      class="rg-avatar__img"
      :alt="name || ''"
      @error="broken = true"
    />
    <span
      v-else-if="type === 'user'"
      class="rg-avatar__initials"
      :style="{ fontSize: Math.round(size * 0.4) + 'px' }"
    >{{ letters }}</span>
    <img
      v-else
      :src="logoMark"
      class="rg-avatar__glyph"
      :style="{ width: Math.round(size * 0.62) + 'px', height: Math.round(size * 0.62) + 'px' }"
      alt=""
    />
  </div>
</template>

<script>
import { initials, avatarColor } from '@/components/hook/hook';
import logoMark from '@/assets/img/Logo-01.png';

const API = 'https://api.resguru.app';

export default {
  name: 'Avatar',
  props: {
    src: { type: String, default: '' },
    name: { type: String, default: '' },
    type: { type: String, default: 'user' }, // 'user' | 'building'
    size: { type: [Number, String], default: 40 },
    square: { type: Boolean, default: false },
    radius: { type: [Number, String], default: 12 },
  },
  data() {
    return { broken: false, logoMark };
  },
  watch: {
    src() {
      this.broken = false;
    },
  },
  computed: {
    resolvedSrc() {
      const s = (this.src || '').trim();
      if (!s) return '';
      if (/^(https?:|data:|blob:)/.test(s)) return s;
      return API + (s.startsWith('/') ? s : '/' + s);
    },
    showImg() {
      return !!this.resolvedSrc && !this.broken;
    },
    letters() {
      return initials(this.name);
    },
    bg() {
      return avatarColor(this.name);
    },
  },
};
</script>

<style scoped>
.rg-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  line-height: 1;
}
.rg-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.rg-avatar__initials {
  color: #fff;
  font-weight: 700;
  font-family: 'Prompt', sans-serif;
  user-select: none;
}
.rg-avatar__glyph {
  object-fit: contain;
  display: block;
}
</style>
