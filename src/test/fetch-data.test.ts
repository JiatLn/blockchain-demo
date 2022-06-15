import { expect, it } from 'vitest'
import { getBlockChainApi } from '@/api/blockchain'

it('can fetch data', async () => {
  const blockHash = '000000004ebadb55ee9096c9a2f8880e09da59c0d68b1c228da88e48844a1485'
  const data = await getBlockChainApi(blockHash)
  expect(data.hash).toEqual(blockHash)
  expect(data).toMatchSnapshot()
})

it('fetch data with invalid-arg', async () => {
  try {
    await getBlockChainApi('pineapples')
  }
  catch (err: any) {
    expect(err.error).toEqual('not-found-or-invalid-arg')
  }
})

it('throw error', async () => {
  await expect(
    () => getBlockChainApi('pineapples'),
  ).rejects.toThrowError('Item not found or argument invalid')
})
