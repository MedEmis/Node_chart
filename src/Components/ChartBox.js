import React from 'react'
import BarBody from './BarBody'

const ChartBox = ({ node_data }) => {

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
					direction={-25}
				/>
				<BarBody
					percent={75}
					type={"service"}
					label={"Label"}
					direction={10}
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
					direction={-15}
				/>
				<BarBody
					percent={35}
					type={"basic"}
					label={"Label"}
					direction={15}
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
					direction={-15}
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
					direction={15}
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
