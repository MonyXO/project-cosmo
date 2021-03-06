import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image 
				style={styles.logo} 
				source={require('../../assets/Instagram-logo.png')} 
			 />
			</TouchableOpacity>

			<View style={styles.iconContainer}>
				<TouchableOpacity>
					<Image
						source= {{
							uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
						}}
						style={styles.icon}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source= {{
							uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
						}}
						style={styles.icon}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source= {{
							uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
						}}
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
	},

	logo: {
		width: 100,
		height: 50,
		resizeMode: 'contain',
	},

	iconContainer: {
		flexDirection: 'row',
	},

	icon: {
		width: 30,
		height: 30,
		marginLeft: 10,
		resizeMode: 'contain',
	}
})

export default Header