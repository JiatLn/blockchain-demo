import { describe, expect, test } from 'vitest'

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('@/components/BlockItem.vue')
    expect(cmp).toBeDefined()
  })

  test('dynamic imports as expected', async () => {
    const name = 'BlockItem'
    const cmp = await import(`@/components/${name}.vue`)
    expect(cmp).toBeDefined()
  })
})
