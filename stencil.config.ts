import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sepro-venn',
  outputTargets:[
    {
      type: 'dist',
      buildDir: 'sepro-venn'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
