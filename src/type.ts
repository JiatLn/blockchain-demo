export interface IBlockChain {
  hash: string
  ver: number
  prev_block: string
  mrkl_root: string
  time: number
  bits: number
  next_block: string[]
  fee: number
  nonce: number
  n_tx: number
  size: number
  block_index: number
  main_chain: boolean
  height: number
  weight: number
  tx: ITx[]
}

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
