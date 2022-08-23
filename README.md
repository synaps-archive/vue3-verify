# vue-verify

> Synaps Vue Verify SDK

[![NPM](https://img.shields.io/npm/v/@synaps-io/vue3-verify.svg)](https://www.npmjs.com/package/@synaps-io/vue3-verify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**Synaps is an all-in-one compliance platform**. It offers a simple, fast and secure way to meet compliance requirements at scale.

[Visit Synaps.io](https://synaps.io) | [Read the Synaps documentation](https://docs.synaps.io)

![enter image description here](https://storage.googleapis.com/synaps-docs-media/synaps-verify.png)

## Install
### With npm

```bash
npm install @synaps-io/vue3-verify
```

### With yarn

```bash
yarn add @synaps-io/vue3-verify
```

## Import

```js
import SynapsVerify from '@synaps-io/vue3-verify'
```


## Usage

```vue
<template>
  <div id="app">
    <synaps-verify
      sessionId="f3243476-cec44c4a-5565ccd6-e7e9622d"
      :color="{ primary: '212b39', secondary: 'ffffff' }"
      lang="en"
      service="individual"
      @ready="print('ready')"
      @finish="print('finish')"
    />
  </div>
</template>

<script>
import SynapsVerify from '@synaps-io/vue3-verify'

export default {
  name: "App",
  components: {
    SynapsVerify,
  },
  methods: {
    print(data) {
      console.log(data);
    },
  },
};
</script>
```
### Props list

| Prop name          | Prop type                                                                                           | Default | Required | Description                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------------- |
| `sessionId`        | `string`                                                                                            | `''`    | Y        | Session can be referred as a customer verification session. [More info](https://docs.synaps.io/manager-1/sessions)                                       |
| `service`          | `string`                                                                                            | `''`  | Y        | **individual** - for know your customer **corporate** - for know your business                   |
| `lang`      | `string`                                                                       | `'en'`  | N        | Event listener called on every open/close action                              |
| `tier`      | `int`                                                                       | `null`  | N        | Tier is a simply way to divide your workflow into small pieces. It is very useful when you offer different features based on the verification level of your customer.  [More info](https://docs.synaps.io/manager-1/apps/individual/tiers)                           |
| `color`      | `{primary : string, secondary: string}`                                                                     | `null`  | N        | You can set a primary color and a secondary color, it will create a verification flow tailored to your compliance needs and your brand. |
| `withCloseButton`      | `False`                                                                     | `null`  | N        | This will add a button close at the end of the flow then trigger an event finish. |
| `ready`             | `event`                                                                                           | `null` | N        | Event emited called when the page is fully loaded                                       |
| `finish`   | `event`                                                                                           | `null` | N        | Event emited called when the user finished verification                     |

## Examples
[![Edit vue3-verify](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue3-verify-7yocpg?fontsize=14&hidenavigation=1&theme=dark)
## License

Apache 2.0 © [Synaps](https://www.synaps.io/)