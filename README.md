<h3 align='center'><samp>@vue-reactivity/watch</samp></h3>

<p align='center'>
The missing <code>watch</code> for <a href="https://github.com/vuejs/vue-next/tree/master/packages/reactivity"><code>@vue/reactivity</code></a>. Works without Vue.</p>

<p align='center'>
  <a href="https://www.npmjs.com/package/@vue-reactivity/watch"><img src="https://img.shields.io/npm/v/@vue-reactivity/watch" alt="npm"></a>
  <a href="https://bundlephobia.com/result?p=@vue-reactivity/watch"><img src="https://img.shields.io/bundlephobia/minzip/@vue-reactivity/watch" alt="npm bundle size"></a>
  <img src="https://img.shields.io/github/workflow/status/antfu/vue-reactivity-watch/Test" alt="GitHub Workflow Status">
</p>


## Install

```bash
npm i @vue-reactivity/watch
```

### Usage

> Note: since there is no Vue instance to be bond, `watch` will not be auto disposed. You need to always **explicitly** call the returning function to stop it.

Just like what you do in Vue.

```ts
import { ref, reactive, computed } from '@vue/reactivity'
import { watch, watchEffect } from '@vue-reactivity/watch'

const count = ref(1)

const stopWatch = watch(
  count,
  (newValue) => {
    console.log(`Count: ${newValue}`)
  }
)

count.value += 1
// Count: 2

stopWatch()
```

## License

MIT
