import React, { useEffect, useState } from 'react'
import BarBody from './BarBody'

const ChartBox = ({ node_data }) => {

	const [nodeTree, setNodeTree] = useState([]);

	const objectConvert = (inputObject) => {
		let outputObject = []

		//all object keys we've got
		const keysArray = Object.keys(inputObject)

		//pushing all keys-as-object to iteratable outputObject 
		keysArray.forEach(node => {
			outputObject.push(inputObject[node])
		})

		const objectRebuild = (nodeObject) => {

			//if node has nested subnodes => getting it by key from inputObject
			if (nodeObject.hasOwnProperty("adjList") && nodeObject.adjList.length) {

				for (let i = 0; i < nodeObject.adjList.length; i++) {

					const key = nodeObject.adjList[i];
					//replacing "key" with {object}
					nodeObject.adjList[i] = inputObject[key]

					//and for same object with same keys, but from outputObject => marking it with "toDelete" property, to filter it out later
					const indexToRemove = outputObject.findIndex(obj => obj.label === inputObject[key].label);
					outputObject[indexToRemove].toDelete = true
				}
			}
		}

		//checking all object for nested sub nodes
		for (let i = 0; i < outputObject.length; i++) {
			const node = outputObject[i];
			objectRebuild(node)
		}

		setNodeTree(outputObject.filter(obj => !obj.hasOwnProperty("toDelete")))
	}

	console.log(nodeTree)

	useEffect(() => {
		objectConvert(node_data)
	}, [node_data])




	return (
		<div className="chart-box">

			<section className="chart-box__title">
				<div className="chart-box__title_column">
					<div className="chart-box__title_name">Flow dropout per step and service</div>
					<div className="chart-box__title_info" />
				</div>
				<div className="chart-box__title_column">
					<button className="chart-box__title_branch">Choose branches</button>
					<button className="chart-box__title_settings"></button>
				</div>
			</section>

			<section className="chart-box__body">
				<BarBody
					percent={100}
					type={"basic"}
					label={"Label"}
					direction={-25.4}
				/>
				<BarBody
					percent={75}
					type={"service"}
					label={"Label"}
					direction={10.4}
				/>
				<BarBody
					percent={25}
					type={"service"}
					label={"Label"}
					direction={15}
				/>
				<BarBody
					percent={28}
					type={"service"}
					label={"Label"}
					direction={-15.4}
				/>
				<BarBody
					percent={35}
					type={"basic"}
					label={"Label"}
					direction={15.4}
				/>
				<BarBody
					percent={100}
					type={"service"}
					label={"Label"}
					direction={15}
				/>
				<BarBody
					percent={25}
					type={"service"}
					label={"Label"}
					direction={-15.4}
				/>
				<BarBody
					percent={40}
					type={"service"}
					label={"Label"}
					direction={55}
				/>
				<BarBody
					percent={55}
					type={"service"}
					label={"Label"}
					direction={15.4}
				/>
				<BarBody
					percent={95}
					type={"basic"}
					label={"Label"}
					direction={15}
				/>
			</section>

		</div>
	)
}

export default ChartBox
