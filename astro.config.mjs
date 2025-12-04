// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'home',
          'lock', 
          'upload',
          'statistics',
          'document',
          'voice-presentation',
          'survey',
          'idea',
          'google',
        ],
      },
    }),
  ],
});
