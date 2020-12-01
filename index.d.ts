declare module 'react-native-bluetooth-status' {
	class BluetoothManager {
		constructor()

		subscription: any
		inited: boolean
		bluetoothState:
			| 'unknown'
			| 'resetting'
			| 'unsupported'
			| 'unauthorized'
			| 'off'
			| 'on'
			| 'unknown'
		listener: Function

		addListener(listener: Function): void

		removeListener(): void

		state(): Promise<boolean>

		manualInit(): void

		enable(enabled?: boolean): void

		disable(): Promise<void>
	}
	export const BluetoothStatus: BluetoothManager
	export function useBluetoothStatus(): [boolean, boolean, (enable?: boolean) => void]
}
