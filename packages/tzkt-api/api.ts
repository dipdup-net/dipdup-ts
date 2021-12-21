/**
 * TzKT API
 * v1.5.2
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
    baseUrl: "http://127.0.0.1:5000",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
    server1: "http://127.0.0.1:5000"
};
export type AccountTypeParameter = {
    eq?: string | null;
    ne?: string | null;
};
export type ContractKindParameter = {
    eq?: string | null;
    ne?: string | null;
    "in"?: string[] | null;
    ni?: string[] | null;
};
export type AccountParameter = {
    eq?: string | null;
    ne?: string | null;
    "in"?: string[] | null;
    ni?: string[] | null;
    eqx?: string | null;
    nex?: string | null;
    "null"?: boolean | null;
};
export type Int64Parameter = {
    eq?: number | null;
    ne?: number | null;
    gt?: number | null;
    ge?: number | null;
    lt?: number | null;
    le?: number | null;
    "in"?: number[] | null;
    ni?: number[] | null;
};
export type BoolParameter = {
    eq?: boolean | null;
    "null"?: boolean | null;
};
export type Int32Parameter = {
    eq?: number | null;
    ne?: number | null;
    gt?: number | null;
    ge?: number | null;
    lt?: number | null;
    le?: number | null;
    "in"?: number[] | null;
    ni?: number[] | null;
};
export type SelectParameter = {
    fields?: string[] | null;
    values?: string[] | null;
};
export type SortParameter = {
    asc?: string | null;
    desc?: string | null;
};
export type OffsetParameter = {
    el?: number | null;
    pg?: number | null;
    cr?: number | null;
};
export type Account = {
    "type": string;
};
export type DelegateInfo = {
    alias?: string | null;
    address?: string | null;
    active?: boolean;
};
export type RelatedContract = {
    kind?: string | null;
    alias?: string | null;
    address?: string | null;
    balance?: number;
    delegate?: (DelegateInfo) | null;
    creationLevel?: number;
    creationTime?: string | null;
};
export type Delegator = {
    "type"?: string | null;
    alias?: string | null;
    address?: string | null;
    balance?: number;
    delegationLevel?: number;
    delegationTime?: string;
};
export type DateTimeParameter = {
    eq?: string | null;
    ne?: string | null;
    gt?: string | null;
    ge?: string | null;
    lt?: string | null;
    le?: string | null;
    "in"?: string[] | null;
    ni?: string[] | null;
};
export type StringParameter = {
    eq?: string | null;
    ne?: string | null;
    "as"?: string | null;
    un?: string | null;
    "in"?: string[] | null;
    ni?: string[] | null;
    "null"?: boolean | null;
};
export type JsonParameter = {
    eq?: string | null;
    ne?: string | null;
    gt?: string | null;
    ge?: string | null;
    lt?: string | null;
    le?: string | null;
    "as"?: string | null;
    un?: string | null;
    "in"?: string | null;
    ni?: string | null;
    "null"?: string | null;
};
export type OperationStatusParameter = {
    eq?: string | null;
    ne?: string | null;
};
export type SortMode = "Ascending" | "Descending";
export type MichelineFormat = "Json" | "JsonString" | "Raw" | "RawString";
export type Symbols = "None" | "Btc" | "Eur" | "Usd" | "Cny" | "Jpy" | "Krw" | "Eth";
export type Operation = {
    "type": string;
};
export type AccountMetadata = {
    kind?: string | null;
    alias?: string | null;
    description?: string | null;
    site?: string | null;
    support?: string | null;
    email?: string | null;
    twitter?: string | null;
    telegram?: string | null;
    discord?: string | null;
    reddit?: string | null;
    slack?: string | null;
    github?: string | null;
    gitlab?: string | null;
    instagram?: string | null;
    facebook?: string | null;
    medium?: string | null;
};
export type QuoteShort = {
    btc?: number | null;
    eur?: number | null;
    usd?: number | null;
    cny?: number | null;
    jpy?: number | null;
    krw?: number | null;
    eth?: number | null;
};
export type HistoricalBalance = {
    level?: number;
    timestamp?: string;
    balance?: number;
    quote?: (QuoteShort) | null;
};
export type BigMapTagsParameter = {
    eq?: string[] | null;
    "any"?: string[] | null;
    all?: string[] | null;
};
export type Alias = {
    alias?: string | null;
    address?: string | null;
};
export type BigMap = {
    ptr?: number;
    contract?: (Alias) | null;
    path?: string | null;
    tags?: string[] | null;
    active?: boolean;
    firstLevel?: number;
    lastLevel?: number;
    totalKeys?: number;
    activeKeys?: number;
    updates?: number;
    keyType?: any | null;
    valueType?: any | null;
};
export type BigMapActionParameter = {
    eq?: string | null;
    ne?: string | null;
    "in"?: string[] | null;
    ni?: string[] | null;
};
export type BigMapKeyShort = {
    hash?: string | null;
    key?: any | null;
    value?: any | null;
};
export type BigMapUpdate = {
    id?: number;
    level?: number;
    timestamp?: string;
    bigmap?: number;
    contract?: (Alias) | null;
    path?: string | null;
    action?: string | null;
    content?: (BigMapKeyShort) | null;
};
export type PrimType = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99" | "100" | "101" | "102" | "103" | "104" | "105" | "106" | "107" | "108" | "109" | "110" | "111" | "112" | "113" | "114" | "115" | "116" | "117" | "118" | "119" | "120" | "121" | "122" | "123" | "124" | "125" | "126" | "127" | "128" | "129" | "130" | "131" | "132" | "133" | "134" | "135" | "136" | "137" | "138" | "139" | "140";
export type MichelineType = "0" | "32" | "64" | "96" | "128";
export type IMicheline = {
    "type"?: MichelineType;
};
export type AnnotationType = "64" | "128" | "192";
export type IAnnotation = {
    "type"?: AnnotationType;
    value?: string | null;
};
export type MichelinePrim = {
    prim?: PrimType;
    args?: IMicheline[] | null;
    annots?: IAnnotation[] | null;
};
export type BigMapKey = {
    id?: number;
    active?: boolean;
    hash?: string | null;
    key?: any | null;
    value?: any | null;
    firstLevel?: number;
    lastLevel?: number;
    updates?: number;
};
export type BigMapKeyUpdate = {
    id?: number;
    level?: number;
    timestamp?: string;
    action?: string | null;
    value?: any | null;
};
export type BigMapKeyHistorical = {
    id?: number;
    active?: boolean;
    hash?: string | null;
    key?: any | null;
    value?: any | null;
};
export type SoftwareAlias = {
    version?: string | null;
    date?: string;
};
export type EndorsementOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    delegate?: (Alias) | null;
    slots?: number;
    deposit?: number;
    rewards?: number;
    quote?: (QuoteShort) | null;
};
export type PeriodInfo = {
    index?: number;
    epoch?: number;
    kind?: string | null;
    firstLevel?: number;
    lastLevel?: number;
    id?: number;
    startLevel?: number;
    endLevel?: number;
};
export type ProposalAlias = {
    alias?: string | null;
    hash?: string | null;
};
export type ProposalOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    period?: (PeriodInfo) | null;
    proposal?: (ProposalAlias) | null;
    delegate?: (Alias) | null;
    rolls?: number;
    duplicated?: boolean;
    quote?: (QuoteShort) | null;
};
export type BallotOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    period?: (PeriodInfo) | null;
    proposal?: (ProposalAlias) | null;
    delegate?: (Alias) | null;
    rolls?: number;
    vote?: string | null;
    quote?: (QuoteShort) | null;
};
export type ActivationOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    account?: (Alias) | null;
    balance?: number;
    quote?: (QuoteShort) | null;
};
export type DoubleBakingOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    accusedLevel?: number;
    accuser?: (Alias) | null;
    accuserRewards?: number;
    offender?: (Alias) | null;
    offenderLostDeposits?: number;
    offenderLostRewards?: number;
    offenderLostFees?: number;
    quote?: (QuoteShort) | null;
};
export type DoubleEndorsingOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    accusedLevel?: number;
    accuser?: (Alias) | null;
    accuserRewards?: number;
    offender?: (Alias) | null;
    offenderLostDeposits?: number;
    offenderLostRewards?: number;
    offenderLostFees?: number;
    quote?: (QuoteShort) | null;
};
export type NonceRevelationOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    baker?: (Alias) | null;
    bakerRewards?: number;
    sender?: (Alias) | null;
    revealedLevel?: number;
    quote?: (QuoteShort) | null;
};
export type OperationError = {
    "type": string;
};
export type DelegationOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    counter?: number;
    initiator?: (Alias) | null;
    sender?: (Alias) | null;
    nonce?: number | null;
    gasLimit?: number;
    gasUsed?: number;
    bakerFee?: number;
    amount?: number;
    prevDelegate?: (Alias) | null;
    newDelegate?: (Alias) | null;
    status?: string | null;
    errors?: OperationError[] | null;
    quote?: (QuoteShort) | null;
};
export type BigMapDiff = {
    bigmap?: number;
    path?: string | null;
    action?: string | null;
    content?: (BigMapKeyShort) | null;
};
export type OriginatedContract = {
    kind?: string | null;
    alias?: string | null;
    address?: string | null;
    typeHash?: number;
    codeHash?: number;
};
export type OriginationOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    counter?: number;
    initiator?: (Alias) | null;
    sender?: (Alias) | null;
    nonce?: number | null;
    gasLimit?: number;
    gasUsed?: number;
    storageLimit?: number;
    storageUsed?: number;
    bakerFee?: number;
    storageFee?: number;
    allocationFee?: number;
    contractBalance?: number;
    contractManager?: (Alias) | null;
    contractDelegate?: (Alias) | null;
    code?: any | null;
    storage?: any | null;
    diffs?: BigMapDiff[] | null;
    status?: string | null;
    errors?: OperationError[] | null;
    originatedContract?: (OriginatedContract) | null;
    quote?: (QuoteShort) | null;
};
export type TxParameter = {
    entrypoint?: string | null;
    value?: any | null;
};
export type TransactionOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    counter?: number;
    initiator?: (Alias) | null;
    sender?: (Alias) | null;
    nonce?: number | null;
    gasLimit?: number;
    gasUsed?: number;
    storageLimit?: number;
    storageUsed?: number;
    bakerFee?: number;
    storageFee?: number;
    allocationFee?: number;
    target?: (Alias) | null;
    amount?: number;
    parameter?: (TxParameter) | null;
    storage?: any | null;
    diffs?: BigMapDiff[] | null;
    status?: string | null;
    errors?: OperationError[] | null;
    hasInternals?: boolean;
    quote?: (QuoteShort) | null;
    parameters?: string | null;
};
export type RevealOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    hash?: string | null;
    sender?: (Alias) | null;
    counter?: number;
    gasLimit?: number;
    gasUsed?: number;
    bakerFee?: number;
    status?: string | null;
    errors?: OperationError[] | null;
    quote?: (QuoteShort) | null;
};
export type Block = {
    level?: number;
    hash?: string | null;
    timestamp?: string;
    proto?: number;
    priority?: number;
    validations?: number;
    deposit?: number;
    reward?: number;
    fees?: number;
    nonceRevealed?: boolean;
    baker?: (Alias) | null;
    software?: (SoftwareAlias) | null;
    endorsements?: EndorsementOperation[] | null;
    proposals?: ProposalOperation[] | null;
    ballots?: BallotOperation[] | null;
    activations?: ActivationOperation[] | null;
    doubleBaking?: DoubleBakingOperation[] | null;
    doubleEndorsing?: DoubleEndorsingOperation[] | null;
    nonceRevelations?: NonceRevelationOperation[] | null;
    delegations?: DelegationOperation[] | null;
    originations?: OriginationOperation[] | null;
    transactions?: TransactionOperation[] | null;
    reveals?: RevealOperation[] | null;
    quote?: (QuoteShort) | null;
};
export type Commitment = {
    address?: string | null;
    balance?: number;
    activated?: boolean;
    activationLevel?: number | null;
    activationTime?: string | null;
    activatedAccount?: (Alias) | null;
};
export type Int32NullParameter = {
    eq?: number | null;
    ne?: number | null;
    gt?: number | null;
    ge?: number | null;
    lt?: number | null;
    le?: number | null;
    "in"?: number[] | null;
    ni?: number[] | null;
    "null"?: boolean | null;
};
export type CreatorInfo = {
    alias?: string | null;
    address?: string | null;
};
export type ManagerInfo = {
    alias?: string | null;
    address?: string | null;
    publicKey?: string | null;
};
export type Contract = Account & {
    "type"?: string | null;
    kind?: string | null;
    tzips?: string[] | null;
    alias?: string | null;
    address?: string | null;
    balance?: number;
    creator?: (CreatorInfo) | null;
    manager?: (ManagerInfo) | null;
    delegate?: (DelegateInfo) | null;
    delegationLevel?: number | null;
    delegationTime?: string | null;
    numContracts?: number;
    numDelegations?: number;
    numOriginations?: number;
    numTransactions?: number;
    numReveals?: number;
    numMigrations?: number;
    firstActivity?: number;
    firstActivityTime?: string;
    lastActivity?: number;
    lastActivityTime?: string;
    storage?: any | null;
    typeHash?: number;
    codeHash?: number;
    contracts?: RelatedContract[] | null;
    operations?: Operation[] | null;
    metadata?: (AccountMetadata) | null;
};
export type RawJson = {
    json?: string | null;
};
export type EntrypointInterface = {
    name?: string | null;
    parameterSchema?: (RawJson) | null;
};
export type BigMapInterface = {
    path?: string | null;
    name?: string | null;
    keySchema?: (RawJson) | null;
    valueSchema?: (RawJson) | null;
};
export type ContractInterface = {
    storageSchema?: (RawJson) | null;
    entrypoints?: EntrypointInterface[] | null;
    bigMaps?: BigMapInterface[] | null;
};
export type Entrypoint = {
    name?: string | null;
    jsonParameters?: any | null;
    michelineParameters?: (IMicheline) | null;
    michelsonParameters?: string | null;
    unused?: boolean;
};
export type SourceOperation = {
    "type"?: string | null;
    hash?: string | null;
    counter?: number | null;
    nonce?: number | null;
    parameter?: (TxParameter) | null;
};
export type StorageRecord = {
    id?: number;
    level?: number;
    timestamp?: string;
    operation?: (SourceOperation) | null;
    value?: any | null;
};
export type Cycle = {
    index?: number;
    firstLevel?: number;
    startTime?: string;
    lastLevel?: number;
    endTime?: string;
    snapshotIndex?: number;
    snapshotLevel?: number;
    randomSeed?: string | null;
    totalBakers?: number;
    totalRolls?: number;
    totalStaking?: number;
    totalDelegators?: number;
    totalDelegated?: number;
    quote?: (QuoteShort) | null;
};
export type Delegate = Account & {
    "type"?: string | null;
    active?: boolean;
    alias?: string | null;
    address?: string | null;
    publicKey?: string | null;
    revealed?: boolean;
    balance?: number;
    frozenDeposits?: number;
    frozenRewards?: number;
    frozenFees?: number;
    counter?: number;
    activationLevel?: number;
    activationTime?: string;
    deactivationLevel?: number | null;
    deactivationTime?: string | null;
    stakingBalance?: number;
    numContracts?: number;
    numDelegators?: number;
    numBlocks?: number;
    numEndorsements?: number;
    numBallots?: number;
    numProposals?: number;
    numActivations?: number;
    numDoubleBaking?: number;
    numDoubleEndorsing?: number;
    numNonceRevelations?: number;
    numRevelationPenalties?: number;
    numDelegations?: number;
    numOriginations?: number;
    numTransactions?: number;
    numReveals?: number;
    numMigrations?: number;
    firstActivity?: number;
    firstActivityTime?: string;
    lastActivity?: number;
    lastActivityTime?: string;
    contracts?: RelatedContract[] | null;
    delegators?: Delegator[] | null;
    operations?: Operation[] | null;
    metadata?: (AccountMetadata) | null;
    software?: (SoftwareAlias) | null;
};
export type State = {
    cycle?: number;
    level?: number;
    hash?: string | null;
    protocol?: string | null;
    timestamp?: string;
    votingEpoch?: number;
    votingPeriod?: number;
    knownLevel?: number;
    lastSync?: string;
    synced?: boolean;
    quoteLevel?: number;
    quoteBtc?: number;
    quoteEur?: number;
    quoteUsd?: number;
    quoteCny?: number;
    quoteJpy?: number;
    quoteKrw?: number;
    quoteEth?: number;
};
export type ProtocolParameter = {
    eq?: string | null;
    ne?: string | null;
    "in"?: string[] | null;
    ni?: string[] | null;
};
export type MigrationKindParameter = {
    eq?: string | null;
    ne?: string | null;
    "in"?: string[] | null;
    ni?: string[] | null;
};
export type MigrationOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    kind?: string | null;
    account?: (Alias) | null;
    balanceChange?: number;
    quote?: (QuoteShort) | null;
};
export type RevelationPenaltyOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    baker?: (Alias) | null;
    missedLevel?: number;
    lostReward?: number;
    lostFees?: number;
    quote?: (QuoteShort) | null;
};
export type BakingOperation = Operation & {
    "type"?: string | null;
    id?: number;
    level?: number;
    timestamp?: string;
    block?: string | null;
    baker?: (Alias) | null;
    priority?: number;
    deposit?: number;
    reward?: number;
    fees?: number;
    quote?: (QuoteShort) | null;
};
export type ProtocolConstants = {
    rampUpCycles?: number;
    noRewardCycles?: number;
    preservedCycles?: number;
    blocksPerCycle?: number;
    blocksPerCommitment?: number;
    blocksPerSnapshot?: number;
    blocksPerVoting?: number;
    timeBetweenBlocks?: number;
    endorsersPerBlock?: number;
    hardOperationGasLimit?: number;
    hardOperationStorageLimit?: number;
    hardBlockGasLimit?: number;
    tokensPerRoll?: number;
    revelationReward?: number;
    blockDeposit?: number;
    blockReward?: number[] | null;
    endorsementDeposit?: number;
    endorsementReward?: number[] | null;
    originationSize?: number;
    byteCost?: number;
    proposalQuorum?: number;
    ballotQuorumMin?: number;
    ballotQuorumMax?: number;
};
export type ProtocolMetadata = {
    alias?: string | null;
    hash?: string | null;
    docs?: string | null;
};
export type Protocol = {
    code?: number;
    hash?: string | null;
    firstLevel?: number;
    lastLevel?: number | null;
    constants?: (ProtocolConstants) | null;
    metadata?: (ProtocolMetadata) | null;
};
export type Quote = {
    level?: number;
    timestamp?: string;
    btc?: number;
    eur?: number;
    usd?: number;
    cny?: number;
    jpy?: number;
    krw?: number;
    eth?: number;
};
export type BakerRewards = {
    cycle?: number;
    stakingBalance?: number;
    delegatedBalance?: number;
    numDelegators?: number;
    expectedBlocks?: number;
    expectedEndorsements?: number;
    futureBlocks?: number;
    futureBlockRewards?: number;
    futureBlockDeposits?: number;
    ownBlocks?: number;
    ownBlockRewards?: number;
    extraBlocks?: number;
    extraBlockRewards?: number;
    missedOwnBlocks?: number;
    missedOwnBlockRewards?: number;
    missedExtraBlocks?: number;
    missedExtraBlockRewards?: number;
    uncoveredOwnBlocks?: number;
    uncoveredOwnBlockRewards?: number;
    uncoveredExtraBlocks?: number;
    uncoveredExtraBlockRewards?: number;
    blockDeposits?: number;
    futureEndorsements?: number;
    futureEndorsementRewards?: number;
    futureEndorsementDeposits?: number;
    endorsements?: number;
    endorsementRewards?: number;
    missedEndorsements?: number;
    missedEndorsementRewards?: number;
    uncoveredEndorsements?: number;
    uncoveredEndorsementRewards?: number;
    endorsementDeposits?: number;
    ownBlockFees?: number;
    extraBlockFees?: number;
    missedOwnBlockFees?: number;
    missedExtraBlockFees?: number;
    uncoveredOwnBlockFees?: number;
    uncoveredExtraBlockFees?: number;
    doubleBakingRewards?: number;
    doubleBakingLostDeposits?: number;
    doubleBakingLostRewards?: number;
    doubleBakingLostFees?: number;
    doubleEndorsingRewards?: number;
    doubleEndorsingLostDeposits?: number;
    doubleEndorsingLostRewards?: number;
    doubleEndorsingLostFees?: number;
    revelationRewards?: number;
    revelationLostRewards?: number;
    revelationLostFees?: number;
    quote?: (QuoteShort) | null;
};
export type DelegatorRewards = {
    cycle?: number;
    balance?: number;
    baker?: (Alias) | null;
    stakingBalance?: number;
    expectedBlocks?: number;
    expectedEndorsements?: number;
    futureBlocks?: number;
    futureBlockRewards?: number;
    ownBlocks?: number;
    ownBlockRewards?: number;
    extraBlocks?: number;
    extraBlockRewards?: number;
    missedOwnBlocks?: number;
    missedOwnBlockRewards?: number;
    missedExtraBlocks?: number;
    missedExtraBlockRewards?: number;
    uncoveredOwnBlocks?: number;
    uncoveredOwnBlockRewards?: number;
    uncoveredExtraBlocks?: number;
    uncoveredExtraBlockRewards?: number;
    futureEndorsements?: number;
    futureEndorsementRewards?: number;
    endorsements?: number;
    endorsementRewards?: number;
    missedEndorsements?: number;
    missedEndorsementRewards?: number;
    uncoveredEndorsements?: number;
    uncoveredEndorsementRewards?: number;
    ownBlockFees?: number;
    extraBlockFees?: number;
    missedOwnBlockFees?: number;
    missedExtraBlockFees?: number;
    uncoveredOwnBlockFees?: number;
    uncoveredExtraBlockFees?: number;
    doubleBakingRewards?: number;
    doubleBakingLostDeposits?: number;
    doubleBakingLostRewards?: number;
    doubleBakingLostFees?: number;
    doubleEndorsingRewards?: number;
    doubleEndorsingLostDeposits?: number;
    doubleEndorsingLostRewards?: number;
    doubleEndorsingLostFees?: number;
    revelationRewards?: number;
    revelationLostRewards?: number;
    revelationLostFees?: number;
    quote?: (QuoteShort) | null;
};
export type SplitDelegator = {
    address?: string | null;
    balance?: number;
    currentBalance?: number;
    emptied?: boolean;
};
export type RewardSplit = {
    cycle?: number;
    stakingBalance?: number;
    delegatedBalance?: number;
    numDelegators?: number;
    expectedBlocks?: number;
    expectedEndorsements?: number;
    futureBlocks?: number;
    futureBlockRewards?: number;
    futureBlockDeposits?: number;
    ownBlocks?: number;
    ownBlockRewards?: number;
    extraBlocks?: number;
    extraBlockRewards?: number;
    missedOwnBlocks?: number;
    missedOwnBlockRewards?: number;
    missedExtraBlocks?: number;
    missedExtraBlockRewards?: number;
    uncoveredOwnBlocks?: number;
    uncoveredOwnBlockRewards?: number;
    uncoveredExtraBlocks?: number;
    uncoveredExtraBlockRewards?: number;
    blockDeposits?: number;
    futureEndorsements?: number;
    futureEndorsementRewards?: number;
    futureEndorsementDeposits?: number;
    endorsements?: number;
    endorsementRewards?: number;
    missedEndorsements?: number;
    missedEndorsementRewards?: number;
    uncoveredEndorsements?: number;
    uncoveredEndorsementRewards?: number;
    endorsementDeposits?: number;
    ownBlockFees?: number;
    extraBlockFees?: number;
    missedOwnBlockFees?: number;
    missedExtraBlockFees?: number;
    uncoveredOwnBlockFees?: number;
    uncoveredExtraBlockFees?: number;
    doubleBakingRewards?: number;
    doubleBakingLostDeposits?: number;
    doubleBakingLostRewards?: number;
    doubleBakingLostFees?: number;
    doubleEndorsingRewards?: number;
    doubleEndorsingLostDeposits?: number;
    doubleEndorsingLostRewards?: number;
    doubleEndorsingLostFees?: number;
    revelationRewards?: number;
    revelationLostRewards?: number;
    revelationLostFees?: number;
    delegators?: SplitDelegator[] | null;
};
export type BakingRightTypeParameter = {
    eq?: string | null;
    ne?: string | null;
};
export type BakingRightStatusParameter = {
    eq?: string | null;
    ne?: string | null;
};
export type BakingRight = {
    "type"?: string | null;
    cycle?: number;
    level?: number;
    timestamp?: string;
    priority?: number | null;
    slots?: number | null;
    baker?: (Alias) | null;
    status?: string | null;
};
export type Software = {
    shortHash?: string | null;
    firstLevel?: number;
    firstTime?: string;
    lastLevel?: number;
    lastTime?: string;
    blocksCount?: number;
    metadata?: (RawJson) | null;
    commitDate?: string | null;
    commitHash?: string | null;
    version?: string | null;
    tags?: string[] | null;
};
export type TimestampParameter = {
    eq?: string | null;
    ne?: string | null;
    gt?: string | null;
    ge?: string | null;
    lt?: string | null;
    le?: string | null;
    "in"?: string[] | null;
    ni?: string[] | null;
};
export type Statistics = {
    cycle?: number | null;
    date?: string | null;
    level?: number;
    timestamp?: string;
    totalSupply?: number;
    circulatingSupply?: number;
    totalBootstrapped?: number;
    totalCommitments?: number;
    totalActivated?: number;
    totalCreated?: number;
    totalBurned?: number;
    totalVested?: number;
    totalFrozen?: number;
    quote?: (QuoteShort) | null;
};
export type ProposalMetadata = {
    alias?: string | null;
    hash?: string | null;
    agora?: string | null;
    invoice?: number;
};
export type Proposal = {
    hash?: string | null;
    initiator?: (Alias) | null;
    firstPeriod?: number;
    lastPeriod?: number;
    epoch?: number;
    upvotes?: number;
    rolls?: number;
    status?: string | null;
    metadata?: (ProposalMetadata) | null;
    period?: number;
};
export type VotingPeriod = {
    index?: number;
    epoch?: number;
    firstLevel?: number;
    startTime?: string;
    lastLevel?: number;
    endTime?: string;
    kind?: string | null;
    status?: string | null;
    totalBakers?: number | null;
    totalRolls?: number | null;
    upvotesQuorum?: number | null;
    proposalsCount?: number | null;
    topUpvotes?: number | null;
    topRolls?: number | null;
    ballotsQuorum?: number | null;
    supermajority?: number | null;
    yayBallots?: number | null;
    yayRolls?: number | null;
    nayBallots?: number | null;
    nayRolls?: number | null;
    passBallots?: number | null;
    passRolls?: number | null;
};
export type VoterStatusParameter = {
    eq?: string | null;
    ne?: string | null;
    "in"?: string[] | null;
    ni?: string[] | null;
};
export type VoterSnapshot = {
    delegate?: (Alias) | null;
    rolls?: number;
    status?: string | null;
};
export type VotingEpoch = {
    index?: number;
    firstLevel?: number;
    startTime?: string;
    lastLevel?: number;
    endTime?: string;
    status?: string | null;
    periods?: VotingPeriod[] | null;
    proposals?: Proposal[] | null;
};
/**
 * Get accounts
 */
export function accountsGet({ type, kind, delegate, balance, staked, lastActivity, select, sort, offset, limit }: {
    "type"?: (AccountTypeParameter) | null;
    kind?: (ContractKindParameter) | null;
    delegate?: (AccountParameter) | null;
    balance?: (Int64Parameter) | null;
    staked?: (BoolParameter) | null;
    lastActivity?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Account[];
    }>(`/v1/accounts${QS.query(QS.form({
        type,
        kind,
        delegate,
        balance,
        staked,
        lastActivity,
        select,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get accounts count
 */
export function accountsGetCount({ type, kind, balance, staked }: {
    "type"?: (AccountTypeParameter) | null;
    kind?: (ContractKindParameter) | null;
    balance?: (Int64Parameter) | null;
    staked?: (BoolParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/accounts/count${QS.query(QS.form({
        type,
        kind,
        balance,
        staked
    }))}`, {
        ...opts
    });
}
/**
 * Get account by address
 */
export function accountsGetByAddress(address: string | null, { metadata }: {
    metadata?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Account;
    }>(`/v1/accounts/${address}${QS.query(QS.form({
        metadata
    }))}`, {
        ...opts
    });
}
/**
 * Get account contracts
 */
export function accountsGetContracts(address: string | null, { sort, offset, limit }: {
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: RelatedContract[];
    }>(`/v1/accounts/${address}/contracts${QS.query(QS.form({
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get account delegators
 */
export function accountsGetDelegators(address: string | null, { type, balance, delegationLevel, sort, offset, limit }: {
    "type"?: (AccountTypeParameter) | null;
    balance?: (Int64Parameter) | null;
    delegationLevel?: (Int32Parameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Delegator[];
    }>(`/v1/accounts/${address}/delegators${QS.query(QS.form({
        type,
        balance,
        delegationLevel,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get account operations
 */
export function accountsGetOperations(address: string | null, { type, initiator, sender, target, prevDelegate, newDelegate, contractManager, contractDelegate, originatedContract, accuser, offender, baker, level, timestamp, entrypoint, parameter, parameters, hasInternals, status, sort, lastId, limit, micheline, quote, from, to }: {
    "type"?: string | null;
    initiator?: (AccountParameter) | null;
    sender?: (AccountParameter) | null;
    target?: (AccountParameter) | null;
    prevDelegate?: (AccountParameter) | null;
    newDelegate?: (AccountParameter) | null;
    contractManager?: (AccountParameter) | null;
    contractDelegate?: (AccountParameter) | null;
    originatedContract?: (AccountParameter) | null;
    accuser?: (AccountParameter) | null;
    offender?: (AccountParameter) | null;
    baker?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    entrypoint?: (StringParameter) | null;
    parameter?: (JsonParameter) | null;
    parameters?: (StringParameter) | null;
    hasInternals?: (BoolParameter) | null;
    status?: (OperationStatusParameter) | null;
    sort?: SortMode;
    lastId?: number | null;
    limit?: number;
    micheline?: MichelineFormat;
    quote?: Symbols;
    "from"?: string | null;
    to?: string | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Operation[];
    }>(`/v1/accounts/${address}/operations${QS.query(QS.form({
        type,
        initiator,
        sender,
        target,
        prevDelegate,
        newDelegate,
        contractManager,
        contractDelegate,
        originatedContract,
        accuser,
        offender,
        baker,
        level,
        timestamp,
        entrypoint,
        parameter,
        parameters,
        hasInternals,
        status,
        sort,
        lastId,
        limit,
        micheline,
        quote,
        from,
        to
    }))}`, {
        ...opts
    });
}
/**
 * Get account metadata
 */
export function accountsGetMetadata(address: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: AccountMetadata;
    }>(`/v1/accounts/${address}/metadata`, {
        ...opts
    });
}
/**
 * Get account report
 */
export function accountsGetBalanceReport(address: string | null, { from, to, currency, historical, delimiter, separator }: {
    "from"?: string | null;
    to?: string | null;
    currency?: string | null;
    historical?: boolean;
    delimiter?: string | null;
    separator?: string | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/v1/accounts/${address}/report${QS.query(QS.form({
        from,
        to,
        currency,
        historical,
        delimiter,
        separator
    }))}`, {
        ...opts
    });
}
/**
 * Get balance history
 */
export function accountsGetBalanceHistory(address: string | null, { step, select, sort, offset, limit, quote }: {
    step?: number | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: number;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: HistoricalBalance[];
    }>(`/v1/accounts/${address}/balance_history${QS.query(QS.form({
        step,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get balance at level
 */
export function accountsGetBalanceAtLevel(address: string | null, level: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/accounts/${address}/balance_history/${level}`, {
        ...opts
    });
}
/**
 * Get balance at date
 */
export function accountsGetBalanceAtDate(address: string | null, datetime: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/accounts/${address}/balance_history/${datetime}`, {
        ...opts
    });
}
/**
 * Get bigmaps count
 */
export function bigMapsGetBigMapsCount(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>("/v1/bigmaps/count", {
        ...opts
    });
}
/**
 * Get bigmaps
 */
export function bigMapsGetBigMaps({ contract, path, tags, active, lastLevel, select, sort, offset, limit, micheline }: {
    contract?: (AccountParameter) | null;
    path?: (StringParameter) | null;
    tags?: (BigMapTagsParameter) | null;
    active?: boolean | null;
    lastLevel?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMap[];
    }>(`/v1/bigmaps${QS.query(QS.form({
        contract,
        path,
        tags,
        active,
        lastLevel,
        select,
        sort,
        offset,
        limit,
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get bigmap updates
 */
export function bigMapsGetBigMapUpdates({ bigmap, path, contract, tags, action, value, level, sort, offset, limit, micheline }: {
    bigmap?: (Int32Parameter) | null;
    path?: (StringParameter) | null;
    contract?: (AccountParameter) | null;
    tags?: (BigMapTagsParameter) | null;
    action?: (BigMapActionParameter) | null;
    value?: (JsonParameter) | null;
    level?: (Int32Parameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapUpdate[];
    }>(`/v1/bigmaps/updates${QS.query(QS.form({
        bigmap,
        path,
        contract,
        tags,
        action,
        value,
        level,
        sort,
        offset,
        limit,
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get bigmap by Id
 */
export function bigMapsGetBigMapById(id: number, { micheline }: {
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMap;
    }>(`/v1/bigmaps/${id}${QS.query(QS.form({
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get bigmap type
 */
export function bigMapsGetBigMapType(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: MichelinePrim;
    }>(`/v1/bigmaps/${id}/type`, {
        ...opts
    });
}
/**
 * Get bigmap keys
 */
export function bigMapsGetKeys(id: number, { active, key, value, lastLevel, select, sort, offset, limit, micheline }: {
    active?: boolean | null;
    key?: (JsonParameter) | null;
    value?: (JsonParameter) | null;
    lastLevel?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKey[];
    }>(`/v1/bigmaps/${id}/keys${QS.query(QS.form({
        active,
        key,
        value,
        lastLevel,
        select,
        sort,
        offset,
        limit,
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get bigmap key
 */
export function bigMapsGetKey(id: number, key: string | null, { micheline }: {
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKey;
    }>(`/v1/bigmaps/${id}/keys/${key}${QS.query(QS.form({
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get bigmap key updates
 */
export function bigMapsGetKeyUpdates(id: number, key: string | null, { sort, offset, limit, micheline }: {
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKeyUpdate[];
    }>(`/v1/bigmaps/${id}/keys/${key}/updates${QS.query(QS.form({
        sort,
        offset,
        limit,
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get historical keys
 */
export function bigMapsGetHistoricalKeys(id: number, level: number, { active, key, value, select, sort, offset, limit, micheline }: {
    active?: boolean | null;
    key?: (JsonParameter) | null;
    value?: (JsonParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKeyHistorical[];
    }>(`/v1/bigmaps/${id}/historical_keys/${level}${QS.query(QS.form({
        active,
        key,
        value,
        select,
        sort,
        offset,
        limit,
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get historical key
 */
export function bigMapsGetKey2(id: number, level: number, key: string | null, { micheline }: {
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKeyHistorical;
    }>(`/v1/bigmaps/${id}/historical_keys/${level}/${key}${QS.query(QS.form({
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get blocks count
 */
export function blocksGetCount(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>("/v1/blocks/count", {
        ...opts
    });
}
/**
 * Get blocks
 */
export function blocksGet({ baker, level, timestamp, priority, select, sort, offset, limit, quote }: {
    baker?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    priority?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Block[];
    }>(`/v1/blocks${QS.query(QS.form({
        baker,
        level,
        timestamp,
        priority,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get block by hash
 */
export function blocksGetByHash(hash: string | null, { operations, micheline, quote }: {
    operations?: boolean;
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Block;
    }>(`/v1/blocks/${hash}${QS.query(QS.form({
        operations,
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get block by level
 */
export function blocksGetByLevel(level: number, { operations, micheline, quote }: {
    operations?: boolean;
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Block;
    }>(`/v1/blocks/${level}${QS.query(QS.form({
        operations,
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get commitment by blinded address
 */
export function commitmentsGet(address: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Commitment;
    }>(`/v1/commitments/${address}`, {
        ...opts
    });
}
/**
 * Get commitments
 */
export function commitmentsGetAll({ activated, activationLevel, balance, select, sort, offset, limit }: {
    activated?: boolean | null;
    activationLevel?: (Int32NullParameter) | null;
    balance?: (Int64Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Commitment[];
    }>(`/v1/commitments${QS.query(QS.form({
        activated,
        activationLevel,
        balance,
        select,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get commitments count
 */
export function commitmentsGetCount({ activated, balance }: {
    activated?: boolean | null;
    balance?: (Int64Parameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/commitments/count${QS.query(QS.form({
        activated,
        balance
    }))}`, {
        ...opts
    });
}
/**
 * Get contracts
 */
export function contractsGet({ kind, creator, manager, delegate, lastActivity, typeHash, codeHash, select, sort, offset, limit, includeStorage }: {
    kind?: (ContractKindParameter) | null;
    creator?: (AccountParameter) | null;
    manager?: (AccountParameter) | null;
    delegate?: (AccountParameter) | null;
    lastActivity?: (Int32Parameter) | null;
    typeHash?: (Int32Parameter) | null;
    codeHash?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    includeStorage?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Contract[];
    }>(`/v1/contracts${QS.query(QS.form({
        kind,
        creator,
        manager,
        delegate,
        lastActivity,
        typeHash,
        codeHash,
        select,
        sort,
        offset,
        limit,
        includeStorage
    }))}`, {
        ...opts
    });
}
/**
 * Get contracts count
 */
export function contractsGetCount({ kind }: {
    kind?: (ContractKindParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/contracts/count${QS.query(QS.form({
        kind
    }))}`, {
        ...opts
    });
}
/**
 * Get contract by address
 */
export function contractsGetByAddress(address: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Contract;
    }>(`/v1/contracts/${address}`, {
        ...opts
    });
}
/**
 * Get same contracts
 */
export function contractsGetSame(address: string | null, { select, sort, offset, limit, includeStorage }: {
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    includeStorage?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Contract[];
    }>(`/v1/contracts/${address}/same${QS.query(QS.form({
        select,
        sort,
        offset,
        limit,
        includeStorage
    }))}`, {
        ...opts
    });
}
/**
 * Get similar contracts
 */
export function contractsGetSimilar(address: string | null, { select, sort, offset, limit, includeStorage }: {
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    includeStorage?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Contract[];
    }>(`/v1/contracts/${address}/similar${QS.query(QS.form({
        select,
        sort,
        offset,
        limit,
        includeStorage
    }))}`, {
        ...opts
    });
}
/**
 * Get contract code
 */
export function contractsGetCode(address: string | null, { format }: {
    format?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/v1/contracts/${address}/code${QS.query(QS.form({
        format
    }))}`, {
        ...opts
    });
}
/**
 * Get JSON Schema [2020-12] interface for the contract
 */
export function contractsGetInterface(address: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ContractInterface;
    }>(`/v1/contracts/${address}/interface`, {
        ...opts
    });
}
/**
 * Get contract entrypoints
 */
export function contractsGetEntrypoints(address: string | null, { all, json, micheline, michelson }: {
    all?: boolean;
    json?: boolean;
    micheline?: boolean;
    michelson?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Entrypoint[];
    }>(`/v1/contracts/${address}/entrypoints${QS.query(QS.form({
        all,
        json,
        micheline,
        michelson
    }))}`, {
        ...opts
    });
}
/**
 * Get entrypoint by name
 */
export function contractsGetEntrypointByName(address: string | null, name: string | null, { json, micheline, michelson }: {
    json?: boolean;
    micheline?: boolean;
    michelson?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Entrypoint;
    }>(`/v1/contracts/${address}/entrypoints/${name}${QS.query(QS.form({
        json,
        micheline,
        michelson
    }))}`, {
        ...opts
    });
}
/**
 * Build entrypoint parameters
 */
export function contractsBuildEntrypointParameters(address: string | null, name: string | null, { value }: {
    value?: string | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/v1/contracts/${address}/entrypoints/${name}/build${QS.query(QS.form({
        value
    }))}`, {
        ...opts
    });
}
/**
 * Build entrypoint parameters
 */
export function contractsBuildEntrypointParameters2(address: string | null, name: string | null, body: any, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/v1/contracts/${address}/entrypoints/${name}/build`, oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Get contract storage
 */
export function contractsGetStorage(address: string | null, { level, path }: {
    level?: number;
    path?: string | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/v1/contracts/${address}/storage${QS.query(QS.form({
        level,
        path
    }))}`, {
        ...opts
    });
}
/**
 * Get contract storage schema
 */
export function contractsGetStorageSchema(address: string | null, { level }: {
    level?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/v1/contracts/${address}/storage/schema${QS.query(QS.form({
        level
    }))}`, {
        ...opts
    });
}
/**
 * Get contract storage history
 */
export function contractsGetStorageHistory(address: string | null, { lastId, limit }: {
    lastId?: number;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: StorageRecord[];
    }>(`/v1/contracts/${address}/storage/history${QS.query(QS.form({
        lastId,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get raw contract storage
 */
export function contractsGetRawStorage(address: string | null, { level }: {
    level?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: IMicheline;
    }>(`/v1/contracts/${address}/storage/raw${QS.query(QS.form({
        level
    }))}`, {
        ...opts
    });
}
/**
 * Get raw contract storage schema
 */
export function contractsGetRawStorageSchema(address: string | null, { level }: {
    level?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: IMicheline;
    }>(`/v1/contracts/${address}/storage/raw/schema${QS.query(QS.form({
        level
    }))}`, {
        ...opts
    });
}
/**
 * Get raw contract storage history
 */
export function contractsGetRawStorageHistory(address: string | null, { lastId, limit }: {
    lastId?: number;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: StorageRecord[];
    }>(`/v1/contracts/${address}/storage/raw/history${QS.query(QS.form({
        lastId,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get contract bigmaps
 */
export function contractsGetBigMaps(address: string | null, { tags, select, sort, offset, limit, micheline }: {
    tags?: (BigMapTagsParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMap[];
    }>(`/v1/contracts/${address}/bigmaps${QS.query(QS.form({
        tags,
        select,
        sort,
        offset,
        limit,
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get bigmap by name
 */
export function contractsGetBigMapByName(address: string | null, name: string | null, { micheline }: {
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMap;
    }>(`/v1/contracts/${address}/bigmaps/${name}${QS.query(QS.form({
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get bigmap keys
 */
export function contractsGetBigMapByNameKeys(address: string | null, name: string | null, { active, key, value, lastLevel, select, sort, offset, limit, micheline }: {
    active?: boolean | null;
    key?: (JsonParameter) | null;
    value?: (JsonParameter) | null;
    lastLevel?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKey[];
    }>(`/v1/contracts/${address}/bigmaps/${name}/keys${QS.query(QS.form({
        active,
        key,
        value,
        lastLevel,
        select,
        sort,
        offset,
        limit,
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get bigmap key
 */
export function contractsGetKey(address: string | null, name: string | null, key: string | null, { micheline }: {
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKey;
    }>(`/v1/contracts/${address}/bigmaps/${name}/keys/${key}${QS.query(QS.form({
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get bigmap key updates
 */
export function contractsGetKeyUpdates(address: string | null, name: string | null, key: string | null, { sort, offset, limit, micheline }: {
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKeyUpdate[];
    }>(`/v1/contracts/${address}/bigmaps/${name}/keys/${key}/updates${QS.query(QS.form({
        sort,
        offset,
        limit,
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get historical keys
 */
export function contractsGetHistoricalKeys(address: string | null, name: string | null, level: number, { active, key, value, select, sort, offset, limit, micheline }: {
    active?: boolean | null;
    key?: (JsonParameter) | null;
    value?: (JsonParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKeyHistorical[];
    }>(`/v1/contracts/${address}/bigmaps/${name}/historical_keys/${level}${QS.query(QS.form({
        active,
        key,
        value,
        select,
        sort,
        offset,
        limit,
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get historical key
 */
export function contractsGetKey2(address: string | null, name: string | null, level: number, key: string | null, { micheline }: {
    micheline?: MichelineFormat;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BigMapKeyHistorical;
    }>(`/v1/contracts/${address}/bigmaps/${name}/historical_keys/${level}/${key}${QS.query(QS.form({
        micheline
    }))}`, {
        ...opts
    });
}
/**
 * Get cycles count
 */
export function cyclesGetCount(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>("/v1/cycles/count", {
        ...opts
    });
}
/**
 * Get cycles
 */
export function cyclesGet({ snapshotIndex, select, sort, offset, limit, quote }: {
    snapshotIndex?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Cycle[];
    }>(`/v1/cycles${QS.query(QS.form({
        snapshotIndex,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get cycle by index
 */
export function cyclesGetByIndex(index: number, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Cycle;
    }>(`/v1/cycles/${index}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get delegates
 */
export function delegatesGet({ active, lastActivity, select, sort, offset, limit }: {
    active?: (BoolParameter) | null;
    lastActivity?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Delegate[];
    }>(`/v1/delegates${QS.query(QS.form({
        active,
        lastActivity,
        select,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get delegates count
 */
export function delegatesGetCount({ active }: {
    active?: (BoolParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/delegates/count${QS.query(QS.form({
        active
    }))}`, {
        ...opts
    });
}
/**
 * Get delegate by address
 */
export function delegatesGetByAddress(address: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Delegate;
    }>(`/v1/delegates/${address}`, {
        ...opts
    });
}
/**
 * Get indexer head
 */
export function headGet(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: State;
    }>("/v1/head", {
        ...opts
    });
}
/**
 * Get operations by hash
 */
export function operationsGetByHash(hash: string | null, { micheline, quote }: {
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Operation[];
    }>(`/v1/operations/${hash}${QS.query(QS.form({
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get operations by hash and counter
 */
export function operationsGetByHashCounter(hash: string | null, counter: number, { micheline, quote }: {
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Operation[];
    }>(`/v1/operations/${hash}/${counter}${QS.query(QS.form({
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get operations by hash, counter and nonce
 */
export function operationsGetByHashCounterNonce(hash: string | null, counter: number, nonce: number, { micheline, quote }: {
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Operation[];
    }>(`/v1/operations/${hash}/${counter}/${nonce}${QS.query(QS.form({
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get endorsements
 */
export function operationsGetEndorsements({ delegate, level, timestamp, select, sort, offset, limit, quote }: {
    delegate?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: EndorsementOperation[];
    }>(`/v1/operations/endorsements${QS.query(QS.form({
        delegate,
        level,
        timestamp,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get endorsement by hash
 */
export function operationsGetEndorsementByHash(hash: string | null, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: EndorsementOperation[];
    }>(`/v1/operations/endorsements/${hash}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get endorsements count
 */
export function operationsGetEndorsementsCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/endorsements/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get ballots
 */
export function operationsGetBallots({ delegate, level, timestamp, epoch, period, proposal, select, sort, offset, limit, quote }: {
    delegate?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    epoch?: (Int32Parameter) | null;
    period?: (Int32Parameter) | null;
    proposal?: (ProtocolParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BallotOperation[];
    }>(`/v1/operations/ballots${QS.query(QS.form({
        delegate,
        level,
        timestamp,
        epoch,
        period,
        proposal,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get ballot by hash
 */
export function operationsGetBallotByHash(hash: string | null, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BallotOperation[];
    }>(`/v1/operations/ballots/${hash}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get ballots count
 */
export function operationsGetBallotsCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/ballots/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get proposals
 */
export function operationsGetProposals({ delegate, level, timestamp, epoch, period, proposal, duplicated, select, sort, offset, limit, quote }: {
    delegate?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    epoch?: (Int32Parameter) | null;
    period?: (Int32Parameter) | null;
    proposal?: (ProtocolParameter) | null;
    duplicated?: (BoolParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ProposalOperation[];
    }>(`/v1/operations/proposals${QS.query(QS.form({
        delegate,
        level,
        timestamp,
        epoch,
        period,
        proposal,
        duplicated,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get proposal by hash
 */
export function operationsGetProposalByHash(hash: string | null, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ProposalOperation[];
    }>(`/v1/operations/proposals/${hash}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get proposals count
 */
export function operationsGetProposalsCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/proposals/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get activations
 */
export function operationsGetActivations({ account, level, timestamp, select, sort, offset, limit, quote }: {
    account?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ActivationOperation[];
    }>(`/v1/operations/activations${QS.query(QS.form({
        account,
        level,
        timestamp,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get activation by hash
 */
export function operationsGetActivationByHash(hash: string | null, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ActivationOperation[];
    }>(`/v1/operations/activations/${hash}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get activations count
 */
export function operationsGetActivationsCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/activations/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get double baking
 */
export function operationsGetDoubleBaking({ anyof, accuser, offender, level, timestamp, select, sort, offset, limit, quote }: {
    anyof?: string | null;
    accuser?: (AccountParameter) | null;
    offender?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: DoubleBakingOperation[];
    }>(`/v1/operations/double_baking${QS.query(QS.form({
        anyof,
        accuser,
        offender,
        level,
        timestamp,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get double baking by hash
 */
export function operationsGetDoubleBakingByHash(hash: string | null, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: DoubleBakingOperation[];
    }>(`/v1/operations/double_baking/${hash}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get double baking count
 */
export function operationsGetDoubleBakingCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/double_baking/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get double endorsing
 */
export function operationsGetDoubleEndorsing({ anyof, accuser, offender, level, timestamp, select, sort, offset, limit, quote }: {
    anyof?: string | null;
    accuser?: (AccountParameter) | null;
    offender?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: DoubleEndorsingOperation[];
    }>(`/v1/operations/double_endorsing${QS.query(QS.form({
        anyof,
        accuser,
        offender,
        level,
        timestamp,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get double endorsing by hash
 */
export function operationsGetDoubleEndorsingByHash(hash: string | null, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: DoubleEndorsingOperation[];
    }>(`/v1/operations/double_endorsing/${hash}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get double endorsing count
 */
export function operationsGetDoubleEndorsingCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/double_endorsing/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get nonce revelations
 */
export function operationsGetNonceRevelations({ anyof, baker, sender, level, timestamp, select, sort, offset, limit, quote }: {
    anyof?: string | null;
    baker?: (AccountParameter) | null;
    sender?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: NonceRevelationOperation[];
    }>(`/v1/operations/nonce_revelations${QS.query(QS.form({
        anyof,
        baker,
        sender,
        level,
        timestamp,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get nonce revelation by hash
 */
export function operationsGetNonceRevelationByHash(hash: string | null, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: NonceRevelationOperation[];
    }>(`/v1/operations/nonce_revelations/${hash}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get nonce revelations count
 */
export function operationsGetNonceRevelationsCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/nonce_revelations/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get delegations
 */
export function operationsGetDelegations({ anyof, initiator, sender, prevDelegate, newDelegate, level, timestamp, status, select, sort, offset, limit, quote }: {
    anyof?: string | null;
    initiator?: (AccountParameter) | null;
    sender?: (AccountParameter) | null;
    prevDelegate?: (AccountParameter) | null;
    newDelegate?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    status?: (OperationStatusParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: DelegationOperation[];
    }>(`/v1/operations/delegations${QS.query(QS.form({
        anyof,
        initiator,
        sender,
        prevDelegate,
        newDelegate,
        level,
        timestamp,
        status,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get delegation by hash
 */
export function operationsGetDelegationByHash(hash: string | null, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: DelegationOperation[];
    }>(`/v1/operations/delegations/${hash}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get delegations count
 */
export function operationsGetDelegationsCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/delegations/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get originations
 */
export function operationsGetOriginations({ anyof, initiator, sender, contractManager, contractDelegate, originatedContract, typeHash, codeHash, level, timestamp, status, select, sort, offset, limit, micheline, quote }: {
    anyof?: string | null;
    initiator?: (AccountParameter) | null;
    sender?: (AccountParameter) | null;
    contractManager?: (AccountParameter) | null;
    contractDelegate?: (AccountParameter) | null;
    originatedContract?: (AccountParameter) | null;
    typeHash?: (Int32Parameter) | null;
    codeHash?: (Int32Parameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    status?: (OperationStatusParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: OriginationOperation[];
    }>(`/v1/operations/originations${QS.query(QS.form({
        anyof,
        initiator,
        sender,
        contractManager,
        contractDelegate,
        originatedContract,
        typeHash,
        codeHash,
        level,
        timestamp,
        status,
        select,
        sort,
        offset,
        limit,
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get origination by hash
 */
export function operationsGetOriginationByHash(hash: string | null, { micheline, quote }: {
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: OriginationOperation[];
    }>(`/v1/operations/originations/${hash}${QS.query(QS.form({
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get originations count
 */
export function operationsGetOriginationsCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/originations/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get transactions
 */
export function operationsGetTransactions({ anyof, initiator, sender, target, amount, level, timestamp, entrypoint, parameter, parameters, hasInternals, status, select, sort, offset, limit, micheline, quote }: {
    anyof?: string | null;
    initiator?: (AccountParameter) | null;
    sender?: (AccountParameter) | null;
    target?: (AccountParameter) | null;
    amount?: (Int64Parameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    entrypoint?: (StringParameter) | null;
    parameter?: (JsonParameter) | null;
    parameters?: (StringParameter) | null;
    hasInternals?: (BoolParameter) | null;
    status?: (OperationStatusParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: TransactionOperation[];
    }>(`/v1/operations/transactions${QS.query(QS.form({
        anyof,
        initiator,
        sender,
        target,
        amount,
        level,
        timestamp,
        entrypoint,
        parameter,
        parameters,
        hasInternals,
        status,
        select,
        sort,
        offset,
        limit,
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get transaction by hash
 */
export function operationsGetTransactionByHash(hash: string | null, { micheline, quote }: {
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: TransactionOperation[];
    }>(`/v1/operations/transactions/${hash}${QS.query(QS.form({
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get transaction by hash and counter
 */
export function operationsGetTransactionByHashCounter(hash: string | null, counter: number, { micheline, quote }: {
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: TransactionOperation[];
    }>(`/v1/operations/transactions/${hash}/${counter}${QS.query(QS.form({
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get transaction by hash, counter and nonce
 */
export function operationsGetTransactionByHashCounterNonce(hash: string | null, counter: number, nonce: number, { micheline, quote }: {
    micheline?: MichelineFormat;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: TransactionOperation[];
    }>(`/v1/operations/transactions/${hash}/${counter}/${nonce}${QS.query(QS.form({
        micheline,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get transactions count
 */
export function operationsGetTransactionsCount({ level, timestamp, status }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    status?: (OperationStatusParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/transactions/count${QS.query(QS.form({
        level,
        timestamp,
        status
    }))}`, {
        ...opts
    });
}
/**
 * Get reveals
 */
export function operationsGetReveals({ sender, level, timestamp, status, select, sort, offset, limit, quote }: {
    sender?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    status?: (OperationStatusParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: RevealOperation[];
    }>(`/v1/operations/reveals${QS.query(QS.form({
        sender,
        level,
        timestamp,
        status,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get reveal by hash
 */
export function operationsGetRevealByHash(hash: string | null, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: RevealOperation[];
    }>(`/v1/operations/reveals/${hash}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get reveals count
 */
export function operationsGetRevealsCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/reveals/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get migrations
 */
export function operationsGetMigrations({ account, kind, balanceChange, level, timestamp, select, sort, offset, limit, quote }: {
    account?: (AccountParameter) | null;
    kind?: (MigrationKindParameter) | null;
    balanceChange?: (Int64Parameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: MigrationOperation[];
    }>(`/v1/operations/migrations${QS.query(QS.form({
        account,
        kind,
        balanceChange,
        level,
        timestamp,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get migrations count
 */
export function operationsGetMigrationsCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/migrations/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get revelation penalties
 */
export function operationsGetRevelationPenalties({ baker, level, timestamp, select, sort, offset, limit, quote }: {
    baker?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: RevelationPenaltyOperation[];
    }>(`/v1/operations/revelation_penalties${QS.query(QS.form({
        baker,
        level,
        timestamp,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get revelation penalties count
 */
export function operationsGetRevelationPenaltiesCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/revelation_penalties/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get baking
 */
export function operationsGetBaking({ baker, level, timestamp, select, sort, offset, limit, quote }: {
    baker?: (AccountParameter) | null;
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BakingOperation[];
    }>(`/v1/operations/baking${QS.query(QS.form({
        baker,
        level,
        timestamp,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get baking count
 */
export function operationsGetBakingCount({ level, timestamp }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/operations/baking/count${QS.query(QS.form({
        level,
        timestamp
    }))}`, {
        ...opts
    });
}
/**
 * Get protocols count
 */
export function protocolsGetCount(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>("/v1/protocols/count", {
        ...opts
    });
}
/**
 * Get protocols
 */
export function protocolsGet({ sort, offset, limit }: {
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Protocol[];
    }>(`/v1/protocols${QS.query(QS.form({
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get current protocol
 */
export function protocolsGetCurrent(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Protocol;
    }>("/v1/protocols/current", {
        ...opts
    });
}
/**
 * Get protocol by code
 */
export function protocolsGetByCode(code: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Protocol;
    }>(`/v1/protocols/${code}`, {
        ...opts
    });
}
/**
 * Get protocol by hash
 */
export function protocolsGetByHash(hash: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Protocol;
    }>(`/v1/protocols/${hash}`, {
        ...opts
    });
}
/**
 * Get protocol by cycle
 */
export function protocolsGetByCycle(cycle: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Protocol;
    }>(`/v1/protocols/cycles/${cycle}`, {
        ...opts
    });
}
/**
 * Get quotes count
 */
export function quotesGetCount(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>("/v1/quotes/count", {
        ...opts
    });
}
/**
 * Get last quote
 */
export function quotesGetLast(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Quote;
    }>("/v1/quotes/last", {
        ...opts
    });
}
/**
 * Get quotes
 */
export function quotesGet({ level, timestamp, select, sort, offset, limit }: {
    level?: (Int32Parameter) | null;
    timestamp?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Quote[];
    }>(`/v1/quotes${QS.query(QS.form({
        level,
        timestamp,
        select,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get baker cycle rewards count
 */
export function rewardsGetBakerRewardsCount(address: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/rewards/bakers/${address}/count`, {
        ...opts
    });
}
/**
 * Get baker cycle rewards
 */
export function rewardsGetBakerRewards(address: string | null, { cycle, select, sort, offset, limit, quote }: {
    cycle?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BakerRewards[];
    }>(`/v1/rewards/bakers/${address}${QS.query(QS.form({
        cycle,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get baker cycle rewards by cycle
 */
export function rewardsGetBakerRewardsByCycle(address: string | null, cycle: number, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BakerRewards;
    }>(`/v1/rewards/bakers/${address}/${cycle}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get delegator cycle rewards count
 */
export function rewardsGetDelegatorRewardsCount(address: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/rewards/delegators/${address}/count`, {
        ...opts
    });
}
/**
 * Get delegator cycle rewards
 */
export function rewardsGetDelegatorRewards(address: string | null, { cycle, select, sort, offset, limit, quote }: {
    cycle?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: DelegatorRewards[];
    }>(`/v1/rewards/delegators/${address}${QS.query(QS.form({
        cycle,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get delegator cycle rewards by cycle
 */
export function rewardsGetDelegatorRewardsByCycle(address: string | null, cycle: number, { quote }: {
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: DelegatorRewards;
    }>(`/v1/rewards/delegators/${address}/${cycle}${QS.query(QS.form({
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get reward split
 */
export function rewardsGetRewardSplit(address: string | null, cycle: number, { offset, limit }: {
    offset?: number;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: RewardSplit;
    }>(`/v1/rewards/split/${address}/${cycle}${QS.query(QS.form({
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get reward split delegator
 */
export function rewardsGetRewardSplitDelegator(baker: string | null, cycle: number, delegator: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: SplitDelegator;
    }>(`/v1/rewards/split/${baker}/${cycle}/${delegator}`, {
        ...opts
    });
}
/**
 * Get rights count
 */
export function rightsGetCount({ type, baker, cycle, level, slots, priority, status }: {
    "type"?: (BakingRightTypeParameter) | null;
    baker?: (AccountParameter) | null;
    cycle?: (Int32Parameter) | null;
    level?: (Int32Parameter) | null;
    slots?: (Int32NullParameter) | null;
    priority?: (Int32NullParameter) | null;
    status?: (BakingRightStatusParameter) | null;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>(`/v1/rights/count${QS.query(QS.form({
        type,
        baker,
        cycle,
        level,
        slots,
        priority,
        status
    }))}`, {
        ...opts
    });
}
/**
 * Get rights
 */
export function rightsGet({ type, baker, cycle, level, slots, priority, status, select, sort, offset, limit }: {
    "type"?: (BakingRightTypeParameter) | null;
    baker?: (AccountParameter) | null;
    cycle?: (Int32Parameter) | null;
    level?: (Int32Parameter) | null;
    slots?: (Int32NullParameter) | null;
    priority?: (Int32NullParameter) | null;
    status?: (BakingRightStatusParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: BakingRight[];
    }>(`/v1/rights${QS.query(QS.form({
        type,
        baker,
        cycle,
        level,
        slots,
        priority,
        status,
        select,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get baker software
 */
export function softwareGet({ select, sort, offset, limit }: {
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Software[];
    }>(`/v1/software${QS.query(QS.form({
        select,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get software count
 */
export function softwareGetCount(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>("/v1/software/count", {
        ...opts
    });
}
/**
 * Get statistics
 */
export function statisticsGet({ level, timestamp, select, sort, offset, limit, quote }: {
    level?: (Int32Parameter) | null;
    timestamp?: (TimestampParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Statistics[];
    }>(`/v1/statistics${QS.query(QS.form({
        level,
        timestamp,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get daily statistics
 */
export function statisticsGetDaily({ date, select, sort, offset, limit, quote }: {
    date?: (DateTimeParameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Statistics[];
    }>(`/v1/statistics/daily${QS.query(QS.form({
        date,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get cyclic statistics
 */
export function statisticsGetCyclesAll({ cycle, select, sort, offset, limit, quote }: {
    cycle?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Statistics[];
    }>(`/v1/statistics/cyclic${QS.query(QS.form({
        cycle,
        select,
        sort,
        offset,
        limit,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get current statistics
 */
export function statisticsGetCycles({ select, quote }: {
    select?: (SelectParameter) | null;
    quote?: Symbols;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Statistics;
    }>(`/v1/statistics/current${QS.query(QS.form({
        select,
        quote
    }))}`, {
        ...opts
    });
}
/**
 * Get proposals count
 */
export function votingGetProposalsCount(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    }>("/v1/voting/proposals/count", {
        ...opts
    });
}
/**
 * Get proposals
 */
export function votingGetProposals({ epoch, select, sort, offset, limit }: {
    epoch?: (Int32Parameter) | null;
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Proposal[];
    }>(`/v1/voting/proposals${QS.query(QS.form({
        epoch,
        select,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get proposal by hash
 */
export function votingGetProposalByHash(hash: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Proposal;
    }>(`/v1/voting/proposals/${hash}`, {
        ...opts
    });
}
/**
 * Get voting periods
 */
export function votingGetPeriods({ select, sort, offset, limit }: {
    select?: (SelectParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VotingPeriod[];
    }>(`/v1/voting/periods${QS.query(QS.form({
        select,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get voting period by index
 */
export function votingGetPeriod(index: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VotingPeriod;
    }>(`/v1/voting/periods/${index}`, {
        ...opts
    });
}
/**
 * Get current voting period
 */
export function votingGetCurrentPeriod(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VotingPeriod;
    }>("/v1/voting/periods/current", {
        ...opts
    });
}
/**
 * Get period voters
 */
export function votingGetPeriodVotersAll(index: number, { status, sort, offset, limit }: {
    status?: (VoterStatusParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VoterSnapshot[];
    }>(`/v1/voting/periods/${index}/voters${QS.query(QS.form({
        status,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get period voter
 */
export function votingGetPeriodVoter(index: number, address: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VoterSnapshot;
    }>(`/v1/voting/periods/${index}/voters/${address}`, {
        ...opts
    });
}
/**
 * Get current period voters
 */
export function votingGetPeriodVoters({ status, sort, offset, limit }: {
    status?: (VoterStatusParameter) | null;
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VoterSnapshot[];
    }>(`/v1/voting/periods/current/voters${QS.query(QS.form({
        status,
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get current period voter
 */
export function votingGetPeriodVoter2(address: string | null, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VoterSnapshot;
    }>(`/v1/voting/periods/current/voters/${address}`, {
        ...opts
    });
}
/**
 * Get voting epochs
 */
export function votingGetEpochs({ sort, offset, limit }: {
    sort?: (SortParameter) | null;
    offset?: (OffsetParameter) | null;
    limit?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VotingEpoch[];
    }>(`/v1/voting/epochs${QS.query(QS.form({
        sort,
        offset,
        limit
    }))}`, {
        ...opts
    });
}
/**
 * Get voting epoch by index
 */
export function votingGetEpoch(index: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VotingEpoch;
    }>(`/v1/voting/epochs/${index}`, {
        ...opts
    });
}
/**
 * Get current voting epoch
 */
export function votingGetCurrentEpoch(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VotingEpoch;
    }>("/v1/voting/epochs/current", {
        ...opts
    });
}
/**
 * Get latest voting
 */
export function votingGetLatestVoting(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VotingEpoch;
    }>("/v1/voting/epochs/latest_voting", {
        ...opts
    });
}