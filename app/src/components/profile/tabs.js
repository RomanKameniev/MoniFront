import React from 'react'
import Box from '../../ui/Box'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const TabsComponent = () => {
	return (
		<Box minHeight="20em" bc="inherit" borderRadius="10px">
			<Tabs defaultIndex={2} className="tabs-component">
				<TabList minWidth="20em">
					<Tab>Devices</Tab>
					<Tab>Users</Tab>
					<Tab>Charts</Tab>
					<Tab>Payment</Tab>
				</TabList>
				<TabPanel>
					<Box minWidth="20em" bc="inherit" minHeight="10em">
						Devices
					</Box>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
			</Tabs>
		</Box>
	)
}

export default TabsComponent
