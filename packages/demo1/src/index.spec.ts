import { ApiPromise, WsProvider } from '@polkadot/api'
import { usePolkadotUtils } from '.'

describe('demo1 test', () => {
  it('should pass', () => {
    const hex = usePolkadotUtils('woss')
    console.log(hex)
  })
  it('should connect to the node', async (): Promise<void> => {
    const url = 'ws://127.0.0.1:9944'
    const provider = new WsProvider(url)
    const api = await ApiPromise.create({
      types: {
        Address: 'AccountId',
        LookupSource: 'AccountId',
        GenericId: 'Vec<u8>',
        CreatorId: 'Vec<u8>',
        DefaultsHashing: {
          algo: 'Vec<u8>',
          bits: 'u32',
        },
        DefaultsEncoding: {
          algo: 'Vec<u8>',
          prefix: 'bool',
        },
        DefaultsCid: {
          version: 'u8',
          base: 'Vec<u8>',
          codec: 'Vec<u8>',
        },
        DefaultValues: {
          hashing: 'DefaultsHashing',
          encoding: 'DefaultsEncoding',
          cid: 'DefaultsCid',
        },
        ForWhat: {
          _enum: ['GENERIC', 'PHOTO', 'CAMERA', 'LENS', 'SMARTPHONE', 'USER', 'SYS', 'FLOWCONTROL'],
        },
        CustomInputParam: {
          data: 'Vec<u8>',
          decoded: 'Vec<u8>',
        },
        OperationOutput: {
          desc: 'Vec<u8>',
          output: 'Vec<u8>',
          decoded: 'Vec<u8>',
        },
        OperationInfo: {
          operation: 'Operation',
          accountId: 'AccountId',
          blockNumber: 'BlockNumber',
        },
        Operation: {
          id: 'GenericId',
          data: 'OperationData',
        },
        OperationData: {
          name: 'Vec<u8>',
          desc: 'Vec<u8>',
          input: 'Vec<CustomInputParam>',
          output: 'OperationOutput',
          hashingOp: 'Vec<u8>',
          encOp: 'Vec<u8>',
          groups: 'Vec<ForWhat>',
          priority: 'u32',
          ops: 'Vec<Operation>',
        },
        ChildOutput: 'Vec<u8>',
        ProofParams: {
          k: 'Vec<u8>',
          v: 'Vec<u8>',
        },
        ProofInfo: {
          proof: 'Proof',
          accountId: 'AccountId',
          blockNumber: 'BlockNumber',
        },
        Proof: {
          id: 'GenericId',
          data: 'ProofData',
        },
        ProofData: {
          ruleId: 'GenericId',
          prevId: 'GenericId',
          creator: 'CreatorId',
          groups: 'Vec<ForWhat>',
          params: 'Vec<ProofParams>',
        },
        RuleInfo: {
          rule: 'Rule',
          accountId: 'AccountId',
          blockNumber: 'BlockNumber',
        },
        PhashInfo: {
          pHash: 'Vec<u8>',
          proofId: 'GenericId',
        },
        Rule: {
          id: 'GenericId',
          data: 'RuleData',
        },
        OperationReference: {
          id: 'GenericId',
          children: 'Vec<OperationReference>',
        },
        RuleData: {
          version: 'u32',
          name: 'Vec<u8>',
          desc: 'Vec<u8>',
          creator: 'CreatorId',
          groups: 'Vec<ForWhat>',
          parentId: 'GenericId',
          ops: 'Vec<OperationReference>',
        },
        Proportion: {
          sign: 'Vec<u8>',
          name: 'Vec<u8>',
          value: 'Vec<u8>',
        },
        Validity: {
          from: 'Vec<u8>',
          until: 'Vec<u8>',
        },
        ExpirationType: {
          _enum: ['FOREVER', 'YEARS', 'MONTHS', 'DAYS', 'MINUTES', 'SECONDS'],
        },
        Expiration: {
          expirationType: 'ExpirationType',
          value: 'Vec<u8>',
        },
        AnagolayClaimType: {
          _enum: ['COPYRIGHT', 'OWNERSHIP'],
        },
        AnagolayClaim: {
          prevId: 'GenericId',
          poeId: 'GenericId',
          ruleId: 'GenericId',
          proportion: 'Proportion',
          subjectId: 'GenericId',
          holder: 'CreatorId',
          issuer: 'Vec<u8>',
          claimType: 'AnagolayClaimType',
          valid: 'Validity',
          expiration: 'Expiration',
          onExpiration: 'Vec<u8>',
        },
        AnagolaySignature: {
          sigKey: 'Vec<u8>',
          sig: 'Vec<u8>',
          cid: 'GenericId',
        },
        AnagolaySignatures: {
          holder: 'AnagolaySignature',
          issuer: 'AnagolaySignature',
        },
        StatementData: {
          signatures: 'AnagolaySignatures',
          claim: 'AnagolayClaim',
        },
        AnagolayStatement: {
          id: 'GenericId',
          data: 'StatementData',
        },
        StatementInfo: {
          statement: 'AnagolayStatement',
          accountId: 'AccountId',
          blockNumber: 'BlockNumber',
        },
      },
      provider,
    })

    // Retrieve the chain & node information information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version(),
    ])

    console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`)
    api.disconnect()
  })
})
