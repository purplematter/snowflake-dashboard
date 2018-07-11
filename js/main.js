const snowflakeDashboard = ($) => {
  var snowflakeContract
  const snowflakeAddress = '0x1F4Ef597aDEbB2da12B199077D46A0eeF4Cc46AC'
  const snowflakeABI = [{"constant":true,"inputs":[{"name":"hydroId","type":"string"}],"name":"getDetails","outputs":[{"name":"owner","type":"address"},{"name":"fieldsAttestedTo","type":"bytes32[]"},{"name":"resolversFor","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"clientRaindropAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"hydroId","type":"string"},{"name":"resolver","type":"address"}],"name":"getDetails","outputs":[{"name":"withdrawAllowance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"resolver","type":"address"}],"name":"isWhitelisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"dateOrder","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"field","type":"string"},{"name":"entry","type":"string"}],"name":"removeFieldEntry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"field","type":"string"},{"name":"entry","type":"string"},{"name":"saltedHash","type":"bytes32"}],"name":"addFieldEntry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"resolvers","type":"address[]"},{"name":"withdrawAllowances","type":"uint256[]"}],"name":"changeResolverAllowances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"hydroTokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"hydroId","type":"string"},{"name":"resolver","type":"address"}],"name":"hasResolver","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferOnBehalfOf","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"resolvers","type":"address[]"},{"name":"withdrawAllowances","type":"uint256[]"}],"name":"addResolvers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sender","type":"address"},{"name":"amount","type":"uint256"},{"name":"_tokenAddress","type":"address"},{"name":"","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"clientRaindrop","type":"address"},{"name":"hydroToken","type":"address"}],"name":"setAddresses","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"hydroId","type":"string"},{"name":"field","type":"string"}],"name":"getDetails","outputs":[{"name":"entriesAttestedTo","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getHydroId","outputs":[{"name":"hydroId","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"hasToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferSnowflakeBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"resolvers","type":"address[]"}],"name":"removeResolvers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"fee","type":"uint256"}],"name":"setResolverWhitelistFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawSnowflakeBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"resolver","type":"address"}],"name":"whitelistResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"names","type":"bytes32[6]"},{"name":"dateOfBirth","type":"bytes32[3]"}],"name":"mintIdentityToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fieldOrder","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"hydroId","type":"string"},{"name":"field","type":"string"},{"name":"entryLookup","type":"bytes32"}],"name":"getDetails","outputs":[{"name":"entryName","type":"string"},{"name":"saltedHash","type":"bytes32"},{"name":"blockNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"resolverWhitelistFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"nameOrder","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"deposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"depositor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"SnowflakeDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"SnowflakeTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"depositor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"SnowflakeWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"hydroId","type":"string"},{"indexed":false,"name":"minter","type":"address"}],"name":"SnowflakeMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"resolver","type":"address"},{"indexed":false,"name":"sponsor","type":"address"}],"name":"ResolverWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hydroId","type":"string"},{"indexed":false,"name":"resolvers","type":"address[]"},{"indexed":false,"name":"withdrawAllowances","type":"uint256[]"}],"name":"ResolversAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hydroId","type":"string"},{"indexed":false,"name":"resolvers","type":"address[]"},{"indexed":false,"name":"withdrawAllowances","type":"uint256[]"}],"name":"ResolversAllowanceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hydroId","type":"string"},{"indexed":false,"name":"resolvers","type":"address[]"}],"name":"ResolversRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hydroId","type":"string"},{"indexed":false,"name":"resolver","type":"address"},{"indexed":false,"name":"currentAllowance","type":"uint256"},{"indexed":false,"name":"requestedWithdraw","type":"uint256"}],"name":"InsufficientAllowance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}] // eslint-disable-line

  var clientRaindropContract
  const clientRaindropAddress = '0xb29778Cf8abFFF8BF245b9060CD2299ADb358040'
  const clientRaindropABI = [{"constant":false,"inputs":[],"name":"deleteUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minimumHydroStakeUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"casedUserName","type":"string"},{"name":"userAddress","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"signUpDelegatedUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"casedUserName","type":"string"}],"name":"signUpUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userName","type":"string"}],"name":"getUserByName","outputs":[{"name":"casedUserName","type":"string"},{"name":"userAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getUserByAddress","outputs":[{"name":"casedUserName","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hydroTokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newMinimumHydroStakeUser","type":"uint256"},{"name":"newMinimumHydroStakeDelegatedUser","type":"uint256"}],"name":"setMinimumHydroStakes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"},{"name":"messageHash","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"isSigned","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minimumHydroStakeDelegatedUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_hydroTokenAddress","type":"address"}],"name":"setHydroTokenAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userName","type":"string"}],"name":"userNameTaken","outputs":[{"name":"taken","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"to","type":"address"}],"name":"withdrawERC20Token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"casedUserName","type":"string"},{"indexed":false,"name":"userAddress","type":"address"}],"name":"UserSignUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"casedUserName","type":"string"}],"name":"UserDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}] // eslint-disable-line

  const nameOrder = ['prefix', 'givenName', 'middleName', 'surname', 'suffix', 'preferredName']
  // const hashedNameOrder = nameOrder.map(x => { return web3.utils.soliditySha3({ t: 'string', v: x }) })
  const dateOrder = ['day', 'month', 'year']
  // const hashedDateOrder = dateOrder.map(x => { return web3.utils.soliditySha3({ t: 'string', v: x }) })
  // const fieldOrder = {
  //   Name: 'Name',
  //   DateOfBirth: 'DateOfBirth',
  //   Emails: 'Emails',
  //   PhoneNumbers: 'PhoneNumbers',
  //   PhysicalAddresses: 'PhysicalAddresses'
  // }
  // const hashedFieldOrder = Object.keys(fieldOrder).map(x => { return web3.utils.soliditySha3({ t: 'string', v: x }) })

  // initialize DOM elements
  $(document).ready(() => {
    $('#namesForm')
      .find('input')
      .each((i, element) => {
        $(element).attr('placeholder', nameOrder[i])
      })
    $('#datesForm')
      .find('input')
      .each((i, element) => {
        $(element).attr('placeholder', dateOrder[i])
      })
  })

  // helper function to make etherscan formatting into link tags
  const linkify = (type, data) => {
    return `<a href="${window.w3w.etherscanFormat(type, data)}" target="_blank">${data}</a>`
  }

  // handle snowflake minting
  const mintSnowflake = async () => {
    let account = window.w3w.getAccount() // set account at the beginning to lock it in

    // ensure the address has a hydroId
    let hydroId = await clientRaindropContract.methods.getUserByAddress(window.w3w.getAccount()).call()
      .then(_hydroId => { return _hydroId })
      .catch(() => { return null })
    if (hydroId == null) {
      let addressLink = linkify('address', account)
      let clientRaindropLink = linkify('address', clientRaindropAddress)
      let message = `<p>Your address ${addressLink} doesn't have a HydroID. Get one at ${clientRaindropLink}.</p>`
      $('#mintSnowflakeResult').html(message)
      return
    } else {
      console.log(`Address '${account}' has HydroID '${hydroId}'.`)
    }

    // extract the input data and make a transaction
    let web3js = window.w3w.getWeb3js()
    // TODO salt the hash
    let saltHashData = (data) => { return data === '' ? '0x' + '0'.repeat(32) : web3js.utils.keccak256(data) }
    let names = $.map($('#namesForm').find('input'), (element) => {
      return saltHashData(element.value)
    })
    let dates = $.map($('#datesForm').find('input'), (element) => {
      return saltHashData(element.value)
    })

    let method = snowflakeContract.methods.mintIdentityToken(names, dates)
    // estimate gas to make sure the transaction doesn't fail
    let estimatedGas = await method.estimateGas()
      .catch(() => { return null })
    if (estimatedGas == null) {
      $('#mintSnowflakeResult').html(`<p>Gas required exceeds allowance or the transaction always fails.</p>`)
      return
    }

    // send the transaction
    $('#mintSnowflakeResult').html('<p>Awaiting Transaction Output...</p>')
    method.send({ from: account })
      .on('transactionHash', transactionHash => {
        $('#mintSnowflakeResult').html(linkify('transaction', transactionHash))
      })
      .on('error', error => {
        $('#mintSnowflakeResult').html(`<p>${error.toString().split('\n')[0]}</p>`)
      })
  }

  // web3-webpacked configuration
  const w3wConfig = {
    handlers: {
      noWeb3Handler: () => {
        console.error('Browser does not have web3 support.')

        window.alert('No web3 instance detected. Install MetaMask, Trust, etc.')
      },
      web3Ready: () => {
        let web3js = window.w3w.getWeb3js()
        snowflakeContract = new web3js.eth.Contract(snowflakeABI, snowflakeAddress)
        window.snowflakeContract = snowflakeContract
        clientRaindropContract = new web3js.eth.Contract(clientRaindropABI, clientRaindropAddress)
        $('#mintSnowflake').on('click', mintSnowflake)

        console.log('web3 successfully initialized.')
      },
      web3ErrorHandler: (error) => {
        console.error(`web3 error: ${error}`)

        if (error.name === window.w3w.networkErrorName) {
          window.alert(`This dApp is currently only supported on Rinkeby. Please switch networks.`)
        } else {
          window.alert(`web3 Error: ${error}`)
        }
      },
      web3AccountChangeHandler: (account, oldAccount) => {
        if (account === null) {
          window.alert('Please unlock your Ethereum account.')
        } else {
          console.log(`Primary account switched from ${oldAccount} to ${account}.`)
        }
      }
    },
    supportedNetworks: [4]
  }

  $(window).on('load', () => {
    console.log('Initializing web3 upon page load.')
    window.w3w.initializeWeb3(w3wConfig)
  })
}

snowflakeDashboard(window.jQuery)
