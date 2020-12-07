

/*Search function is controlled by the onClick submit action of the HTML form.*/
function search() {
	/*This const holds the arrays for each contract in the application.*/
	const contracts = [
		{
			brand: "apple",
			model: "iphone xs",
			cost: "43",
			data: "0.5",
			mins: "unlimited",
			texts: "unlimited"
		},
		{
			brand: "apple",
			model: "iphone 11",
			cost: "64",
			data: "90",
			mins: "unlimited",
			texts: "unlimited"
		},
		{
			brand: "samsung",
			model: "galaxy s10",
			cost: "30",
			data: "20",
			mins: "unlimited",
			texts: "unlimited"
		},
		{
			brand: "samsung",
			model: "galaxy s10",
			cost: "65",
			data: "unlimited",
			mins: "unlimited",
			texts: "unlimited"
		},
		{
			brand: "samsung",
			model: "galaxy a10",
			cost: "11.99",
			data: "0.5",
			mins: "250",
			texts: "unlimited"
		},
		{
			brand: "samsung",
			model: "galaxy s9",
			cost: "31",
			data: "20",
			mins: "unlimited",
			texts: "unlimited"
		},
		{
			brand: "motorola",
			model: "startac 130",
			cost: "3",
			data: "0",
			mins: "200",
			texts: "500"
		},
		{
			brand: "google",
			model: "pixel 3a",
			cost: "23",
			data: "4",
			mins: "unlimited",
			texts: "unlimited"
		},
		{
			brand: "sony",
			model: "xperia 10",
			cost: "30",
			data: "20",
			mins: "unlimited",
			texts: "unlimited"
		},
		{
			brand: "huawei",
			model: "p30",
			cost: "27.99",
			data: "0.5",
			mins: "500",
			texts: "unlimited"
		},
];
	
/*These const's gather the value inputted on the HTML form.*/
	const brandinput = document.getElementById('brand').value
	const minsinput = document.getElementById('minutes').value
	const textsinput = document.getElementById('text').value
	const costmin = document.getElementById('valuecostmin').value
	const datamin = document.getElementById('valuedatamin').value
	
	/*this const filters the contracts based on the user input data.*/
	const matchingContracts = contracts.filter(
		function (contract) {
			if (contract.brand == brandinput && contract.mins <= minsinput && contract.texts <= textsinput && contract.cost <= costmin && contract.data <= datamin) {
				return true;
			}
			return false
		}
	)
/*test to check the length of the outcome to output result.*/
	if (matchingContracts.length == 0) {
		alert("No Matching Contracts. Please Try Again!");
	} else {
		matchingContracts.forEach(
			function (contract) {
				const contractsDiv = document.querySelector("#contracts");
				const newParagraph = document.createElement("h3");
				newParagraph.textContent = `Model: ${contract.model} -  Minutes: ${contract.mins} - Texts: ${contract.texts} - Data: ${contract.data}GB - cost: £${contract.cost}`;
				contractsDiv.appendChild(newParagraph);
			}
		);
	}
}