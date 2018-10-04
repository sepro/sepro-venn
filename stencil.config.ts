import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencilvenn',
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
