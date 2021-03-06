import React from 'react'
import Box from '../../ui/Box'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import DeviceBody from './tabsBody/deviceBody'
import UsersBody from './tabsBody/usersBody'
import PaymentBody from './tabsBody/paymentBody'

const TabsComponent = () => {
	return (
		<Box minHeight="20em" bc="inherit" borderRadius="10px">
			<Tabs defaultIndex={2} className="tabs-component">
				<TabList minWidth="20em">
					<Tab>Devices</Tab>
					<Tab>Contacts</Tab>
					<Tab>Charts</Tab>
					<Tab>Payment</Tab>
				</TabList>
				<TabPanel>
					<DeviceBody />
				</TabPanel>
				<TabPanel>
					<UsersBody />
				</TabPanel>
				<TabPanel>
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel>
					<PaymentBody />
				</TabPanel>
			</Tabs>
		</Box>
	)
}

export default TabsComponent
