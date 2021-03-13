import React from 'react'

const BarBody = ({ percent, type, label, direction }) => {
	return (
		<div className="bar">
			<div className={"bar__body " + type} style={{ height: percent * 4 }}>
				<label className="bar__body_label" >{label}</label>
				<div className="bar__body_arrow" >
					<div className={"bar__body_arrow__direction " + (direction > 0 ? "up" : "down")} />
					<div className="bar__body_arrow__percentage ">{direction}%</div>
				</div>
			</div>
			<div className="bar__persent">{percent}%</div>
		</div >
	)
}

export default BarBody
