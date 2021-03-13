import React from 'react'
import BarBody from './BarBody'

const ChartBox = ({ node_data }) => {
	return (
		<div className="chart-box">
			<section className="chart-box__title">
				<div className="chart-box__title_column">
					<div className="chart-box__title_name">Flow dropout per step and service</div>
					<div className="chart-box__title_info">i</div>
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
				/>
				<BarBody
					percent={75}
					type={"service"}
					label={"Label"}
				/>
				<BarBody
					percent={25}
					type={"service"}
					label={"Label"}
				/>
			</section>

		</div>
	)
}

export default ChartBox
