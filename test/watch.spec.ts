import test from 'ava'
import { reactive, ref } from '@vue/reactivity'
import { watch, watchEffect } from '../src'

test('should work', (t) => {
  let triggered = 0
  const counter = ref(0)

  const stop = watch(counter, () => {
    triggered += 1
  })

  counter.value += 1
  t.is(counter.value, 1)
  t.is(triggered, 1)

  stop()
})

test('should work with deep reactive', (t) => {
  let triggered = 0
  const state = reactive<any>({
    foo: {
      bar: 'hi',
    },
  })

  const stop = watch(state, () => {
    triggered += 1
  })

  state.foo.bar = 'hello'
  t.is(triggered, 1)
  state.world = 'yes'
  t.is(triggered, 2)

  stop()
})

test('should work with watchEffect', (t) => {
  let sync = -1
  const counter = ref(0)

  const stop = watchEffect(() => {
    sync = counter.value
  })

  t.is(sync, 0)
  counter.value += 1
  t.is(sync, 1)
  counter.value = 100
  t.is(sync, 100)

  stop()
})
