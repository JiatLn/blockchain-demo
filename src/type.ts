export interface IBlockChain {
  hash: string
  ver: number | string
  prev_block: string
  mrkl_root: string
  time: number | string
  bits: number | string
  next_block: string[]
  fee: number | string
  nonce: number | string
  n_tx: number | string
  size: number | string
  block_index: number
  main_chain: boolean
  height: number | string
  weight: number | string
  tx: ITx[]
}

export type BlockChainSummary = Omit<IBlockChain, 'tx' | 'prev_block' | 'next_block'>

export interface ITx {
  hash: string
  ver: number
  vin_sz: number
  vout_sz: number
  size: number
  weight: number
  fee: number
  relayed_by: string
  lock_time: number
  tx_index: number
  double_spend: boolean
  time: number
  block_index: number
  block_height: number
  inputs: IInput[]
  out: IOut[]
}

export interface IInput {
  sequence: number
  witness: string
  script: string
  index: number
  prev_out: IPrev_out
}

export interface IPrev_out {
  tx_index: number
  value: number
  n: number
  type: number
  spent: boolean
  script: string
  spending_outpoints: ISpending_outpoint[]
  addr: string
}

export interface ISpending_outpoint {
  tx_index: number
  n: number
}

export interface IOut {
  type: number
  spent: boolean
  value: number
  spending_outpoints: ISpending_outpoint[]
  n: number
  tx_index: number
  script: string
  addr: string
}
