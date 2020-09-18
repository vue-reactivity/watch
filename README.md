<p align='center'>
<img src='https://github.com/vue-reactivity/art/blob/master/svg/package-watch.svg?raw=true' height='250'>
</p>

<p align='center'>
The (missing) <kbd>watch</kbd> for <a href="https://github.com/vuejs/vue-next/tree/master/packages/reactivity"><code>@vue/reactivity</code></a>. Works without Vue.</p>

<p align='center'>
  <a href="https://www.npmjs.com/package/@vue-reactivity/watch"><img src="https://img.shields.io/npm/v/@vue-reactivity/watch?color=43b883&label=" alt="npm"></a>
  <a href="https://bundlephobia.com/result?p=@vue-reactivity/watch"><img src="https://img.shields.io/bundlephobia/minzip/@vue-reactivity/watch?color=364a5e&label=" alt="npm bundle size"></a>
</p>

<p align='center'>
  <em>want to now how it works or write one on your own? Check out <a href='https://antfu.me/posts/watch-with-reactivity/'>this blog post</a></em>
</p>


## Install

<pre>
npm i @vue-reactivity/<b>watch</b>
</pre>

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
