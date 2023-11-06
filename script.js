//your JS code here. If required.
const table = document.querySelector('#output')
const p1 = new Promise((res)=>{
	setTimeout(()=>{
		res(["Promise 1",1000])
	},1000)
})
const p2 = new Promise((res)=>{
	setTimeout(()=>{
		res(["Promise 2",2000])
	},2000)
})
const p3 = new Promise((res)=>{
	setTimeout(()=>{
		res(["Promise 3",3000])
	},3000)
})

async function addTableRow() {
	Promise.all([p1, p2, p3]).then((resolvedData)=>{
		loading.style.display = "none"
		resolvedData.map(data=>{
			appendData(data[0], data[1])
		})
	appendData("Total", 3000)
	}) 
	
}

addTableRow()

function appendData(promiseName, promiseTime) {
	const name = document.createElement('td')
	const time = document.createElement('td')
	const tr = document.createElement('tr')
	name.innerText = promiseName
	time.innerText = promiseTime
	tr.appendChild(name)
	tr.appendChild(time)
	table.appendChild(tr)
}