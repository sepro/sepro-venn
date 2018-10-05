import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sepro-venn',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
