function copytextid(elementId) {

    // Create a "hidden" input
    var aux = document.createElement("input");

    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);

    // Append it to the body
    document.body.appendChild(aux);

    // Highlight its content
    aux.select();

    // Copy the highlighted text
    document.execCommand("copy");


    // Remove it from the body
    document.body.removeChild(aux);
    /* $.toast({
        heading: 'Copied',
        position: 'top-right',
        loaderBg:'#ff6849',
        icon: 'success',
        hideAfter: 3500, 
        stack: 10
      }); */
    alert("Text Copied sucessfully \n" + aux.value);

}

var bnbPrice = $('#bnbprice').html();


const contract_address = "0x76b270eef92519b26c354c055ed252c4dac8355b"; // 0x76b270eef92519b26c354c055ed252c4dac8355b
const abi = [{"inputs":[{"internalType":"address payable","name":"_marketing1","type":"address"},{"internalType":"address payable","name":"_marketing2","type":"address"},{"internalType":"address payable","name":"_marketing3","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Initialincome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLAN1_2_RESTAKE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLAN1_2_WITHDRAW_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLAN3_4_RESTAKE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLAN3_4_WITHDRAW_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLANPER_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POOL_FEE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE_MARKETING1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE_MARKETING2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE_MARKETING3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"RefUser","outputs":[{"internalType":"address","name":"refUserAddress","type":"address"},{"internalType":"uint256","name":"refLevel","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"SEED_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"senderAddress","type":"address"},{"internalType":"uint256","name":"dataId","type":"uint256"}],"name":"getDownlineRef","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCurrentInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint8","name":"planId","type":"uint8"}],"name":"getUserDividendsByPlan","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserInitialincome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint8","name":"planId","type":"uint8"}],"name":"getWithdrawTimeByPlan","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getcurrentinitialincome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"marketing1","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketing2","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketing3","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralCount_","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInitialBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"planId","type":"uint8"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawInitialIncome","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawReferralIncome","outputs":[],"stateMutability":"nonpayable","type":"function"}]

async function connect() {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.request({
                method: 'eth_requestAccounts'
            });
            getAccount();
            generateReferralLink(); // Call this function to generate the referral link after wallet connection
            // Add listener for account changes
            ethereum.on('accountsChanged', function(accounts) {
                if (accounts.length > 0) {
                    web3.eth.defaultAccount = accounts[0];
                    console.log('Account changed to:', accounts[0]);
                    
                    // Regenerate the referral link for the new account
                    generateReferralLink();
                } else {
                    console.log('No account connected');
                }
            });
        } catch (error) {
            alert("User Rejected Permission");
            console.log('User rejected permission');
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        console.log('Connected with old provider');
    } else {
        console.log('No web3 provider detected');
        alert("Metamask Not Connected");
    }
}

function getAccount() {
    var account;
    web3 = new Web3(window.web3.currentProvider);
    web3.eth.getAccounts(function(err, accounts) {
        if (err != null) {
            alert("Error Retrieving Accounts.");
            return;
        }
        if (accounts.length == 0) {
            alert("No account found! Make sure the Ethereum client is configured properly.");
            return;
        }
        account = accounts[0];
        console.log('Account: ' + account);
        web3.eth.defaultAccount = account;
        //$("#connect").hide();
        $("#connect").html('Connected');
        $("#dashboard").show();
        $("#btnc").attr("data-src", "#dash");
        $("#btnc").prop("onclick", null);
        $("#address").html(account);
        $("#address").show();
    });
}

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Ethereum provider detected (Trust Wallet or MetaMask)');
        window.web3 = new Web3(window.ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            getAccount();
        } catch (err) {
            console.error('User denied account access', err);
        }
    } else if (typeof window.web3 !== 'undefined') {
        console.log('Legacy dapp browsers detected. Injecting Web3.');
        window.web3 = new Web3(window.web3.currentProvider);
        getAccount();
    } else {
        console.log('No Ethereum provider detected. Install MetaMask or Trust Wallet');
    }
});


const polygonChainId = '0x89'; // Polygon Mainnet Chain ID (hex for 137)

async function switchToPolygonNetwork() {
    // Check if MetaMask is installed
    if (window.ethereum) {
        try {
            // Try switching to the Polygon Mainnet
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: polygonChainId }], // Chain ID for Polygon Mainnet
            });
            console.log("Switched to Polygon Mainnet");
        } catch (switchError) {
            // If the chain has not been added to MetaMask, add it
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: polygonChainId,
                                chainName: 'Polygon Mainnet',
                                nativeCurrency: {
                                    name: 'Polygon',
                                    symbol: 'MATIC', // 2-6 characters long
                                    decimals: 18,
                                },
                                rpcUrls: ['https://polygon-rpc.com/'], // Public RPC URL for Polygon
                                blockExplorerUrls: ['https://polygonscan.com/'],
                            },
                        ],
                    });
                    console.log("Polygon Mainnet added and switched to");
                } catch (addError) {
                    console.error("Failed to add Polygon Mainnet:", addError);
                }
            } else {
                console.error("Error switching to Polygon Mainnet:", switchError);
            }
        }
    } else {
        alert("MetaMask is not installed. Please install MetaMask to use this feature.");
    }
}

// Call this function on load or when you need to check the network
window.addEventListener('load', function() {
    switchToPolygonNetwork(); // Call this function to check and switch networks
});


window.addEventListener('load', function() {
    getAccount();

    const contract = new web3.eth.Contract(abi, contract_address);

    function getContractDetails() {
        contract.methods.totalInvested().call().then(function(totalInvested) {
            const invested = totalInvested / (10 ** 18);
            $("#matic-balance").html(invested.toFixed(4));
        });

        contract.methods.totalRefBonus().call().then(function(totalRefBonus) {
            const refBonus = totalRefBonus / (10 ** 18);
            $("#totalRefBonus").html(refBonus.toFixed(4));
        });

        contract.methods.totalUsers().call().then(function(totalUsers) {
            $("#totalUsers").html(totalUsers);
        });
    }

    getContractDetails();
    setInterval(getContractDetails, 5000);

    async function getUserDetails() {
        const account = web3.eth.defaultAccount;

        const userDividends = await contract.methods.getUserDividendsByPlan(account, 1).call();
        const userRefBonus = await contract.methods.getUserReferralBonus(account).call();
        const initialIncome = await contract.methods.getcurrentinitialincome(account).call();
        const totalWithdrawn = await contract.methods.getUserTotalWithdrawn(account).call();
        const totalInvested = await contract.methods.getUserTotalInvested(account).call();

        $("#getUserAvailable").html((userDividends / (10 ** 18)).toFixed(4));
        $("#getUserRefBonus").html((userRefBonus / (10 ** 18)).toFixed(4));
        $("#getUserInitialIncome").html((initialIncome / (10 ** 18)).toFixed(4));
        $("#getUserTotalWithdrawn").html((totalWithdrawn / (10 ** 18)).toFixed(4));
        $("#getUserTotalMined").html((totalInvested / (10 ** 18)).toFixed(4));

    }

    getUserDetails();
    setInterval(getUserDetails, 1000);
});

window.calculateValues = function(inputElement) {
    // Get the value from the input element
    const value = parseFloat(inputElement.value);

    if (isNaN(value) || value <= 0) {
        console.log("Invalid input value");
        return;
    }

    const planId = parseInt(inputElement.id.replace('input', ''));
    let dailyReturnPercentage = 0;

    switch (planId) {
        case 1:
            dailyReturnPercentage = 2.75; // Example percentage
            break;
        case 2:
            dailyReturnPercentage = 3.5;
            break;
        case 3:
            dailyReturnPercentage = 4.5;
            break;
        case 4:
            dailyReturnPercentage = 5.25;
            break;
        default:
            console.error("Invalid plan ID");
            return;
    }

    const dailyReturn = (value * dailyReturnPercentage) / 100;

    // Output the result for demonstration purposes
    console.log(`Plan ${planId}: Investment of ${value} results in a daily return of ${dailyReturn.toFixed(2)} POL`);
};

async function invest(planId, amount, referrer) {
    const contractInstance = new web3.eth.Contract(abi, contract_address);
    const account = web3.eth.defaultAccount;

    // Define the plan limits
    const planLimits = {
        0: { min: 5, max: 2500 },   // Plan 1: 5 - 2500 POL
        1: { min: 2501, max: 5000 },  // Plan 2: 2501 - 5000 POL
        2: { min: 5001, max: 7500 },  // Plan 3: 5001 - 7500 POL
        3: { min: 7501, max: Infinity } // Plan 4: 7501 - Infinity POL
    };

    // Check if the amount is valid for the selected plan
    if (amount < planLimits[planId].min || amount > planLimits[planId].max || isNaN(amount)) {
        swal({
            title: "Error!",
            text: `For this Plan, please enter an amount between ${planLimits[planId].min} and ${planLimits[planId].max} POL.`,
            icon: "error",
        });
        return;
    }

    const valueInWei = web3.utils.toWei(amount.toString(), 'ether');

    try {
        // Estimate gas required for the transaction
        const gasEstimate = await contractInstance.methods.invest(referrer, planId).estimateGas({
            from: account,
            value: valueInWei
        });

        // Get the current gas price
        const currentGasPrice = await web3.eth.getGasPrice();

        // Set an aggressive gas price (e.g., 2x the current gas price)
        const aggressiveGasPrice = Math.floor(currentGasPrice * 2);

        await contractInstance.methods.invest(referrer, planId).send({
            from: account,
            value: valueInWei,
            gas: gasEstimate + 100000, // Add a buffer to the estimated gas
            gasPrice: aggressiveGasPrice // Use the aggressive gas price
        });

        swal({
            title: "Success!",
            text: `Investment Successful!`,
            icon: "success",
        });
    } catch (error) {
        let errorMessage = 'An unknown error occurred.';

        if (error.message) {
            // Extract and throw the error message directly without further checks
            try {
                console.log("error is",error.message);
                const jsonError = error.message.substring(error.message.indexOf('{'), error.message.lastIndexOf('}') + 1);
                if (jsonError) {
                    const parsedError = JSON.parse(jsonError);
                    errorMessage = parsedError.message || error.message; // Throw parsed message or fallback to original message
                } else {
                    errorMessage = error.message;
                }
            } catch (jsonParseError) {
                // Fallback if parsing fails, use the error message directly
                errorMessage = error.message;
            }
        }

        // Show the error message directly in the alert
        swal({
            title: "Error!",
            text: `${errorMessage}`,
            icon: "error",
        });
    }
}




// Event listeners for invest and withdraw buttons
$('#mineButton1').click(() => {
    const amount = parseFloat($('#input1').val());
    const referrer = $('#referrerInput').val(); // Get referrer address from hidden input
    invest(0, amount, referrer);
});

$('#mineButton2').click(() => {
    const amount = parseFloat($('#input2').val());
    const referrer = $('#referrerInput').val(); // Get referrer address from hidden input
    invest(1, amount, referrer);
});

$('#mineButton3').click(() => {
    const amount = parseFloat($('#input3').val());
    const referrer = $('#referrerInput').val(); // Get referrer address from hidden input
    invest(2, amount, referrer);
});

$('#mineButton4').click(() => {
    const amount = parseFloat($('#input4').val());
    const referrer = $('#referrerInput').val(); // Get referrer address from hidden input
    invest(3, amount, referrer);
});

// Withdraw function for dividends by plan
async function withdraw(planId) {
    const contractInstance = new web3.eth.Contract(abi, contract_address);
    const account = web3.eth.defaultAccount;

    try {
        // Estimate gas required for the transaction
        const gasEstimate = await contractInstance.methods.withdraw(planId).estimateGas({
            from: account
        });

        // Get the current gas price
        const currentGasPrice = await web3.eth.getGasPrice();

        // Set an aggressive gas price (e.g., 2x the current gas price)
        const aggressiveGasPrice = Math.floor(currentGasPrice * 2);

        await contractInstance.methods.withdraw(planId).send({
            from: account,
            gas: gasEstimate + 100000, // Add a buffer to the estimated gas
            gasPrice: aggressiveGasPrice // Use the aggressive gas price
        });

        alert("Withdrawal successful!");
    } catch (error) {
        console.error("Error during withdrawal:", error);
        let errorMessage = 'An unknown error occurred.';

        if (error.message) {
            // Extract and throw the error message directly without further checks
            try {
                console.log("error is",error.message);
                const jsonError = error.message.substring(error.message.indexOf('{'), error.message.lastIndexOf('}') + 1);
                if (jsonError) {
                    const parsedError = JSON.parse(jsonError);
                    errorMessage = parsedError.message || error.message; // Throw parsed message or fallback to original message
                } else {
                    errorMessage = error.message;
                }
            } catch (jsonParseError) {
                // Fallback if parsing fails, use the error message directly
                errorMessage = error.message;
            }
        }

        // Show the error message directly in the alert
        swal({
            title: "Error!",
            text: `${errorMessage}`,
            icon: "error",
        });
    }
}

// Withdraw function for referral bonus
async function withdrawReferralBonus() {
    const contractInstance = new web3.eth.Contract(abi, contract_address);
    const account = web3.eth.defaultAccount;

    try {
        // Estimate gas required for the transaction
        const gasEstimate = await contractInstance.methods.withdrawReferralIncome().estimateGas({
            from: account
        });

        // Get the current gas price
        const currentGasPrice = await web3.eth.getGasPrice();

        // Set an aggressive gas price (e.g., 2x the current gas price)
        const aggressiveGasPrice = Math.floor(currentGasPrice * 2);

        await contractInstance.methods.withdrawReferralIncome().send({
            from: account,
            gas: gasEstimate + 100000, // Add a buffer to the estimated gas
            gasPrice: aggressiveGasPrice // Use the aggressive gas price
        });

        alert("Referral Bonus Withdrawn successfully!");
    } catch (error) {
        console.error("Error during referral bonus withdrawal:", error);
        if (error.message) {
            // Extract and throw the error message directly without further checks
            try {
                console.log("error is",error.message);
                const jsonError = error.message.substring(error.message.indexOf('{'), error.message.lastIndexOf('}') + 1);
                if (jsonError) {
                    const parsedError = JSON.parse(jsonError);
                    errorMessage = parsedError.message || error.message; // Throw parsed message or fallback to original message
                } else {
                    errorMessage = error.message;
                }
            } catch (jsonParseError) {
                // Fallback if parsing fails, use the error message directly
                errorMessage = error.message;
            }
        }

        // Show the error message directly in the alert
        swal({
            title: "Error!",
            text: `${errorMessage}`,
            icon: "error",
        });
    }
}

// Withdraw function for initial income
async function withdrawInitialIncome() {
    const contractInstance = new web3.eth.Contract(abi, contract_address);
    const account = web3.eth.defaultAccount;

    try {
        // Estimate gas required for the transaction
        const gasEstimate = await contractInstance.methods.withdrawInitialIncome().estimateGas({
            from: account
        });

        // Get the current gas price
        const currentGasPrice = await web3.eth.getGasPrice();

        // Set an aggressive gas price (e.g., 2x the current gas price)
        const aggressiveGasPrice = Math.floor(currentGasPrice * 2);

        await contractInstance.methods.withdrawInitialIncome().send({
            from: account,
            gas: gasEstimate + 100000, // Add a buffer to the estimated gas
            gasPrice: aggressiveGasPrice // Use the aggressive gas price
        });

        alert("Initial Income Withdrawn successfully!");
    } catch (error) {
        console.error("Error during initial income withdrawal:", error);
        if (error.message) {
            // Extract and throw the error message directly without further checks
            try {
                console.log("error is",error.message);
                const jsonError = error.message.substring(error.message.indexOf('{'), error.message.lastIndexOf('}') + 1);
                if (jsonError) {
                    const parsedError = JSON.parse(jsonError);
                    errorMessage = parsedError.message || error.message; // Throw parsed message or fallback to original message
                } else {
                    errorMessage = error.message;
                }
            } catch (jsonParseError) {
                // Fallback if parsing fails, use the error message directly
                errorMessage = error.message;
            }
        }

        // Show the error message directly in the alert
        swal({
            title: "Error!",
            text: `${errorMessage}`,
            icon: "error",
        });
    }
}



$('#withdrawButton1').click(() => withdraw(0));
$('#withdrawButton2').click(() => withdraw(1));
$('#withdrawButton3').click(() => withdraw(2));
$('#withdrawButton4').click(() => withdraw(3));

$('#withdrawRefBonusButton').click(() => withdrawReferralBonus());
$('#withdrawInitialIncomeButton').click(() => withdrawInitialIncome());

async function updateWithdrawButtonText() {
    const contractInstance = new web3.eth.Contract(abi, contract_address);
    const account = web3.eth.defaultAccount;

    // Iterate through each plan (Plan IDs 0 to 3)
    for (let planId = 0; planId <= 3; planId++) {
        try {
            // Fetch the dividends for the current plan
            const dividends = await contractInstance.methods.getUserDividendsByPlan(account, planId).call();
            //alert(dividends);
            const dividendsInPOL = (dividends / (10 ** 18)).toFixed(4); // Convert from Wei to POL

            // Update the respective button text with dividends available
            const buttonId = `withdrawButton${planId + 1}`;
            const buttonText = dividends > 0 ? `WITHDRAW ${dividendsInPOL} POL` : 'WITHDRAW 0.0000 POL';
            document.getElementById(buttonId).textContent = buttonText;
        } catch (error) {
            console.error(`Error fetching dividends for plan ${planId}:`, error);
        }
    }
}

// Call the function to update the button text on load
updateWithdrawButtonText();
setInterval(updateWithdrawButtonText, 2000); // Refresh the data every 10 seconds



function copyTextId(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Text Copied successfully \n" + aux.value);
}

function copyReferralLink() {
    // Get the referral input element
    const referralInput = document.getElementById('input-ref');

    // Select the text in the input field
    referralInput.select();
    referralInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the input field to the clipboard
    document.execCommand('copy');

    // Show an alert to confirm the link is copied
    alert("Referral Link Copied: " + referralInput.value);
}


async function generateReferralLink() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            const account = accounts[0];            
            $('#my-referral').val('https://polmine.tech?ref='+account);
        } catch (error) {
            console.error("Error generating referral link:", error);
        }
    } else {
        console.log('No Ethereum provider detected.');
        alert("Please install MetaMask to generate your referral link.");
    }
}

window.addEventListener('load', function() {
    connect();
    generateReferralLink();
});