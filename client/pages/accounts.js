import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'

// Use JSON.stringify(value, replacer, space) to display accounts
const Accounts = ({ accounts }) => (
  <div>
    <h1>Decentralised App Accounts</h1>
    <pre>{JSON.stringify(accounts, null, 4)}</pre>
    <div><Link href='/dapp'><a>My Dapp</a></Link></div>
    <div><Link href='/'><a>Home</a></Link></div>
  </div>
)

const accountsContainer = () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ accounts }) => <Accounts accounts={accounts} />}
  />
)
export default accountsContainer