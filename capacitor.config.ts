import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.parallelpalettes.app',
  appName: 'Parallel Palettes',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    StatusBar: {
      style: 'DARK' as any,
      backgroundColor: '#020617',
    },
    Keyboard: {
      resize: 'body' as any,
    },
  },
  server: {
    androidScheme: 'https',
  },
};

export default config;

