import React from 'react';

import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

import millify from 'millify';

import { useGetCryptosQuery } from '../../api/cryptoApi';

const PieChart = () => { 
	const { data: cryptoList, isFetching } = useGetCryptosQuery(20);
	const [ cryptos, setCryptos] = useState(cryptoList?.data?.coins);
	const globalStats = cryptoList?.data.stats;
	
    const [active, setActive] = useState(null);
    const width = 400;
    const half = width / 2;
    
    return (
			<div>
				<svg width={width} height={width}>
					<Group top={half} left={half}>
						<Pie
							data={cryptos}
							pieValue={(data) => data.marketCap}
							outerRadius={half}
							innerRadius={({ data }) => {
								const size = active && active.symbol == data.symbol ? 12 : 8;
									return half - size;
							}}
							padAngle={0.01}
							>
								{(pie) => {
									return pie.arcs.map((arc) => {
										return (
											<g
												key={arc.data.symbol}
												onMouseEnter={() => setActive(arc.data)}
												onMouseLeave={() => setActive(null)}
											>
												<path d={pie.path(arc)} fill={arc.data.color}></path>
											</g>
										);
									});
								}}
							</Pie>
							{active ? (
								<>
									<Text textAnchor="middle" fill="black" fontSize={40} dy={-20}>
										{`$${millify(active.marketCap)}`}
									</Text>
									<Text
										textAnchor="middle"
										fill={active.color}
										fontSize={20}
										dy={20}
									>
										{`${millify(active.totalSupply)} ${active.symbol}`}
									</Text>
								</>
							) : (
								<>
									<Text textAnchor="middle" fill="black" fontSize={40} dy={-20}>
										{`$${millify(globalStats.totalMarketCap)}`}
									</Text>
									<Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
										{`${globalStats.total} Assets`}
									</Text>
								</>
							)}
						</Group>
				</svg> 
			</div>
    )
}

export default PieChart;
