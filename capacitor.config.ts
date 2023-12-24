import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.instacourse.app',
  appName: 'InstaCourse',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
