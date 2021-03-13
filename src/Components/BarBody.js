import React from 'react'

const BarBody = ({ percent, type, label }) => {
	return (
		<div className="bar">
			<div className={"bar__body " + type} style={{ height: percent * 4 }}>
				<label className="bar__body_label" >{label}</label>
				<div className="bar__body_arrow" >
					<div className="bar__body_arrow__direction down">

					</div>
					<div className="bar__body_arrow__percentage ">-25%</div>
				</div>
			</div>
			<div className="bar__persent">{percent}</div>
		</div >
	)
}

export default BarBody
